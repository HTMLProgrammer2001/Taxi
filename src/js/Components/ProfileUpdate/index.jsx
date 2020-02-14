import ProfileForm from './ProfileForm';
import Layout from 'js/Layout';

class ProfileUpdate extends React.Component{
    render(){
        return (
            <div className="container d-flex justify-content-center mt-3">
                <div className="col-sm-6">
                    <ProfileForm/>
                </div>
            </div>
        );
    }
}

export default Layout(ProfileUpdate);