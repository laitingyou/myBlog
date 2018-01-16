import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link,withRouter} from 'react-router-dom'
class Login extends Component {
    constructor(props){
        super(props)
    }


    render() {
        console.log(this)
        return (
            <h1>{this.props.result[0]}</h1>
        )
    }


}
function select(state) {
    return {
        result:state
    }
}
export default withRouter(connect(select)(Login))