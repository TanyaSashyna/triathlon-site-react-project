import React, { Component } from 'react';
import { connect } from "react-redux";
import "./adminMainPage.scss";
import Header from '../../components/adminHeader/adminHeader';
import AdminMenu from '../../components/adminMenu/adminMenu';

class AdminMainPage extends Component {

  render() {

    return (
      <div className="admin-main-page-wrapper">
        <Header />
        <AdminMenu />
      </div>
    )
  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(AdminMainPage);
