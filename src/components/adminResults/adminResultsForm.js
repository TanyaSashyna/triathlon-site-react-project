import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import "./adminResultsForm.scss";
import { customInput } from "../customFields/customInput/customInput";
import { customSelect } from "../customFields/customSelect/customSelect";

class AdminResultsForm extends Component {

    render() {

        const {
            handleSubmit,
            submitHandler,
            eventTypes,
            eventList,
            eventusers,
            onChangeTypeHandler,
            onChangeTitleHandler,
            onChangeInputTimeHandler
        } = this.props;

        const fullEventList = [{title: "Select Event", _id: 1}].concat(eventList)

        return (
            <form className="results-form__results-form__main" onSubmit={handleSubmit(submitHandler)}>

                <Field
                    name="eventType"
                    label="Event Type"
                    required
                    component={customSelect}
                    onChange={onChangeTypeHandler}
                    className="form-block__select -wide"
                >
                    {eventTypes.map(elem => <option key={elem.id} value={elem.optionName}>{elem.optionName}</option>)}
                </Field>

                <Field
                    name="eventTitle"
                    label="Event Title"
                    required
                    component={customSelect}
                    onChange={onChangeTitleHandler}
                    className="form-block__select -wide"
                >   
                    {fullEventList && fullEventList.map(elem => <option key={elem._id} id={elem._id} value={elem.title}>{elem.title}</option>)}
                </Field>

                <div className = 'results-form__table'>  
                    <div className = 'results-form__header'>
                        <div className = 'results-form__header_name'>Name</div>
                        <div className = 'results-form__header_email'>Email</div>
                        <div className = 'results-form__header_country'>Country</div>
                        <div className = 'results-form__header_distance'>Distance</div>
                        <div className = 'results-form__header_time'>Time</div>
                    </div> 

                {eventusers && eventusers.map( elem => 
                    <div key={elem._id} className='results-form__user-data'>
                        <div className = "results-form__user-data_name">{elem.name}</div>
                        <div className = "results-form__user-data_email">{elem.email}</div>
                        <div className = "results-form__user-data_country">{elem.userCountry}</div>
                        <div className = "results-form__user-data_distance">{elem.distance}</div>
                        <Field
                            id = {elem._id}
                            name={elem._id}
                            component={customInput}
                            className="input-box -wide"
                            onChange = {onChangeInputTimeHandler}
                        />
                    </div>
                )}
                </div>

                <div className="results-form__control-box">
                    <button className="results-form__submit-btn" >Add Results</button>
                </div>
            </form>
        );
    }
}

export default reduxForm({ form: "resultsForm", enableReinitialize: true })(AdminResultsForm);