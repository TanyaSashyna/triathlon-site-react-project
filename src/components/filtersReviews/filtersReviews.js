import React from 'react'
import { Field, reduxForm } from 'redux-form';

import { customSelect } from "../customFields/customSelect/customSelect";

let FiltersReviews = props => {
    const { handleSubmit, getRequest, eventTypes, labelType } = props;

    const submit = value => {
        getRequest(value.eventType);
    };

    return (
        <form className="form-filter" onSubmit={handleSubmit(submit)}>
            <div>
                <Field name="eventType" label={labelType} component={customSelect}>
                    <option value="All events">All events</option>
                    {eventTypes.map( elem => <option key={elem.id} value={elem.id}>{elem.title}</option>)}
                </Field>
            </div>
            <div className="btn-group">
                <button type="submit" className="btn">Filter</button>
            </div>            
        </form>
    )
};

FiltersReviews = reduxForm({
    form: 'filterReviews'
})(FiltersReviews)

export default FiltersReviews