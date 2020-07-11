import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './home';
import About from './about';
import User from './user';

function Latihan(){
    return(
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/user">User</Link></li>
                </ul>
            </div>

            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route path="/about"><About/></Route>
                <Route path="/user"><User/></Route>
            </Switch>
        </Router>  
    )
}

export default Latihan;