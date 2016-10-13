import React from 'react';
import {spring} from 'react-motion';
import Transition from 'react-motion-ui-pack';
import { Link } from 'react-router';

var Intro = React.createClass({
    render() {
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
                <section key="1" id="intro" className="wrapper style1 fullscreen fade-up">
                    <div className="inner">
                        <center><h1>Obscura 3.5</h1>
                        <p>	The Biggest Crypt hunt is Back Again</p>
                        <ul className="actions">
                            <li><Link to="/login" className="button scrolly" style={{padding:'6px 1.5em 0'}}>Let's Go</Link></li>
                        </ul></center>
                    </div>
                    <center><Link to="/about" className="fa fa-angle-left" style={{fontSize: '3em'}}></Link></center>
                </section>
            </Transition>
        );
    }
});

module.exports = Intro;