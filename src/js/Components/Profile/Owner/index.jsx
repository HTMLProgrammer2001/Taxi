import 'firebase/auth';
import 'firebase/storage';

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
            <div className="container col-sm-12 my-3 row justify-content-center">
                <UserAva onAvaChange = {this.onProfileChange}/>

                <div className="col-md-9 col-sm-6 mt-sm-3">
                    <UserInfo/>
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