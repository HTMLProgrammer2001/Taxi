import * as stat from './const';
import COST_PER_KM from './const';

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
                inMove: require('assets/target.png')
            }
        }
    }

    animateMove(){
        this.auto.forEach( (car) => {
           if(!car.inMove)
               return;

           let autoCoords = car.coords,

            //find order
            curOrder = this.orders.find( (order) => {
                return order.orderID === car.orderID;
            });

           //arrived
           if((!car.path.steps.length || !car.path.steps[0].distance.value) && car.path.loaded){

               //if we arrived to order
               if(curOrder.status === stat.ORDER_WAIT){

                   car.status = stat.AUTO_WAIT;
                   car.marker.setIcon(this.icons.car.wait);

                   curOrder.status = stat.ORDER_AUTO;
                   curOrder.marker.setMap(null);
               }
               else if(curOrder.status === stat.ORDER_MOVE){
                   car.inMove = false;

                   curOrder.status = stat.ORDER_PAY;
                   car.status = stat.AUTO_PAY;

                   curOrder.marker.setMap(null);
                   car.marker.setIcon(this.icons.car.wait);

                   return;
               }
           }

           let speed = 0.01,
               newCoords = {lat: autoCoords.lat, lng: autoCoords.lng};

           while(speed > 0){

               if(!car.path.steps.length)
                   break;

               let nextStep = car.path.steps[0].end_point,
                   distance = Math.sqrt((autoCoords.lat - nextStep.lat())**2 + (autoCoords.lng - nextStep.lng())**2);

               if(distance > speed){
                   newCoords = nextStep;

                   //check all paths in this step
                   for(let i = 0; i < car.path.steps[0].path.length; i++){
                       let point = car.path.steps[0].path[i],
                           pointDistance = Math.sqrt((autoCoords.lat - point.lat())**2 + (autoCoords.lng - point.lng())**2);

                       if(pointDistance > speed){
                           newCoords = {
                               lat: car.path.steps[0].path[i].lat(),
                               lng: car.path.steps[0].path[i].lng()
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

                   car.path.steps.shift();
               }
           }

           if(curOrder.status === stat.ORDER_MOVE)
                car.path.distance += this.googleMaps.geometry.spherical.computeDistanceBetween(
                    new this.googleMaps.LatLng(car.coords.lat, car.coords.lng),
                    new this.googleMaps.LatLng(newCoords.lat, newCoords.lng)
                )/1000;

            car.marker.setPosition(newCoords);
            car.coords = newCoords;

            car.path.directionServ.route({
                origin: car.coords,
                destination: car.path.dest,
                travelMode: 'DRIVING'
            }, function(response, status) {
                if (status === 'OK') {
                    //change auto

                    car.path.steps = response.routes[0].legs[0].steps;

                    car.path.directionRenderer.setDirections(response);

                    if(car.path.steps[0].distance.value)
                        car.path.loaded = true;
                } else
                    alert('Directions request failed due to ' + status);
            });

            car.messageWindow.setContent(this.createContentForAuto(car));
        });
    }

    createMap(mapElement) {
        navigator.geolocation.getCurrentPosition((res) => {
            //create map with centre in the current user position
            this.map = new this.googleMaps.Map(mapElement, {
                center: { lat: res.coords.latitude, lng: res.coords.longitude },
                zoom: 15,
                mapTypeControl: false
            });
        });

        setInterval(this.animateMove.bind(this), 2000);
    }

    async createOrder(orderInfo){
        //if order finished or paying then don't show him
        if([stat.ORDER_FINISHED, stat.ORDER_PAY].includes(orderInfo.status))
            return;

        //select icon and address
        let icon = this.icons.order.free,
            address = orderInfo.start;

        if([stat.ORDER_WAIT, stat.ORDER_AUTO].includes(orderInfo.status))
            icon = this.icons.order.inWait;
        else if(orderInfo.status !== stat.ORDER_FREE){
            icon = this.icons.order.inMove;
            address = orderInfo.destination;
        }

        //transform address string to coords
        let result = await this.geocode({address});

        orderInfo.coords = result[0].geometry.location;
        orderInfo.marker = this.createMarker(orderInfo.coords, icon);
        orderInfo.messageWindow = this.createWindow(this.createContentForOrder(orderInfo));

        orderInfo.marker.addListener('click', this.orderMarkerListener.bind(this, orderInfo));

        this.orders.push(orderInfo);
    }

    createAuto(autoInfo){
        //select icon
        let icon = this.icons.car.free;

        if([stat.AUTO_WAIT].includes(autoInfo.status))
            icon = this.icons.car.wait;
        else
            if(autoInfo.status !== stat.AUTO_FREE)
                icon = this.icons.car.busy;

        //create components
        autoInfo.marker = this.createMarker(autoInfo.coords, icon);
        autoInfo.messageWindow = this.createWindow(this.createContentForAuto(autoInfo));

        //show message window
        autoInfo.marker.addListener('click', this.autoMarkerClick.bind(this, autoInfo));

        if(autoInfo.orderID)
            this.createPath(autoInfo);


        this.auto.push(autoInfo);
    }

    createWindow(showContent){
        return new this.googleMaps.InfoWindow({
            content: showContent
        });
    }

    createPath(auto){
        //find destination order
        console.log(this.orders.length);
        let curOrder = this.orders.find( (e) => {
            return e.orderID === auto.orderID;
        }),
        //create  path
        pathInfo = {dest: curOrder.coords};

        //rendering
        pathInfo.directionServ = new this.googleMaps.DirectionsService;
        pathInfo.directionRenderer = new this.googleMaps.DirectionsRenderer({
            map: this.map,
            suppressMarkers: true,
            preserveViewport: true
        });

        pathInfo.directionServ.route({
            origin: auto.coords,
            destination: curOrder.coords,
            travelMode: 'DRIVING'
        }, function(response, status) {
            if (status === 'OK') {
                //change auto
                auto.path.distance = 0;
                auto.inMove = true;
                auto.path.steps = response.routes[0].legs[0].steps;
                auto.path.loaded = true;

                curOrder.status = stat.ORDER_WAIT;

                pathInfo.directionRenderer.setDirections(response);
            } else
                alert('Directions request failed due to ' + status);
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
        window.onAutoButClick = (event) => {

            let target = event.target,
                type = target.dataset.type,
                auto = this.auto.find((elem) => {
                    return elem.nomer === event.target.dataset.nomer;
                }),
                order = this.orders.find( (elem) => {
                   return elem.orderID === auto.orderID;
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
        };

        if(!auto.orderID)
            content = MapController.makeBut(stat.EVENT_TRAVEL, auto.nomer, 'В путь');
        else {
            let cost =((auto.path && auto.path.distance) * COST_PER_KM).toFixed(2);

            content = `<div>Номер заказа: ${auto.orderID}</div>`;

            if(auto.status === stat.AUTO_MOVE || auto.status === stat.AUTO_PAY)
                content += `<div>Проехано на: ${cost} грн.</div>`;

            if(auto.status === stat.AUTO_WAIT)
                content += MapController.makeBut(stat.EVENT_WAIT, auto.nomer,'Пассажир прибыл');

            if(auto.status === stat.AUTO_PAY)
                content += MapController.makeBut(stat.EVENT_PAY, auto.nomer, 'Оплачено');
        }

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
        auto.orderID = null;
        auto.inMove = false;
        auto.status = stat.AUTO_FREE;
        auto.path = {};

        auto.marker.setIcon(this.icons.car.free);

        auto.messageWindow.close();
    }

    eventWaitHandler(auto, order){
        auto.status = stat.AUTO_MOVE;
        auto.marker.setIcon(this.icons.car.busy);

        order.status = stat.ORDER_MOVE;

        this.geocode({address: order.destination}).then( (res, status) => {
            if(status === 'OK'){
                order.marker.setPosition(res[0].geometry.location);
                order.marker.setMap(this.map);
                order.marker.setIcon(this.icons.order.inMove);

                auto.path.dest = res[0].geometry.location;
                auto.path.loaded = false;
            }
            else
                alert('Error in geocoding');
        });
    }

    async loadData(data){
        for(let i = 0; i < data.orders.length; i++){
            if(data.orders[i]){
                await this.createOrder({orderID: i, ...data.orders[i]});
            }
        }

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
                this.selectedAuto.inMove = true;
                this.selectedAuto.orderID = orderInfo.orderID;
                this.selectedAuto.status = stat.AUTO_ORDER;
                this.selectedAuto.messageWindow.setContent(this.createContentForAuto(this.selectedAuto));
                this.selectedAuto.messageWindow.close();

                //save database
                this.dbInfo.child('orders/' + orderInfo.orderID).update({
                    autoID: this.selectedAuto.autoID,
                    status: stat.ORDER_WAIT
                }).then( () =>
                    this.dbInfo.child('auto/' + this.selectedAuto.autoID).update({
                        orderID: orderInfo.orderID,
                        status: stat.AUTO_ORDER
                    })
                ).then( () => {
                    this.createPath(this.selectedAuto);

                    this.selectedAuto = null;
                });
            }
        }
    }

    autoMarkerClick(autoInfo){
        if(this.selectedAuto){
            alert('Выберите заказ или отмените выбор заказа');
            return;
        }

        autoInfo.messageWindow.setContent(this.createContentForAuto(autoInfo));
        autoInfo.messageWindow.open(this.map, autoInfo.marker);
    }

    //promisification of geocode
    geocode(data){
        return new Promise( (resolve, reject) => {
           try{
               this.geodecoder.geocode(data, (result, status) => {
                   if(status != 'OK')
                       reject(result);
                   else
                       resolve(result);
               });
           }
           catch (e) {
               reject(e);
           }
        });
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

}

export default MapController;