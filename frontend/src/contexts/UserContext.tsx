import React, { createContext, useContext, useState, ReactNode } from "react";

export enum UserRole {
  INVESTOR = "investor",
  HOST = "host",
}

interface User {
  role: UserRole;
  email: string;
  name: string;
}

type UserContextType = {
  user: User;
  setUser: (user: User) => void;
};

export const testHost = {
  role: UserRole.HOST,
  email: "test@test.com",
  name: "shane benlolo",
};

export const testInvestor = {
  role: UserRole.INVESTOR,
  email: "test@test.com",
  name: "shane benlolo",
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context == null) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User>(testHost);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
