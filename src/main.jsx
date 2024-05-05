
import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Close from './Components/Close.jsx';
import Blank from './Components/Blank.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/close" element={<Close />} />
        <Route path="/blank" element={<Blank />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

