import AuthError from './Error';

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
            <form onSubmit={this.signUp}>
                <AuthError error = {this.state.authorizedError} successRedirect = '/map'/>

                <input
                    type="email"
                    name = "userEmail"
                    onInput={this.onFieldChange}
                    className="form-control"
                    placeholder="Enter email"/>

                <label className="text-danger" htmlFor="userEmail">
                    {this.state.fieldsError.userEmail}
                </label>

                <input
                    type="password"
                    name = "userPassword"
                    onInput={this.onFieldChange}
                    className="form-control"
                    placeholder="Enter password"/>

                <label className="text-danger mb-3 d-block" htmlFor="userPassword">
                    {this.state.fieldsError.userPassword}
                </label>

                <button type = "submit" name = "authorization" className="btn btn-primary">Авторизироваться</button>
            </form>
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
    }

    signUp(event){
        //prevent page reload
        event.preventDefault();

        //test form
        let errors = this.testForm();

        this.setState({
            fieldsError: errors
        });

        if(Object.keys(errors).length)
            return;

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
            this.setState({
                authorizedError: error.message
            })

        });
    }

    testForm(){
        let errors = {};

        if(!(new RegExp('.+@.{3,8}\..{3,8}').test(this.state.fieldsValue.userEmail)))
            errors.userEmail = 'Input correct email';

        if(!this.state.fieldsValue.userPassword || this.state.fieldsValue.userPassword.length < 8)
            errors.userPassword = 'Minimum password length is 8';

        return errors;
    }
}

export default AuthForm;