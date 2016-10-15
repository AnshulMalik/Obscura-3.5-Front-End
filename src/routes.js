import React from 'react';
import {Route, IndexRoute} from 'react-router';
import LandingPage from './Pages/Landing.react';
import LoginPage from './Pages/Login.react';
import SignupPage from './Pages/Signup.react';
import LogoutPage from './Pages/Logout.react';
import DashboardPage from './Pages/Dashboard.react';
import LevelPage from './Components/Level.react';
import Encrypt from './Components/Encrypt.react';
import WindowsLevel from './Components/Levels/Windows.react';
// Landing Components
    import Intro from './Components/Landing/Intro.react';
    import About from './Components/Landing/About.react';
    import Rules from './Components/Landing/Rules.react';
    import Contact from './Components/Landing/Contact.react';
    import PageNotFound from './Pages/404.react';
    import Leaderboard from './Components/Leaderboard.react.js';
    import Credits from './Components/Credits.react';
    import tempLevel from './Components/Levels/17.react';

module.exports =
    <Route path='/' component={LandingPage}>
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/dashboard' component={DashboardPage} />
        <IndexRoute component={Intro} />
        <Route path='/level/17_1' component={tempLevel} /> 
        <Route path='/level/windows' component={WindowsLevel} />
        <Route path='/level/:level' component={LevelPage} />
        <Route path='/logout' component={LogoutPage} />
        <Route path='/login' component={LoginPage}/>
        <Route path='/rules' component={Rules} />
        <Route path='/signup' component={SignupPage}/>
        <Route path="/encrypt" component={Encrypt} />
        <Route path='/leaderboard'component={Leaderboard} />
        <Route path="/credits" component={Credits} />
        <Route path="*" component={PageNotFound} />
    </Route>
;
