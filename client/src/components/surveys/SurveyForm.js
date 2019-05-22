//Shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
//Field component is a helper for rendering any type of traditional form input
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

//Capitol letters because it should never be changed
const FIELDS = [
    { label: 'Survey Title', name: 'title', noValueError: 'You must provide a title' },
    { label: 'Subject Line', name: 'subject', noValueError: 'You must provide a subject'  },
    { label: 'Email Body', name: 'body', noValueError: 'You must provide a body' },
    { label: 'Recipient List', name: 'emails', noValueError: 'You must provide a list of emails'}
]

class SurveyForm extends Component {
    renderFields() {
        return _.map(FIELDS, ({ label, name }) => {
            return (
                <Field key={name} component={SurveyField} type="text" label={label} name={name} />
            );
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys" className="btn btn-small left red accent-3">
                        Cancel
                        <i className="material-icons right">cancel</i>
                    </Link>
                    <button type="submit" className="btn btn-small right deep-purple lighten-2">
                        Next
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
        );
    }
};

//Takes single argument of values which is the object identical from the values inputed
function validate(values) {
    const errors = {};

    //Validate runs automatically so we need to add an empty string to not crash
    errors.emails = validateEmails(values.emails || '');

    _.each(FIELDS, ({ name, noValueError }) => {
        if (!values[name]) {
            errors[name] = noValueError
        }
    });
    
    return errors;
};

//Only requires one option to be passed in. Validate automatically runs when page loaded.
export default reduxForm({
    validate,
    form: 'surveyForm'
})(SurveyForm);