//myComponents
import MapController from './MapClass';
import OrderForm from './OrderForm';
import Layout from 'js/Layout';

const loadGoogleMapsApi = require('load-google-maps-api');

class Dashboard extends React.Component{
    constructor(props){
        super(props);

        this.mapControll = null;
        this.mapElem = null;

        this.onOrderCreate = this.onOrderCreate.bind(this);
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

        return (
            <React.Fragment>
                <div
                    id = "map"
                    ref = {(elem) => this.mapElem = elem}
                >.</div>

                <div className="mt-3 d-flex justify-content-center">
                    <OrderForm
                        onCreate = {this.onOrderCreate}/>
                </div>
            </React.Fragment>
        );
    }

    onOrderCreate(order){
        this.mapControll.createOrder(order);
    }
}

export default Layout(Dashboard);