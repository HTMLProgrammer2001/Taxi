import * as stat from './const';
import {COST_PER_KM, COST_BUSY_PER_KM, COST_OFFCITY_PER_KM} from './const';
import {showDangerMessage} from "../../messages";

let areas = [
    require("assets/area-1.json"),
    require("assets/area-2.json"),
    require("assets/area-3.json"),
    require("assets/area-4.json")
],

    autoPoints = [
        {
            "lat" : 46.6716677,
            "lng" : 32.6389526
        },
        {
            "lat" : 46.66058779999999,
            "lng" : 32.6554837
        },
        {
            "lat" : 46.6625253,
            "lng" : 32.6390332
        },
        {
            "lat" : 46.654205,
            "lng" : 32.5625972
        },
        {
            "lat" : 46.6518956,
            "lng" : 32.6144419
        },
        {
            "lat" : 46.619408,
            "lng" : 32.5900442
        },
        {
            "lat" : 46.6264618,
            "lng" : 32.6073008
        },
        {
            "lat" : 46.662465,
            "lng" : 32.6058125
        },
        {
            "lat" : 46.6342376,
            "lng" : 32.5742038
        },
        {
            "lat" : 46.6569232,
            "lng" : 32.5794143
        },
        {
            "lat" : 46.6177539,
            "lng" : 32.5787427
        }
    ];

require("babel-polyfill");

class MapController{

    constructor(googleMaps){
        this.map = null;
        this.googleMaps = googleMaps;
        this.geodecoder = new googleMaps.Geocoder();

        this.database = firebaseProj.database();
        this.dbInfo = this.database.ref('/');

        this.selectedAuto = null;

        this.orders = [];
        this.auto = [];

        this.icons = {
            car: {
                free: require('assets/carFree.png'),
                wait: require('assets/carWait.png'),
                busy: require('assets/carBusy.png')
            },
            order: {
                free: require('assets/peopleFree.png'),
                inWait: require('assets/peopleBusy.png'),
                withOrder: require('assets/target.png')
            }
        };

        this.areas = [];
    }

    animateChange(car, curOrder){
        //if we arrived to order
        if(!car.withOrder){
            let dest = autoPoints[Math.round(Math.random() * autoPoints.length)];

            while(dest == car.path.coords)
                dest = autoPoints[Math.round(Math.random() * autoPoints.length)];

            car.path.dest = dest;

            return;
        }

        if(curOrder.status === stat.ORDER_WAIT){

            car.status = stat.AUTO_WAIT;
            car.path.loaded = false;
            car.marker.setIcon(this.icons.car.wait);

            curOrder.status = stat.ORDER_AUTO;
            curOrder.marker.setMap(null);

            //update data in db
            this.updateAutoData(car.autoID, {
                status: stat.AUTO_WAIT
            })
                .then( () =>
                    this.updateOrderData(curOrder.orderID, {
                        status: stat.ORDER_AUTO
                    })
                );
        }
        else if(curOrder.status === stat.ORDER_MOVE){
            car.withOrder = false;

            curOrder.status = stat.ORDER_PAY;
            car.status = stat.AUTO_PAY;

            curOrder.marker.setMap(null);
            car.marker.setIcon(this.icons.car.wait);

            //update info in db
            this.updateAutoData(car.autoID, {
                status: stat.AUTO_PAY
            })
                .then( () =>
                    this.updateOrderData(curOrder.orderID, {
                        status: stat.ORDER_PAY
                    })
                );

            return true;
        }
    }

