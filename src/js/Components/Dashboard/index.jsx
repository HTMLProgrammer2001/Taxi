//myComponents
import MapController from './MapClass';
import OrderForm from './OrderForm';
import Layout from 'js/Layout';
import firebaseProj from 'js/fareConfig';
import MarkForm from './MarkForm';

import {toast} from 'react-toastify';
import { Modal, ModalHeader, ModalBody} from 'reactstrap';
require('bootstrap');
const loadGoogleMapsApi = require('load-google-maps-api');

class Dashboard extends React.Component{
    constructor(props){
        super(props);

        this.mapControll = null;
        this.mapElem = null;

        this.onOrderCreate = this.onOrderCreate.bind(this);
        this.toggleAddOrder = this.toggleAddOrder.bind(this);
        this.markToggle = this.markToggle.bind(this);
        this.createMark = this.createMark.bind(this);

        this.state = {
            addOrderOpen: false,
            markOrder: null
        }
    }

    toggleAddOrder(){
        if(!firebaseProj.auth().currentUser.emailVerified){
            toast('Только верифицированные пользователи могут создавать заказы', {
                type: toast.TYPE.ERROR
            });
            return;
        }

        this.setState((prev) => {
           return {
               addOrderOpen: !prev.addOrderOpen
           }
        });
    }

    createMark(order){
        if(order)
            this.setState({
                markOrder: order
            });
    }

    markToggle(){
        this.setState({
            markOrder: null
        });
    }

    componentDidMount(){
        //init map
        loadGoogleMapsApi({
            key: 'AIzaSyDdJjjkx2zXC_pIjlW7MtTgU2HvYFrqIqY',
            libraries: ['places']
        }).then((googleMaps) => {
            this.mapControll = new MapController(googleMaps, this.createMark);

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
                    <div className="p-3 addOrderPopupBut bg-primary" onClick={this.toggleAddOrder}>
                        <span>+</span>
                    </div>

                    <Modal isOpen={this.state.addOrderOpen} toggle={this.toggleAddOrder} backdrop={true}>
                        <ModalHeader toggle={this.toggleAddOrder}>
                            Добавить заказ
                        </ModalHeader>
                        <ModalBody>
                            <OrderForm onCreate = {this.onOrderCreate}/>
                        </ModalBody>
                    </Modal>

                    {/*Mark order modal*/}
                    <Modal isOpen={!!this.state.markOrder} toggle={this.markToggle} backdrop={true}>
                        <ModalHeader toggle={this.markToggle}>
                            Оцените поездку
                        </ModalHeader>
                        <ModalBody>
                            <MarkForm order = {this.state.markOrder} close = {this.markToggle}/>
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