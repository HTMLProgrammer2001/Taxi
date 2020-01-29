//Pages and styles
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'scss/style.scss';
import 'pages/index.jade';

//Modules
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

//myComponents
import Forms from './Components/Forms/';
import Profile from './Components/Profile';
import Map from './Components/Map/';
import Dashboard from './Components/Dashboard';

//config
import fireBaseConfig from './fareConfig';

window.firebaseProj = firebase.initializeApp(fireBaseConfig);

ReactDOM.render(
    <Router>
        <Route exact path = "/">
            <Forms/>
        </Route>

        <Route path = "/profile">
            <Profile/>
        </Route>

        <Route path = "/map">
            <Map/>
        </Route>

        <Route path = "/dashboard">
            <Dashboard/>
        </Route>
    </Router>,
    document.querySelector('#main')
);