    findNewPoint(curCoords, steps, speed = 0.01){
        let newCoords = {lat: curCoords.lat, lng: curCoords.lng};

        while(speed > 0){

            if(!steps.length)
                break;

            let nextStep = steps[0].end_point,
                distance = Math.sqrt((curCoords.lat - nextStep.lat())**2 + (curCoords.lng - nextStep.lng())**2);

            if(distance > speed){
                newCoords = nextStep;

                //check all paths in this step
                for(let i = 0; i < steps[0].path.length; i++){
                    let point = steps[0].path[i],
                        pointDistance = Math.sqrt((curCoords.lat - point.lat())**2 + (curCoords.lng - point.lng())**2);

                    if(pointDistance > speed){
                        newCoords = {
                            lat: steps[0].path[i].lat(),
                            lng: steps[0].path[i].lng()
                        };

                        break;
                    }
                }

                speed = 0;
            }
            else{
                newCoords = {
                    lat: nextStep.lat(),
                    lng: nextStep.lng()
                };

                speed -= distance;

                steps.shift();
            }
        }

        return newCoords;
    }

    animateMove(){
        this.auto.forEach( (car) => {
            //find order
            let curOrder = this.orders.find( (order) => {
                return order.orderID === car.orderID;
            });

           //arrived
           if((car.path && car.path.steps && (!car.path.steps.length || !car.path.steps[0].distance.value)) && car.path.loaded)
               if(this.animateChange(car, curOrder))
                   return;

               let newCoords = car.coords;
               if(car.path && car.path.steps)
                newCoords = this.findNewPoint(car.coords, car.path.steps);

           if(car.withOrder && curOrder.status === stat.ORDER_MOVE)
               car.distance += this.googleMaps.geometry.spherical.computeDistanceBetween(
                   new this.googleMaps.LatLng(car.coords.lat, car.coords.lng),
                   new this.googleMaps.LatLng(newCoords.lat, newCoords.lng)
               ) / 1000;

            car.marker.setPosition(newCoords);
            car.coords = newCoords;

            //save auto changes
            this.updateAutoData(car.autoID, {
               coords: car.coords,
               distance: car.distance
            });

            if([stat.AUTO_PAY, stat.AUTO_WAIT].includes(car.status))
                return;

            car.path.directionServ.route({
                origin: car.coords,
                destination: car.path.dest,
                travelMode: 'DRIVING'
            }, function(response, status) {
                if (status === 'OK') {
                    //change auto
                    car.path.steps = response.routes[0].legs[0].steps;
                    car.path.directionRenderer.setDirections(response);
                    car.path.directionRenderer.setOptions({
                        suppressPolylines: !car.withOrder
                    });

                    if(car.path.steps[0].distance.value)
                        car.path.loaded = true;
                }
                //else
                    //alert('Directions request failed due to ' + status);
            });

            car.messageWindow.setContent(this.createContentForAuto(car));
        });
    }

    createMap(mapElement) {
        this.map = new this.googleMaps.Map(mapElement, {
            center: { lat: 46.65, lng: 32.58 },
            zoom: 12,
            mapTypeControl: false
        });

        this.areas = areas.map( (areaOpt) => {
            let area = new this.googleMaps.Polygon({
                paths: areaOpt.paths,
                ...areaOpt.style
            });
            area.setMap(this.map);

            return area;
        } );

        this.makeAreaControl();

        setInterval(this.animateMove.bind(this), 5000);
    }

    async createOrder(orderInfo){
        //if order finished or paying then don't show him
        if(stat.ORDER_FINISHED === orderInfo.status)
            return;

        //select icon and address
        let icon = this.icons.order.free,
            address = orderInfo.start;

        if([stat.ORDER_WAIT, stat.ORDER_AUTO].includes(orderInfo.status))
            icon = this.icons.order.inWait;
        else if(orderInfo.status !== stat.ORDER_FREE){
            icon = this.icons.order.withOrder;
            address = orderInfo.destination;
        }

        //transform address string to coords
        let result = await this.geocode({address});

        orderInfo.coords = result[0].geometry.location;
        orderInfo.marker = this.createMarker(orderInfo.coords, icon);

        if([stat.ORDER_PAY, stat.ORDER_AUTO].includes(orderInfo.status))
            orderInfo.marker.setMap(null);

        orderInfo.messageWindow = this.createWindow(this.createContentForOrder(orderInfo));

        orderInfo.marker.addListener('click', this.orderMarkerListener.bind(this, orderInfo));

        this.orders.push(orderInfo);
    }

