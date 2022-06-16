import React from 'react'

import Table from './Components/NurseStationScreen/Table';
import { Routes, Route } from "react-router-dom"
import QrCode from './Components/QrCode/QrCode';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route index path="" element={<Table />} />
        <Route path="/qrcode" element={<QrCode />} />
      </Routes>
    </div>
  );

}

export default App;


