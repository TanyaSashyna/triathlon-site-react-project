import React from 'react';
import { connect } from "react-redux";

import { getPhotogalary } from "../../actions/photogalaryActions";
import { getAllEvents } from "../../actions/getAllEvents";

import './gallery.scss';

import Sidebar from '../../components/sidebar/Sidebar';
import Footer from '../../components/footer/Footer';
import FiltersEvents from '../../components/filtersEvents/FiltersEvents';

class Gallery extends React.Component {
    componentDidMount() {
        this.props.getPhotogalary();
        this.props.getAllEvents();
    }

    render() {
        const { gallery, eventsArrTitles, getPhotogalary } = this.props;
        return (
            <>
                <Sidebar/>
                <div className="container-wrap events">
                    <div className="caption-page">
                        <h2>Gallery page</h2>
                    </div>
                </div>
                <div className="container-wrap">

                    <div className="events-filters">
                        <h4>Gallery filter</h4>
                        <FiltersEvents labelType="Event Title" getRequest={getPhotogalary} eventTypes={eventsArrTitles} />
                    </div>

                    <div className="gallery-wrap">
                        {
                            gallery.length !== 0 ? gallery.map((item,ind) => 
                                <div className="gallery-item" key={ind}>
                                    <h3>{item.eventTitle}</h3>
                                    <h5>{item.eventType}</h5>

                                    <div className="gallery-photo">
                                        {
                                            item.pictures.map((photo,ind) => 
                                                <div className="photo-item" key={ind}>
                                                    <div className="photo-item-bg">
                                                        <img src={photo} alt={item.eventType} />
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            ) : <p className="not-found">Not found gallery</p>
                        }
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
};

const mapStateToProps = state => {
    return {
        gallery: state.photogalaryReducer.gallery,
        eventsArrTitles: state.getEvents.eventsArrTitles
    };
};

export default connect(
    mapStateToProps,
    { getPhotogalary, getAllEvents }
)(Gallery);