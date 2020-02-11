import 'firebase/storage';
import 'firebase/auth';
import {Link} from 'react-router-dom';

import Layout from 'js/Layout';

import UserAva from './UserAva';
import UserInfo from './UserInfo';

class Profile extends React.Component{
    constructor(props){
        super(props);

        this.onProfileChange = this.onProfileChange.bind(this);

        this.state = {update: false};
    }

    render(){
        return(
            <div className="container my-5 row justify-content-center">
                <UserAva onAvaChange = {this.onProfileChange}/>

                <div className="col-sm-9 col-md-6">
                    <UserInfo/>

                    <Link to="/update" className="btn btn-link">Обновить профиль</Link>
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