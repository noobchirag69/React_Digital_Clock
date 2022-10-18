import { useState, useEffect } from 'react';

export const Clock = () => {
    // Initializing the States
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("00");
    const [ampm, setAmpm] = useState("AM");

    // Effect
    useEffect(
        () => {
            // Setting the interval of 1000 milliseconds
            const interval = setInterval(() => {
                // Date Object
                let time = new Date();

                // Getting the current timings
                let hour = time.getHours();
                let minute = time.getMinutes().toString();
                let second = time.getSeconds().toString();

                // AM/PM
                let am_pm;
                hour >= 12 ? am_pm = "PM" : am_pm = "AM";

                // Formatting the hour
                hour = (hour % 12) || 12;
                hour = hour.toString();

                // Updating the states
                setHours(hour.padStart(2, '0'));
                setMinutes(minute.padStart(2, '0'));
                setSeconds(second.padStart(2, '0'));
                setAmpm(am_pm);

                // Clearing the interval
                return () => clearInterval(interval);
            }, 1000);
        }, [seconds, minutes, hours, ampm]);

    return (
        <p id="clock">{hours}:{minutes}:{seconds} {ampm}</p>
    )
}
