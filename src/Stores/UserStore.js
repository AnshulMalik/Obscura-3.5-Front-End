import React from 'react';
import alt from '../alt';
import UserActions from '../Actions/UserActions';
import APIService from '../Services/APIService';
import { notify } from 'react-notify-toast';
import NProgress from 'nprogress-npm';

class UserStore {
    constructor() {
        this.flashMessage = ""; 
        this.isLoading = false;
        this.user = null;
        this.levelUrl = null;
        this.bindListeners({
            handleFBLogin: UserActions.FB_LOGIN,
            handleFormLogin: UserActions.FORM_LOGIN,
            handleFormSignup: UserActions.FORM_SIGNUP,
            handleGLogin: UserActions.G_LOGIN,
            handleLogout: UserActions.LOGOUT,
            submitAnswer: UserActions.SUBMIT_ANSWER,
            updateLevel: UserActions.UPDATE_USER_CURRENT_LEVEL,
        });
        if(localStorage.getItem('user'))
            this.user = JSON.parse(localStorage.getItem('user'));
    }

    handleFBLogin(data) {
        data.type = 0;
        APIService.socialLogin(data).then(response => {
            response.json().then(data => {
                if(data.responseCode == 200) {
                    this.setState({user: data, level: data.level, parentLevel: data.parentLevel});
                    notify.show("Login successful", 'success', 2000);
                    localStorage.setItem('user', JSON.stringify(data));                    
                }
                else {
                    notify.show(data.message, 'warning', 2000);
                }

                NProgress.done();
            }); 
        }).catch(error => {
            console.log(error);
            notify.show("Something went horribly wrong, please contact admin.");
            NProgress.done();
        })
    }

    handleFormLogin(data) {
        if(!data.password.length) {
            notify.show("Please enter password", 'warning', 2000);
            return false;
        }
        APIService.formLogin(data).then(response => {
            response.json().then(data => {
                if(data.responseCode === 200){
                    this.setState({user: data, level: data.level, parentLevel: data.parentLevel});
                    notify.show("Login successful", 'success', 2000);
                    localStorage.setItem('user', JSON.stringify(data));
                }
                else {
                    notify.show(data.message, 'warning', 2000);
                }
                NProgress.done();
            });
        }).catch(error => {
            console.log(error);
            notify.show("Something went horribly wrong, please contact admin.", "warning", 2000);
            NProgress.done();
        });
    }

    handleFormSignup(data) {
        console.log(data);
        var error = "";
        if(!data.firstName.length) {
            error = "First name can not be empty";
        }
        else if(!data.password.length) {
            error = "Password can not be left blank";
        }
        else if(data.password !== data.confirmPassword) {
            error = "Passwords didn't match";
        }

        if(error.length) {
            notify.show(error, 'warning', 2000);
            return false;
        }

        APIService.formSignup(data).then(response => {
            response.json().then(data => {
                if(data.responseCode == 200) {
                    notify.show("Signup successful", 'success', 2000);
                    this.setState({user: data, level: data.level, parentLevel: data.parentLevel});
                }
                else {
                    notify.show(response.message, 'warning', 2000);
                }
                NProgress.done();
            });
        }).catch(error => {
            console.log(error);
            notify.show("Something went horribly wrong, please contact admin.");
            NProgress.done();
        })

    }

    handleGLogin(data) {
        data.type = 1;
        APIService.socialLogin(data).then(response => {
            response.json().then(data => {
                if(data.responseCode == 200) {
                    this.setState({user: data, level: data.level, parentLevel: data.parentLevel});
                    notify.show("Login successful, taking you to dashboard", 'success', 2000);
                  localStorage.setItem('user', JSON.stringify(data));                    
                }
                else {
                    notify.show(data.message, 'warning', 2000);
                }
                NProgress.done();
            });
        }).catch(error => {
            console.log(error);
            notify.show("Something went horribly wrong, please contact admin.");
            NProgress.done();
        });
    }

    handleLogout() {
        localStorage.removeItem('user');
        this.setState({user: null, level: null, parentLevel: null});
        notify.show("Logout successful", 'success', 2000);
    }

    submitAnswer(data) {
        APIService.submitAnswer(data).then(response => {
            response.json().then(resp => {
                if(resp.responseCode != 200) {
                    notify.show(resp.message, "warning", 2000);
                }
                else {
                    notify.show("Correct Answer", "success", 2000);
                    UserActions.updateUserCurrentLevel({level: resp.level, parentLevel: resp.plevel, url: resp.url})
                    window.location.pathname = '/level/'+ resp.url;
                }
                NProgress.done();
            })
        }).catch(error => {
            NProgress.done();
        });
    }

    updateLevel(data) {
        this.setState({level: data.level, parentLevel: data.parentLevel, levelUrl: data.url});
    }
}

module.exports = alt.createStore(UserStore, 'UserStore');