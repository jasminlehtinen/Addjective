import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar.js'
import Footer from './components/footer.js'
import Home from './pages/home'
import Stories from './pages/stories'
import './App.css'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tarina/:id' element={<Stories />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
