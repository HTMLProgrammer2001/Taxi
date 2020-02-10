import 'firebase/storage';
import 'firebase/auth';

import Layout from 'js/Layout';

import UserAva from './UserAva';
import UserInfo from './UserInfo';
import ProfileForm from './ProfileForm';

class Profile extends React.Component{
    componentDidMount(){
        if(location.hash)
            $(location.hash).modal('show');
    }

    constructor(props){
        super(props);

        this.onProfileChange = this.onProfileChange.bind(this);

        this.state = {update: false};
    }

    render(){
        return(
            <div className="container my-5 row justify-content-center">
                <UserAva onAvaChange = {this.onProfileChange}/>

                <div className="col-sm-6">
                    <UserInfo/>

                    <a className="btn btn-link" data-toggle = "modal" href = "#updateForm">Обновить профиль</a>

                    <div className="modal" role = "dialog" id="updateForm">
                        <div className="modal-dialog" role = "document">
                            <div className="modal-content">
                                <div className="modal-header d-flex justify-content-end">
                                    <span data-dismiss = 'modal' className="cursor">&times;</span>
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

export default Layout(Profile);