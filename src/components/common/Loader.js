import React, {PropTypes} from 'react';
import 'loaders.css';
class Header extends React.Component {
    render() {
        return (
            <div className="loader floating-centered">
                <div className="ball-grid-pulse">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
}


export default Header;