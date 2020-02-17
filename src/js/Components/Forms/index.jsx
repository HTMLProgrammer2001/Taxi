import 'firebase/auth';

import Auth from './AuthForm.jsx';
import Registration from './RegForm.jsx';
import {Col} from 'reactstrap';

function Forms(){
    return (
        <div className="forms">
            <div className="w-100 p-3 d-flex justify-content-center bg-white mb-5">
                <img src = {require('assets/logo.jpg')} className="logo-image"/>
            </div>

            <div className="container w-80 row">
                <Col md="6" sm="12">
                    <Registration/>
                </Col>

                <Col md="6" sm="12" className="mt-sm-3">
                    <Auth/>
                </Col>
            </div>
        </div>
    )
}

export default Forms;