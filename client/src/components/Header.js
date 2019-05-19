import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper teal lighten-2">
                    <a href="/" className="left brand-logo">Emaily</a>
                    <ul id="nav-mobile" className="right">
                        <li>
                            <a href="/">Login</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
};

export default Header;