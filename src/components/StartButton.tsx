import AlyfLogo from '../assets/Alyf.svg';

const StyledButton = () => {
  return (
    <div className="relative h-screen bg-black bg-opacity-0">
      <div className="absolute top-0 left-0 mt-4 ml-6">
        <img src={AlyfLogo} className="h-10" alt="logo" />
      </div>
      <div className="flex justify-center items-center h-full">
        <div>
          
        </div>
        <div className="button flex justify-center items-center h-screen min-h-screen bg-black bg-opacity-0">
          START
        </div>
      </div>
    </div>
  );
};

export default StyledButton;
