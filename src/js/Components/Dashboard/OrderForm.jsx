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
            fieldsError: {}
        }
    }

    render(){
        return (
            <form onSubmit={this.addOrder} className="w-50 align-items-center d-flex flex-column">
                <h3 className="text-center">Добавить заказ</h3>

                <input
                    type="text"
                    name = "orderStart"
                    onInput={this.onFormChange}
                    value={this.state.fieldsValue.orderStart}
                    className="form-control"
                    placeholder="Enter start address"/>

                <label className="text-danger text-small">
                    {this.state.fieldsError.orderStart}
                </label>

                <input
                    type="text"
                    name = "orderDestination"
                    onInput={this.onFormChange}
                    value={this.state.fieldsValue.orderDestination}
                    className="form-control"
                    placeholder="Enter destination address"/>

                <label className="text-danger text-small">
                    {this.state.fieldsError.orderDestination}
                </label>

                <input
                    type="text"
                    name = "orderPhone"
                    onInput={this.onFormChange}
                    value={this.state.fieldsValue.orderPhone}
                    className="form-control"
                    placeholder="Enter your phone"/>

                <label className="text-danger text-small">
                    {this.state.fieldsError.orderPhone}
                </label>

                <button
                    type = "submit"
                    name = "create"
                    className="btn btn-primary mt-3 w-50">
                    Создать
                </button>
            </form>
        )
    }

    onFormChange(event){
        let tar = event.target;

        this.setState(
            (prev) => {
                let changes = {
                    [tar.name]: tar.value
                };

                return {
                    fieldsValue: {
                        ...prev.fieldsValue,
                        ...changes
                    }
                };
            });
    }

    async addOrder(event){
        event.preventDefault();

        let errors = this.testForm();

        if(Object.keys(errors).length){
            this.setState({
                fieldsError: errors
            });

            return;
        }

        //create order
        let orderObj = {
            destination: this.state.fieldsValue.orderDestination,
            start: this.state.fieldsValue.orderStart,
            status: 'Free',
            orderCreate: +new Date(),
            phone: this.state.fieldsValue.orderPhone
        },
        newOrder = await firebaseProj
            .database()
            .ref('/orders')
            .push(orderObj);

        newOrder
            .set(orderObj)
            .then( () => {
                this.props.onCreate({orderID: newOrder.key, ...orderObj});

                this.setState({
                    fieldsError: {},
                    fieldsValue: {
                        orderStart: '',
                        orderDestination: '',
                        orderPhone: ''
                    }
                });
            }, (err) => {
                this.setState({
                   fieldsError: {anotherError: err.message}
                });
            });

    }

    testForm(){
        let errors = {};

        if(!(new RegExp('\\+\\d{10}').test(this.state.fieldsValue.orderPhone)))
            errors.orderPhone = 'Input correct phone(like +380501122333)';

        if(!this.state.fieldsValue.orderStart)
            errors.userName = 'Enter start address!';

        if(!this.state.fieldsValue.orderDestination)
            errors.userName = 'Enter destination address!';

        return errors;
    }
}

export default OrderForm;