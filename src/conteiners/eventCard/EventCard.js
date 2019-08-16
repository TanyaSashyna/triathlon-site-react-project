import React from 'react';
import { connect } from "react-redux";

import { getRequestEvent } from "../../actions/getRequestEvent";
import { regEventSubmit } from "../../actions/registrationEvent";

import './eventCard.scss';

import Sidebar from '../../components/sidebar/Sidebar';
import Footer from '../../components/footer/Footer';
import RegFormEvent from '../../components/reg-form-event/RegFormEvent';

export class EventCard extends React.Component {
    componentDidMount() {
        this.props.getRequestEvent(this.props.match.params.id);
    }

    render() {
        const { event, regEventSubmit } = this.props;
        return (
            <>
                <Sidebar />
                <div className="event-card">
                    <div className="event-card-cap">
                        <div className="event-card-img">
                            <img src={event.mainBannerPicture} alt="banner" />
                        </div>
                        <div className="event-card-title">
                            <div className="container-wrap">
                                <h2>{event.title}</h2>
                                <p className="country">{event.country}, {event.city}</p>
                                <p className="event-type">{event.eventType}</p>
                                {
                                    event.eventDate && <div className="date">
                                        <p>{ event.eventDate.map((el, ind) => <span key={ind}>{el} </span>) }</p>
                                    </div>
                                }                                
                            </div>
                            <div className="bg-black"></div>
                        </div>
                    </div>            
                    <div className="container-wrap">
                        <div className="event-card-info">
                            <div className="info-content">
                                <p>Age limit: <span>{event.ageLimit}</span></p>
                                <p>Aid stations: <span>{event.aidStations}</span></p>
                                <p>Award medals: <span>{event.awardMedals}</span></p>
                                <p>Equipment storage: <span>{event.equipmentStorage}</span></p>
                                
                                <p>Maximum time: <span>{event.maximumTime}</span></p>
                                <p>Parking: <span>{event.parking}</span></p>
                                <p>Refreshments: <span>{event.refreshments}</span></p>

                                <div className="overview">
                                    <img src={event.mainBannerPicture} alt="banner" />
                                    <p>{event.overview}</p>
                                </div>
                                
                                {
                                    event.map && <div className="map-wrap">
                                        <img src={event.map.toString()} alt="banner" />
                                    </div>
                                }

                            </div>
                            <div className="reg-form">
                                <div className="price">
                                    <h3>Price</h3>
                                    {
                                        event.halfmarathoneDistancePrice && <div className="cost">
                                            <h6>Half marathone:</h6>
                                            <span>{event.halfmarathoneDistancePrice}</span>
                                        </div>
                                    }
                                    {
                                        event.marathoneDistancePrice && <div className="cost">
                                            <h6>Marathone:</h6>
                                            <span>{event.marathoneDistancePrice}</span>
                                        </div>
                                    }
                                </div>
                                <div className="reg-form-event">
                                    <RegFormEvent 
                                        eventId={event._id} 
                                        regEventSubmit={regEventSubmit}
                                    />
                                </div>
                            </div>
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
        event: state.getEventCard.event,
        eventUsers: state.registrationEvent.eventUsers
    };
};

export default connect(
    mapStateToProps,
    { regEventSubmit, getRequestEvent }
)(EventCard);