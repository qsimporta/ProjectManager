import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Login from "./pages/login/login"
import {Provider} from "react-redux"
import Store from "./redux/store"
import Loading from "./pages/loading/loading"
import Home from "./pages/home/home"
import Projetos from "./pages/projetos/projetos"

function App() {
    return (
        <Provider store={Store}>
            <Router>
                <Route component={Login} path={"/"} exact/>
                <Route component={Loading} path={'/loading'} />
                <Route component={Home} path={'/home'} />
            </Router>
        </Provider>
    )
}

export default App
