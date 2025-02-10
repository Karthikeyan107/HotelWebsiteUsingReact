import React from 'react';
import './App.css';
import Header from './Component/Header';
import Hero from './Component/Hero';
import FeaturedRooms from './Component/FeaturedRooms';
import Footer from './Component/Footer';
import NotFound from './Component/NotFound';
import BookingSection from './Component/BookingSection'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={
            <>
              <Hero />
              <FeaturedRooms/>
            </>
          } />
          <Route path="/rooms" element={<FeaturedRooms />} />
        <Route path="/booking" element={<BookingSection/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>  
      <Footer />
    </div>
  );
}

export default App;
