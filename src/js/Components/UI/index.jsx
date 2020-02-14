import {Button, Dropdown, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

import 'bootstrap';

import {NavLink} from 'react-router-dom';

import {
    toast,
    ToastContainer
} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default () => {
    return (
        <div>

            <div className="d-flex justify-content-between px-3 py-2 align-items-center bg-white">
                <div className="burger" onClick={
                    (e) => e.target.classList.toggle('active')
                }>
                    <span className="burger-item"></span>
                </div>

                <div className = "logo">
                    <img src = {require('assets/logo.jpg')} alt="Logo" className="ml-3 logo-image"/>
                </div>

                <div className="menu">
                    <NavLink activeClassName="active" className="mr-3" to = "/profile">Профиль</NavLink>
                    <NavLink activeClassName="active" className="mr-3" to = "/history">История</NavLink>
                    <NavLink activeClassName="active" to = "/dashboard" className="mr-3">Доска объявлений</NavLink>
                </div>

                <div className="d-flex align-items-center">
                    <div className="dropdown">
                        <div
                            className = "menu-account dropdown-toggle"
                            data-toggle = "dropdown">
                            <div className="menu-account-photo-wrapper">
                                <img
                                    src = {
                                        require('assets/defAvatar.png')
                                    }
                                    className="menu-account-photo"/>
                            </div>

                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down"
                                 className="svg-inline--fa fa-angle-down fa-w-10 mr-3 opacity-8" role="img"
                                width = "15px" height = "15px"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor"
                                      d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                            </svg>
                        </div>

                        <ul className="dropdown-menu menu-account-content">
                        <li className="dropdown-menu-item menu-account-item">
                            <NavLink to = '/profile'>Профиль</NavLink>
                        </li>

                        <li className="dropdown-menu-item menu-account-item">
                            <NavLink to = '/update'>Обновить аккаунт</NavLink>
                        </li>

                        <li className="dropdown-menu-item menu-account-item">
                            <NavLink to = '/'>Выйти</NavLink>
                        </li>
                    </ul>
                    </div>

                    <div className="menu-account-info">
                        <span className="menu-account-info-name">Yura</span>
                    </div>
                </div>
            </div>



            {/*<Row>*/}
            {/*    <Col md="6">*/}
            {/*        <Card className="main-card mb-3">*/}
            {/*            <CardBody>*/}
            {/*                <CardTitle>Basic</CardTitle>*/}
            {/*                <Form>*/}
            {/*                    <FormGroup>*/}
            {/*                        <Label for="exampleEmail">Input without validation</Label>*/}
            {/*                        <Input/>*/}
            {/*                        <FormFeedback>You will not be able to see this</FormFeedback>*/}
            {/*                        <FormText>Example help text that remains unchanged.</FormText>*/}
            {/*                    </FormGroup>*/}
            {/*                    <FormGroup>*/}
            {/*                        <Label for="exampleEmail">Valid input</Label>*/}
            {/*                        <Input valid onChange={(e)=>console.log(e.target.value)}/>*/}
            {/*                        <FormFeedback valid>Sweet! that name is available</FormFeedback>*/}
            {/*                        <FormText>Example help text that remains unchanged.</FormText>*/}
            {/*                    </FormGroup>*/}
            {/*                    <FormGroup>*/}
            {/*                        <Label for="examplePassword">Invalid input</Label>*/}
            {/*                        <Input invalid/>*/}
            {/*                        <FormFeedback>Oh noes! that name is already taken</FormFeedback>*/}
            {/*                        <FormText>Example help text that remains unchanged.</FormText>*/}
            {/*                    </FormGroup>*/}
            {/*                </Form>*/}
            {/*            </CardBody>*/}
            {/*        </Card>*/}
            {/*    </Col>*/}
            {/*    <Col md="6">*/}
            {/*        <Card className="main-card mb-3">*/}
            {/*            <CardBody className="pb-5">*/}
            {/*                <CardTitle>Alternate Style</CardTitle>*/}
            {/*                <Form>*/}
            {/*                    <FormGroup>*/}
            {/*                        <Label for="exampleEmail">Input without validation</Label>*/}
            {/*                        <Input/>*/}
            {/*                        <FormFeedback tooltip>You will not be able to see this</FormFeedback>*/}
            {/*                        <FormText>Example help text that remains unchanged.</FormText>*/}
            {/*                    </FormGroup>*/}
            {/*                    <FormGroup>*/}
            {/*                        <Label for="exampleEmail">Valid input</Label>*/}
            {/*                        <Input valid/>*/}
            {/*                        <FormText>Example help text that remains unchanged.</FormText>*/}
            {/*                    </FormGroup>*/}
            {/*                    <FormGroup>*/}
            {/*                        <Label for="examplePassword">Invalid input</Label>*/}
            {/*                        <Input invalid onChange = {(e) => toast(e.target.value)}/>*/}
            {/*                        <FormFeedback>Oh noes! that name is already taken</FormFeedback>*/}
            {/*                        <FormText>Example help text that remains unchanged.</FormText>*/}
            {/*                    </FormGroup>*/}
            {/*                </Form>*/}
            {/*            </CardBody>*/}
            {/*        </Card>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
            {/*<br/><br/><br/><br/><br/><br/>*/}
            {/*<br/><br/><br/><br/><br/><br/>*/}

            <ToastContainer/>
        </div>
    );
}