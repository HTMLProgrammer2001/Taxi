import MapController from './MapClass';
import Header from '../Header';

const loadGoogleMapsApi = require('load-google-maps-api');
import {Redirect} from 'react-router-dom';

class Dashboard extends React.Component{
    constructor(props){
        super(props);

        this.mapControll = null;
        this.mapElem = null;
    }

    componentDidMount(){
        //init map
        loadGoogleMapsApi({key: 'AIzaSyDdJjjkx2zXC_pIjlW7MtTgU2HvYFrqIqY'}).then((googleMaps) => {
            this.mapControll = new MapController(googleMaps);

            this.mapControll.createMap(this.mapElem);
        });

        //load data
        let dbRef = firebaseProj.database().ref('/');

        dbRef.once('value').then( (res) => {
            //push to map
            this.mapControll.loadData(res.val());
        } );

    }

    render(){
        if(!firebaseProj.auth().currentUser)
            return <Redirect to = "/"/>

        return (
            <React.Fragment>
                <Header/>
                <div id = "map" ref = {(elem) => this.mapElem = elem}></div>
            </React.Fragment>
        );
    }
}

export default Dashboard;