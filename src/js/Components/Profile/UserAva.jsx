import CropForm from "../Crop/CropForm";

require('babel-polyfill');

import {showDangerMessage, showSuccessMessage} from "../../messages";
import firebaseProj from 'js/fareConfig';

class UserAva extends React.Component{
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onDeleteButClick = this.onDeleteButClick.bind(this);
    }

    render(){
        return(
            <div className="overflow-hidden col-sm-3 col-offset-2">
                <img
                    src={firebaseProj.auth().currentUser.photoURL || require('assets/defAvatar.png')}
                    className="w-100 mb-3"
                    alt=""/>

                <div
                    className="btn-primary btn btn-block"
                    data-toggle = "modal"
                    data-target = "#changeAva">
                    {'Обновить фото'}
                </div>

                <div className="modal" role="dialog" id="changeAva">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header d-flex justify-content-end">
                                <span data-dismiss = 'modal' className="cursor">&times;</span>
                            </div>

                            <div className="modal-body">
                                <CropForm
                                    onChange = {this.onChange}
                                    defaultContent = {
                                        <img style = {{maxWidth: '100%'}} className="mt-1" src = {firebaseProj.auth().currentUser.photoURL}/>
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="btn btn-danger btn-block mt-1"
                    onClick={this.onDeleteButClick}
                >Удалить фото</div>
            </div>
        );
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

    async onChange(blob){
        let ref = firebaseProj.storage().ref('/' + firebaseProj.auth().currentUser.uid + '.jpg');

        await ref.put(blob);
        let photo = await ref.getDownloadURL();

        firebaseProj.auth().currentUser.updateProfile({
            photoURL: photo
        }).then(
            () => {
                this.props.onAvaChange();

                this.setState({
                    file: false,
                    loaded: false
                });

                showSuccessMessage('Аватар изменен');
            }
        );
    }
}

export default UserAva;