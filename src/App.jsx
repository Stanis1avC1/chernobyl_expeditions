import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AboutUs from './components/AboutUs/AboutUs';
import AboutZone from './components/AboutZone/AboutZone';
import Contact from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/LoginForm';
import RegistrationForm from './components/Login/RegisterForm';
import TourInfo from './components/TourInfo/TourInfo';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-zone" element={<AboutZone />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/tours" element={<TourInfo />} /> {/* Маршрут для Tours */}
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
