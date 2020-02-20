import firebaseProj from 'js/fareConfig';
import FormInput from '../FormInput';

const loadGoogleMapsApi = require('load-google-maps-api');

import {toast} from 'react-toastify';
import {Card, CardBody, Form, Button} from 'reactstrap';

class OrderForm extends React.Component{
    constructor(props){
        super(props);

        this.onFormChange = this.onFormChange.bind(this);
        this.addOrder = this.addOrder.bind(this);

        //google places api variables
        this.googleMaps = null;
        this.startField = React.createRef();
        this.destField = React.createRef();

        this.startAutocomplete = null;
        this.destAutocomplete = null;

        this.state = {
            fieldsValue: {
                orderStart: '',
                orderDestination: '',
                orderPhone: ''
            },
            fieldsError: {},
            savingError: null
        }
    }

    componentDidMount(){

        //load google maps api for autocomplete
        loadGoogleMapsApi({
            key: 'AIzaSyDdJjjkx2zXC_pIjlW7MtTgU2HvYFrqIqY',
            libraries: ['places']
        })
            .then(
                (googleMaps) => {
                    this.googleMaps = googleMaps;

                    this.startAutocomplete = new googleMaps.places.Autocomplete(this.startField.current, {
                        componentRestrictions: {country: 'ua'}
                    });

                    this.destAutocomplete = new googleMaps.places.Autocomplete(this.destField.current, {
                        componentRestrictions: {country: 'ua'}
                    });
                }
            );
    }

    render(){

        //account aren't verified
        if(!firebaseProj.auth().currentUser.emailVerified)
            return (
                <div className="text-center text-danger">
                    Только пользователи с верифицированным аккаунтом могут делать заказы.
                </div>
            );

        return (
            <Card className="border-0">
                <CardBody>
                    <Form onSubmit = {this.addOrder}>
                        {this.state.savingError ?
                            <div className="alert alert-danger">
                                {this.state.savingError}
                            </div>
                            :
                            null
                        }

                        <input
                            type = "text"
                            name = "orderStart"
                            placeholder="Откуда"
                            onChange={this.onFormChange}
                            ref = {this.startField}
                            className="form-control mt-3"/>

                        {
                            this.state.fieldsError.orderStart ?
                                <label className="text-danger text-small">
                                    {this.state.fieldsError.orderStart}
                                </label>
                                    :
                                null
                        }

                        <input
                            type = "text"
                            name = "orderDest"
                            placeholder="Куда"
                            ref = {this.destField}
                            onChange={this.onFormChange}
                            className="form-control mt-3"/>

                        {
                            this.state.fieldsError.orderDest ?
                                <label className="text-danger text-small">
                                    {this.state.fieldsError.orderDest}
                                </label>
                                :
                                null
                        }

                        <FormInput
                            onChange = {this.onFormChange}
                            placeholder = "Имя"
                            name = "orderName"
                            type = "text"
                            className = "mt-3"
                            state = {this.state}
                        />

                        <FormInput
                            onChange = {this.onFormChange}
                            placeholder = "Телефон"
                            name = "orderPhone"
                            type = "text"
                            className = "mt-3"
                            state = {this.state}
                        />

                        <Button outline color = "primary">Добавить</Button>
                    </Form>
                </CardBody>
            </Card>
        );
    }

    onFormChange(event){
        let tar = event.target;

        this.setState(
            (prev) => ({
                fieldsValue: {
                    ...prev.fieldsValue,
                    [tar.name]: tar.value
               }
            }));

        this.setState({
            fieldsError: {
                ...this.state.fieldsError,
                [tar.name]: this.testForm(tar.name, tar.value)[tar.name]
            }
        })
    }

    async addOrder(event){
        event.preventDefault();

        let errors = this.testForm();

        this.setState({
            fieldsError: errors
        });

        if(Object.keys(errors).length){
            toast('Ошибка заполнения формы заказа', {type: toast.TYPE.ERROR});

            return;
        }

        //create order
        let orderObj = {
            destination: this.destAutocomplete.getPlace().formatted_address,
            start: this.startAutocomplete.getPlace().formatted_address,
            status: 'Свободен',
            orderCreate: +new Date(),
            phone: this.state.fieldsValue.orderPhone,
            user: firebaseProj.auth().currentUser.uid,
            userName: this.state.fieldsValue.orderName
        },
        newOrder = await firebaseProj
            .database()
            .ref('/orders')
            .push(orderObj);

        newOrder
            .set(orderObj)
            .then( () => {
                this.props.onCreate({orderID: newOrder.key, ...orderObj});

                toast('Заказ добавлен', {type: toast.TYPE.SUCCESS});

                this.startField.current.value = '';
                this.destField.current.value = '';

                this.setState({
                    fieldsError: {},
                    fieldsValue: {
                        orderStart: '',
                        orderDestination: '',
                        orderPhone: ''
                    },
                    savingError: null
                });
            }, (err) => {
                toast('Ошибка сохранения формы', {type: toast.TYPE.ERROR});

                this.setState({
                   savingError: err.message
                });
            });

    }

    testForm(fieldName, fieldValue){
        let errors = {},
            state = this.state.fieldsValue;

        state[fieldName] = fieldValue;

        if(
            (fieldName === 'orderPhone' || !fieldName) &&
            !(new RegExp('\\+\\d{10}').test(state.orderPhone))
        )
            errors.orderPhone = 'Введите корректный телефон(like +380501122333)';

        if(
            (fieldName === 'orderName' || !fieldName) &&
            (!state.orderName || state.orderName.length < 3)
        )
            errors.orderName = 'Длина имени должна быть не меньше трех символов';

        //valid address
        let valid = false,
            startPlace = this.startAutocomplete.getPlace(),
            destPlace = this.destAutocomplete.getPlace();

        if(!startPlace)
            errors.orderStart = 'Введите начальный адресс';
        else{
            //if not in our region then throw error
            for(let address_comp of startPlace.address_components)
                if(address_comp.long_name === 'Херсонська область'){
                    valid = true;
                    break;
                }

            if(!valid)
                errors.orderStart = 'Доступны заказы только в Херсонской области';
        }

        valid = false;

        if(!destPlace)
            errors.orderDest = 'Ввелите начальный адресс';
        else{
            //if not in our region then throw error
            for(let address_comp of destPlace.address_components)
                if(address_comp.long_name === 'Херсонська область'){
                    valid = true;
                    break;
                }

            if(!valid)
                errors.orderDest = 'Доступны заказы только в Херсонской области';
        }


        return errors;
    }
}

export default OrderForm;