import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Wheel from '../assets/wheel.png';
import ClockIcon from '../assets/icon-clock.svg';
import Loader from './Loader';
import '../Slider.css';
import CountdownTimer from './CountdownTimer';
import TimePicker from './TimePicker';

const StyledButton: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [targetDate, setTargetDate] = useState<number>(Date.now() + 3 * 24 * 60 * 60 * 1000);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStartNowClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/contact');
    }, 2000);
  };

  const handleClockIconClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <img
        src={ClockIcon}
        alt="Clock Icon"
        className="clock-icon"
        onClick={handleClockIconClick}
      />
      <div className="relative h-screen bg-black bg-opacity-0">
        <Loader show={loading} />
        <div className="flex justify-center items-center h-full">
          <div className="flex flex-col items-center">
            <div className="inner">
              <img src={Wheel} className="rotating" alt="wheel" />
            </div>
            <div className="typing-slider mb-8 py-4">
              <p>Where Every Spin Sparks Joy! </p>
              <p>Wheel Brings Gifts Galore! 🎁</p>
              <p>Alyf's Wheel of Rewards! 🔥🔥</p>
            </div>
            <CountdownTimer targetDate={targetDate} />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded">
            <button onClick={handleCloseModal} className="close-button">×</button>
            <TimePicker setTargetDate={setTargetDate} />
          </div>
        </div>
      )}
    </div>
  );
};

export default StyledButton;
