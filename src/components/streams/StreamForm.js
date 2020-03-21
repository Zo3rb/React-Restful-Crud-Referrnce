import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends Component {

    renderErrors = ({ error, touched }) => {
        if (error && touched) {
            return <p className="text-danger"><small>{`!! ${error}`}</small></p>
        }
    }

    renderInput = ({ input, label, meta }) => {
        return (
            <div className="form-group">
                <label
                    htmlFor={`${input.name}Input`}>{label}
                </label>
                <input type="text"
                    autoComplete="off"
                    className="form-control"
                    id={`${input.name}Input`}
                    {...input} />
                {this.renderErrors(meta)}
            </div>
        )
    }

    onFormSubmit = formValues => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="row p-5">
                        <div className="col-sm-12 col-md-6 offset-md-3">
                            <h2 className="text-center h1 text-white mt-3 font-weight-bold">Start New Stream</h2>
                            <form onSubmit={this.props.handleSubmit(this.onFormSubmit)}
                                className="border border-gray p-5 mt-5">
                                <Field name="title" component={this.renderInput} label="Enter a Title" />
                                <Field name="description" component={this.renderInput} label="Enter a Description" />
                                <button className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const validate = formValues => {
    const errors = {}
    if (!formValues.title) {
        errors.title = "You Have to Add a Title to The Stream"
    }
    if (!formValues.description) {
        errors.description = "You Have to Add a Description to The Stream"
    }
    return errors
}

export default reduxForm(
    {
        form: 'streamForm',
        validate
    }
)(StreamForm);