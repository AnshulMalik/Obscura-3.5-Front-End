import React from 'react';

var Timer = React.createClass({
    render() {
        let target_date = 1476444600000;
        let days, hours, minutes, seconds; // variables for time units

        let interv = setInterval(function () { getCountdown(); }, 1000);

        function getCountdown(){
            let countdown = document.getElementById("tiles");
            // find the amount of "seconds" between now and target
            var current_date = new Date().getTime();
            var seconds_left = (target_date - current_date) / 1000;

            if(seconds_left <= 0) {
                clearInterval(interv);
                window.location.pathname="/level/0";
            }

            days = pad( parseInt(seconds_left / 86400) );
            seconds_left = seconds_left % 86400;

            hours = pad( parseInt(seconds_left / 3600) );
            seconds_left = seconds_left % 3600;

            minutes = pad( parseInt(seconds_left / 60) );
            seconds = pad( parseInt( seconds_left % 60 ) );

            // format countdown string + set tag value
            countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>";
        }

        function pad(n) {
            return (n < 10 ? '0' : '') + n;
        }


        return (


                <div id="countdown">

                    <div id='tiles'></div>
                    <div className="labels">
                        <li>Days</li>
                        <li>Hours</li>
                        <li>Mins</li>
                        <li>Secs</li>
                    </div>
                </div>

        );
    }

});
module.exports = Timer;