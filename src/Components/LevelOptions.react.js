import React from 'react';

var LevelOptions = React.createClass({
    render() {
        return (
            <select className="lvls" id="selectLevel" name="levels" >
                <option value="level 0">Level 0</option>
            </select>
        );
    }
});

module.exports = LevelOptions;

//Font: Josefin Slab