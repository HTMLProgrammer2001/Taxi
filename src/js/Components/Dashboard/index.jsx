//myComponents
import MapController from './MapClass';
import OrderForm from './OrderForm';
import Layout from 'js/Layout';
import {showDangerMessage} from "../../messages";
import firebaseProj from 'js/fareConfig';

require('bootstrap');

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
            this.mapControll.loadData(res.val())
                .catch((e) => showDangerMessage(e.message));
        } );

    }

    render(){

        return (
            <React.Fragment>
                <div
                    id = "map"
                    ref = {(elem) => this.mapElem = elem}
                >.</div>

                <div>
                    <div className="p-3 addOrderPopupBut bg-happy-fisher" data-toggle = "modal" data-target = "#addOrder">
                        <span>+</span>
                    </div>

                    <div className="modal" role = "dialog" id="addOrder">
                        <div className="modal-dialog" role = "document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <div className="d-flex justify-content-end">
                                        <span className="mr-2 cur-pointer" data-dismiss="modal">&times;</span>
                                    </div>

                                    <OrderForm onCreate = {this.onOrderCreate}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    onOrderCreate(order){
        this.mapControll.createOrder(order)
            .catch((e) => showDangerMessage(e.message));
    }
}

export default Layout(Dashboard);