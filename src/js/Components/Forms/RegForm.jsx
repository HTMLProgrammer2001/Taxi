import RegError from './Error';
import firebaseProj from 'js/fareConfig';
import {toast} from 'react-toastify';

import {
    Card, CardBody,
    CardTitle, Form, FormGroup, Input, FormFeedback,
    Button
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

                        <FormGroup>
                            <Input
                                placeholder = "Введите email"
                                name = "userEmail"
                                type="email"
                                onChange = {this.onFieldChange}
                                value = {this.state.fieldsValue.userEmail || ''}
                                invalid = {!!this.state.fieldsError.userEmail}
                                valid = {!this.state.fieldsError.userEmail && this.state.fieldsValue.userEmail}
                            />
                            <FormFeedback invalid>{this.state.fieldsError.userEmail}</FormFeedback>
                            <FormFeedback valid>OK!</FormFeedback>
                        </FormGroup>

                        <FormGroup>
                            <Input
                                placeholder = "Введите имя пользователя"
                                name = "userName"
                                type="text"
                                onChange = {this.onFieldChange}
                                value = {this.state.fieldsValue.userName || ''}
                                invalid = {!!this.state.fieldsError.userName}
                                valid = {!this.state.fieldsError.userName && this.state.fieldsValue.userName}
                            />
                            <FormFeedback invalid>{this.state.fieldsError.userName}</FormFeedback>
                            <FormFeedback valid>OK!</FormFeedback>
                        </FormGroup>

                        <FormGroup>
                            <Input
                                placeholder = "Введите пароль"
                                name = "userPassword"
                                type="password"
                                onChange = {this.onFieldChange}
                                value = {this.state.fieldsValue.userPassword || ''}
                                invalid = {!!this.state.fieldsError.userPassword}
                                valid = {!this.state.fieldsError.userPassword && this.state.fieldsValue.userPassword}
                            />
                            <FormFeedback invalid>{this.state.fieldsError.userPassword}</FormFeedback>
                            <FormFeedback valid>OK!</FormFeedback>
                        </FormGroup>

                        <FormGroup>
                            <Input
                                placeholder = "Повторите пароль"
                                name = "userConfirmPassword"
                                type="password"
                                onChange = {this.onFieldChange}
                                value = {this.state.fieldsValue.userConfirmPassword || ''}
                                invalid = {!!this.state.fieldsError.userConfirmPassword}
                                valid = {!this.state.fieldsError.userConfirmPassword && this.state.fieldsValue.userConfirmPassword}
                            />
                            <FormFeedback invalid>{this.state.fieldsError.userConfirmPassword}</FormFeedback>
                            <FormFeedback valid>OK!</FormFeedback>
                        </FormGroup>

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
                toast('Ошибка сохранения', {type: toast.TYPE.ERROR});

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