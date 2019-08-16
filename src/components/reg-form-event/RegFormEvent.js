import React from 'react'
import { Field, reduxForm } from 'redux-form';

import { customSelect } from "../customFields/customSelect/customSelect";
import { customInput } from "../customFields/customInput/customInput";
import { validationForms } from "../../utils/validationForms";

let RegFormEvent = props => {
    const { handleSubmit, regEventSubmit, eventId, reset } = props;
    const eventTypes = ['Select distance', 'Half marathone','Marathone'];

    const submit = value => {
        value.event = eventId;
        regEventSubmit(value);
        reset();
    };

    return (
        <form className="form" onSubmit={handleSubmit(submit)}>
            <Field name="name" label="Full name"  type="text" id="name" component={customInput} />

            <Field name="phone" label="Phone"  type="phone" id="phone" component={customInput} />

            <Field name="email" label="E-mail"  type="email" id="email" component={customInput} />

            <div className="reg-radio">
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
            
            <Field name="distance" label="Distance" required component={customSelect}>
                {eventTypes.map( (elem,ind) => <option key={ind} value={elem}>{elem}</option>)}
            </Field>

            <Field name="userCountry" label="Country"  type="text" id="userCountry" component={customInput} />

            <div className="btn-group">
                <button className="btn" type="submit">Register</button>
            </div>
        </form>
        )
};

RegFormEvent = reduxForm({
    form: 'regFormEvent',
    validate: validationForms
})(RegFormEvent)

export default RegFormEvent