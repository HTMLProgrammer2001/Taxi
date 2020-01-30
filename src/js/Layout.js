import Header from "./Components/Header";

import {Redirect} from 'react-router-dom';

function Layout(Page){
    return class extends React.Component{
        render(){
            if(!firebaseProj.auth().currentUser)
                return <Redirect to = '/'/>;

            return (
                <React.Fragment>
                    <Header/>
                    <Page/>
                </React.Fragment>
            );
        }
    }
}

export default Layout;