import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./App.css";

import { TestPage } from "./Pages/TestPage";
import CguPage from './Pages/CguPage';
import SettingPage from './Pages/SettingPage';
import ProposPage from './Pages/ProposPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/test" element={<TestPage />} />
        <Route path="/cgu" element={<CguPage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/propos" element={<ProposPage />} />
      </Routes>
    </Router>
  );
};

export default App;