import React from 'react'
import {withRouter} from 'react-router-dom'

function Secret({logout, ...rest}){
 
    return(
        <div>
            <h1>Secret</h1>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default withRouter(Secret)