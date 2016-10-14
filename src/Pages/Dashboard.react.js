import React from 'react';
import { withRouter, Link } from 'react-router';
import {spring} from 'react-motion';
import Transition from 'react-motion-ui-pack';
import Header from '../Components/Header.react';
import Timer from '../Components/Timer.react';

var Dashboard = React.createClass({
    componentWillMount() {
        if(!this.props.User.user) {
            this.props.router.push('/login');
        } 
    },

    render() {
        let levelUrl;
        if(this.props.User.levelUrl) {
            levelUrl = '/level/' + this.props.User.levelUrl;
        }
        else {
            levelUrl = '/level/' + this.props.User.user.levelUrl;
        }

        return (
            <Transition
                component={false} // don't use a wrapping component
                measure={false} // don't measure component
                enter={{
                    opacity: 1,
                    translateX: spring(0, {stiffness: 150, damping: 10})
                }}
                leave={{
                    opacity: 0,
                    translateX: 150
                }}
                >
                <section className="wrapper style1 fullscreen fade-up">
                    <div className="inner">
                        <center>
                            <h1>Welcome to Obscura 3.5</h1>
                            < br/>
                            <br/>
                            <Timer />
                        </center>
                    </div>
                </section>
            </Transition>
        );
    }
});


module.exports = withRouter(Dashboard);