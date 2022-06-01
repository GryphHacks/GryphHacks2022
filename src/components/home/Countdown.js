import { useState, useEffect } from 'react';
import './stylesheet/countdown.css';

const Countdown = () => {

    // unary operator returns date as a number (epoch/time in milliseconds)
    const eventDate = +new Date("2022-05-20T17:00:00.000-04:00");

    const calculateTimeRemaining = () => {

        let difference = eventDate - +new Date();
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
    // Effect will trigger on every render until seconds does not change (countdown finished)
    }, [timeRemaining.seconds]);    

    const countdownComponents = []; 
    // Create array from time remaining to keep track of each value
    Object.keys(timeRemaining).forEach((dateType) => {

        let value = timeRemaining[dateType];

        if (timeRemaining[dateType] < 10) {
            // Prefix single digits with a 0 for the aesthetic lol
            value = "0" + timeRemaining[dateType];
        }
        // Update html with new values
        countdownComponents.push(
            <li className="timeCard" key={dateType}>
                <h1>{value}</h1>
                <span>{dateType}</span>
            </li>
        );
    })

    return (
        <div id="countdownContainer">
            {/* When list is all zeroes, html will toggle countdown off */}
            {countdownComponents.length ? <h2></h2> : null}
            <ul id="countdown">
                {countdownComponents.length ? countdownComponents : <h2 style={{color:"white"}}>GryphHacks will be back in 2023!</h2>}
            </ul>
        </div>
    )
}

export default Countdown;
