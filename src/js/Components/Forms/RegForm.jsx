import RegError from './Error';
import {showDangerMessage} from "../../messages";
import firebaseProj from 'js/fareConfig';

class RegistryForm extends React.Component{
    constructor(props){
        super(props);

        //bind Events
        this.onFormChange = this.onFormChange.bind(this);
        this.addUser = this.addUser.bind(this);

        this.state = {
            fieldsValue: {},
            fieldsError: {},
            registrationError: null
        }
    }

    render(){
        return (
            <form onSubmit={this.addUser}>
                <RegError error = {this.state.registrationError} successRedirect = '/profile'/>

                <input
                    type="email"
                    name = "userEmail"
                    onChange = {this.onFormChange}
                    value = {this.state.fieldsValue.userEmail || ''}
                    className="form-control"
                    placeholder="Введите email"/>

                <label className="text-danger text-small">
                    {this.state.fieldsError.userEmail}
                </label>

                <input
                    type="text"
                    name = "userName"
                    onChange = {this.onFormChange}
                    value = {this.state.fieldsValue.userName || ''}
                    className="form-control"
                    placeholder="Введите имя"/>

                <label className="text-danger text-small">
                    {this.state.fieldsError.userName}
                </label>

                <input
                    type="password"
                    name = "userPassword"
                    onChange = {this.onFormChange}
                    value = {this.state.fieldsValue.userPassword || ''}
                    className="form-control"
                    placeholder="Введите пароль"/>

                <label className="text-danger text-small">
                    {this.state.fieldsError.userPassword}
                </label>

                <input
                    type="password"
                    name = "confirmPassword"
                    onChange = {this.onFormChange}
                    value = {this.state.fieldsValue.confirmPassword || ''}
                    className="form-control"
                    placeholder="Подтвердите пароль"/>

                <label className="text-danger text-small d-block mb-3">
                    {this.state.fieldsError.confirmPassword}
                </label>

                <button
                    type = "submit"
                    name = "registing"
                    className="btn btn-primary">
                        Зарегистрироваться
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

    addUser(event){
        event.preventDefault();

        //Test input
        let errors = this.testForm();

        this.setState({
            fieldsError: errors
        });

        if(Object.keys(errors).length){
            showDangerMessage('Ошибки в заполнении формы регистрации');
            return;
        }

        //create user
        this.createUser();
    }

    testForm(){
        let errors = {};

        if(!(new RegExp('.+@.{3,8}\..{3,8}').test(this.state.fieldsValue.userEmail)))
            errors.userEmail = 'Введите корректный email';

        if(!this.state.fieldsValue.userName || this.state.fieldsValue.userName.length < 3)
            errors.userName = 'Минимальная длина имени 3 символа';

        if(!this.state.fieldsValue.userPassword || this.state.fieldsValue.userPassword.length < 8)
            errors.userPassword = 'Минимальная длина пароля 8 символов';

        if(this.state.fieldsValue.confirmPassword !== this.state.fieldsValue.userPassword)
            errors.confirmPassword = 'Пароли не совпадают';

        return errors;
    }

    createUser(){
        //register user in database
        firebaseProj.auth().createUserWithEmailAndPassword(
            this.state.fieldsValue.userEmail,
            this.state.fieldsValue.userPassword
        )
            .then( (response) =>
                response.user.updateProfile({
                    displayName: this.state.fieldsValue.userName
                })
            )
            .then( () => {
                showDangerMessage('Ошибка сохранения');

                this.setState({
                    registrationError: ''
                });

                return firebaseProj.auth().currentUser.sendEmailVerification();
            })
            .catch( (error) => {
                //redraw component to display errors
                this.setState({
                    registrationError: error.message
                });
            });
    }
}

export default RegistryForm;