import React from 'react'
import { Field, reduxForm } from 'redux-form';

import { customSelect } from "../customFields/customSelect/customSelect";

let FiltersEvents = props => {
    const { handleSubmit, getRequest, eventTypes, labelType } = props;

    const submit = value => {
        getRequest(value.eventType);
    };

    return (
        <form className="form-filter" onSubmit={handleSubmit(submit)}>
            <div>
                <Field name="eventType" label={labelType} component={customSelect}>
                    <option value="All events">All events</option>
                    {eventTypes.map( (elem,ind) => <option key={ind} value={elem}>{elem}</option>)}
                </Field>
            </div>
            <div className="btn-group">
                <button type="submit" className="btn">Search</button>
            </div>            
        </form>
    )
};

FiltersEvents = reduxForm({
    form: 'filters'
})(FiltersEvents)

export default FiltersEvents