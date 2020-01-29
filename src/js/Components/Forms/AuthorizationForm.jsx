import {Redirect} from 'react-router-dom';

class AuthorizationForm extends React.Component{
    constructor(props){
        super(props);

        this.signUp = this.signUp.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);

        this.state = {
            fieldsValue: {
                userEmail: '',
                userPassword: ''
            },
            authorizedError: null
        }
    }

    render() {
        return (
            <form onSubmit={this.signUp}>
                {
                    this.state.authorizedError
                        ?
                    <div className="alert alert-danger">
                        {this.state.authorizedError}
                    </div>
                        :
                    <span>
                        { this.state.authorizedError === '' && <Redirect to = "/map" push={true}/> }
                    </span>
                }

                <input
                    type="email"
                    name = "userEmail"
                    onInput={this.onFieldChange}
                    className="form-control mb-3"
                    placeholder="Enter email"/>

                <input
                    type="password"
                    name = "userPassword"
                    onInput={this.onFieldChange}
                    className="form-control mb-3"
                    placeholder="Enter password"/>

                <button type = "submit" name = "authorization" className="btn btn-primary">Авторизироваться</button>
            </form>
        )
    }

    onFieldChange(event){
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

    signUp(event){
        //prevent page reload
        event.preventDefault();

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
}

export default AuthorizationForm;