import React, { Component,ReactDOM } from 'react';
import { connect } from 'react-redux'
import {REDUCER} from '../../store/actions'
import styles from '../../assets/css/index.scss'

class Container extends Component {
    constructor(props){
        super(props)
    }
    handleClick(e) {
        this.props.dispatch(REDUCER(e.target.value))
    }
    render() {
        let {handleClick}=this
        return (
            <div>
                <input type='text' ref='input' onChange={demo=>this.handleClick(demo)}/>
                <button onClick={handleClick}>
                    Add
                </button>
            </div>
        )
    }
}

function select(state) {
    console.log(state)
    return {
        result:state
    }
}

export default connect(select)(Container)