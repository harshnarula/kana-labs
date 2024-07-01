import { useState } from 'react'
import HomePage from './pages/HomePage'
import SwapPage from './pages/SwapPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className='w-full h-auto bg-[#0A0A0A]'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/swap" element={<SwapPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
