import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link,withRouter} from 'react-router-dom'
import Container from '../container/Container'
class Login extends Component {
    constructor(props){
        super(props)
    }


    render() {
        console.log(this)
        return (
            <Container>
                <h2>{this.props.result[0]}</h2>
            </Container>

        )
    }


}
function select(state) {
    return {
        result:state
    }
}
export default withRouter(connect(select)(Login))