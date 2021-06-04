import React from 'react';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import NavbarComp from './components/navbar.component';
import './css/main.css';
import DashboardComp from './components/dashboard.component';
import PostComp from './components/post.component';

export default function MainApp2(){
    return <React.Fragment>
        <Router>
            <NavbarComp title="Dashboard"/>
            <Switch>
                <Route path='/home' exact component={DashboardComp}/>
                <Route path='/posts' exact component={PostComp}/>
            </Switch>
        </Router>
    </React.Fragment>
}