import React from 'react';
import { connect } from "react-redux";

import { getUserInfo } from "../../actions/getUserInfo";
import { getResults } from "../../actions/getResults";

import './profile.scss';

import manAvatar from '../../assets/img/man.svg';
import womanAvatar from '../../assets/img/woman.svg';

import Sidebar from '../../components/sidebar/Sidebar';

export class Profile extends React.Component {
    componentDidMount() {
        this.props.getUserInfo(JSON.parse(localStorage.user).user._id)
        this.props.getResults();
    }

    render() {
        const { user, results } = this.props;
        const userResult = results.filter(result => result.eventUser.email === user.email);
    
        return (
            <>
                <Sidebar/>
                <div className="container-wrap events profile">
                    <div className="caption-page">
                        <h5>Profile page</h5>
                        <h2>{ user.name }</h2>
                    </div>
                </div>
                <div className="container-wrap">
                    <div className="profile-card">
                        <div className="avatar">
                            {
                                <img src={user.sex === "female" ? womanAvatar :manAvatar } alt="avatar" />
                            }
                        </div>
                        <div className="user-info">
                            <div className="item">
                                <span className="cap">Name:</span>
                                <span className="info">{user.name}</span>
                            </div>
                            <div className="item">
                                <span className="cap">E-mail:</span>
                                <span className="info">{user.email}</span>
                            </div>
                            <div className="item">
                                <span className="cap">Phone:</span>
                                <span className="info">{user.phone}</span>
                            </div>
                            <div className="item">
                                <span className="cap">Gender:</span>
                                <span className="info">{user.sex}</span>
                            </div>
                        </div>
                    </div>

                    <div className="profile-tabs-wrap">
                        <div className="tabs-main">
                            <input id="tab1" type="radio" name="tabs" checked readOnly hidden/>
                            <label htmlFor="tab1" className="tab-label">History</label>

                            <div className="tab-item" id="content1">
                               <div className="history">
                                   <table>
                                       <thead>
                                           <tr>
                                               <th>Event</th>
                                               <th>Distance</th>
                                               <th>Time</th>
                                               <th>Event type</th>
                                           </tr>
                                       </thead>
                                       <tbody>
                                           {
                                                userResult.length !== 0 ? userResult.map(result => <tr key={result._id}>
                                                        <td>{result.event.title}</td>
                                                        <td>{result.eventUser.distance}</td>
                                                        <td>{result.time}</td>
                                                        <td>{result.event.eventType}</td>
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
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.userInfo.userProfile,
        results: state.results.results
    };
};

export default connect(
    mapStateToProps,
    { getUserInfo, getResults }
)(Profile);