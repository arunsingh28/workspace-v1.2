import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Website from '../Index'
import Login from '../Components/login';
import Signup from '../Components/signup';
import Lost from '../Components/Lost'
import About from '../Components/About'

import Dashboard from '../../App/UI/index'


import Start from '../../Services/RouteProtector/Start'

const App = () => {
    return (
       <Router>
           <Switch>
                <Route component={Website} path="/" exact></Route>
                <Route component={Login} path="/login" exact></Route>
                <Route component={Signup} path="/signup" exact></Route>

                <Route component={Start}  path="/dashboard" exact></Route>


                <Route component={About} path="/about" exact></Route>
                <Route  component={Lost} path="*"></Route>
            </Switch>
       </Router>

    )
}

export default App
