//Shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
//Field component is a helper for rendering any type of traditional form input
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';

//Capitol letters because it should never be changed
const FIELDS = [
    { label: 'Survey Title', name: 'title' },
    { label: 'Subject Line', name: 'subject' },
    { label: 'Email Body', name: 'body' },
    { label: 'Recipient List', name: 'emails'}
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
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
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

//Only requires one option to be passed in
export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);