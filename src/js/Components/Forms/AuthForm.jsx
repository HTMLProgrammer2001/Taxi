import AuthError from '../Error';
import firebaseProj from 'js/fareConfig';
import FormInput from '../FormInput';

import {toast} from 'react-toastify';
import {Card, CardBody, CardTitle, Form, Button} from 'reactstrap';

class AuthForm extends React.Component{
    constructor(props){
        super(props);

        this.signUp = this.signUp.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);

        this.state = {
            fieldsValue: {},
            fieldsError: {},
            authorizedError: null
        }
    }

    render() {
        return (
            <Card>
                <CardBody>
                    <CardTitle>Авторизация</CardTitle>

                    <Form onSubmit = {this.signUp}>
                        <AuthError
                            error = {this.state.authorizedError}
                            successRedirect = '/dashboard'>.</AuthError>

                        <FormInput
                            onChange = {this.onFieldChange}
                            placeholder = "Введите email"
                            name = "userEmail"
                            type = "email"
                            state = {this.state}
                        />

                        <FormInput
                            onChange = {this.onFieldChange}
                            placeholder = "Введите пароль"
                            name = "userPassword"
                            type = "password"
                            state = {this.state}
                        />

                        <Button outline color = "primary">Войти</Button>
                    </Form>
                </CardBody>
            </Card>
        )
    }

    onFieldChange(event){
        let tar = event.target;

        this.setState( (prev) => ({
          fieldsValue: {
              ...prev.fieldsValue,
              [tar.name]: tar.value
          }
        }) );

        this.setState( (state) => {
            return {
                fieldsError: this.testForm(state.fieldsValue)
            }
        } );
    }

    signUp(event){
        //prevent page reload
        event.preventDefault();

        //test form
        let errors = this.testForm();

        this.setState({
            fieldsError: errors
        });

        if(Object.keys(errors).length){
            toast('Ошибки в заполнении формы авторизации', {type: toast.TYPE.ERROR});
            return;
        }

        //register new user
        firebaseProj.auth().signInWithEmailAndPassword(
            this.state.fieldsValue.userEmail,
            this.state.fieldsValue.userPassword
        ).then( () => {
            //User authorized success
           this.setState({
               authorizedError: ''
           })
        }, (error) => {
            //send authorize error message
            toast('Ошибка авторизации', {type: toast.TYPE.ERROR});

            this.setState({
                authorizedError: error.message
            })

        });
    }

    testForm(testState){
        let state = testState || this.state.fieldsValue;

        let errors = {};

        if(!(new RegExp('.+@.{3,8}\..{3,8}').test(state.userEmail)))
            errors.userEmail = 'Введите корректный email';

        if(!this.state.fieldsValue.userPassword || state.userPassword.length < 8)
            errors.userPassword = 'Минимальная длина пароля 8 символов';

        return errors;
    }
}

export default AuthForm;