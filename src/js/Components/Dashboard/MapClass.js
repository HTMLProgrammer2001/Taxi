class MapController{

    constructor(googleMaps){
        this.map = null;
        this.googleMaps = googleMaps;
        this.geodecoder = new googleMaps.Geocoder();

        this.selectedAuto = null;

        this.orders = [];
        this.auto = [];

        this.icons = {
            car: {
                free: require('assets/carFree.png'),
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

           let autoCoord = car.coords;

           //arrived
           if((!car.steps.length || !car.steps[0].distance.value) && car.path.loaded){
               //find order
               let curOrder = this.orders.find( (order) => {
                   return order.orderID == car.orderID;
               });

               //if we arrived to order
               if(curOrder.status == 'wait'){
                   curOrder.status = 'move';

                   this.geodecoder.geocode({address: curOrder.destination}, (res, status) => {
                       if(status == 'OK'){
                           curOrder.marker.setPosition(res[0].geometry.location);
                           curOrder.marker.setIcon(this.icons.order.inMove);

                           car.path.dest = res[0].geometry.location;
                           car.path.loaded = false;
                       }
                       else
                           alert('Error in geocoding');
                   });
               }
               else if(curOrder.status == 'move'){
                   car.inMove = false;

                   curOrder.status = 'Pay';

                   return;
               }
           }

           let speed = 0.1,
               newCoord = {lat: autoCoord.lat, lng: autoCoord.lng};

           while(speed > 0){

               if(!car.steps.length)
                   break;

               let nextStep = car.steps[0].end_point,
                   distance = Math.sqrt((autoCoord.lat - nextStep.lat())**2 + (autoCoord.lng - nextStep.lng())**2);

               if(distance > speed){
                   newCoord = nextStep;

                   //check all paths in this step
                   for(let i = 0; i < car.steps[0].path.length; i++){
                       let point = car.steps[0].path[i],
                           pointDistance = Math.sqrt((autoCoord.lat - point.lat())**2 + (autoCoord.lng - point.lng())**2);

                       if(pointDistance > speed){
                           newCoord = {
                               lat: car.steps[0].path[i].lat(),
                               lng: car.steps[0].path[i].lng()
                           };

                           break;
                       }
                   }

                   speed = 0;
               }
               else{
                   newCoord = {
                       lat: nextStep.lat(),
                       lng: nextStep.lng()
                   };

                   speed -= distance;

                   car.steps.shift();
               }
           }

            car.marker.setPosition(newCoord);
            car.coords = newCoord;

            car.path.directionServ.route({
                origin: car.coords,
                destination: car.path.dest,
                travelMode: 'DRIVING'
            }, function(response, status) {
                if (status === 'OK') {
                    //change auto

                    car.steps = response.routes[0].legs[0].steps;

                    car.path.directionRenderer.setDirections(response);
                    car.path.loaded = true;

                    if(!car.steps[0].distance)
                        car.path.loaded = false;
                } else {
                    alert('Directions request failed due to ' + status);
                }
            });
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

    createOrder(orderInfo){
        this.geodecoder.geocode({address: orderInfo.start}, (result, status) => {

            if(status == 'OK'){
                //select icon
                let icon = orderInfo.status == 'Free' ? this.icons.order.free : this.icons.order.busy;
                //create data for order
                orderInfo.coords = result[0].geometry.location;
                orderInfo.marker = this.createMarker(orderInfo.coords, icon);
                orderInfo.messageWindow = this.createWindow(this.createContentForOrder(orderInfo));

                orderInfo.marker.addListener('click', this.orderMarkerListener.bind(this, orderInfo));

                this.orders.push(orderInfo);
            }
        });
    }

    createAuto(autoInfo){
        //select icon
        let icon = autoInfo.status == 'Free' ? this.icons.car.free : this.icons.car.busy;

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
        let curOrder = this.orders.find( (e) => {
            return e.orderID == auto.orderID;
        }),

        //create  path
        pathObj = {dest: curOrder.coords};

        pathObj.directionServ = new this.googleMaps.DirectionsService;
        pathObj.directionRenderer = new this.googleMaps.DirectionsRenderer({
            map: this.map,
            suppressMarkers: true,
            preserveViewport: true
        });

        pathObj.directionServ.route({
            origin: auto.coords,
            destination: curOrder.coords,
            travelMode: 'DRIVING'
        }, function(response, status) {
            if (status === 'OK') {
                //change auto
                auto.inMove = true;
                auto.steps = response.routes[0].legs[0].steps;
                auto.path.loaded = true;

                curOrder.status = 'wait';

                pathObj.directionRenderer.setDirections(response);
            } else {
                alert('Directions request failed due to ' + status);
            }
        });

        auto.path = pathObj;
    }

    createMarker(coords, icon){
        return new this.googleMaps.Marker({
            map: this.map,
            position: coords,
            icon
        });
    }

    createContentForAuto(auto){

        //button start travel handler
        window.onAutoButClick = (event) => {
            if(this.selectedAuto && this.selectedAuto.nomer == event.target.dataset.nomer){
                this.selectedAuto = null;
                return;
            }

            this.selectedAuto = this.auto.find( (elem) => {
                return elem.nomer == event.target.dataset.nomer;
            });

            this.selectedAuto.messageWindow.setContent('<div>Выберите заказ</div>');
        };

        let content = !auto.orderID ?
            `<div onclick = "onAutoButClick(event)" class='btn btn-link' data-nomer = ${auto.nomer}>В путь</div>`
                :
            `<div>Номер заказа: ${auto.orderID}</div>
            `;

        return `
        <div class = "justify-content-center">
            <div>Номер машины: ${auto.nomer}</div>
            <div>Статус: ${auto.status}</div>
            ${content}
        </div>`;
    }

    createContentForOrder(info){
        return `
        <div class = "justify-content-center">
            <div>Номер заказа: ${info.orderID}</div>
            <div>Телефон: ${info.phone}</div>
            <div>Пункт назначения: ${info.destination}</div>`
            +
                (info.status == 'Free' ? `<div>Время ожидания: ${Math.ceil((new Date() - info.orderCreate)/60000)} минут</div>` : '')
            +
            `<div>Статус: ${info.status}</div>
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

    orderMarkerListener(orderInfo){
        if (!this.selectedAuto) {
            orderInfo.messageWindow.setContent(this.createContentForOrder(orderInfo));
            orderInfo.messageWindow.open(this.map, orderInfo.marker);
        }
        else{
            if(orderInfo.status != 'Free') {
                alert('Невозможно выбрать заказ который уже принят!');
            }
            else {
                //change icons on markers
                this.selectedAuto.marker.setIcon(this.icons.car.busy);
                orderInfo.marker.setIcon(this.icons.order.inWait);

                //change order properties
                orderInfo.status = 'Adopted';
                orderInfo.messageWindow.setContent(this.createContentForOrder(orderInfo));

                //change auto properties
                this.selectedAuto.inMove = true;
                this.selectedAuto.orderID = orderInfo.orderID;
                this.selectedAuto.status = 'Busy';
                this.selectedAuto.messageWindow.setContent(this.createContentForAuto(this.selectedAuto));
                this.selectedAuto.messageWindow.close();

                this.createPath(this.selectedAuto);

                this.selectedAuto = null;
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

}

export default MapController;