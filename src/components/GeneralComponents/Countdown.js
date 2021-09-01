import { useState, useEffect } from 'react';

const Countdown = () => {

    // unary operator returns date as a number (epoch/time in milliseconds)
    const targetDate = +new Date("2021-08-31T21:31:30.000-04:00")

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

    useEffect(() => {
        const timer = setTimeout(() => {
            // Update timer every second
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);
        return () => clearTimeout(timer);
    });

    return (
        <div>
            <h2>GryphHacks 2022 starting in...</h2>
            <h1>{timeRemaining.days} : {timeRemaining.hours} : {timeRemaining.minutes} : {timeRemaining.seconds}</h1>
        </div>
    )
}

export default Countdown