    createAuto(autoInfo){
        //select icon
        let icon = this.icons.car.free;

        if([stat.AUTO_WAIT, stat.AUTO_PAY].includes(autoInfo.status))
            icon = this.icons.car.wait;
        else
            if(autoInfo.status !== stat.AUTO_FREE)
                icon = this.icons.car.busy;

        //create components
        autoInfo.marker = this.createMarker(autoInfo.coords, icon);
        autoInfo.messageWindow = this.createWindow(this.createContentForAuto(autoInfo));

        //show message window
        autoInfo.marker.addListener('click', this.autoMarkerClick.bind(this, autoInfo));

        if(!autoInfo.orderID){
            let dest = autoPoints[Math.round(Math.random() * autoPoints.length)];
            this.createPath(autoInfo, dest);
        }
        else
            if(autoInfo.orderID && stat.AUTO_PAY !== autoInfo.status) {
                //find destination order
                let curOrder = this.orders.find( (e) => {
                    return e.orderID === autoInfo.orderID;
                });

                autoInfo.withOrder = true;

                this.createPath(autoInfo, curOrder.coords);
            }

        this.auto.push(autoInfo);
    }

    createWindow(showContent){
        return new this.googleMaps.InfoWindow({
            content: showContent
        });
    }

    createPath(auto, dest){
        //create  path
        let pathInfo = {dest: dest};

        pathInfo.directionServ = new this.googleMaps.DirectionsService;
        pathInfo.directionRenderer = new this.googleMaps.DirectionsRenderer({
            map: this.map,
            suppressMarkers: true,
            preserveViewport: true
        });
        pathInfo.directionRenderer.setOptions({
            suppressPolylines: !auto.withOrder
        });

        pathInfo.directionServ.route({
            origin: auto.coords,
            destination: dest,
            travelMode: 'DRIVING'
        }, (response, status) => {
            if (status === 'OK') {
                //change auto
                auto.path.steps = response.routes[0].legs[0].steps;
                auto.path.loaded = true;

                pathInfo.directionRenderer.setDirections(response);

                //select tax of order
                if(auto.tax)
                    return;

                let tax = this.selectTax(dest);

                auto.tax = tax;

                this.updateAutoData(auto.autoID, {
                   tax
                });
            }
            //else
            //  alert('Directions request failed due to ' + status);
        });

        auto.path = pathInfo;
    }

    createMarker(coords, icon){
        return new this.googleMaps.Marker({
            map: this.map,
            position: coords,
            icon
        });
    }

    createContentForAuto(auto){

        let content = '';

        //button start travel handler
        window.onAutoButClick = this.autoButClick.bind(this);

        if(this.selectedAuto == auto)
            return '<div>Выберите заказ</div>';

        if(auto.orderID && auto.orderID !== '') {
            let cost = (auto.distance * auto.tax).toFixed(2);

            content = `<div>Номер заказа: ${auto.orderID}</div>`;

            if (auto.status === stat.AUTO_MOVE || auto.status === stat.AUTO_PAY)
                content += `<div>Проехано на: ${cost} грн.</div>`;

            if (auto.status === stat.AUTO_WAIT)
                content += MapController.makeBut(stat.EVENT_WAIT, auto.nomer, 'Пассажир прибыл');

            if (auto.status === stat.AUTO_PAY)
                content += MapController.makeBut(stat.EVENT_PAY, auto.nomer, 'Оплачено');
        }
        else
            content = MapController.makeBut(stat.EVENT_TRAVEL, auto.nomer, 'В путь');

        return `
        <div class = "justify-content-center">
            <div>Номер машины: ${auto.nomer}</div>
            <div>Статус: ${auto.status}</div>
            ${content}
        </div>`;
    }

