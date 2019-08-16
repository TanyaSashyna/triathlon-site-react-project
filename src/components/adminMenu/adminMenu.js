import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./adminMenu.scss";
import { adminMenu } from "../../state/adminMenu";

class AdminMenu extends Component {
    constructor(props) {
        super(props);

        this.state = { adminMenu };
    }

    clickEventHandler = (e) => {
        this.props.history.push(e)
    }

    render() {
        return (
            <div className="menu-block">
                {adminMenu.map(el =>
                    el.text !== "Log out" && el.text !== "Main Page" &&
                    <div
                        className="menu-skew"
                        key={el.id}
                        onClick={this.clickEventHandler.bind(null, el.path)}
                    >
                        <h2 className="menu-text">{el.text.toUpperCase()}</h2>
                    </div>
                )}
            </div>
        )
    }
}

export default withRouter(AdminMenu)