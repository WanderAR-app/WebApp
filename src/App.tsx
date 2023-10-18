import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./App.css";

import { TestPage } from "./Pages/TestPage";
import CguPage from './Pages/CguPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/cgu" element={<CguPage />} />
      </Routes>
    </Router>
  );
};

export default App;