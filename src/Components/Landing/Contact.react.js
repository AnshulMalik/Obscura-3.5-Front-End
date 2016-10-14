import React from 'react';
import {spring} from 'react-motion';
import Transition from 'react-motion-ui-pack';
import {Link} from 'react-router';

var Contact = React.createClass({
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
                <section id="three" className="wrapper fullscreen style1 fade-up">
                    <div className="inner">
                        <center><h2>Get in touch</h2>
                            <div className=" style1">
                                <section>
                                    <ul className="contact">
                                        <li>
                                            <ul className="icons">
                                                <li><a href="http://www.facebook.com/arucsbo" target="_blank" className="fa-facebook" style={{'fontSize':'100px'}}><span className="label">Facebook</span></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                        </center>
                    </div>
                </section>
            </Transition>
        );
    }
});


module.exports = Contact;