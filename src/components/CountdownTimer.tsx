import React, { useContext, useState } from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from '../hooks/useCountdown';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
import CountdownContext from '../context/CountdownContext';

interface ShowCounterProps {
  hours: number;
  minutes: number;
  seconds: number;
}

const ShowCounter: React.FC<ShowCounterProps> = ({ hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <div className="countdown-link">
        <DateTimeDisplay value={hours} type={''} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={''} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={''} isDanger={false} />
      </div>
    </div>
  );
};

interface CountdownTimerProps {
  targetDate: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleStartNowClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/contact');
    }, 2000);
  };

  if (days + hours + minutes + seconds <= 0) {
    return (
      <div>
        <Loader show={loading} />
        <div
          className="button flex justify-center items-center w-72 h-16 bg-black bg-opacity-0 text-yellow-500 border-2 border-yellow-500 rounded-lg cursor-pointer"
          onClick={handleStartNowClick}
        >
          START NOW!
        </div>
      </div>
    );
  } else {
    return (
      <ShowCounter
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
