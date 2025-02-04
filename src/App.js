import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Kontakti from './Kontakti/Kontakti';
import Onama from './Onama/Onama';
import Proizvodi from './Proizvodi/Proizvodi';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './App.css';

function App() {
  const center = { lat: 44.58731079762742, lng: 17.431922369209992 }; 

  return (
    <Router>
      <div>
        <Navbar />
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={{ height: '400px', width: '100%' }}
            center={center}
            zoom={15}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>

        <Routes>
          <Route path="/kontakti" element={<Kontakti />} />
          <Route path="/proizvodi" element={<Proizvodi />} />
          <Route path="/onama" element={<Onama />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


