import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Login from "./pages/login"
import {Provider} from "react-redux"
import Store from "./redux/store"

function App() {
    return (
        <Provider store={Store}>
            <Router>
                <Route component={Login} path={"/"} exact/>
            </Router>
        </Provider>
    )
}

export default App
