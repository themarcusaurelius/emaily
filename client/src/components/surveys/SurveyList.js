import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return (
                <div className="card z-depth-5" key={survey.id} style={{ height: 300 }}>
                    <div className="card-content">
                        <span className="card-title">{survey.title}</span>
                        <div>
                            <p>{survey.body}</p>    
                        </div>
                        
                        <br />
                        <p className="left">Sent On: {new Date(survey.dateSent).toLocaleDateString()}</p>
                        {/* <p className="right">Last Responded: {new Date(survey.lastResponded).toLocaleDateString()}</p> */}
                    </div>
                    <div className="card-action">
                        <a>Yes: {survey.yes}</a>
                        <a>No: {survey.no}</a>
                    </div>
                </div>
            );
        });
    } 

    render() {
        return (
            <div>
                {this.renderSurveys()}
            </div>
        );
    }
}

function mapStateToProps({ surveys }) {
    return { surveys };
};

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);