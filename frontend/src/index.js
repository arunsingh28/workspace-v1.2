import React from 'react'
import App from './Website/Router/index'

import ReactDom from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'


import rootReducer from '../src/Services/Redux/RootReducer'

const store = createStore(rootReducer)
console.log("store data from index file",store)


ReactDom.render(
    <App store={store} />
, document.getElementById('root'))