    createContentForOrder(info){

        let waitTime = Math.ceil((new Date() - info.orderCreate)/60000),
            content = ``;

        content += `
        <div class = "justify-content-center">
            <div>Номер заказа: ${info.orderID}</div>
            <div>Телефон: ${info.phone}</div>
            <div>Пункт назначения: ${info.destination}</div>`

        if(info.status === stat.ORDER_FREE)
            content += `<div>Время ожидания: ${waitTime} минут</div>`;

        content+= `<div>Статус: ${info.status}</div></div>`;


        return content;
    }

    eventTravelHandler(){
        //abort selection
        if (this.selectedAuto && this.selectedAuto.nomer === event.target.dataset.nomer) {
            this.selectedAuto = null;
            return;
        }

        //find auto
        this.selectedAuto = this.auto.find((elem) => {
            return elem.nomer === event.target.dataset.nomer;
        });

        this.selectedAuto.messageWindow.setContent('<div>Выберите заказ</div>');
    }

    eventPayHandler(auto, order){
        //update info in db
        this.updateAutoData(auto.autoID, {
            status: stat.AUTO_FREE,
            orderID: '',
            distance: 0,
            tax: ''
        })
            .then( () =>
                this.updateOrderData(order.orderID, {
                    status: stat.ORDER_FINISHED,
                    price: (auto.distance * auto.tax).toFixed(2),
                    orderFinished: +new Date()
                })
            )
            .then( () => {
                //update local info

                auto.orderID = '';
                auto.tax = null;
                auto.distance = 0;
                auto.withOrder = false;
                auto.status = stat.AUTO_FREE;

                auto.marker.setIcon(this.icons.car.free);

                auto.messageWindow.close();
            });
    }

    eventWaitHandler(auto, order){
        //change auto properties
        auto.status = stat.AUTO_MOVE;
        auto.marker.setIcon(this.icons.car.busy);

        order.status = stat.ORDER_MOVE;

        //get destination coords
        this.geocode({address: order.destination}).then( (res) => {

            //update data in db
            this.updateAutoData(auto.autoID, {status: stat.AUTO_MOVE})
                .then( () =>
                    this.updateOrderData(order.orderID, {status: stat.ORDER_MOVE})
                )
                .then( () => {
                    order.marker.setPosition(res[0].geometry.location);
                    order.marker.setMap(this.map);
                    order.marker.setIcon(this.icons.order.withOrder);

                    auto.path.dest = res[0].geometry.location;
                    auto.path.loaded = false;
                } );
        });
    }

    async loadData(data){
        for(let key in data.orders)
            await this.createOrder({orderID: key, ...data.orders[key]});

        data.auto.forEach( (auto, autoID) => {
            if(auto)
                this.createAuto({autoID, ...auto});
        });
    }

    orderMarkerListener(orderInfo){
        if (!this.selectedAuto) {
            orderInfo.messageWindow.setContent(this.createContentForOrder(orderInfo));
            orderInfo.messageWindow.open(this.map, orderInfo.marker);
        }
        else{
            if(orderInfo.status !== stat.ORDER_FREE)
                alert('Невозможно выбрать заказ который уже принят!');
            else {
                //change icons on markers
                this.selectedAuto.marker.setIcon(this.icons.car.busy);
                orderInfo.marker.setIcon(this.icons.order.inWait);

                //change order properties
                orderInfo.status = stat.ORDER_WAIT;
                orderInfo.messageWindow.setContent(this.createContentForOrder(orderInfo));

                //change auto properties
                let index = this.auto.findIndex((e) => e == this.selectedAuto),
                    newAuto = {
                        coords: this.auto[index].coords,
                        status: stat.AUTO_ORDER,
                        autoID: this.auto[index].autoID,
                        orderID: orderInfo.orderID,
                        nomer: this.auto[index].nomer,
                        name: this.auto[index].name,
                        distance: 0
                    };

                this.auto[index].marker.setMap(null);
                this.auto.splice(index, 1);

                this.createAuto(newAuto);

                //save database
                this.updateOrderData(orderInfo.orderID, {
                   autoID: newAuto.autoID,
                   status: stat.ORDER_WAIT,
                    orderAccept: +new Date()
                })
                    .then( () =>
                        this.updateAutoData(this.selectedAuto.autoID, {
                           orderID: orderInfo.orderID,
                           status: stat.AUTO_ORDER
                        })
                    )
                    .then( () => {
                        this.createPath(this.selectedAuto);

                        this.selectedAuto = null;
                    } );
            }
        }
    }

