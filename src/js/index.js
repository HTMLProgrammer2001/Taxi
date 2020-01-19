import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import "pages/index.jade";
import "css/style.css";
import "less/test.less";

class Test extends React.Component{
    render(){
        console.log(this.props);

        return <div>Render</div>
    }
}

ReactDOM.render(
    <Router>
        <Route exact path = "/">
            <div>Hi</div>
            <Link to={"/test"}>
                Re
            </Link>
        </Route>

        <Route path = "/test" component = {Test}/>
    </Router>,
    document.querySelector('#main')
);