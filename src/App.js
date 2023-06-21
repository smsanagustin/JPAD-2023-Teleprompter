import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowcaseComponents from './pages/ShowcaseComponents';
import Teleprompter from './pages/Teleprompter';




const App = () => {
  return (
    <Router>
      <div className="app-container">
        {console.log("App is running")}
        <Routes>
          <Route path="/" element={<ShowcaseComponents />} />
          <Route path="/teleprompter" element={<Teleprompter />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