    autoMarkerClick(autoInfo){
        if(this.selectedAuto === autoInfo)
            this.selectedAuto = null;
        else if(this.selectedAuto){
            alert('Выберите заказ или отмените выбор заказа');
            return;
        }

        autoInfo.messageWindow.setContent(this.createContentForAuto(autoInfo));
        autoInfo.messageWindow.open(this.map, autoInfo.marker);
    }

    autoButClick(event){
        let target = event.target,
            type = target.dataset.type,
            auto = this.auto.find((elem) => {
                return elem.nomer == event.target.dataset.nomer;
            });

            let
            order = this.orders.find( (elem) => {
                return elem.orderID == auto.orderID;
            });

        if(type === stat.EVENT_TRAVEL) {
            this.eventTravelHandler();
        }
        else if(type === stat.EVENT_WAIT){
            this.eventWaitHandler(auto, order);
        }
        else if(type === stat.EVENT_PAY){
            this.eventPayHandler(auto, order);
        }
    }

    //promising of geocode
    geocode(data){
        return new Promise( (resolve, reject) => {
           try{
               this.geodecoder.geocode(data, (result, status) => {
                   if(status !== 'OK')
                       reject(result);
                   else
                       resolve(result);
               });
           }
           catch (e) {
               reject(e);
           }
        })
            .catch( (e) => showDangerMessage(e.message) );
    }

    //update data
    updateAutoData(autoID, data){
        return this.dbInfo.child('auto/' + autoID).update(data).catch( (e) => showDangerMessage(e.message) );
    }

    updateOrderData(orderID, data){
        return this.dbInfo.child('orders/' + orderID).update(data).catch( (e) => showDangerMessage(e.message) );
    }

    selectTax(address){
        let curArea = this.areas.find( (area) => {
            return this.googleMaps.geometry.poly.containsLocation(address, area);
        } );

        let tax = curArea ?
            (
                this.auto.reduce(
                    (a, b) =>
                        this.googleMaps.geometry.poly.containsLocation(
                            new this.googleMaps.LatLng(b.coords), curArea
                        ) ? a + 1 : a, 0
                ) < 3 ?
                    COST_BUSY_PER_KM
                    :
                    COST_PER_KM
            )
            :
            COST_OFFCITY_PER_KM;

        return tax;
    }

    static makeBut(type, nomer, text){
        return `<div 
                    onclick = "onAutoButClick(event)"
                    class = 'btn btn-link'
                    data-type = ${type} 
                    data-nomer = ${nomer}>
                        ${text}
                    </div>`;
    }

    makeAreaControl(){
        let wrapper = document.createElement('div'),
            inputWrap = document.createElement('div'),
            check = document.createElement('input'),
            label = document.createElement('label');

        wrapper.append(inputWrap);
        inputWrap.append(check, label);

        wrapper.className = 'p-3 bg-white';
        inputWrap.className = 'custom-control custom-checkbox';

        check.className = 'custom-control-input';
        check.style.zIndex = 999;
        check.type = 'checkbox';
        check.name = 'showAreas';
        check.onchange = () => {
            this.areas.forEach( (area) => {
                area.setMap(area.map ? null : this.map);
            } );
        };

        label.className = 'custom-control-label';
        label.setAttribute('for', 'showAreas');
        label.textContent = 'Скрыть районы';

        this.map.controls[this.googleMaps.ControlPosition.TOP_RIGHT].push(wrapper);

        return wrapper;

    }

}

export default MapController;