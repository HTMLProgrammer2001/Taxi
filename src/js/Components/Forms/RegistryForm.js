import {Redirect} from 'react-router-dom';


class RegistryForm extends React.Component{
    constructor(props){
        super(props);

        //bind Events
        this.onFormChange = this.onFormChange.bind(this);
        this.addUser = this.addUser.bind(this);

        this.state = {
            fieldsValue: {
                userName: '',
                userEmail: '',
                userPassword: '',
                confirmPassword: ''
            },
            fieldsError: {},
            registed: false
        }
    }

    render(){
        //if register then show success message
        if(this.state.registed){
            return (
                <Redirect to="/profile" push={true}/>
            );
        }

        //... else return form
        return (
            <form onSubmit={this.addUser}>

                {this.state.fieldsError.anotherError &&
                    <div
                        className="alert alert-danger">
                            {this.state.fieldsError.anotherError}
                    </div>}

                <input
                    type="email"
                    name = "userEmail"
                    onInput={this.onFormChange}
                    className="form-control"
                    placeholder="Enter email"/>

                <label className="text-danger text-small">
                    {this.state.fieldsError.userEmail}
                </label>


                <input
                    type="text"
                    name = "userName"
                    onInput={this.onFormChange}
                    className="form-control"
                    placeholder="Enter name"/>

                <label className="text-danger text-small">
                    {this.state.fieldsError.userName}
                </label>


                <input
                    type="password"
                    name = "userPassword"
                    onInput={this.onFormChange}
                    className="form-control"
                    placeholder="Enter password"/>

                <label className="text-danger text-small">
                    {this.state.fieldsError.userPassword}
                </label>


                <input
                    type="password"
                    name = "confirmPassword"
                    onInput={this.onFormChange}
                    className="form-control"
                    placeholder="Confirm password"/>

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

    addUser(event){
        event.preventDefault();

        //Test input
        let errors = {};

        if(!(new RegExp('.+@.{3,8}\..{3,8}').test(this.state.fieldsValue.userEmail)))
            errors.userEmail = 'Input correct email';

        if(!this.state.fieldsValue.userName)
            errors.userName = 'Enter your name';

        if(this.state.fieldsValue.userPassword.length < 8)
            errors.userPassword = 'Minimum password length is 8';

        if(this.state.fieldsValue.confirmPassword != this.state.fieldsValue.userPassword)
            errors.confirmPassword = 'Passwords are not equals';

        //display errors
        for(let error in errors){
            if(error) {
                this.setState({
                    fieldsError: errors
                });

                return;
            }
        }

        //create user
        this.createUser();

    }

    createUser(){
        //register user in database
        let user = firebaseProj.auth().createUserWithEmailAndPassword(
            this.state.fieldsValue.userEmail,
            this.state.fieldsValue.userPassword
        );

        user.then((response) => {
            //update user name
            response.user.updateProfile({
                displayName: this.state.fieldsValue.userName
            }).then(
                //redraw component for redirect
                () => {
                    this.setState({
                        registed: true,
                        fieldsError: {},
                        fieldsValue: {}
                    })
                }
            );

        }, (error) => {
            //redraw component to display errors
            this.setState({
                registed: false,
                fieldsError: {
                    anotherError: 'Ошибка: ' +  error.message
                }
            });
        });
    }
}

export default RegistryForm;