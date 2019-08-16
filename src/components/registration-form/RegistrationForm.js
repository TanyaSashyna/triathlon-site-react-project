import React from 'react'
import { Field, reduxForm } from 'redux-form';

import { customInput } from "../customFields/customInput/customInput";
import { validationForms } from "../../utils/validationForms";

let RegistrationForm = props => {
    const { handleSubmit, postCheckInSubmit, message } = props;

    const submit = value => {
        postCheckInSubmit(value);
        if(message !== 'User was successfully register'){
            props.history.push('/login');
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit(submit)}>
            <div className="form-item">
                <Field name="name" component={customInput} type="text" id="name" label="Full name" />
            </div>
            <div className="reg-radio form-item">
                <div className="radio-label">
                    <Field name="sex" component="input" type="radio" id="male" value="male" hidden/>
                    <label htmlFor="male">male</label>
                </div>

                <div className="radio-label">
                    <Field name="sex" component="input" type="radio" id="female" value="female" hidden/>
                    <label htmlFor="female">female</label>
                </div>
                <div className="required-field">!Required field</div>
            </div>
            <div className="form-item">
                <Field name="phone" component={customInput} type="phone" id="phone" label="Phone" />
            </div>
            <div className="form-item">
                <Field name="email" component={customInput} type="email" id="email" label="E-mail" />
            </div>
            <div className="form-item password">
                <Field name="password" component={customInput} type="password" id="password" label="Password" />
            </div>
            <div className="form-item password">
                <Field name="confirmPassword" component={customInput} type="password" id="confirmPassword" label="Confirm Password" />
            </div>
            <div className="btn-group">
                <button type="submit" className="btn">Check in</button>
            </div>
        </form>
        )
};

RegistrationForm = reduxForm({
    form: 'registration',
    validate: validationForms
})(RegistrationForm)

export default RegistrationForm