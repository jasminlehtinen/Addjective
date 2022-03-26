import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar.js'
import Footer from './components/footer.js'
import Home from './pages/home'
import Stories from './pages/stories'
//import StoryTwo from './pages/story-two'
//import StoryThree from './pages/story-three'
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

// Different components for different stories - pointless
/*const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tarina1' element={<StoryOne />} />
        <Route path='/tarina2' element={<StoryTwo />} />
        <Route path='/tarina3' element={<StoryThree />} />
      </Routes>
      <Footer />
    </Router>
  )
}*/

export default App
