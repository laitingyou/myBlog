import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Router from './router/index'
import {Provider} from 'react-redux'
import store from './store'
import 'normalize.css'
import './assets/css/sakura.css'
// import 'bootstrap'
import './assets/css/index.scss'

ReactDom.render(
    <Provider store={store}>
        <Router />
    </Provider>
    ,
    document.getElementById('root')
)