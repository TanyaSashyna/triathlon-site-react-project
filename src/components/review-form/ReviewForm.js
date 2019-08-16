import React from 'react'
import { Field, reduxForm } from 'redux-form';

import { customInput } from "../customFields/customInput/customInput";
import { customTextarea } from "../customFields/customTextarea/customTextarea";
import { customSelect } from "../customFields/customSelect/customSelect";
import { validationForms } from "../../utils/validationForms";

let ReviewForm = props => {
    const { handleSubmit, postReviewSubmit, eventsArr, reset } = props;

    const submit = value => {
        value.date = new Date();
        postReviewSubmit(value);
        reset()
    };

    return (
        <form className="form" onSubmit={handleSubmit(submit)}>
            <Field name="event" label="Event Title" component={customSelect}>
                <option>Select Event</option>
                {eventsArr.map(elem => <option key={elem.id} value={elem.id}>{elem.title}</option>)}
            </Field>
            <Field name="name" label="Full name"  type="text" id="name" component={customInput} />
            <Field name="text" label="Your message" id="text" component={customTextarea} rows="10"/>

            <div className="btn-group">
                <button type="submit" className="btn">Send</button>
            </div>
        </form>
        )
};

ReviewForm = reduxForm({
    form: 'reviewForm',
    validate: validationForms
})(ReviewForm)

export default ReviewForm