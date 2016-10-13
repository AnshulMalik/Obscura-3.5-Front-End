import React from 'react';
import {spring} from 'react-motion';
import Transition from 'react-motion-ui-pack';
import {Link} from 'react-router';

var Rules = React.createClass({
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
                <section id="two" className="wrapper fullscreen style3 fade-up">
                    <div className="inner">
                        <center><h2>Rules</h2></center>
                        <div>
                            <ul>
                                <li>All the answers are in lowercase</li>
                                <li>Nothing is obvious at Obscura. So open the flaps and think out of the box.</li>
                                <li>We can help you, if you are polite enough to ask for it. Don't go around pestering us for hints.</li>
                                <li>Googlebaba knows it all</li>
                                <li>Begin to love surfing. Oh, did we forget to tell we love Wikipedia and tineye.com a lot?</li>
                                <li>Finding the answer is not the final solution.</li>
                                <li>There is no space in any answer</li>
                                
                            </ul>
                        </div>
                        <ul className="actions">
                            <center><Link to="/contact" className="fa fa-angle-left" style={{fontSize: '3rem'}} ></Link></center>
                        </ul>
                    </div>
                </section>
            </Transition>
        );
    }
});

module.exports = Rules;