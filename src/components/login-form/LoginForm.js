import React from 'react'
import { Field, reduxForm } from 'redux-form';

import { customInput } from "../customFields/customInput/customInput";
import { validationForms } from "../../utils/validationForms";

let LoginForm = props => {
    const { handleSubmit, postLoginSubmit } = props;

    const submit = value => {
        postLoginSubmit(value);
    };

    return (
        <form className="form" onSubmit={handleSubmit(submit)}>
            <Field name="email" component={customInput} type="email" id="email" label="E-mail"/>
            <Field name="password" component={customInput} type="password" id="password" label="Password"/>
            <button type="submit" className="btn">Sign in</button>
        </form>
        )
};

LoginForm = reduxForm({
    form: 'login',
    validate: validationForms
})(LoginForm)

export default LoginForm