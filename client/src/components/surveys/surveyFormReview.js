import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom'
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            <div key={name}>
                <label>
                    {label}
                </label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    })

    return (
        <React.Fragment>
            <br/>
            <div className="card large z-depth-5">
                <br/>
                <div className="container">
                    <h5>
                        Please confirm your entries
                    </h5>
                    <hr/>
                    {reviewFields}
                    <br/>
                    <button 
                        className="z-depth-5 yellow darken-2 waves-effect waves-yellow btn-small left" 
                        onClick={onCancel}
                    >
                        <i className="material-icons left">arrow_back</i>
                        Back
                    </button>
                    <button 
                        className="z-depth-5 green lighten-1 waves-effect waves-green btn-small right" 
                        onClick={() => submitSurvey(formValues, history)}
                    >
                        <i className="material-icons right">email</i>
                        Send Survey
                    </button>
                </div>
            </div>
            <br/>
        </React.Fragment>
    );
};

//Transforms redux state to props to pass down as an argument
function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values };
}

//With Router SurveyFormReview now has a history object we can pass along to our action creator to redirect once survey is submitted
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));