import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface CountdownContextProps {
  targetDate: number;
  setTargetDate: (date: number) => void;
}

const CountdownContext = createContext<CountdownContextProps>({
  targetDate: Date.now() + 3 * 24 * 60 * 60 * 1000,
  setTargetDate: () => {},
});

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownProvider: React.FC<CountdownProviderProps> = ({ children }) => {
  const [targetDate, setTargetDate] = useState<number>(() => {
    const savedDate = localStorage.getItem('targetDate');
    return savedDate ? parseInt(savedDate, 10) : Date.now() + 3 * 24 * 60 * 60 * 1000;
  });

  useEffect(() => {
    localStorage.setItem('targetDate', targetDate.toString());
  }, [targetDate]);

  return (
    <CountdownContext.Provider value={{ targetDate, setTargetDate }}>
      {children}
    </CountdownContext.Provider>
  );
};

export default CountdownContext;
