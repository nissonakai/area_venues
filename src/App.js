import React from "react";
import Header from "./components/templates/Header";
import Main from "./components/templates/Main";
import { AppProvider } from "./contexts/AppContext";

const App = () => {
  return (
    <div className="App">
      <AppProvider>
        <Header />
        <Main />
      </AppProvider>
    </div>
  );
};

export default App;
