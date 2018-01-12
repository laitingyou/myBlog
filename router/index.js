import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

/*--------------components---------*/
import Demo from '../src/components/container/demo'
const routers = [
    {
        path:'/',
        component:Demo
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
                        />
                ))
            }
        </Switch>
    </Router>
)

export default RouterConfig
