import UpdateError from "../Error";
import firebaseProj from 'js/fareConfig';
import CropForm from "../Crop/CropForm";

import 'firebase/storage';
import 'firebase/auth';
import {toast} from 'react-toastify';

import {Button, Card, CardBody, CardTitle, Form} from "reactstrap";
import FormInput from "../FormInput";

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
            <Card>
                <CardBody>
                    <CardTitle>Обновить профиль</CardTitle>

                    <Form onSubmit = {this.updateUser}>
                        <UpdateError error = {this.state.authorizedError}>.</UpdateError>

                        <CropForm
                            onChange = {this.onChange}/>

                        <FormInput
                            onChange = {this.onFormChange}
                            placeholder = "Введите новое имя"
                            name = "userName"
                            type = "text"
                            className = "mt-3"
                            state = {this.state}
                        />

                        <FormInput
                            onChange = {this.onFormChange}
                            placeholder = "Введите новый пароль"
                            name = "userPassword"
                            type = "password"
                            state = {this.state}
                        />

                        <FormInput
                            onChange = {this.onFormChange}
                            placeholder = "Повторите пароль"
                            name = "confirmPassword"
                            type = "password"
                            state = {this.state}
                        />

                        <Button outline color = "primary">Обновить</Button>
                    </Form>
                </CardBody>
            </Card>
        );
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

        this.setState({
            fieldsError: {
                ...this.state.fieldsError,
                [tar.name]: this.testForm(tar.name, tar.value)[tar.name]
            }
        })
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

                toast('Аватар изменен', {type: toast.TYPE.SUCCESS});
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

            toast('Ошибки заполнения формы', {type: toast.TYPE.ERROR});

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
                    toast('Профиль обновлен', {type: toast.TYPE.SUCCESS});

                    this.setState({
                        fieldsValue: {},
                        fieldsError: {},
                        updateError: ''
                    });
                }
            )
            .catch( (error) => {
                //redraw component to display errors
                toast('Ошибка обновления', {type: toast.TYPE.ERROR});

                this.setState({
                    updateError: error.message
                });
            });
    }

    testForm(fieldName, fieldValue){
        let errors = {},
            state = this.state.fieldsValue;

        state[fieldName] = fieldValue;

        if(
            (fieldName === 'userName' || !fieldName) &&
            (!this.state.fieldsValue.userName || this.state.fieldsValue.userName.length < 3)
        )
            errors.userName = 'Минимальная длина имени 3 символа';

        if(
            (fieldName === 'userPassword' || !fieldName) &&
            (!this.state.fieldsValue.userPassword || this.state.fieldsValue.userPassword.length < 8)
        )
            errors.userPassword = 'Минимальная длина пароля 8 символов';

        if(
            (fieldName === 'confirmPassword' || !fieldName) &&
            (this.state.fieldsValue.confirmPassword !== this.state.fieldsValue.userPassword)
        )
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