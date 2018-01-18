import React, { Component,ReactDOM } from 'react';
import {Link,withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

import {REDUCER} from '../../store/actions'
import styles from '../../assets/css/index.scss'

class Container extends Component {
    constructor(props){
        super(props)
    }
    componentWillMount() {
        console.log(31123123,this.props)
    }
    handleClick(e) {
        // this.props.dispatch(REDUCER(e.target.value))
        // console.log(this.props.history.push('/login'))
    }
    render() {
        return (
            <div>
                <header></header>
                {this.props.children}
            </div>
        )
    }
}

function select(state) {
    return {
        result:state
    }
}

export default withRouter(connect(select)(Container))