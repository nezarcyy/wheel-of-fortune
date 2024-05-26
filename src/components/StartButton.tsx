import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AlyfLogo from '../assets/Alyf.svg';
import Wheel from '../assets/wheel.png';
import Loader from './Loader'; // Import the Loader component
import '../Slider.css';

const StyledButton: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleStartNowClick = () => {
    setLoading(true);
    // Simulate an async operation before navigating
    setTimeout(() => {
      setLoading(false);
      navigate('/contact');
    }, 2000);
  };

  return (
    <div className="relative h-screen bg-black bg-opacity-0">
      <Loader show={loading} />
      <div className="absolute top-0 left-0 mt-4 ml-6">
        <img src={AlyfLogo} className="h-10" alt="logo" />
      </div>
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

          <div
            className="button flex justify-center items-center w-64 h-16 bg-black bg-opacity-0 text-yellow-500 border-2 border-yellow-500 rounded-lg cursor-pointer"
            onClick={handleStartNowClick}
          >
            START NOW!
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyledButton;
