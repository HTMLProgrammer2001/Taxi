require('babel-polyfill');

import {showDangerMessage, showSuccessMessage} from "../../messages";
import firebaseProj from 'js/fareConfig';

class UserAva extends React.Component{
    constructor(props){
        super(props);

        this.onPhotoChange = this.onPhotoChange.bind(this);
        this.onUpdateButClick = this.onUpdateButClick.bind(this);
        this.onDeleteButClick = this.onDeleteButClick.bind(this);

        this.state = {
            file: null,
            message: '',
            updated: false
        }
    }

    render(){
        return(
            <div className="overflow-hidden col-sm-3 col-offset-2">
                <img
                    src={firebaseProj.auth().currentUser.photoURL || require('assets/defAvatar.png')}
                    className="w-100 mb-3"
                    alt=""/>

                <input
                    type = "file"
                    className = "d-none"
                    id = "userAva"
                    onChange = {this.onPhotoChange}
                />

                <label
                    onClick={this.onUpdateButClick}
                    className="btn-primary btn btn-block"
                    htmlFor="userAva">{this.state.message ? this.state.message : 'Обновить фото'}</label>

                <div
                    className="btn btn-danger btn-block mt-1"
                    onClick={this.onDeleteButClick}
                >Удалить фото</div>
            </div>
        );
    }

    async onUpdateButClick(e){
        if(!this.state.updated)
            return;
        else
            e.preventDefault();

        let file = this.state.file,
            ref = firebaseProj.storage().ref(
                '/' + firebaseProj.auth().currentUser.uid + file.name.slice(file.name.lastIndexOf('.'))
            );

            await ref.put(file);
            let photo = await ref.getDownloadURL();

            firebaseProj.auth().currentUser.updateProfile({
                photoURL: photo
            }).then(
                () => {
                    this.setState({
                        updated: false,
                        message: ''
                    });

                    this.props.onAvaChange();

                    showSuccessMessage('Аватар изменен');
                }
            );
    }

    onPhotoChange(e){
        let file = e.target.files[0];

        //check file on errors
        if(!file.type.includes('image')){
            showDangerMessage('Файл должен быть фотографией');

            this.setState({
                message: '',
                updated: false
            });

            return;
        }

        if(file.size > 5*1024*1024){
            showDangerMessage('Файл превышает максимальный размер');

            this.setState({
                message: '',
                updated: false
            });

            return;
        }

        this.setState({
            message: 'Загрузить',
            file,
            updated: true
        });
    }

    onDeleteButClick(){
        firebaseProj.auth().currentUser.updateProfile({
            photoURL: ''
        }).then(
            () => {
                this.props.onAvaChange();

                showSuccessMessage('Аватар удален');
            }
        );
    }
}

export default UserAva;