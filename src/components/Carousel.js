import React, { useState, useEffect } from "react";

const logos = [
  require('../assets/1.png'),
  require('../assets/2.png'),
  require('../assets/3.png'),
  require('../assets/4.png'),
  require('../assets/5.png'),
  require('../assets/7.png'),
  require('../assets/6.png'),
];

const LogoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-64 overflow-hidden mt-10 mb-10 ">
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full pB-10"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full  flex items-center justify-center "
          >
            <img src={logo} alt={`logo-${index}`} className="h-22 w-22" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
