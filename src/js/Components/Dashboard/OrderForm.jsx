import firebaseProj from 'js/fareConfig';
import FormInput from '../FormInput';

import {toast} from 'react-toastify';
import {Card, CardBody, CardTitle, Form, Button} from 'reactstrap';

class OrderForm extends React.Component{
    constructor(props){
        super(props);

        this.onFormChange = this.onFormChange.bind(this);
        this.addOrder = this.addOrder.bind(this);

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
                    <CardTitle>Добавить заказ</CardTitle>

                    <Form onSubmit = {this.addOrder}>
                        {this.state.savingError ?
                            <div className="alert alert-danger">
                                {this.state.savingError}
                            </div>
                            :
                            null
                        }

                        <FormInput
                            onChange = {this.onFormChange}
                            placeholder = "Введите начальный адресс"
                            name = "orderStart"
                            type = "text"
                            state = {this.state}
                        />

                        <FormInput
                            onChange = {this.onFormChange}
                            placeholder = "Введите конечный адресс"
                            name = "orderDestination"
                            type = "text"
                            state = {this.state}
                        />

                        <FormInput
                            onChange = {this.onFormChange}
                            placeholder = "Введите телефон"
                            name = "orderPhone"
                            type = "text"
                            state = {this.state}
                        />

                        <Button outline color = "primary">Войти</Button>
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

        this.setState((state) => {
            return {
                fieldsError: this.testForm(state.fieldsValue)
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
            destination: this.state.fieldsValue.orderDestination,
            start: this.state.fieldsValue.orderStart,
            status: 'Свободен',
            orderCreate: +new Date(),
            phone: this.state.fieldsValue.orderPhone,
            user: firebaseProj.auth().currentUser.uid
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

    testForm(testState){
        let errors = {},
            state = testState || this.state.fieldsValue;

        if(!(new RegExp('\\+\\d{10}').test(state.orderPhone)))
            errors.orderPhone = 'Введите корректный телефон(like +380501122333)';

        if(!state.orderStart)
            errors.userName = 'Введите начальный адресс';

        if(!state.orderDestination)
            errors.userName = 'Введите конечный адресс';

        return errors;
    }
}

export default OrderForm;