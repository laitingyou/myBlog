
import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'
// import { NativeRouter, Route, Link } from 'react-router-native'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import App from '../App'
const Basic = () => (
    <Router>
            <div>
                <Route exact path="/" component={App}/>
                <Route path="/about" component={App}/>
                <Route path="/topics" component={App}/>
            </div>
    </Router>
)

export default Basic