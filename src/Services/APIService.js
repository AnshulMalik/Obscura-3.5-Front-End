import NProgress from 'nprogress-npm';

var API_HOME = "/api/"
var endpoints = {
    FORM_LOGIN: API_HOME + "flogin/",
    FORM_SIGNUP: API_HOME + 'signup/',
    GET_LEVEL: API_HOME + "level/{0}",
    GET_SUB_LEVEL: API_HOME + "level/{0}/{1}",
    SIGNUP: API_HOME + 'signup/',
    SOCIAL_LOGIN: API_HOME + 'socialLogin/',
    SUBMIT_ANSWER: API_HOME + 'submitAnswer/',
}

var APIService = {
    
    formLogin(data) {
        NProgress.start();
        return fetch(endpoints.FORM_LOGIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
    },

    formSignup(data) {
        data.signupType = "FORM";
        NProgress.start();
        return fetch(endpoints.FORM_SIGNUP, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
    },

    getLevel(level, token) {
        NProgress.start();
        return fetch(endpoints.GET_LEVEL.format(level), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authToken': token,
            }

        });
    },
    getSubLevel(level, subLevel, token) {
        NProgress.start();
        return fetch(endpoints.GET_SUB_LEVEL.format(level, subLevel), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authToken': token,
            }
        });
    },
    socialLogin(data) {
        NProgress.start();
        NProgress.start();
        return fetch(endpoints.SOCIAL_LOGIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    },

    submitAnswer(data) {
        NProgress.start();
        let body = { token: data.token, answer: data.answer, level: data.parentLevel }
        
        if(data.level) 
            body.subLevel = data.level;
        else
            body.subLevel = data.parentLevel;
        
        return fetch(endpoints.SUBMIT_ANSWER, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
    }

}


module.exports = APIService;