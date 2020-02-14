//Pages and styles
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'scss/style.scss';
import 'pages/index.jade';

import React from 'react';

//Modules
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {ToastContainer, toast} from "react-toastify";

//myComponents
const Forms = React.lazy( () => import('./Components/Forms/') );
const Profile = React.lazy( () => import('./Components/Profile/') );
const Dashboard = React.lazy( () => import('./Components/Dashboard/') );
const History = React.lazy( () => import('./Components/History/') );
const ProfileUpdate = React.lazy( () => import('./Components/ProfileUpdate/') );

import Animation from './Components/Load/';

import reducer from './Reducers/';

import Elem from './Components/UI/';

let store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <React.Suspense fallback = {<Animation/>}>
                <Route exact path = "/" component = {Forms}/>
                <Route path = "/profile" component = {Profile}/>
                <Route path = "/dashboard" component = {Dashboard}/>
                <Route path = "/history" component = {History}/>
                <Route path = "/update" component = {ProfileUpdate}/>
                <Route path = "/t" component = {Elem}/>
            </React.Suspense>
        </Router>

        <ToastContainer position={toast.POSITION.BOTTOM_RIGHT}/>
    </Provider>,
    document.querySelector('#main')
);