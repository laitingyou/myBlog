import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

/*--------------components---------*/
import Demo from '../components/container/demo'
import Login from '../components/Page/Login'
const routers = [
    {
        path:'/',
        component:Demo
    },
    {
        path:'/login',
        component:Login
    }


]

const RouterConfig=() =>(
    <Router>
        <Switch>
            {
                routers.map((route,index)=>(
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                            /*render={
                                ()=>(
                                    route.path=='/'?(
                                        <Redirect to='/index'/>
                                    ):(<Redirect to='/indexs'/>)
                                )
                            }*/
                        />
                ))
            }
            <Redirect from='' to="/" />
        </Switch>
    </Router>
)

export default RouterConfig
