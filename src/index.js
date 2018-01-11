import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './assets/index.scss'

class App extends Component {
    render() {
        return <h1> Hello, world! </h1>
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
)