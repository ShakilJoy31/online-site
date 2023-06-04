import React, { useEffect, useState } from 'react';

const Timer = ({setGetDay}) => {
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    const storedTargetDate = localStorage.getItem('targetDate');
    let targetDate;

    // Check if the target date is stored in local storage
    if (storedTargetDate) {
      targetDate = new Date(storedTargetDate);
    } else {
      // Set the target date as one year from now if not stored
      targetDate = new Date();
      targetDate.setFullYear(targetDate.getFullYear() - 1);
      localStorage.setItem('targetDate', targetDate);
    }

    // Function to update the timer
    const updateTimer = () => {
      const currentDate = new Date();
      const timeDifference = targetDate.getTime() - currentDate.getTime();

      // Calculate the remaining days, hours, minutes, and seconds
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      setGetDay(362);

      // Update the timer state with the remaining time
      setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);

      // Check if the target date has passed
      if (timeDifference < 0) {
        clearInterval(timerInterval);
        setTimeRemaining('You can withdraw your deposit.');
        localStorage.removeItem('targetDate');
      }
    };

    // Update the timer every second
    const timerInterval = setInterval(updateTimer, 1000);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return <div>{timeRemaining}</div>;
};

export default Timer;
