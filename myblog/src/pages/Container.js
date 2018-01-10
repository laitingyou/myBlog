import React from 'react'
import bg from '../asset/images/bg.jpg'
import logo from '../asset/images/logo-home.png'
// import StyleSheet from 'react-style'
// let StyleSheet = require('react-style')
//
// let styles2=StyleSheet.create({
//
// })
let styles={
    bg:{
        backgroundImage:`url(${bg})`,
        backgroundRepeat:'no-repeat',
        backgroundSize: 'cover',
        height: '100vh'
    },
    logo:{
        opacity: 0.44
    }
}


class Container extends React.Component {

    render() {
        return (
            <div style={styles.bg}>
                <img style={styles.logo} src={logo} alt=""/>
            </div>
        )
    }


}
export default Container