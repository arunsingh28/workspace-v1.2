import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Website from './Website'
import IndexDash from './components/Dashboard/index'
import Login from './components/Partials/login';
import Signup from './components/Partials/signup';
import Lost from './components/Partials/Lost'


const App = () => {
    return (
       <Router>
           <Switch>
               {/* website component */}
                <Route component={Website} path="/" exact></Route>
                <Route component={Login} path="/login" exact></Route>
                <Route component={Signup} path="/signup" exact></Route>
                <Route component={IndexDash}  path="/d" exact></Route>
                <Route path="*" component={Lost}></Route>
            </Switch>
       </Router>
    )
}

export default App
