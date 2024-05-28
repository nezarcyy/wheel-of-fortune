import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Wheel from '../assets/wheel.png';
import Loader from './Loader';
import '../Slider.css';
import CountdownTimer from './CountdownTimer';
import TimePicker from './TimePicker';

const StyledButton: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [targetDate, setTargetDate] = useState<number>(Date.now() + 3 * 24 * 60 * 60 * 1000);

  const handleStartNowClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/contact');
    }, 2000);
  };

  return (
    <div className="relative h-screen bg-black bg-opacity-0">
      <Loader show={loading} />
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col items-center">
          <div className="inner">
            <img src={Wheel} className="rotating" alt="wheel" />
          </div>
          <div className="typing-slider mb-10 py-4">
            <p>Where Every Spin Sparks Joy! </p>
            <p>Wheel Brings Gifts Galore! 🎁</p>
            <p>Alyf's Wheel of Rewards! 🔥🔥</p>
          </div>
          <TimePicker setTargetDate={setTargetDate} />
          <CountdownTimer targetDate={targetDate} />
        </div>
      </div>
    </div>
  );
};

export default StyledButton;
