import 'firebase/auth';

import Auth from './AuthForm.jsx';
import Registration from './RegForm.jsx';
import {Col} from 'reactstrap';
import {ToastContainer, toast} from "react-toastify";

function Forms(){
    return (
        <div className="forms">
            <div className="w-100 p-3 d-flex justify-content-center bg-white mb-5">
                <img src = {require('assets/logo.jpg')} className="logo-image"/>
            </div>

            <div className="container w-75 row">
                <Col sm="6">
                    <Registration/>
                </Col>

                <Col sm="6">
                    <Auth/>
                </Col>

                <ToastContainer position={toast.POSITION.BOTTOM_RIGHT}/>
            </div>
        </div>
    )
}

export default Forms;