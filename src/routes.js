import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import UnauthenticatedApp from './components/UnauthenticatedApp';
import AuthApp from './components/AuthenticatedApp';
import HomePage from './components/home/HomePage';
import Login from './components/authentication/Login';
import Logout from './components/authentication/Logout';
import Register from './components/authentication/Register';
import UserGetter from './components/authentication/UserGetter';
import Dashboard from './components/dashboard/Dashboard';
import Projects from './components/projects/Projects';

export default (
<Route path="/" component={App}>
    <Route component={UnauthenticatedApp}>
        <IndexRoute component={HomePage} />
        <Route path="login" component={Login}/>
        <Route path="getCurrentUser" component={UserGetter}/>
        <Route path="register" component={Register}/>
    </Route>
    <Route component={AuthApp}>
        <Route path="logout" component={Logout}/>
        <Route path="dashboard" component={Dashboard} />
        <Route path="projects" component={Projects} />
    </Route>
</Route>
);