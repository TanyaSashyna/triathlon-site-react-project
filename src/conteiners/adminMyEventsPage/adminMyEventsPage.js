import React, { Component } from "react";
import { connect } from "react-redux";
import "./adminMyEventsPage.scss";
import { Redirect } from 'react-router-dom'
import * as actions from "../../actions/adminMainPageActions";
import AdminHeader from "../../components/adminHeader/adminHeader";
import EventInfoShort from "../../components/eventInfoShort/EventInfoShort";

class AdminAddEventPage extends Component {

    state = {
        filteredEventList: []
    };

    componentDidMount() {
        this.props.getEvents();
    }

    onChangeTypeHandler = e => {
        const { value } = e.target;
        this.props.getEvents(value)
    };

    render() {
        const {
            eventList,
            removeEvent,
            editEvent,
            eventFormInitialValue,
            editFormFlag,
            eventTypes
        } = this.props

        return (
            <>
                <AdminHeader />
                <div className="event-page">
                    <div className="event-page__content">
                        <h2 className="event-page__title">MY EVENTS</h2>

                        <select className="event-page__select" onChange={this.onChangeTypeHandler} label="Event Type">
                            {eventTypes.map(elem => <option key={elem.id} value={elem.optionName}>{elem.optionName}</option>)}
                        </select>

                        <div className="events-list">

                            {eventList && eventList.map(el =>
                                <div className="event-page__container" key={el._id}>
                                    <EventInfoShort
                                        key={el._id}
                                        title={el.title}
                                        country={el.country}
                                        city={el.city}
                                        id={el._id}
                                        eventDate={el.eventDate}
                                        imgSrc={el.mainBannerPicture}
                                        values={eventFormInitialValue}
                                    />
                                    <div className="event-page__buttons-conteiner">
                                        <button className="event-page__buttons-conteiner__button" onClick={editEvent.bind(null, el._id)} >Edit Event</button>
                                        <button className="event-page__buttons-conteiner__button" onClick={removeEvent.bind(null, el._id)} >Delete Event</button>
                                    </div>

                                </div>
                            )}
                        </div>

                        {editFormFlag && <Redirect to='/admin/add_new_event' />}
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    eventList: state.adminMainPageReducer.eventList,
    eventFormInitialValue: state.adminMainPageReducer.eventFormInitialValue,
    eventTypes: state.adminMainPageReducer.eventTypes,
    editFormFlag: state.adminMainPageReducer.editFormFlag,
});

export default connect(mapStateToProps, actions)(AdminAddEventPage);