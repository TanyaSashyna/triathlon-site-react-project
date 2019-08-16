import React from 'react';
import { connect } from "react-redux";

import { getAllReviews, postReviewSubmit } from "../../actions/reviews";
import { getAllEvents } from "../../actions/getAllEvents";

import './reviews.scss';

import Sidebar from '../../components/sidebar/Sidebar';
import Footer from '../../components/footer/Footer';
import ReviewForm from '../../components/review-form/ReviewForm';
import FiltersReviews from '../../components/filtersReviews/filtersReviews';

export class Reviews extends React.Component {
    componentDidMount() {
        this.props.getAllReviews();
        this.props.getAllEvents();
    }

    render() {
        const { postReviewSubmit, reviews, getAllReviews, eventsArr } = this.props;
        
        return (
            <>
                <Sidebar/>
                <div className="container-wrap events">
                    <div className="caption-page">
                        <h2>Reviews page</h2>
                    </div>
                </div>
                <div className="container-wrap">

                    <div className="events-filters">
                        <h4>Reviews filter</h4>
                        <FiltersReviews labelType="Event Title" getRequest={getAllReviews} eventTypes={eventsArr} />
                    </div>

                    <div className="reviews-wrap">
                        {
                            reviews.length !== 0 ? reviews.map((reviewer, ind) => ind < 10 &&
                                <div className="reviews-item" key={ind}>
                                    <div className="review-content">
                                        <div className="reviews-name">{reviewer.name}</div>
                                        <div className="reviews-date">
                                            <i className="fa fa-calendar-o" aria-hidden="true"></i>
                                            { reviewer.date }
                                        </div>
                                        <div className="reviews-text">{reviewer.text}</div>
                                    </div>
                                </div>
                            ) : <p className="not-found">Not found feedback</p>
                        }
                    </div>
                    <div className="reviews-wrap-add">
                        <h3>Send your reviews</h3>
                        <ReviewForm postReviewSubmit={postReviewSubmit} eventsArr={eventsArr}/>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        reviews: state.allReviews.reviews,
        events: state.getEvents.events,
        eventsArr: state.getEvents.eventsArrShort
    };
};

export default connect(
    mapStateToProps,
    { getAllReviews, postReviewSubmit, getAllEvents }
)(Reviews);