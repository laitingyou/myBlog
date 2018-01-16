import React from 'react'
import {HashRouter,BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import createHistory from "history/createBrowserHistory"
const history = createHistory()
/*--------------components---------*/
import Demo from '../components/container/Container'
import Login from '../components/Page/Login'
const routers = [
    {
        path:'/',
        component:Demo,
        exact: true
    },
    {
        path:'/login',
        component:Login,
        exact: false
    }


]
let Router = process.env.NODE_ENV !== 'production' ? BrowserRouter : HashRouter;
const RouterConfig=() =>(
    <Router history={history}>
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
