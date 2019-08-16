import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { postLoginSubmit } from "../../actions/login";

import './login.scss';

import LoginForm from '../../components/login-form/LoginForm';

export class Login extends React.Component {
    render() {
        const { postLoginSubmit, message } = this.props;
        return (
            <div className="login-page">
                <div className="form-login">
                    <div className="logo blue">
                        <Link to="/">
                            Just_<span>tri</span>_it
                        </Link>
                    </div>
                    {
                        message && <h3>{message}</h3>
                    }
                    <LoginForm postLoginSubmit={postLoginSubmit}/>
                    <p className="form-quest">Don't have an account? <Link to="/registration">Sign up now</Link></p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.login.user,
        message: state.login.message
    };
};

export default connect(
    mapStateToProps,
    { postLoginSubmit }
)(Login);