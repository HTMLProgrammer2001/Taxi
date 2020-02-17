//myComponents
import MapController from './MapClass';
import OrderForm from './OrderForm';
import Layout from 'js/Layout';
import {toast} from 'react-toastify';
import firebaseProj from 'js/fareConfig';
import { Modal, ModalHeader, ModalBody} from 'reactstrap';

require('bootstrap');

const loadGoogleMapsApi = require('load-google-maps-api');

class Dashboard extends React.Component{
    constructor(props){
        super(props);

        this.mapControll = null;
        this.mapElem = null;

        this.onOrderCreate = this.onOrderCreate.bind(this);
        this.toggle = this.toggle.bind(this);

        this.state = {
            modal: false
        }
    }

    toggle(){
        this.setState((prev) => {
           return {
               modal: !prev.modal
           }
        });
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
                .catch((e) => toast(e.message, {type: toast.TYPE.ERROR}));
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
                    <div className="p-3 addOrderPopupBut bg-primary" onClick={this.toggle}>
                        <span>+</span>
                    </div>

                    <Modal isOpen={this.state.modal} toggle={this.toggle} backdrop={true}>
                        <ModalHeader toggle={this.toggle}></ModalHeader>
                        <ModalBody>
                            <OrderForm onCreate = {this.onOrderCreate}/>
                        </ModalBody>
                    </Modal>
                </div>
            </React.Fragment>
        );
    }

    onOrderCreate(order){
        this.mapControll.createOrder(order)
            .catch((e) => toast(e.message, {type: toast.TYPE.ERROR}));
    }
}

export default Layout(Dashboard);