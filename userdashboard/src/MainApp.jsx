import React from 'react';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import './css/main.css';
import FormComp from './components/login.component';
import MainApp2 from './Main2'

export default function MainApp(){
    return <React.Fragment>
       <div className="body">
        <Router >
            <Switch>
                <Route path='/' exact component={FormComp}/>
                <Route path='/home' exact component={MainApp2}/>
            </Switch>
        </Router>
        </div>
    </React.Fragment>
}