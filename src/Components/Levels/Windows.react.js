import React from 'react';

var Windows = React.createClass({
    render() {
        document.body.setAttribute('background-color', 'white');
        document.body.removeChild(document.getElementsByTagName('canvas')[0]);
        document.body.removeChild(document.getElementsByTagName('canvas')[0]);
//        document.getElementById('app').children[0].removeChild(document.getElementById('sidebar'));
        return (<div>hi</div>);
    }
});

module.exports = Windows;



/*
SOFTWARE TESTING LAB ASSIGNMENT

(Decision Table)
A university  is admitting students in professional core subjects at consitions:
1. Marks in Java >= 70
2. Marks in C++ >= 60
3. Marks in C >= 60
4. Total in all subjects >= 220
or
Total in Java and C++ >= 150

5. If aggregate marks of an eligible candidate is more than 240, he will be eligible for scholarship
   otherwise, eligible for normal course

Program reads marks in 3 subjects and generate following output
1. Not eligible
2. Eligible for scholarship course
3. Eligible for normal course



Question No 2 : Cause-Effect graphing technique

*/