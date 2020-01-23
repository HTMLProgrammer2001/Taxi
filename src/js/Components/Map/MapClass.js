class Map {
    constructor(){
        this.map = null;
        this.markers = [];
    }

    createMap(googleMaps, mapElement) {
        navigator.geolocation.getCurrentPosition((res) => {
            this.map = new googleMaps.Map(mapElement, {
                center: { lat: res.coords.latitude, lng: res.coords.longitude },
                zoom: 14
            });

            this.createMarker(googleMaps, {
                lat: res.coords.latitude,
                lng: res.coords.longitude
            });
        });
    }

    createMarker(googleMaps, pos){
        this.markers.push(
            new googleMaps.Marker({
                map: this.map,
                position: pos
            })
        );
    }
}
export default Map;