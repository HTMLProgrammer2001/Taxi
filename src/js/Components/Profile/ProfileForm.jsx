import UpdateError from "../Forms/Error";

require("bootstrap");
require("babel-polyfill");

class ProfileForm extends React.Component{
    constructor(props){
        super(props);

        //bind Events
        this.onFormChange = this.onFormChange.bind(this);
        this.updateUser = this.updateUser.bind(this);

        this.state = {
            fieldsValue: {},
            fieldsError: {},
            updateError: null
        }
    }

    render(){
        return (
            <form onSubmit={this.updateUser}>
                <UpdateError error = {this.state.updateError} successMessage = 'Профиль обновлен'/>

                <input
                    type="text"
                    name = "userName"
                    onInput={this.onFormChange}
                    className="form-control"
                    placeholder="Enter new name"/>

                <label className="text-danger text-small d-block mb-3">
                    {this.state.fieldsError.userName}
                </label>

                <div className="custom-file mb-3">
                    <input
                        type="file"
                        accept="image"
                        name = "userPhoto"
                        onChange={this.onFormChange}
                        className="custom-file-input"
                        placeholder="Select photo"/>

                    {
                        this.state.fieldsError.userPhoto ?
                            <label className="text-danger text-small custom-file-label">
                                {this.state.fieldsError.userPhoto}
                            </label>
                                :
                            <label className="custom-file-label">
                                Выберите фото
                            </label>
                    }
                </div>


                <input
                    type="password"
                    name = "userPassword"
                    onInput={this.onFormChange}
                    className="form-control"
                    placeholder="Enter new password"/>

                <label className="text-danger text-small d-block mb-3">
                    {this.state.fieldsError.userPassword}
                </label>


                <input
                    type="password"
                    name = "confirmPassword"
                    onInput={this.onFormChange}
                    className="form-control"
                    placeholder="Confirm new password"/>

                <label className="text-danger text-small d-block mb-3">
                    {this.state.fieldsError.confirmPassword}
                </label>


                <button
                    type = "submit"
                    name = "updating"
                    className="btn btn-primary">
                    Обновить
                </button>
            </form>
        )
    }

    onFormChange(event){

        let tar = event.target,
            val = tar.files ? tar.files[0] : tar.value;

        this.setState(
            (prev) => ({
                fieldsValue: {
                    ...prev.fieldsValue,
                    [tar.name]: val
                }
            }));
    }

    async updateUser(event){
        event.preventDefault();

        //Test input
        let errors = this.testForm();

        if(Object.keys(errors).length){
            this.setState({
                fieldsError: errors
            });

            return;
        }

        //updateUser
        let user = firebaseProj.auth().currentUser,
            photoURL = '';

        if(this.state.fieldsValue.userPhoto){

            let ref = firebaseProj.storage().ref(
                '/' + user.uid + this.state.fieldsValue.userPhoto.name.slice(this.state.fieldsValue.userPhoto.name.lastIndexOf('.'))
            );

            await ref.put(this.state.fieldsValue.userPhoto);
            photoURL = await ref.getDownloadURL();
        }

        firebaseProj.auth().currentUser.updateProfile({
            displayName: this.state.fieldsValue.userName,
            photoURL: photoURL
        })
            .then(
                () => {
                    return firebaseProj.auth().currentUser.updatePassword(this.state.fieldsValue.userPassword);
                }
            )
            .then(
                () => {
                    this.props.onProfileChange();

                    this.setState({
                        fieldsError: {},
                        updateError: ''
                    });
                }
            )
            .catch( (error) => {
                //redraw component to display errors
                this.setState({
                    registrationError: error.message
                });
            });
    }

    testForm(){
        let errors = {};

        if(!this.state.fieldsValue.userName)
            errors.userName = 'Enter your new name';

        if(!this.state.fieldsValue.userPassword || this.state.fieldsValue.userPassword.length < 8)
            errors.userPassword = 'Minimum password length is 8';

        if(this.state.fieldsValue.confirmPassword !== this.state.fieldsValue.userPassword)
            errors.confirmPassword = 'Passwords are not equals';

        //check & convert photo
        if(!this.state.fieldsValue.userPhoto)
            return errors;

        if(this.state.fieldsValue.userPhoto.size > 5*1024*1024)
            errors.userPhoto = 'Exceed maximum size(5 Mb)';

        return errors;
    }
}

export default ProfileForm;