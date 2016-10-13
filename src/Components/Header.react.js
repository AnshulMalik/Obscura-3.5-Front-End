import React from 'react'
import Notifications from './Notifications.react';
import LevelOptions from './LevelOptions.react';

var Header = React.createClass({
    render() {
        return (
            <div>
                <LevelOptions />
            </div>
        )
    }
});

module.exports = Header;