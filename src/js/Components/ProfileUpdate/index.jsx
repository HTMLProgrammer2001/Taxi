import ProfileForm from './ProfileForm';
import ProfileDelete from './ProfileDelete';
import Layout from 'js/Layout';
import CropForm from "../Crop/CropForm";

import CardTitle from "reactstrap/es/CardTitle";
import {toast} from "react-toastify";
import CardBody from "reactstrap/es/CardBody";
import {Card} from 'reactstrap';

class ProfileUpdate extends React.Component{
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    render(){
        return (
            <div className="container d-flex justify-content-center mt-3">
                <Card className="col-sm-6">
                    <CardBody>
                        <CardTitle>Обновить аватар</CardTitle>
                        <hr/>

                        <CropForm
                            onChange = {this.onChange}/>

                        <CardTitle className="mt-5">Обновить профиль</CardTitle>
                        <hr/>

                        <ProfileForm/>

                        <CardTitle className="mt-5">Удалить профиль</CardTitle>
                        <hr/>

                        <ProfileDelete/>
                    </CardBody>
                </Card>
            </div>
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
                this.setState({
                    file: false,
                    loaded: false
                });

                toast('Аватар изменен', {type: toast.TYPE.SUCCESS});
            }
        );
    }
}

export default Layout(ProfileUpdate);