import React from 'react';
import { Link } from 'react-router';

var Sidebar = React.createClass({

    render() {
        return (
            <section id="sidebar">
				<div class="inner">
					<nav>
						<ul>
							<li><Link to="/">Welcome</Link></li>
							<li><Link to="/about">About Us</Link></li>
							<li><Link to="/rules">Rules</Link></li>
							<li><Link to="/contact">Contact Us</Link></li>
							{ this.props.User.user ? 
								(<li><Link to="/logout">Logout</Link></li>) :  (<li><Link to="/login">Sign In</Link></li>) }
							{this.props.User.user ? <li><Link to="/dashboard">Dashboard</Link></li> : 
							(<li><Link to="/signup">Sign Up</Link></li>) }
							{this.props.User.user ? <li><Link to="/leaderboard">Leaderboard</Link></li>: ''}
							{this.props.User.user ? <li><Link to="/credits">Credits</Link></li>: ''}
							
						</ul>
					</nav>
				</div>
			</section>
        );
    }
});

module.exports = Sidebar;