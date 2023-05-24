import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainScreen from './components/MainFormScreen.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainScreen/>} />
        {/* Add more routes for other screens */}
      </Routes>
    </Router>
  );
};

export default App;
