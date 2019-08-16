import React from 'react';

import './footer.scss';

export default class Sidebar extends React.Component {

    render() {
        return (
            <footer className="footer">
                <div className="bg-black"></div>
                <div className="container-wrap">
                    <p>
                        Copyright&copy; 2019 World Triathlon Corporation. All Rights Reserved.<br/>
                        Any use of these marks without the express written consent is prohibited.
                    </p>
                </div>
            </footer>
        )
    }
}