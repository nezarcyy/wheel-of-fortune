import AlyfLogo from '../assets/Alyf.svg';
import Wheel from '../assets/wheel.png';
import '../Slider.css';

const StyledButton = () => {
  return (
    <div className="relative h-screen bg-black bg-opacity-0">
      <div className="absolute top-0 left-0 mt-4 ml-6">
        <img src={AlyfLogo} className="h-10" alt="logo" />
      </div>
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col items-center">
          <img src={Wheel} className="rotating" alt="wheel" />

          <div className="typing-slider mb-10">
            <p>Text slider with</p>
            <p>typing animation effect</p>
            <p>in pure CSS.</p>
          </div>

          <div className="button flex justify-center items-center w-64 h-16 bg-black bg-opacity-0 text-yellow-500 border-2 border-yellow-500 rounded-lg cursor-pointer">
            START NOW!
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyledButton;
