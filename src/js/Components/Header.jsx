import {NavLink} from 'react-router-dom';

function Header() {
    function logout() {
        firebaseProj.auth().signOut();
    }

    return (
        <div className="d-flex justify-content-between mb-3 p-2 align-items-center">
            <div className = "logo">
                <img src = {require('assets/logo.jpg')} alt="Logo" className="ml-3 logo-image"/>
            </div>

            <div className="menu">
                <NavLink activeClassName="active" className="mr-3" to = "/profile">Профиль</NavLink>
                <NavLink activeClassName="active" className="mr-3" to = "/history">История</NavLink>
                <NavLink activeClassName="active" to = "/map" className="mr-3">Карта</NavLink>
                <NavLink activeClassName="active" to = "/dashboard" className="mr-3">Доска объявлений</NavLink>
                <NavLink to = "/" onClick={logout} className = "mr-3">Выйти</NavLink>
            </div>
        </div>
    );
}

export default Header;