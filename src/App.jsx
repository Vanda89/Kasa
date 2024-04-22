import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import housingData from './data/housing.json'
import Header from './components/Header'
import Home from './pages/Home'
import HousingDetails from './pages/HousingDetails'
import About from './pages/About'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  const [data] = useState(housingData)
  console.log('Data fetched: ', data)

  if (data === null) {
    return <div>Loading</div>
  }

  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/logements/:id" element={<HousingDetails data={data} />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home data={data} />} />
          <Route element={<NotFound />} />
        </Routes>
      </Router>
    </React.StrictMode>
  )
}

export default App
