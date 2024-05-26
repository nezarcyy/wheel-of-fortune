import React from 'react';
import { helix } from 'ldrs';

helix.register();

const Loader: React.FC<{ show: boolean }> = ({ show }) => {
  if (!show) return null;

  return (
    <div className="loader-overlay">
      <l-helix size="45" speed="2.5" color="white"></l-helix>
    </div>
  );
};

export default Loader;