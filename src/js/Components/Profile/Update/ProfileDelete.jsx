import firebaseProj from 'js/fareConfig';

import 'firebase/auth';
import {toast} from 'react-toastify';

import {Redirect} from 'react-router-dom';

import {Button, Modal, ModalBody, ModalHeader, ModalFooter} from "reactstrap";

require("babel-polyfill");

class ProfileDelete extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            modal: false,
            deleted: false
        };

        this.toggle = this.toggle.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    render(){
        if(this.state.deleted)
            return <Redirect to = '/'/>

        return (
            <div>
                <Button color="danger" outline onClick={this.toggle}>Удалить</Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Удаление аккаунта</ModalHeader>

                    <ModalBody>
                        Вы уверены что хотите удалить аккаунт?
                    </ModalBody>

                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Закрыть</Button>
                        <Button color="danger" onClick={this.deleteUser}>Удалить</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

    toggle(){
        this.setState( (prev) => {
           return {
               modal: !prev.modal
           }
        });
    }

    deleteUser(){
        firebaseProj.auth().currentUser.delete()
            .then( () => {
                this.setState({
                    deleted: true
                })
            })
            .catch((e) => {
                toast(e.message, {
                    type: toast.TYPE.ERROR
                })
            });
    }
}

export default ProfileDelete;