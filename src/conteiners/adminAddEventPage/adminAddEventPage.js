import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/adminMainPageActions";
import AdminHeader from "../../components/adminHeader/adminHeader";
import Form from "../../components/eventForm/eventReduxForm";
import ConfirmationMessage from "../../components/confirmationMessage/confirmationMessage";

class AdminAddEventPage extends Component {
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

    render() {
        const {
            postNewEvent,
            changeEvent,
            eventFormInitialValue,
            eventTypes,
            editFormFlag
        } = this.props

        return (
            <>
                <AdminHeader changeEditFlag={this.props.changeEditFlag}/>
                <div className="event-form">
                    <div className="event-form__content">
                        <h2 className="event-form__form-title">{editFormFlag ? 'CHANGE EVENT' : 'ADD NEW EVENT'}</h2>

                        <Form
                            postNewEvent={postNewEvent}
                            changeEvent={changeEvent}
                            showConfirmationMessage={this.showConfirmationMessage}
                            initialValues={eventFormInitialValue}
                            eventTypes={eventTypes}
                            editFormFlag={editFormFlag}
                        />
                    </div>
                </div>

                {this.state.confirmationMessageFlag &&
                    <ConfirmationMessage closeMessage={this.closeConfirmationMessage}>
                        <div className="text">Event has been saved</div>
                    </ConfirmationMessage >}
            </>
        );
    }
}

const mapStateToProps = state => ({
    eventFormInitialValue: state.adminMainPageReducer.eventFormInitialValue,
    eventTypes: state.adminMainPageReducer.eventTypes,
    editFormFlag: state.adminMainPageReducer.editFormFlag
});

export default connect(mapStateToProps, actions)(AdminAddEventPage);