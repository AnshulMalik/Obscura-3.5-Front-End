import React from 'react';
import { withRouter } from 'react-router';
import UserActions from '../Actions/UserActions';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import {spring} from 'react-motion';
import Transition from 'react-motion-ui-pack';

var SignupPage = React.createClass({

    handleSignup(event) {
        event.preventDefault();
        const form = event.target.children[1].children;
        const firstName = form[5].value;
        const lastName = form[6].value;
        const phone = form[7].value;
        const email = form[8].value;
        const password = form[9].value;
        const confirmPassword = form[10].value;

        const data ={
            firstName: firstName,
            lastName : lastName,
            phone: phone,
            email: email,
            password: password,
            confirmPassword: confirmPassword
            };

        UserActions.formSignup(data);
    },
    handleFacebookResponse(response) {
        if(response.accessToken) {
            UserActions.fbLogin({name: response.name, email: response.email, accessToken : response.accessToken, uid: response.userID});
        }
    },

    handleGoogleResponse(response) {
        if(response.googleID) {
            const uid = response.googleID;
            const name = response.profileDetail.ig;
            const email = response.profileDetail.U3;
            const accessToken = response.tokenDetail.access_token;
            UserActions.gLogin({name : name, email: email, accessToken: accessToken, uid: uid});
        }
    },
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
                <section id="signUp" className="wrapper fullscreen style1 fade-up">
                    <div className="inner">
                    <div className="w3-quarter">
                        <br />
                    </div>
                    <div className="w3-half ">
                        <form id="FormSignUp" className="w3-border" onSubmit={this.handleSignup}>
                        <br />
                        <center>
                            <h2>Obscura 3.5</h2>
                            <h5>SignUp with</h5>
                            <FacebookLogin
                                appId="1171065776241595"
                                autoLoad={true}
                                fields="name,email,picture"
                                textButton="Facebook"
                                callback={this.handleFacebookResponse}
                                cssClass="w3-margin w3-indigo  btn btn-primary"
                                icon="fa-facebook" 
                            />
                            or
                            <GoogleLogin
                                clientId="679139204576-92doaqm03ubptl267md0o897rh7s9llu.apps.googleusercontent.com"
                                callback={this.handleGoogleResponse}
                                cssClass="w3-margin w3-red btn btn-primary"
                                offline={false}
                                >
                                <i className="fa fa-google"></i> 
                                <span>&nbsp; Google</span>
                            </GoogleLogin>
                            <hr style={{width: '80%'}} className="align-right" />

                            <input id="inputEnter2" type="text" name="firstname" className=" w3-input w3-margin" placeholder="First Name*"  required/>
                            <input id="inputEnter2" type="text" name="lastname" className="w3-input w3-margin" placeholder="Last Name*"  /> 
                            <input id="inputEnter2" className="w3-input w3-margin" placeholder="Phone No.*"  type="text" required/>
                            <input id="inputEnter2" className="w3-input w3-margin" placeholder="Email Id*"  type="email" required/>
                            <input id="inputEnter2" className="w3-input w3-margin" placeholder="Password*"  type="password" required/>
                            <input id="inputEnter2" className="w3-input w3-margin" placeholder="Confirm Password*"  type="password" required/>
                            <br />
                            
                            <button type="submit" className="w3-margin btn btn-primary">Signup</button><br />
                            </center>
                        </form>
                    </div>
                    <div class="w3-quarter">
                        <br />
                    </div>
                </div>
            </section>
        </Transition>
        );
    }
});


module.exports = SignupPage;