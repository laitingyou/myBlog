import {Component} from 'react'
import {connect} from 'react-redux'

class Login extends Component {
    constructor(props){
        super(props)
    }


    render() {
        return (
            <h1></h1>
        )
    }


}
function select(state) {
    console.log(state)
    return {
        result:state
    }
}
export default connect(select)(Login)