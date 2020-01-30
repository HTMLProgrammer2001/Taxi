import MapClass from './MapClass';
import Layout from 'js/Layout';

const loadGoogleMapsApi = require('load-google-maps-api');

class Map extends React.Component{
    constructor(props){
        super(props);

        this.mapControll = null;
        this.mapElem = null;
    }

    componentDidMount(){
        loadGoogleMapsApi({key: 'AIzaSyDdJjjkx2zXC_pIjlW7MtTgU2HvYFrqIqY'}).then((googleMaps) => {
            this.mapControll = new MapClass;

            this.mapControll.createMap(googleMaps, this.mapElem);
        });
    }

    render(){
        return (
            <div id = "map" ref = {(elem) => this.mapElem = elem}></div>
        );
    }
}

export default Layout(Map);