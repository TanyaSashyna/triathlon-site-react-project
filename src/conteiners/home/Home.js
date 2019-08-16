import React from 'react';
import { connect } from "react-redux";

import { getAllEvents } from "../../actions/getAllEvents";

import './home.scss';

import logo from '../../assets/img/logo.png';
import bgVideo from '../../assets/img/bg-video.mp4';
import campsite from '../../assets/img/logos/Campsite_logo.svg';
import jwMarriott from '../../assets/img/logos/JWMarriott.svg';
import losAngeles from '../../assets/img/logos/Los_Angeles_Galaxy_logo.svg';
import salesforce from '../../assets/img/logos/Salesforce_Logo.svg';
import toyota from '../../assets/img/logos/Toyota_carlogo.svg';
import usat from '../../assets/img/logos/USAT.svg';
import velofix from '../../assets/img/logos/velofix.svg';
import xterra from '../../assets/img/logos/Xterra.svg';
import acs from '../../assets/img/logos/ACS.svg';

import Sidebar from '../../components/sidebar/Sidebar';
import EventInfoShort from '../../components/eventInfoShort/EventInfoShort';
import Footer from '../../components/footer/Footer';

const sponsors = [
    {
        src: campsite,
        alt: 'campsite',
        id: 1
    },
    {
        src: jwMarriott,
        alt: 'jwMarriott',
        id: 2
    },
    {
        src: losAngeles,
        alt: 'losAngeles',
        id: 3
    },
    {
        src: salesforce,
        alt: 'salesforce',
        id: 4
    },
    {
        src: toyota,
        alt: 'toyota',
        id: 5
    },
    {
        src: usat,
        alt: 'usat',
        id: 6
    },
    {
        src: velofix,
        alt: 'velofix',
        id: 7
    },
    {
        src: xterra,
        alt: 'xterra',
        id: 8
    },
    {
        src: acs,
        alt: 'acs',
        id: 9
    }
];

export class Home extends React.Component {
    componentDidMount() {
        this.props.getAllEvents();
    }

    render() {
        const { events } = this.props;
        return (
            <>
                <Sidebar/>
                <div className="hero">
                    <div className="container-wrap">
                        <div className="hero-wrap">
                            <div className="hero-logo">
                                <img src={logo} alt="logo" />
                                <h3><span className="just">Just</span><span className="tri">tri</span> it</h3>
                            </div>
                            <h1>International competitions among professionals and amateurs</h1>
                        </div>
                    </div>                    

                    <div className="bg-black"></div>
                    <div className="bg-img"></div>

                    <video id="background-video" loop autoPlay>
                        <source src={bgVideo} type="video/mp4" />
                        <source src={bgVideo} type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="container-wrap home events">
                    <div className="events-content">
                        <h4>Last Events</h4>

                        <div className="events-list">
                            {
                                events.length !== 0 ? events.map( (event,ind) => ind < 6 && <EventInfoShort
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

                <div className="sponsors">
                    <div className="container-wrap">
                        <h4>Sponsors</h4>
                        <div className="sponsors-wrap">
                            {
                                sponsors.map( sponsor =>
                                    <div className="item" key={sponsor.id}>
                                        <img src={sponsor.src} alt={sponsor.alt} />
                                    </div>
                                )
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
)(Home);