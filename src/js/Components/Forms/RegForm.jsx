import RegError from './Error';

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

        if(Object.keys(errors).length)
            return;

        //create user
        this.createUser();

    }

    testForm(){
        let errors = {};

        if(!(new RegExp('.+@.{3,8}\..{3,8}').test(this.state.fieldsValue.userEmail)))
            errors.userEmail = 'Input correct email';

        if(!this.state.fieldsValue.userName)
            errors.userName = 'Enter your name';

        if(!this.state.fieldsValue.userPassword || this.state.fieldsValue.userPassword.length < 8)
            errors.userPassword = 'Minimum password length is 8';

        if(this.state.fieldsValue.confirmPassword !== this.state.fieldsValue.userPassword)
            errors.confirmPassword = 'Passwords are not equals';

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

                return user.sendEmailVerification();
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