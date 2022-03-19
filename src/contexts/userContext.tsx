import React, { createContext, useState } from "react";

type Content = {
  avatar_url: string;
  login: string;
  bio: string;
  html_url: string;
};

type PropsContextUser = {
  users: Content;
  setUsersApi: React.Dispatch<React.SetStateAction<Content>>;
};

const InitialStateFirst = {
  users: {
    avatar_url: "",
    login: "",
    bio: "",
    html_url: "",
  },
  setUsersApi: () => {},
};

export const Content = createContext<PropsContextUser>(InitialStateFirst);

export const ContextProvider: React.FC = ({ children }) => {
  const [users, setUsersApi] = useState(InitialStateFirst.users);

  return (
    <Content.Provider value={{ users, setUsersApi }}>
      {children}
    </Content.Provider>
  );
};
