class MapController{
    constructor(googleMaps){
        this.map = null;
        this.googleMaps = googleMaps;

        this.orders = [];
        this.auto = [];

        this.icons = {
            car: {
                free: require('assets/carFree.png'),
                busy: require('assets/carBusy')
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
        orderInfo.marker = this.createMarker(orderInfo.coords, this.icons.order);
        orderInfo.messageWindow = this.createWindow(createContentForUser(orderInfo));

        orderInfo.marker.addListener('click', () => {
            orderInfo.messageWindow.open(this.map, orderInfo.marker);
        });

        this.orders.push(orderInfo);
    }

    createAuto(autoInfo){
        autoInfo.marker = this.createMarker(autoInfo.coords, this.icons.car);
        autoInfo.messageWindow = this.createWindow(createContentForAuto(autoInfo));

        autoInfo.marker.addListener('click', () => {
           autoInfo.messageWindow.open(this.map, autoInfo.marker);
        });

        this.auto.push(autoInfo);
    }

    createWindow(showContent){
        return new this.googleMaps.InfoWindow({
            content: showContent
        });
    }

    createMarker(coords, icon){
        return new this.googleMaps.Marker({
            map: this.map,
            position: coords,
            icon
        });
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

function createContentForAuto(info){
    return `
        <div class = "justify-content-center">
            <div>Номер машины: ${info.nomer}</div>
            <div>Статус: ${info.status}</div>
        </div>`;
}

function createContentForUser(info){
    return `
        <div class = "justify-content-center">
            <div>Телефон: ${info.phone}</div>
            <div>Цена: ${info.price}</div>
            <div>Время ожидания: ${info.waitTime} минут</div>
            <div>Статус: ${info.status}</div>
        </div>`;
}

export default MapController;