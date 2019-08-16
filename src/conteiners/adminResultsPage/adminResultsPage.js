import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvents, getEventByTitle } from "../../actions/adminMainPageActions";
import { getRegistredUsers, resultsPromiseAll } from "../../actions/adminResultsActions";
import AdminHeader from "../../components/adminHeader/adminHeader";
import ResultsForm from "../../components/adminResults/adminResultsForm";
import ConfirmationMessage from "../../components/confirmationMessage/confirmationMessage";

class AdminResultstPage extends Component {
    state = {
        confirmationMessageFlag: false
    };

    componentDidMount() {
        this.props.getEvents();
    }

    showConfirmationMessage = () => {
        this.setState({ confirmationMessageFlag: true })
    };

    closeConfirmationMessage = () => {
        this.setState({ confirmationMessageFlag: false })
    };

    submitHandler = values => {
        const results = Object.keys(values).slice(2)
            .map(elem => elem = {
                eventUser: elem,
                event: this.props.eventusers.find(user => user._id === elem).event[0],
                time: values[elem]
            })

        this.props.resultsPromiseAll(results)
        this.showConfirmationMessage()
    }

    onChangeTypeHandler = e => {
        const { value } = e.target;
        this.props.getEvents(value)
    };

    onChangeTitleHandler = e => {
        const { value } = e.target;
        const eventId = this.props.eventList.find(elem => elem.title === value)._id
        this.props.getRegistredUsers(eventId)
    };

    render() {
        const {
            eventTypes,
            eventList,
            eventusers,
        } = this.props

        return (
            <>
                <AdminHeader />
                <div className="results-form">
                    <div className="results-form__content">
                        <h2 className="results-form__form-title">RESULTS</h2>
                        <ResultsForm
                            eventTypes={eventTypes}
                            eventList={eventList}
                            submitHandler={this.submitHandler}
                            onChangeInputTimeHandler={this.onChangeInputTimeHandler}
                            eventusers={eventusers}
                            onChangeTypeHandler={this.onChangeTypeHandler}
                            onChangeTitleHandler={this.onChangeTitleHandler}
                        />
                    </div>

                    {this.state.confirmationMessageFlag &&
                        <ConfirmationMessage closeMessage={this.closeConfirmationMessage}>
                            <div className="text">Results have beed added.</div>
                        </ConfirmationMessage >}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    eventList: state.adminMainPageReducer.eventList,
    eventByTitle: state.adminMainPageReducer.eventByTitle,
    eventTypes: state.adminMainPageReducer.eventTypes,
    eventusers: state.adminResultsReduser.eventusers,
    addPhotogalaryInitialValue: state.photogalaryReducer.addPhotogalaryInitialValue,
});

export default connect(
    mapStateToProps,
    { getEvents, getEventByTitle, getRegistredUsers, resultsPromiseAll }
)(AdminResultstPage);