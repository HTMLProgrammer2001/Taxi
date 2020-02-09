import {showDangerMessage, showSuccessMessage} from "../../messages";
import firebaseProj from 'js/fareConfig';

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
            <form onSubmit={this.addOrder} className="align-items-center d-flex flex-column">
                {this.state.savingError ?
                    <div className="alert alert-danger">
                        {this.state.savingError}
                    </div>
                        :
                    null
                }

                <h4 className="text-center">Добавить заказ</h4>

                <input
                    type="text"
                    name = "orderStart"
                    onChange = {this.onFormChange}
                    value ={this.state.fieldsValue.orderStart || ''}
                    className = "form-control"
                    placeholder = "Введите начальный адресс"/>

                <label className="text-danger text-small">
                    {this.state.fieldsError.orderStart}
                </label>

                <input
                    type="text"
                    name = "orderDestination"
                    onChange = {this.onFormChange}
                    value = {this.state.fieldsValue.orderDestination || ''}
                    className = "form-control"
                    placeholder = "Введите конечный адресс"/>

                <label className="text-danger text-small">
                    {this.state.fieldsError.orderDestination}
                </label>

                <input
                    type="text"
                    name = "orderPhone"
                    onChange = {this.onFormChange}
                    value = {this.state.fieldsValue.orderPhone || ''}
                    className = "form-control"
                    placeholder = "Введите номер телефона"/>

                <label className = "text-danger text-small">
                    {this.state.fieldsError.orderPhone}
                </label>

                <button
                    type = "submit"
                    name = "create"
                    className = "btn btn-primary mt-3 w-50">
                    Создать
                </button>
            </form>
        )
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
    }

    async addOrder(event){
        event.preventDefault();

        let errors = this.testForm();

        this.setState({
            fieldsError: errors
        });

        if(Object.keys(errors).length){
            showDangerMessage('Ошибка заполнения формы заказа');

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

                showSuccessMessage('Заказ добавлен');

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
                showDangerMessage('Ошибка сохранения формы');

                this.setState({
                   savingError: err.message
                });
            });

    }

    testForm(){
        let errors = {};

        if(!(new RegExp('\\+\\d{10}').test(this.state.fieldsValue.orderPhone)))
            errors.orderPhone = 'Введите корректный телефон(like +380501122333)';

        if(!this.state.fieldsValue.orderStart)
            errors.userName = 'Введите начальный адресс';

        if(!this.state.fieldsValue.orderDestination)
            errors.userName = 'Введите конечный адресс';

        return errors;
    }
}

export default OrderForm;