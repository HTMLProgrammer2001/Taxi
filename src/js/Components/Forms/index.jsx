import 'firebase/auth';

import Auth from './AuthForm.jsx';
import Registration from './RegForm.jsx';

function Forms(){
    return (
        <div className="forms">
            <div className="container w-75 row">
                <div className="col-sm-6 border-right">
                    <h3>Регистрация</h3>
                    <Registration/>
                </div>

                <div className="col-sm-6 mt-sm-3">
                    <h3>Авторизация</h3>
                    <Auth/>
                </div>
            </div>
        </div>
    )
}

export default Forms;