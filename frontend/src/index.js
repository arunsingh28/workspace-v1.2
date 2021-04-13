import React, { useEffect } from 'react'
import App from './Router.js'
import ReactDom from 'react-dom'


import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './components/Redux/RootReducer'

const store = createStore(rootReducer)

console.log("store data from index file",store)

ReactDom.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'))