import { ChangeEvent, useState } from "react";
import React, { useEffect } from "react";

import "./App.css";

import { TestPage } from "./Pages/TestPage";
import { AppRouter } from "./Router/AppRouter";

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
