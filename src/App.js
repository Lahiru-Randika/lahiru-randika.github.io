import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header.js"
import Footer from './components/footer.js';
import Home from './pages/home.js'
import ContactSection from './components/contactlinks.js';
import Projects from './pages/projects.js';
import AboutMe from "./pages/aboutme.js";
import ContactMe from "./pages/contactme.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true}
          element={<>
            <ContactSection/>
            <Header/>
            <Home />
            <Footer/>
          </>} 
        />

        <Route path="/projects" exact={true}
          element={<>
            <ContactSection/>
            <Header/>
            <Projects />
            <Footer/>
          </>} 
        />

        <Route path="/aboutme" exact={true}
          element={<>
            <ContactSection/>
            <Header/>
            <AboutMe />
            <Footer/>
          </>} 
        />

        <Route path="/contactme" exact={true}
          element={<>
            <ContactSection/>
            <Header/>
            <ContactMe />
            <Footer/>
          </>} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
