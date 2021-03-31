import React from 'react'
import App from './Router.js'
import ReactDom from 'react-dom'
import { Auth0Provider } from '@auth0/auth0-react'



ReactDom.render(
    <Auth0Provider
    domain="arunsingh28.us.auth0.com"
    clientId="HiufxKoRHNsyzlPGfn2HYaoQ974E3xci"
    clientSecret="tMazjODbOa27C-n_PhL-TA24oNVvmB5l2DpYWCWQ7Gk0Mjiwf0tBCDm3WY7Qzah-"
    redirectUri={window.location.origin}>
        <App/>
    </Auth0Provider>,document.getElementById('root'))