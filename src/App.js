import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowcaseComponents from './pages/ShowcaseComponents';
import Teleprompter from './pages/Teleprompter';
//import './assets/stylesheets/teleprompter.css'
import './assets/stylesheets/theme.css'
import './assets/stylesheets/components.css'
import TeleprompterScreen from './pages/TeleprompterScreen';



//  comment this line below to remove the boders around divs
 // import './assets/stylesheets/wireframe.css'
// import './assets/stylesheets/bounds.css'


const App = () => {
  return (
    <Router>
      <>
        {console.log("App is running")}
        <Routes>
          {/* <Route path="/" element={<ShowcaseComponents />} /> */}
          <Route path="/" element={<Teleprompter />} />
          <Route exact path="/teleprompter-screen" element={<TeleprompterScreen />}/>
        </Routes>
      </>
    </Router>
  );
};

export default App;
