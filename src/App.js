import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import MyNavbar from './Components/NavBar';
import Footer from './Components/Footer';
import About from './Pages/about';
import Services from './Pages/services';
import Contact from './Pages/contact';

function App() {
  return (
    <BrowserRouter>
      <div>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
