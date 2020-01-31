//Pages and styles
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'scss/style.scss';
import 'pages/index.jade';

//Modules
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

//myComponents
let Map = React.lazy( () => import('./Components/Map/') );
let Forms = React.lazy( () => import('./Components/Forms/') );
let Profile = React.lazy( () => import('./Components/Profile') );
let Dashboard = React.lazy( () => import('./Components/Dashboard/') );

//config
import fireBaseConfig from './fareConfig';

window.firebaseProj = firebase.initializeApp(fireBaseConfig);

ReactDOM.render(
    <Router basename="/dist">
        <React.Suspense fallback = {<div>Загрузка контента</div>}>
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
        </React.Suspense>
    </Router>,
    document.querySelector('#main')
);