import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ford from './pages/Ford';
import Bmw from './pages/Benz';
import Nissan from './pages/Nissan';
import Homepage from './pages/Homepage';
import Upload from './components/Upload';
import { DataProvider } from './context/Datacontext';

const App = () => {
  return (
    <Router>
      <DataProvider>
          <Routes>
            <Route path="/" exact element={<Upload />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/ford" element={<Ford />} />
            <Route path="/bmw" element={<Bmw />} />
            <Route path="/Nissan" element={<Nissan />} />
          </Routes>
      </DataProvider>
    </Router>
  );
}

export default App;
