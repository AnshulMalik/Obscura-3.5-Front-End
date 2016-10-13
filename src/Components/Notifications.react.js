import React from 'react'

var Notifications = React.createClass({
    render() {
        return (
            <div id="note" className="notification-bar" >
                <input id="hide" type="radio" name="Nbar" value="hide" checked="checked" />
                <input id="show"  type="radio" name="Nbar" value="show" />

                <label htmlFor="show"  className="badge1" data-badge="3" ></label>

                <div className="notification-text">
                    <div id="unseen"><a href="#">Hello Bro, you can hide this notification by clicking the close button.</a></div>
                    <div id="unseen"><a href="#">Hello Bro, you can hide this notification by clicking the close button.</a></div>
                    <div id="unseen"><a href="#">Hello Bro, you can hide this notification by clicking the close button.</a></div>
                    <div id="seen"><a href="#">Hello Bro, you can hide this notification by clicking the close button.</a></div>
                    <div id="seen"><a href="#">Hello Bro, you can hide this notification by clicking the close button.</a></div>
                    <div id="seen"><a href="#">Hello Bro, you can hide this notification by clicking the close button.</a></div>
                    <div id="seen"><a href="#">Hello Bro, you can hide this notification by clicking the close button.</a></div>
                    <div id="seen"><a href="#">Hello Bro, you can hide this notification by clicking the close button.</a></div>
                    <div id="seen"><a href="#">Hello Bro, you can hide this notification by clicking the close button.</a></div>
                    <div id="seen"><a href="#">Hello Bro, you can hide this notification by clicking the close button.</a></div>
                    <div id="seen"><a href="#">Hello Bro, you can hide this notification by clicking the close button.</a></div>
                    <div id="seen"><a href="#">Hello Bro, you can hide this notification by clicking the close button.</a></div>
                </div>
               <label htmlFor="hide " >hide</label>
			</div>
        );
    }
});

module.exports = Notifications;