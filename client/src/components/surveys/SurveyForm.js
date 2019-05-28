//Shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
//Field component is a helper for rendering any type of traditional form input
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
    renderFields() {
        return _.map(formFields, ({ label, name, icon }) => {
            return (
                <Field key={name} component={SurveyField} type="text" label={label} name={name} icon={icon}  />
            );
        });
    };

    render() {
        return (
            <div>
                <br />
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    <div className="card z-depth-5" style={{ height: '530px'}}>
                        <br/>
                        <div className="container">
                            {this.renderFields()}
                            <Link to="/surveys" className="z-depth-5 btn btn-small left waves-effect waves-red red accent-3">
                                Cancel
                                <i className="material-icons right">cancel</i>
                            </Link>
                            <button type="submit" className="z-depth-5 btn btn-small right waves-effect waves-purple deep-purple lighten-2">
                                Next
                                <i className="material-icons right">send</i>
                            </button>
                        </div>  
                    </div>    
                </form>
            </div>
        );
    }
};

//Takes single argument of values which is the object identical from the values inputed
function validate(values) {
    const errors = {};
    //Validate runs automatically so we need to add an empty string to not crash
    errors.recipients = validateEmails(values.recipients || '');

    _.each(formFields, ({ name, noValueError }) => {
        if (!values[name]) {
            errors[name] = noValueError
        }
    });
    
    return errors;
};

//Only requires one option to be passed in. Validate automatically runs when page loaded.
export default reduxForm({
    validate,
    //Tells redux form how to name form to make it easy to find
    form: 'surveyForm',
    //Persists the data inputed in the forms
    destroyOnUnmount: false
})(SurveyForm);