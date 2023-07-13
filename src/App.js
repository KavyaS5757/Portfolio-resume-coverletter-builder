// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/homepage';
import PortfolioBuilder from './components/contentpage';
import ResumeForm from './components/resume';
import CoverLetterBuilder from './components/coverletter';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contentpage" element={<PortfolioBuilder />} />
        <Route path="/resume" element={<ResumeForm />} />
        <Route path="/coverletter" element={<CoverLetterBuilder />} />
      </Routes>
    </Router>
  );
};

export default App;
