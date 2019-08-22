import React, { Component } from 'react';
import { connect } from 'react-redux';
import './adminMainPage.scss';
import * as actions from '../../actions/adminMainPageActions';
import Header from '../../components/adminHeader/adminHeader';
import AdminMenu from '../../components/adminMenu/adminMenu';

class AdminMainPage extends Component {
	render() {
		console.log('main', this.props);
		return (
			<div className="admin-main-page-wrapper">
				<Header changeEditFlag={this.props.changeEditFlag} />
				<AdminMenu />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, actions)(AdminMainPage);
