
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

import Passenger from './passenger';
import SignUp from './home';
import Emergency from './emergency'
import Modal from './modal'


const App = () => {
    return(
        <div className="form">
            <div id="signup">
                <img src="../fonts/logo.png" width="170" height="200" className="image-responsive center" alt=""/>

                <h2>Sign-Up For Free</h2>
                <ul className="tab-group">
                    <li className="tab active"><Link to="/sign-in">Passenger</Link></li>
                    <li className="tab"><Link to="/sign-in">Driver</Link></li>
                </ul>
            </div>

        </div>
    )
};

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/sign-in" component={SignUp} />
        <Route path="/passenger" component={Passenger}/>
        <Route path="/emergency" component={Emergency}/>
        <Route path="/modal" component={Modal} />

    </Router>
), document.querySelector('.app'));