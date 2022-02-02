import React, { useEffect, useState } from "react";

function Count(props) {
  
  /*Calculate the time left form time given and current time */
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(props.timer) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        d: Math.floor(difference / (1000 * 60 * 60 * 24)),
        h: Math.floor((difference / (1000 * 60 * 60)) % 24),
        m: Math.floor((difference / 1000 / 60) % 60),
        s: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };
/*store the timer */
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];
/*Use to display the count down timer */
  Object.keys(timeLeft).forEach((key) => {
    timerComponents.push(
      <span>
        {timeLeft[key]}{key}{":"}
      </span>
    );
  });
  return (
    <div>
      {timerComponents.length ? timerComponents : <span>Discount Invalid</span>}
    </div>
  );
}

export default Count;