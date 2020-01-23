import MapClass from './MapClass';
import Header from '../Header';

import {Redirect} from 'react-router-dom';

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
        let user = firebaseProj.auth().currentUser;

        if(!user)
            return (
                <Redirect to = "/"/>
            );

        return (
            <React.Fragment>
                <Header/>
                <div id = "map" ref = {(elem) => this.mapElem = elem}></div>
            </React.Fragment>
        );
    }
}

export default Map;