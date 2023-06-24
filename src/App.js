import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowcaseComponents from './pages/ShowcaseComponents';
import Teleprompter from './pages/Teleprompter';
//import './assets/stylesheets/teleprompter.css'
import './assets/stylesheets/theme.css'
import './assets/stylesheets/components.css'



//  comment this line below to remove the boders around divs
  import './assets/stylesheets/wireframe.css'
// import './assets/stylesheets/bounds.css'


const App = () => {
  return (
    <Router>
      <>
        {console.log("App is running")}
        <Routes>
          <Route path="/" element={<ShowcaseComponents />} />
          <Route path="/teleprompter" element={<Teleprompter />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
