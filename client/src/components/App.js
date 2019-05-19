//Rendering layer control (React)
import React, { Component } from 'react';
//Browser Router - Brain of React-Router
import { BrowserRouter, Route } from 'react-router-dom';
//Gives certain components ability to call action creators
import { connect } from 'react-redux';
//Pulls out all action creators
import * as actions from '../actions';

import Header from './Header'
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    };

    render() {
       return (
            <div>
                <BrowserRouter>
                    <Header/>
                    <div className="container">
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route path="/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        ); 
    }  
};

export default connect(null, actions)(App);