
import React from 'react'
import {
    BrowserRouter as Router,
    Route

} from 'react-router-dom'
import App from '../App'
import Nav from '../pages/Nav'
import Container from '../pages/Container'

const Basic = () => (
    <Router>
        <div>
            <Route path="/" component={Container}/>
            <Route exact path="/app" component={App}/>
        </div>
    </Router>
)

export default Basic