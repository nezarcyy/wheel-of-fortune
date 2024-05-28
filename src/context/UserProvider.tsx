import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for the user's data and the setUser function
type UserType = {
  firstName: string;
};

type UserContextType = {
  user: UserType;
  setUser: (user: UserType) => void;
};

// Define the type for the props expected by the UserProvider component
interface UserProviderProps {
  children: ReactNode; // This defines that UserProvider expects ReactNode children
}

// Create the context with an initial dummy value to satisfy TypeScript
const UserContext = createContext<UserContextType>({
  user: { firstName: '' }, // Default initial user
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
