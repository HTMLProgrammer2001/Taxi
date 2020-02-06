import Layout from 'js/Layout';

import UserInfo from './UserInfo';
import ProfileForm from './ProfileForm';

class Profile extends React.Component{
    constructor(props){
        super(props);

        this.onProfileChange = this.onProfileChange.bind(this);

        this.state = {update: false};
    }

    render(){
        return(
            <div className="container my-5 row justify-content-center">
                <div className="overflow-hidden col-sm-3 col-offset-2">
                    <img
                        src={firebaseProj.auth().currentUser.photoURL || require('assets/defAvatar.png')}
                        className="w-100"
                        alt=""/>
                </div>

                <div className="col-sm-6">
                    <UserInfo/>

                    <div className="btn btn-link" data-toggle = "modal" data-target = "#updateForm">Обновить профиль</div>

                    <div className="modal" role = "dialog" id="updateForm">
                        <div className="modal-dialog" role = "document">
                            <div className="modal-content">
                                <div className="modal-header d-flex justify-content-end">
                                    <span data-dismiss = 'modal'>&times;</span>
                                </div>
                                <div className="modal-body">
                                    <ProfileForm onProfileChange = {this.onProfileChange}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onProfileChange(){
        this.setState(
            (prev) => ({
              update: !prev.update
            })
        );
    }
}

function Profile(){

}

export default Layout(Profile);