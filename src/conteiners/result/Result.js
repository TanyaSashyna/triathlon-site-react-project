import React from 'react';
import { connect } from "react-redux";

import { getResults } from "../../actions/getResults";
import { getAllEvents } from "../../actions/getAllEvents";

import './result.scss';

import Sidebar from '../../components/sidebar/Sidebar';
import Footer from '../../components/footer/Footer';
import FiltersReviews from '../../components/filtersReviews/filtersReviews';

export class Result extends React.Component {
    componentDidMount() {
        this.props.getResults();
        this.props.getAllEvents();
    }
    render() {
        const {marathone, halfMarathone, getResults, eventsArr} = this.props;
        return (
            <>
                <Sidebar/>
                <div className="container-wrap events">
                    <div className="caption-page">
                        <h2>Results page</h2>
                    </div>
                </div>

                <div className="container-wrap">
                    <div className="events-filters">
                        <h4>Result filter</h4>
                        <FiltersReviews labelType="Event Title" getRequest={getResults} eventTypes={eventsArr} />
                    </div>

                    <div className="results-wrap">
                        <div className="profile-tabs-wrap">
                            <div className="tabs-main">
                                <input id="tab1" type="radio" name="tabs" checked readOnly hidden/>
                                <label htmlFor="tab1" className="tab-label">Marathone</label>

                                <input id="tab2" type="radio" name="tabs" readOnly hidden/>
                                <label htmlFor="tab2" className="tab-label">Half marathone</label>

                                <div className="tab-item" id="content1">
                                    <div className="history">
                                        <table>
                                            <thead>
                                                    <tr>
                                                        <th>User name</th>
                                                        <th>Event</th>
                                                        <th>Event type</th>
                                                        <th>Time</th>
                                                        <th>User sex</th>
                                                    </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    marathone.length !== 0 ? marathone.map(result =><tr key={result._id}>
                                                            <td>{result.eventUser.name}</td>
                                                            <td>{result.event.title}</td>
                                                            <td>{result.event.eventType}</td>
                                                            <td>{result.time}</td>
                                                            <td><i className={`fa fa-${result.eventUser.sex === 'female' ? 'female' : 'male'}`} aria-hidden="true"></i></td>
                                                        </tr>
                                                    ) : <tr><td colSpan="5"><p className="not-found">Not found results</p></td></tr>
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="tab-item" id="content2">
                                    <div className="history">
                                        <table>
                                            <thead>
                                                    <tr>
                                                        <th>User name</th>
                                                        <th>Event</th>
                                                        <th>Event type</th>
                                                        <th>Time</th>
                                                        <th>User sex</th>
                                                    </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    halfMarathone.length !== 0 ? halfMarathone.map(result =><tr key={result._id}>
                                                            <td>{result.eventUser.name}</td>
                                                            <td>{result.event.title}</td>
                                                            <td>{result.event.eventType}</td>
                                                            <td>{result.time}</td>
                                                            <td><i className={`fa fa-${result.eventUser.sex === 'female' ? 'female' : 'male'}`} aria-hidden="true"></i></td>
                                                        </tr>
                                                    ) : <tr><td colSpan="5"><p className="not-found">Not found results</p></td></tr>
                                                }
                                            </tbody>
                                        </table>
                                    </div>
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
        results: state.results.results,
        marathone: state.results.marathoneResults,
        halfMarathone: state.results.halfMarathoneResults,
        events: state.getEvents.events,
        eventsArr: state.getEvents.eventsArrShort
    };
};

export default connect(
    mapStateToProps,
    { getResults, getAllEvents }
)(Result);