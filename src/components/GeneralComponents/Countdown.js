import { useState, useEffect } from 'react';
import '../stylesheet/countdown.css'

const Countdown = () => {

    // unary operator returns date as a number (epoch/time in milliseconds)
    const targetDate = +new Date("2021-09-01T00:12:00.000-04:00")

    const calculateTimeRemaining = () => {

        let difference = targetDate - +new Date();
        let timeRemaining = {};

        if (difference > 0) {
            // Break the epoch time down into time object
            timeRemaining = {
                days    :   Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours   :   Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes :   Math.floor((difference / 1000 / 60) % 60),
                seconds :   Math.floor((difference / 1000) % 60)
            };   
        }
        return timeRemaining;
    }
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    // Update the countdown timer every second
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);
        return () => clearTimeout(timer);
    });

    const countdownComponents = [];
    Object.keys(timeRemaining).forEach((dateType) => {

        let value = timeRemaining[dateType];

        if (timeRemaining[dateType] < 10) {
            value = "0" + timeRemaining[dateType]
        }
        countdownComponents.push(
            <li className="timeCard">
                <h1>{value}</h1>
                <span>{dateType}</span>
            </li>
        );
    })

    return (
        <div id="countdownContainer">
            {countdownComponents.length ? <h2>GryphHacks 2022 starting in...</h2> : null}
            <ul id="countdown">
                {countdownComponents.length ? countdownComponents : <h2>Thank you for attending!</h2>}
            </ul>
        </div>
    )
}

export default Countdown;
