import React, { Component } from "react";
import { connect } from "react-redux";
import { changeEditFlag } from "../../actions/adminMainPageActions";
import {getEvents, getPhotogalary, postPhotogalary} from "../../actions/photogalaryActions";
import AdminHeader from "../../components/adminHeader/adminHeader";
import PhotogalaryForm from "../../components/adminPhotogalary/adminPhotogalaryReduxForm";
import ConfirmationMessage from "../../components/confirmationMessage/confirmationMessage";

class AdminAddPhotogalarytPage extends Component {
    state = {
        confirmationMessageFlag: false
    };

    componentDidMount() {
        this.props.getEvents();
        this.props.getPhotogalary()
    }

    showConfirmationMessage = () => {
        this.setState({ confirmationMessageFlag: true })
    };

    closeConfirmationMessage = () => {
        this.setState({ confirmationMessageFlag: false })
    };

    render() {
        const {
            eventTypes,
            eventList,
            postPhotogalary,
        } = this.props

        return (
            <>
                <AdminHeader changeEditFlag={this.props.changeEditFlag}/>
                <div className="photogalary-form">
                    <div className="photogalary-form__content">
                        <h2 className="photogalary-form__form-title">ADD PHOTOGALARY</h2>
                        <PhotogalaryForm
                            eventTypes={eventTypes}
                            eventList={eventList}
                            submitHandler={postPhotogalary}
                        />
                    </div>
                    {this.state.confirmationMessageFlag &&
                        <ConfirmationMessage closeMessage={this.closeConfirmationMessage}>
                            <div className="text">Photogalary has beed added.</div>
                        </ConfirmationMessage >}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    eventList: state.adminMainPageReducer.eventList,
    eventTypes: state.adminMainPageReducer.eventTypes,
    addPhotogalaryInitialValue: state.photogalaryReducer.addPhotogalaryInitialValue,
    gallery: state.photogalaryReducer.gallery
});

export default connect(
    mapStateToProps,
    {changeEditFlag, getEvents, getPhotogalary, postPhotogalary}
)(AdminAddPhotogalarytPage);