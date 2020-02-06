//Pages and styles
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'scss/style.scss';
import 'pages/index.jade';

//Modules
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

//myComponents
const Forms = React.lazy( () => import('./Components/Forms/') );
const Profile = React.lazy( () => import('./Components/Profile/') );
const Dashboard = React.lazy( () => import('./Components/Dashboard/') );
const History = React.lazy( () => import('./Components/History/') );

//config
import fireBaseConfig from './fareConfig';

import reducer from './Reducers/';

window.firebaseProj = firebase.initializeApp(fireBaseConfig);

window.store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <React.Suspense fallback = {<div>Загрузка контента</div>}>
                <Route exact path = "/" component = {Forms}/>
                <Route path = "/profile" component = {Profile}/>
                <Route path = "/dashboard" component = {Dashboard}/>
                <Route path = "/history" component = {History}/>
            </React.Suspense>
        </Router>
    </Provider>,
    document.querySelector('#main')
);