import CropForm from "../Crop/CropForm";
import {toast} from 'react-toastify';
import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';

require('babel-polyfill');

import firebaseProj from 'js/fareConfig';

class UserAva extends React.Component{
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onDeleteButClick = this.onDeleteButClick.bind(this);
        this.toggle = this.toggle.bind(this);

        this.state = {modal: false}
    }

    toggle(){
        this.setState((prev) => {
            return {
                modal: !prev.modal
            };
        });
    }

    render(){
        return(
            <div className="overflow-hidden col-md-3 col-sm-6 col-offset-2">
                <img
                    src={firebaseProj.auth().currentUser.photoURL || require('assets/defAvatar.png')}
                    className="w-100 mb-3"
                    alt=""/>

                <Button color="primary" className="btn-block mb-1" onClick={this.toggle}>
                    Обновить фото
                </Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle} backdrop={true}>
                    <ModalHeader toggle={this.toggle}></ModalHeader>
                    <ModalBody>
                        <CropForm
                            onChange = {this.onChange}
                            defaultContent = {
                                <img style = {{maxWidth: '100%'}} className="mt-1" src = {firebaseProj.auth().currentUser.photoURL}/>
                            }
                        />
                    </ModalBody>
                </Modal>

                <Button
                    onClick={this.onDeleteButClick}
                    color="danger"
                    className="btn-block mb-3"
                >
                    Удалить фото
                </Button>
            </div>
        );
    }

    onDeleteButClick(){
        firebaseProj.auth().currentUser.updateProfile({
            photoURL: ''
        }).then(
            () => {
                this.props.onAvaChange();

                toast('Аватар удален', {
                    type: toast.TYPE.SUCCESS
                });
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

                toast('Аватар изменен', {
                    type: toast.TYPE.SUCCESS
                });
            }
        );
    }
}

export default UserAva;