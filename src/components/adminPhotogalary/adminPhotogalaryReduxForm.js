import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import "./adminPhotogalary.scss";
import { addPhotogalaryInitialValue } from "../../state/photogalaryFormData";
import { customInput } from "../customFields/customInput/customInput";
import { customSelect } from "../customFields/customSelect/customSelect";

class PhotogalaryReduxForm extends Component {

    state = {
        addPhotogalaryInitialValue,
        filteredEventList: []
    }

    submit = values => {
        const pictures = this.state.addPhotogalaryInitialValue.pictures.reduce((prev, elem) => {
            return prev.concat(elem.value);
        }, []);

        const submitValues = {
            ...this.state.addPhotogalaryInitialValue,
            pictures: pictures,
        }

        this.props.submitHandler(submitValues);
        this.props.reset()
    };

    onChangeTypeHandler = e => {
        const { name, value } = e.target;

        this.setState(prevState => {
            return {
                ...prevState,
                addPhotogalaryInitialValue: {
                    ...prevState.addPhotogalaryInitialValue,
                    [name]: value
                },
                filteredEventList: [{_id: 1, title: "Select event"}].concat(
                    this.props.eventList.filter(el => el.eventType === value)
                )
            };
        });
    };

    onChangeTitleHandler = e => {
        const { name, value } = e.target;

        this.setState(prevState => {
            return {
                ...prevState,
                addPhotogalaryInitialValue: {
                    ...prevState.addPhotogalaryInitialValue,
                    [name]: value
                }
            };
        });
    };

    onChangePicturesHandler = e => {
        const { value, id } = e.target;

        this.setState(prevState => {
            return {
                ...prevState,
                addPhotogalaryInitialValue: {
                    ...prevState.addPhotogalaryInitialValue,
                    pictures: prevState.addPhotogalaryInitialValue.pictures.map(
                        el => (el.id === id ? { ...el, value } : el)
                    )
                }
            };
        });
    };

    addPicture = (e) => {
        this.setState(prevState => {
            return {
                ...prevState,
                addPhotogalaryInitialValue: {
                    ...prevState.addPhotogalaryInitialValue,
                    pictures: prevState.addPhotogalaryInitialValue.pictures.concat({
                        id: Math.random()
                            .toString()
                            .substr(2, 100),
                        name: `picture_${Math.random()
                            .toString()
                            .substr(2, 100)}`,
                        value: ""
                    })
                }
            }
        });
    };

    render() {
        const { filteredEventList, addPhotogalaryInitialValue } = this.state;

        const {
            handleSubmit,
            eventTypes,
        } = this.props;

        return (
            <form className="event-form__event-form__main" onSubmit={handleSubmit(this.submit)}>

                <Field
                    name="eventType"
                    label="Event Type"
                    required
                    component={customSelect}
                    onChange={this.onChangeTypeHandler}
                    className="form-block__select -wide"
                >
                    {eventTypes.map(elem => <option key={elem.id} value={elem.optionName}>{elem.optionName}</option>)}
                </Field>

                <Field
                    name="eventTitle"
                    label="Event Title"
                    required
                    component={customSelect}
                    onChange={this.onChangeTitleHandler}
                    className="form-block__select -wide"
                >
                    {filteredEventList.map(elem => <option key={elem._id} value={elem.title}>{elem.title}</option>)}
                </Field>

                {addPhotogalaryInitialValue.pictures.map((el, i) => (
                    <Field
                        key={`${el.id}/${i}`}
                        name={el.name}
                        id={el.id}
                        label="Picture"
                        onChange={this.onChangePicturesHandler}
                        className="input-box -wide"
                        placeholder='Enter picture url'
                        component={customInput}
                    />
                ))}
                <button type="button" className="photogalary-form__picture-btn" onClick={this.addPicture} >Add Picture</button>
                <div className="event-form__control-box">
                    <button className="event-form__submit-btn" >Add Photogalary</button>
                </div>
            </form>

        );
    }
}

export default reduxForm({ form: "photogalaryForm", enableReinitialize: true })(PhotogalaryReduxForm);