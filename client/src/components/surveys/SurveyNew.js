//This shows all other surveys
import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './surveyFormReview';

class SurveyNew extends Component {
    state = { showFormReview: false };

    renderContent() {
        if (this.state.showFormReview) {
            return <SurveyFormReview />
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

export default SurveyNew;