import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Main from './Main'

const Routing = () => {
    return (
        <Router>
            <Route path="/setting" exact component={Main}></Route>
        </Router>
    )
}

export default Routing
