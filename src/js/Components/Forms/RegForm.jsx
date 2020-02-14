import RegError from './Error';
import firebaseProj from 'js/fareConfig';
import {toast} from 'react-toastify';
import FormInput from './FormInput';

import {
    Card, CardBody, CardTitle, Form, Button
} from 'reactstrap';

class RegistryForm extends React.Component{
    constructor(props){
        super(props);

        //bind Events
        this.onFieldChange = this.onFieldChange.bind(this);
        this.addUser = this.addUser.bind(this);

        this.state = {
            fieldsValue: {},
            fieldsError: {},
            registrationError: null
        }
    }

    render(){
        return(
          <Card>
              <CardBody>
                  <CardTitle>Регистрация</CardTitle>
                    <Form onSubmit={this.addUser}>
                        <RegError error = {this.state.registrationError} successRedirect='/profile'/>

                        <FormInput
                            onChange = {this.onFieldChange}
                            name = "userEmail"
                            type = "email"
                            placeholder = "Введите email"
                            state = {this.state}
                        />

                        <FormInput
                            onChange = {this.onFieldChange}
                            name = "userName"
                            type = "text"
                            placeholder = "Введите имя"
                            state = {this.state}
                        />

                        <FormInput
                            onChange = {this.onFieldChange}
                            name = "userPassword"
                            type = "password"
                            placeholder = "Введите пароль"
                            state = {this.state}
                        />

                        <FormInput
                            onChange = {this.onFieldChange}
                            name = "userConfirmPassword"
                            type = "password"
                            placeholder = "Повторите пароль"
                            state = {this.state}
                        />

                        <Button outline color = "primary">Зарегистрироваться</Button>
                    </Form>
              </CardBody>
          </Card>
        );
    }

    onFieldChange(event){
        let tar = event.target;

        this.setState(
            (prev) => ({
                fieldsValue: {
                    ...prev.fieldsValue,
                    [tar.name]: tar.value
                }
            }));

        this.setState(
            (state) => {
                return {
                    fieldsError: this.testForm(state.fieldsValue)
                }
            }
        );
    }

    addUser(event){
        event.preventDefault();

        //Test input
        let errors = this.testForm();

        this.setState({
            fieldsError: errors
        });

        if(Object.keys(errors).length){
            toast('Ошибки в заполнении формы регистрации', {type: toast.TYPE.ERROR});
            return;
        }

        //create user
        this.createUser();
    }

    testForm(testState){
        let errors = {},
            state = testState || this.state.fieldsValue;

        if(!(new RegExp('.+@.{3,8}\..{3,8}').test(state.userEmail)))
            errors.userEmail = 'Введите корректный email';

        if(!state.userName || state.userName.length < 3)
            errors.userName = 'Минимальная длина имени 3 символа';

        if(!state.userPassword || state.userPassword.length < 8)
            errors.userPassword = 'Минимальная длина пароля 8 символов';

        if(state.userConfirmPassword !== state.userPassword)
            errors.userConfirmPassword = 'Пароли не совпадают';

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
                this.setState({
                    registrationError: ''
                });

                return firebaseProj.auth().currentUser.sendEmailVerification();
            })
            .catch( (error) => {
                //redraw component to display errors
                toast('Ошибка сохранения', {type: toast.TYPE.ERROR});

                this.setState({
                    registrationError: error.message
                });
            });
    }
}

export default RegistryForm;