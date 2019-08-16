import React from 'react';
import { connect } from "react-redux";

import { getAllEvents } from "../../actions/getAllEvents";

import './events.scss';

import Sidebar from '../../components/sidebar/Sidebar';
import FiltersEvents from '../../components/filtersEvents/FiltersEvents';
import EventInfoShort from '../../components/eventInfoShort/EventInfoShort';
import Footer from '../../components/footer/Footer';

export class Events extends React.Component {
    componentDidMount() {
        this.props.getAllEvents();
    }

    render() {
        const { events, getAllEvents } = this.props;
        const eventTypes = ['Marathon', 'Triathlon', 'Cycling'];
        return (
            <>
                <Sidebar />
                <div className="container-wrap events">
                    <div className="caption-page">
                        <h2>Events</h2>
                    </div>
                    <div className="events-filters">
                        <h4>Events filter</h4>
                        <FiltersEvents labelType="Event Type" getRequest={getAllEvents} eventTypes={eventTypes}/>
                    </div>
                    
                    <div className="events-content">
                        <h4>Events</h4>

                        <div className="events-list">
                            {
                               events.length !== 0 ? events.map(event => <EventInfoShort
                                    key={event._id}
                                    title={event.title}
                                    country={event.country}
                                    city={event.city}
                                    id={event._id}
                                    eventDate={event.eventDate}
                                    imgSrc={event.mainBannerPicture} />
                                ) : <p className="not-found">Not found events</p>
                            }
                        </div>
                    </div>                    
                </div>
                <Footer/>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        events: state.getEvents.events
    };
};

export default connect(
    mapStateToProps,
    { getAllEvents }
)(Events);