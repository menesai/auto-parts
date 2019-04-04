import React from 'react';
import Login from './components/Landing/Login/Login';
import {Switch, Route} from 'react-router-dom'
import Register from './components/Landing/Register/Register';
import User from './components/Dashboard/User/User';
import isAdmin from './components/Dashboard/IsAdmin/IsAdmin';

export default (
    <Switch>
        <Route path='/' exact component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/user' component={User}/>
        <Route path='/isadmin' component={isAdmin}/>
        <Route/>
        <Route/>
    </Switch>
)