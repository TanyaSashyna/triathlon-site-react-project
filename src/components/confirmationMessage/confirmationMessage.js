import React, {Component} from 'react';
import "./confirmationMessage.scss";

export default class ConfirmationMessage extends Component {
    
    state = {messageTimer: null}

    componentDidMount() {
        const {closeMessage} = this.props
        const messageTimer = setTimeout( closeMessage, 3000);
        this.setState({ messageTimer });
        document.body.classList.remove("stop-scroling")
    }
    
    componentWillUnmoumt() {
        clearTimeout(this.state.messageTimer)
    }

    render () {
        const {children} = this.props
        return ( 
            <div className = "background">
                <div id = "confirmation-wrapper">
                    {children}
                </div>
            </div>
        )
    }
};