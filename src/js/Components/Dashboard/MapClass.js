class MapController{

    constructor(googleMaps){
        this.map = null;
        this.googleMaps = googleMaps;

        this.selectedAuto = null;

        this.orders = [];
        this.auto = [];
        this.paths = [];

        this.icons = {
            car: {
                free: require('assets/carFree.png'),
                busy: require('assets/carBusy.png')
            },
            order: {
                free: require('assets/peopleFree.png'),
                busy: require('assets/peopleBusy.png')
            }
        }
    }

    createMap(mapElement) {
        navigator.geolocation.getCurrentPosition((res) => {
            //create map with centre in the current user position
            this.map = new this.googleMaps.Map(mapElement, {
                center: { lat: res.coords.latitude, lng: res.coords.longitude },
                zoom: 10,
                mapTypeControl: false
            });
        });
    }

    createOrder(orderInfo){
        let icon = orderInfo.status == 'Free' ? this.icons.order.free : this.icons.order.busy;

        orderInfo.marker = this.createMarker(orderInfo.coords, icon);
        orderInfo.messageWindow = this.createWindow(this.createContentForOrder(orderInfo));

        orderInfo.marker.addListener('click', this.orderMarkerListener.bind(this, orderInfo));

        this.orders.push(orderInfo);
    }

    createAuto(autoInfo){
        //select icon
        let icon = autoInfo.status == 'Free' ? this.icons.car.free : this.icons.car.busy;

        //create components
        autoInfo.marker = this.createMarker(autoInfo.coords, icon);
        autoInfo.messageWindow = this.createWindow(this.createContentForAuto(autoInfo));

        //show message window
        autoInfo.marker.addListener('click', () => {
           autoInfo.messageWindow.open(this.map, autoInfo.marker);
        });

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
        let destOrder = this.orders.find( (e) => {
            return e.orderID == auto.orderID;
        });

        //create  path
            let pathObj = {
                auto,
                order: destOrder
            };

        pathObj.directionServ = new this.googleMaps.DirectionsService;
        pathObj.directionRenderer = new this.googleMaps.DirectionsRenderer({map: this.map, suppressMarkers: true});

        pathObj.directionServ.route({
            origin: auto.coords,
            destination: destOrder.coords,
            travelMode: 'DRIVING'
        }, function(response, status) {
            if (status === 'OK') {
                //all right. Save and render path
                pathObj.directionRenderer.setDirections(response);
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });

        this.paths.push(pathObj);
    }

    createMarker(coords, icon){
        return new this.googleMaps.Marker({
            map: this.map,
            position: coords,
            icon
        });
    }

    orderMarkerListener(orderInfo){
        if (!this.selectedAuto) {
            orderInfo.messageWindow.open(this.map, orderInfo.marker);
        }
        else{
            if(orderInfo.status != 'Free') {
                alert('Невозможно выбрать заказ который уже принят!');
            }
            else {
                //change icons on markers
                this.selectedAuto.marker.setIcon(this.icons.car.busy);
                orderInfo.marker.setIcon(this.icons.order.busy);

                //change auto properties
                this.selectedAuto.orderID = orderInfo.orderID;
                this.selectedAuto.messageWindow.setContent(this.createContentForAuto(this.selectedAuto));
                this.selectedAuto.messageWindow.close();

                this.createPath(this.selectedAuto);

                this.selectedAuto = null;
            }
        }
    }

    createContentForAuto(auto){

        window.onTravelButClick = () => {
            this.selectedAuto = auto;

            auto.messageWindow.setContent('<div>Выберите заказ</div>');
        };

        let GoButton = !auto.orderID ? `<div onclick = "onTravelButClick()" class='btn btn-link'>В путь</div>` : ``;

        return `
        <div class = "justify-content-center">
            <div>Номер машины: ${auto.nomer}</div>
            <div>Статус: ${auto.status}</div>
            ${GoButton}
        </div>`;
    }

    createContentForOrder(info){
        return `
        <div class = "justify-content-center">
            <div>Телефон: ${info.phone}</div>
            <div>Цена: ${info.price}</div>
            <div>Время ожидания: ${info.waitTime} минут</div>
            <div>Статус: ${info.status}</div>
        </div>`;
    }

    loadData(data){
        data.orders.forEach( (order) => {
            this.createOrder(order);
        });

        data.auto.forEach( (auto) => {
            this.createAuto(auto);
        });
    }
}

export default MapController;