// DataContext.js
import React, { createContext, useState } from 'react';

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
