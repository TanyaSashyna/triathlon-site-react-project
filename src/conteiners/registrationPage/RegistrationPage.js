import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { postCheckInSubmit } from "../../actions/registration";

import './registration-page.scss';

import RegistrationForm from '../../components/registration-form/RegistrationForm';

export class Login extends React.Component {
    render() {
        const { message, history } = this.props;

        return (
            <div className="reg-page">
                <div className="form-reg">
                    <div className="logo blue">
                        <Link to="/">
                            Just_<span>tri</span>_it
                        </Link>
                    </div>
                    {
                        message && <h3>{message}</h3>
                    }
                    <RegistrationForm message={message} history={history} postCheckInSubmit={this.props.postCheckInSubmit}/>
                    <p className="form-quest">You have an account? <Link to="/login">Login now</Link></p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        message: state.registration.message
    };
};

export default connect(
    mapStateToProps,
    { postCheckInSubmit }
)(Login);