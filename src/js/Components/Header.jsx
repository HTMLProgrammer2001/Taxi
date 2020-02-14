import {NavLink} from 'react-router-dom';

import {showDangerMessage} from "../messages";
import firebaseProj from 'js/fareConfig';

function Header() {
    function logout() {
        firebaseProj.auth().signOut().catch((e) => showDangerMessage(e.message));
    }

    return (
        <div className="d-flex justify-content-between p-2 align-items-center bg-white">
            <div className = "logo">
                <img src = {require('assets/logo.jpg')} alt="Logo" className="ml-3 logo-image"/>
            </div>

            <div className="burger" onClick={
                (e) => e.target.classList.toggle('active')
            }>
                <span className="burger-item"></span>
            </div>

            <div className="menu">
                <NavLink activeClassName="active" className="mr-3" to = "/profile">Профиль</NavLink>
                <NavLink activeClassName="active" className="mr-3" to = "/history">История</NavLink>
                <NavLink activeClassName="active" to = "/dashboard" className="mr-3">Доска объявлений</NavLink>

                <div className="dropdown dropdown-menu-md-right">
                    <div
                        className = "menu-account dropdown-toggle"
                        data-toggle = "dropdown">
                            <div className="menu-account-photo-wrapper">
                                <img
                                    src = {
                                        firebaseProj.auth().currentUser.photoURL || require('assets/defAvatar.png')
                                    }
                                    className="menu-account-photo"/>
                            </div>

                            <div className="menu-account-info">
                                <span className="menu-account-info-name">{firebaseProj.auth().currentUser.displayName}</span>
                            </div>
                    </div>

                    <ul className="dropdown-menu menu-account-content">
                        <li className="dropdown-menu-item menu-account-item">
                            <NavLink to = '/profile'>Профиль</NavLink>
                        </li>

                        <li className="dropdown-menu-item menu-account-item">
                            <NavLink to = '/update'>Обновить аккаунт</NavLink>
                        </li>

                        <li className="dropdown-menu-item menu-account-item">
                            <NavLink to = '/' onClick={logout}>Выйти</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;