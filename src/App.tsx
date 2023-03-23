import React from "react";
import { AppContextProvider } from "./contexts/app-context";
import { DataExplorer } from "./components/data-explorer";

function App() {
  return (
    <AppContextProvider>
      <DataExplorer></DataExplorer>
    </AppContextProvider>
  );
}

export default App;
