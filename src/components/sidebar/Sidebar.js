import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { showSidebar } from "../../actions/show-sidebar";
import { getLogoutUserSubmit } from "../../actions/logout";

import './sidebar.scss';

const siteMenu = [
    {
        text: 'Home',
        href: '/',
        id: 0
    },
    {
        text: 'Events',
        href: '/events',
        id: 1
    },
    {
        text: 'Results',
        href: '/results',
        id: 2
    },
    {
        text: 'Gallery',
        href: '/gallery',
        id: 3
    },
    {
        text: 'Reviews',
        href: '/reviews',
        id: 4
    }
];

export class Sidebar extends React.Component {
    logoutHandler = () => {
        localStorage.removeItem('user');
        this.props.history.push('/');
        this.props.getLogoutUserSubmit()
    }

    render() {
        
        const { showSidebar, showSidebarFlag } = this.props;
        const role = localStorage.user && JSON.parse(localStorage.user).user.role;

        return (
            <div className={ !showSidebarFlag ? 'menu close' : 'menu' }>
                <nav>
                    <div className="logo">
                        <Link to="/">
                            Just_<span>tri</span>_it
                        </Link>
                    </div>
                    <ul>
						{
                            role === 'user' && <li><Link to="/profile">Profile</Link></li>
						}
						
                        {
                            siteMenu.map(link =>
                                <li key={link.id}>
                                    <Link to={link.href}>{link.text}</Link>
                                </li>
                            )
                        }
						{
                            !role && <li><Link to="/login">Login</Link></li>
						}
                        {
                            role === 'user' && <li>
                                <button className="logout" onClick={this.logoutHandler}>
                                    <i className="fa fa-sign-out"></i>
                                </button>
                            </li>
						}
                        {
                            role === 'admin' && <li><Link to="/admin">Admin panel</Link></li>
                        }
                    </ul>
                </nav>
                <div className="menu-skew">
                    <div className="img-bg"></div>
                </div>
                <button className={ showSidebarFlag ? 'burgerIcon open' : 'burgerIcon' } type="button" onClick={showSidebar}><span></span></button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        showProfile: state.login.showProfile,
        showSidebarFlag: state.sidebar.showSidebar
    };
};

export default connect(
    mapStateToProps,
    { showSidebar, getLogoutUserSubmit }
)(withRouter(Sidebar));