import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./adminHeader.scss";
import { adminMenu } from "../../state/adminMenu";

const adminHeader = props => {

	const logout = (e) => {
		localStorage.removeItem('user');
		props.history.push('/')
	}

	return (
		<header className="header" id="header">
			<div className="header__left-wrapper">
				<div className="header__logo-box">
					<div className="header__logo">
						<Link to="/admin">
							Just_<span>tri</span>_it
                        </Link>
					</div>
				</div>
				<nav className="header__nav">
					<ul className="header__list">
						{adminMenu.map(el =>
							el.hideWhenAuth && props.user ? null : (
								<li className="header__item" key={el.id} onClick={el.logout ? logout : null}>
									<Link to={el.path}>{el.text}</Link>
								</li>
							)
						)}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default withRouter(adminHeader);