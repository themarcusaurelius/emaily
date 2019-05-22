//Shows a form for a user to add input
import React, { Component } from 'react';
//Field component is a helper for rendering any type of traditional form input
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

class SurveyForm extends Component {
    renderFields() {
        return (
            <div>
                <Field label="Survey Title" type="text" name="title" component={SurveyField} />
                <Field label="Subject Line" type="text" name="subject" component={SurveyField} />
                <Field label="Email Body" type="text" name="body" component={SurveyField} />
                <Field label="Recipient List" type="text" name="emails" component={SurveyField} />
            </div>
        );
    };

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {this.renderFields()}
                    <button type="submit" className="btn btn-small deep-purple lighten-2">
                        Submit
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
        );
    }
};

//Only requires one option to be passed in
export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);