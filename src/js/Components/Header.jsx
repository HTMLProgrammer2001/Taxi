import {Link, NavLink} from 'react-router-dom';
import {toast} from 'react-toastify';
import firebaseProj from 'js/fareConfig';
import {UncontrolledDropdown as Dropdown, DropdownToggle, DropdownItem, DropdownMenu} from 'reactstrap';

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
                <Dropdown>
                    <DropdownToggle className="drop d-flex" caret color='link'>
                        <div className="user-ava">
                            <img
                                src={firebaseProj.auth().currentUser.photoURL || require('assets/defAvatar.png')}
                                className="user-image"
                                alt=""/>
                        </div>
                    </DropdownToggle>

                    <DropdownMenu right>
                        <Link
                            to = "/profile"
                            className="user-link">
                                <DropdownItem className="user-menu-item">Профиль</DropdownItem>
                        </Link>

                        <Link
                            to = "/update"
                            className="user-link">
                                <DropdownItem className="user-menu-item">Обновить профиль</DropdownItem>
                        </Link>

                        <Link
                            to = "/"
                            onClick={logout}
                            className="user-link">
                                <DropdownItem className="user-menu-item">Выйти</DropdownItem>
                        </Link>
                    </DropdownMenu>
                </Dropdown>

                <div className="user-name">
                    {firebaseProj.auth().currentUser.displayName}
                </div>
            </div>
        </div>
    );
}

export default Header;