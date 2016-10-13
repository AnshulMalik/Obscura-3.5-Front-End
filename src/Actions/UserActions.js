import Alt from '../alt';

class UserActions{
    fbLogin(data) {
        return data;
    }
    formLogin(data) {
        return data;
    }
    formSignup(data) {
        return data;
    }
 
    gLogin(data) {
        return data;
    }
    logout() {
        return 1;
    }
    submitAnswer(data) {
        return data;
    }
}

module.exports = Alt.createActions(UserActions);