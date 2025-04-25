import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
import './styles.sass'
import Home from './Pages/Home'
import Header from './Components/Header'
import Error from './Components/Error'
import Application from './Components/Application'
import Vehicle from './Components/Vehicle'
import Login from './Components/Login'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<Vehicle />} />
        <Route path="/applicant" element={<Application />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </StrictMode>,
)
