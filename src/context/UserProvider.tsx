import React, { createContext, useContext, useState, ReactNode } from 'react';

type UserType = {
  firstName: string;
};

type UserContextType = {
  user: UserType;
  setUser: (user: UserType) => void;
};

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextType>({
  user: { firstName: '' },
  setUser: () => {} // Dummy function to satisfy TypeScript
});

// Provider component using the defined props type
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserType>({ firstName: '' });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the context
export const useUser = () => useContext(UserContext);
