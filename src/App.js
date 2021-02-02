import React, { memo } from "react";
import Header from "./components/templates/Header";
import Main from "./components/templates/Main";
import { AppProvider } from "./contexts/AppContext";

const App = memo(() => {
  return (
    <div className="App">
      <Header />
      <AppProvider>
        <Main />
      </AppProvider>
    </div>
  );
});

export default App;
