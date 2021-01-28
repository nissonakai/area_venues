import React, { createContext, useState } from "react";

export const currentContext = createContext({});

const CurrentProvider = (props) => {
  const [current, setCurrent] = useState("-");
  return (
    <currentContext.Provider value={{ current, setCurrent }}>
      {props.children}
    </currentContext.Provider>
  );
};

export const AppProvider = (props) => {
  return <CurrentProvider>{props.children}</CurrentProvider>;
};
