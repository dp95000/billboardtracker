import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../homePage/HomePage';
import About from '../about/About';
import Contact from '../contact/Contact';
import Login from '../login/Login';
import Dashboard from '../dashboard/Dashboard';
import Signup from '../login/Signup';

export default function Main() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/signup" component={Signup} />
            </Switch>
        </Router>
    )
}