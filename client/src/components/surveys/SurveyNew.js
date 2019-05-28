//This shows all other surveys
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './surveyFormReview';

class SurveyNew extends Component {
    state = { showFormReview: false };

    renderContent() {
        if (this.state.showFormReview) {
            return <SurveyFormReview onCancel={() => this.setState({ showFormReview: false })} />
        }

        return (
            <SurveyForm onSurveySubmit={() => this.setState({ showFormReview: true })}/>
        )     
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
};

//Not explicitly dumping values but does because it is a part of redux-forms
export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);