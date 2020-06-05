import React from 'react'
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom'

import Login from '../Component/login/login'
import Splash from '../Component/splash/splash'
import Dashboard from '../Component/dashboard/dashboard'

function Rotas() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Splash} />
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Redirect from='*' to='/' />
            </Switch>
        </Router>
    )
}

export default Rotas;