import React from 'react';
import {spring} from 'react-motion';
import Transition from 'react-motion-ui-pack';
import {Link } from 'react-router';

var About = React.createClass({
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
                <section id="one" className="wrapper fullscreen style2 spotlights fade-up">
                    <section>
                        
                        <div className="wrapper content">
                            <div class="inner">
                                <center><h2 >About Us</h2></center>
                                
                                <p>One of the most happening and fun crypt hunts of this year is ObscurA 3.5. ObscurA is derived from the word "Obscure" which means "keep from being seen; conceal", and that is what we do. We allow you to use any means at your disposal (that includes Google) to crack the questions we throw at you. BUT there is a catch. Our questions are not straightforward. They are based on wordplay, cyphers and lateral thinking (among other things). So put on your thinking caps, flex your fingers and get ready for a race to the finish line. The prize, you ask. The title of the biggest, baddest crypt-hunter in town. Happy hunting!!..</p>
                                
                            </div>
                        </div>

                    </section>
                    <center><Link to="/rules" className="fa fa-angle-left" style={{fontSize: '3rem'}} ></Link></center>
                </section>
            </Transition>
        );
    }
});

module.exports = About;

/*

*/