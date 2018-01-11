import React, { Component } from 'react';
import ReactDom from 'react-dom';
import styles from './assets/css/index.scss'

class App extends Component {
    render() {
        return <h1 className={styles.init}> Hello, world! </h1>
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
)