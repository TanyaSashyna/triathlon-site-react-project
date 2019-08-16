import React from 'react'
import { Link } from "react-router-dom";

import './eventInfoShort.scss';

export class EventInfoShort extends React.Component {
    render() {
        const { title, country, city, eventDate, imgSrc, id } = this.props;
        return (
            <div className="event-item">
                <Link to={`/events/${id}`}>
                    <div className="event-content">
                        <div className="event-cap">
                            <h3 className="caption">{title}</h3>
                            <div className="place">{country}, {city}</div>
                        </div>
                        {
                            eventDate && <div className="event-date">
                                { eventDate.map( (el,ind) =><span key={ind}>{el} </span>) }
                            </div>
                        }
                        <div className="bg-black"></div>
                        <div className="event-picture">
                            <img src={imgSrc} alt={title} />
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default EventInfoShort;