import React from 'react';
import {withRouter} from 'react-router';
import Notifications, { notify } from 'react-notify-toast';
import EasyTransition from 'react-easy-transition';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import UserStore from '../Stores/UserStore';
import APIService from '../Services/APIService';
import AltContainer from 'alt-container';
import Sidebar from '../Components/Sidebar.react';
import Level from '../Components/Level.react'; 

var LandingPage = React.createClass({
    render() {
        return (
            
            <div>
                <Notifications />
                <AltContainer stores = {{User: UserStore }}>
                    <Sidebar />
                </AltContainer>
                <div id="wrapper">

                    <AltContainer stores = {{User: UserStore }}>
                            {this.props.children}
                    </AltContainer>
                </div>
            </div> 
        );
    }
});


module.exports = withRouter(LandingPage);
/*

                    <RouteTransition
                        pathname={this.props.location.pathname}
                        atEnter={{ translateX: 100 }}
                        atLeave={{ translateX: -100 }}
                        atActive={{ translateX: 0 }}
                        mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}
                        >
                        {this.props.children}
                    </RouteTransition>
*/