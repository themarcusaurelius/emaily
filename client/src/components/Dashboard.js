import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';
import '../assets/App.css';

const Dashboard = () => {
    return (
        <div>
            <br />
            <div className="card large z-depth-5" id="list">
                <br/>
                <div className="container">
                    <h5>My Surveys:</h5>
                    <hr />
                    <br />
                    <SurveyList />
                </div>
                <div className="fixed-action-btn">
                    <Link to="/surveys/new" className="z-depth-5 pulse btn-floating btn-large waves-effect waves-light deep-purple lighten-2">
                        <i className="large material-icons">add</i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;