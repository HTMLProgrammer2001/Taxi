import {NavLink, Link} from 'react-router-dom';

import {toast} from 'react-toastify';
import firebaseProj from 'js/fareConfig';

function Header() {
    function logout() {
        firebaseProj.auth().signOut().catch((e) => toast(e.message, {type: toast.TYPE.ERROR}));
    }

    return (
        <div className="d-flex p-3 justify-content-between bg-white">
            <div className="burger" onClick={
                (e) => e.target.classList.toggle('active')
            }>
                <div className="burger-item"></div>
            </div>

            <div className="menu">
                <div className="menu-item">
                    <NavLink to = '/profile'>
                        Профиль
                    </NavLink>
                </div>

                <div className="menu-item">
                    <NavLink to = '/history'>
                        История
                    </NavLink>
                </div>

                <div className="menu-item">
                    <NavLink to = '/dashboard'>
                        Доска объявлений
                    </NavLink>
                </div>
            </div>

            <img src={require('assets/logo.jpg')} height="50px" alt=""/>

            <div className="user">
                <div className="dropdown">
                    <div className="dropdown-toggle drop" data-toggle="dropdown">
                        <div className="user-ava">
                            <img
                                src={firebaseProj.auth().currentUser.photoURL || require('assets/defAvatar.png')}
                                className="user-image"
                                alt=""/>
                        </div>

                        <div className="dropdown-menu dropdown-menu-right">
                            <Link to='/profile'>
                                <div className="dropdown-item">
                                    Профиль
                                </div>
                            </Link>

                            <Link to='/update'>
                                <div className="dropdown-item">
                                    Настройки аккаунта
                                </div>
                            </Link>

                            <Link to='/' onClick = {logout}>
                                <div className="dropdown-item">
                                    Выйти
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;