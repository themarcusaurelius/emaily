import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Payments from './Payments';

class Header extends Component {
    //Helper method to inspect this.props.auth and return it's value as JSX
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false: 
                return <li><a href="/auth/google">Login</a></li>
            default:
                return [
                    <li key="1"><Payments /></li>,
                    <li key="2"><a href="/api/logout">Logout</a></li>   
                ];
        };
    };

    render() {
        return (
            <nav>
                <div className="nav-wrapper teal lighten-2">
                    <Link 
                        //Ternary operator: left option truthy/right option falsy
                        to={this.props.auth ? '/surveys' : '/'} 
                        className="left brand-logo"
                    >
                        Emaily
                    </Link>
                    <ul id="nav-mobile" className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
};

//Destructered with ES15 syntax - hooking up state with our redux store
function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, )(Header);