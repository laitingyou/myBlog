import React, { Component,ReactDOM } from 'react';
import {Link,withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import {REDUCER} from '../../store/actions'
import styles from '../../assets/css/index.scss'

class Container extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    handleClick(e) {
        // this.props.dispatch(REDUCER(e.target.value))
        // console.log(this.props.history.push('/login'))
    }
    render() {
        let {handleClick}=this
        return (
            <div>
                <li><Link to="/login">Netflix</Link></li>
                <input type='text' ref='input' onChange={demo=>this.handleClick(demo)}/>
                <button onClick={demo=>this.handleClick(demo)}>
                    Add
                </button>
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