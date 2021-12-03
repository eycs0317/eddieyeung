import React from 'react'
import './App.css';
import Header from './Header'
import AboutMe from './AboutMe'
import Projects from './Projects';
import Contact from './Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">

    <Router>
      <Header />
        <Routes>
          <Route path='/' element={<AboutMe />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
    </Router>
      {/* <Header />
      <AboutMe /> */}
    </div>
  );
}

export default App;


