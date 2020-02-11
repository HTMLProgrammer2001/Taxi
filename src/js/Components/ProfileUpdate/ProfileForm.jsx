import UpdateError from "../Forms/Error";
import {showDangerMessage, showSuccessMessage} from "js/messages";
import firebaseProj from 'js/fareConfig';
import CropForm from "../Crop/CropForm";

import 'firebase/storage';
import 'firebase/auth';

require("babel-polyfill");

class ProfileForm extends React.Component{
    constructor(props){
        super(props);

        //bind Events
        this.onFormChange = this.onFormChange.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = {
            fieldsValue: {},
            fieldsError: {},
            updateError: null
        }
    }

    render(){
        return (
            <form onSubmit={this.updateUser}>
                <UpdateError error = {this.state.updateError}/>

                <CropForm
                    onChange = {this.onChange}/>

                
                <input
                    type="text"
                    name = "userName"
                    onInput={this.onFormChange}
                    value={this.state.fieldsValue.userName}
                    className="form-control mt-5"
                    placeholder="Введите новое имя"/>

                <label className="text-danger text-small d-block mb-3">
                    {this.state.fieldsError.userName}
                </label>


                <input
                    type="password"
                    name = "userPassword"
                    onInput={this.onFormChange}
                    value={this.state.fieldsValue.userPassword}
                    className="form-control"
                    placeholder="Введите новый пароль"/>

                <label className="text-danger text-small d-block mb-3">
                    {this.state.fieldsError.userPassword}
                </label>


                <input
                    type="password"
                    name = "confirmPassword"
                    onInput={this.onFormChange}
                    value={this.state.fieldsValue.confirmPassword}
                    className="form-control"
                    placeholder="Подтвердите пароль"/>

                <label className="text-danger text-small d-block mb-3">
                    {this.state.fieldsError.confirmPassword}
                </label>


                <button
                    type = "submit"
                    name = "updating"
                    className="btn btn-primary btn-block">
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

    async onChange(blob){
        let ref = firebaseProj.storage().ref('/' + firebaseProj.auth().currentUser.uid + '.jpg');

        await ref.put(blob);
        let photo = await ref.getDownloadURL();

        firebaseProj.auth().currentUser.updateProfile({
            photoURL: photo
        }).then(
            () => {
                this.setState({
                    file: false,
                    loaded: false
                });

                showSuccessMessage('Аватар изменен');
            }
        );
    }

    async updateUser(event){
        event.preventDefault();

        //Test input
        let errors = this.testForm();

        if(Object.keys(errors).length){
            this.setState({
                fieldsError: errors
            });

            showDangerMessage('Ошибки заполнения формы');

            return;
        }

        //updateUser
        let user = firebaseProj.auth().currentUser,
            photoURL = user.photoURL,
            name = this.state.fieldsValue.userName ? this.state.fieldsValue.userName : user.displayName;

        if(this.state.fieldsValue.userPhoto){

            let ref = firebaseProj.storage().ref(
                '/' + user.uid + this.state.fieldsValue.userPhoto.name.slice(this.state.fieldsValue.userPhoto.name.lastIndexOf('.'))
            );

            await ref.put(this.state.fieldsValue.userPhoto);
            photoURL = await ref.getDownloadURL();
        }

        firebaseProj.auth().currentUser.updateProfile({
            displayName: name,
            photoURL: photoURL
        })
            .then(
                () => {
                    if(this.state.fieldsValue.userPassword)
                        return firebaseProj.auth().currentUser.updatePassword(this.state.fieldsValue.userPassword);
                    else
                        return Promise.resolve();
                }
            )
            .then(
                () => {
                    showSuccessMessage('Профиль обновлен');

                    this.setState({
                        fieldsValue: {},
                        fieldsError: {},
                        updateError: ''
                    });
                }
            )
            .catch( (error) => {
                //redraw component to display errors
                showDangerMessage('Ошибка обновления');

                this.setState({
                    updateError: error.message
                });
            });
    }

    testForm(){
        let errors = {};

        if(this.state.fieldsValue.userName && this.state.fieldsValue.userName < 3)
            errors.userName = 'Минимальная длина имени 3 символа';

        if(this.state.fieldsValue.userPassword && this.state.fieldsValue.userPassword.length < 8)
            errors.userPassword = 'Минимальная длина пароля 8 символов';

        if(this.state.fieldsValue.confirmPassword !== this.state.fieldsValue.userPassword)
            errors.confirmPassword = 'Пароли не совпадают';

        //check & convert photo
        if(!this.state.fieldsValue.userPhoto)
            return errors;

        if(!this.state.fieldsValue.userPhoto.type.includes('image'))
            errors.userPhoto = 'Файл должен быть фотографией';

        if(this.state.fieldsValue.userPhoto.size > 5*1024*1024)
            errors.userPhoto = 'Превышен максимальный размер фото(5Мб)';

        return errors;
    }
}

export default ProfileForm;