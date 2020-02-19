import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import firebaseProj from 'js/fareConfig';
import {UncontrolledDropdown as Dropdown, DropdownToggle, DropdownItem, DropdownMenu} from 'reactstrap';

function Header() {
    const [state, stateChange] = React.useState({drop: ''});

    function logout() {
        firebaseProj.auth().signOut().catch((e) => toast(e.message, {type: toast.TYPE.ERROR}));
    }

    return (
        <div className="d-flex px-3 pt-3 justify-content-between bg-white">
            <Dropdown isOpen={state.drop === 'menu'}>
                <DropdownToggle color='link' className="burger-drop">
                    <div className={"burger mb-3 " + (state.drop === 'menu' ? "active" : "")} onClick={
                        () => stateChange({drop: state.drop === 'menu' ? '' : 'menu'})
                    }>
                        <div className="burger-item"></div>
                    </div>
                </DropdownToggle>

                <DropdownMenu right>

                    <Link
                        to = "/history"
                        className="user-link">
                        <DropdownItem className="user-menu-item">История</DropdownItem>
                    </Link>

                    <Link
                        to = "/dashboard"
                        className="user-link">
                        <DropdownItem className="user-menu-item">Карта</DropdownItem>
                    </Link>

                    <Link
                        to = "/drivers"
                        className="user-link">
                        <DropdownItem className="user-menu-item">Водители</DropdownItem>
                    </Link>
                </DropdownMenu>
            </Dropdown>


            <img src={require('assets/logo.jpg')} height="50px" alt=""/>

            <div className="user">
                <Dropdown isOpen={state.drop === 'profiler'}>
                    <DropdownToggle
                        className="drop d-flex"
                        caret
                        color='link'
                        onClick={() => stateChange({drop: state.drop === 'profiler' ? '' : 'profiler'})}>
                        <div className="user-name mr-3">
                            {firebaseProj.auth().currentUser.displayName}
                        </div>

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
            </div>
        </div>
    );
}

export default Header;