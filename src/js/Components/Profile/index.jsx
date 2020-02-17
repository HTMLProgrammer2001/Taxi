import 'firebase/storage';
import 'firebase/auth';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';

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
            <div className="container m-5 row justify-content-center">
                <UserAva onAvaChange = {this.onProfileChange}/>

                <div className="col-sm-9 mt-sm-3">
                    <UserInfo/>

                    <Button color="primary" className="mt-3">
                        <Link to="/update" className="text-white text-decoration-none">Обновить профиль</Link>
                    </Button>
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