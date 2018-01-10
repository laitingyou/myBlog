
import React from 'react'
import {
    BrowserRouter as Router,
    Route

} from 'react-router-dom'
import App from '../App'
import Nav from '../pages/Nav'

const Basic = () => (
    <Router>
            <div>
                <Nav/>
                <Route exact path="/:id" component={App}/>
            </div>
    </Router>
)

export default Basic