import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
import './styles.sass'
import Home from './Pages/Home'
import Header from './Components/Header'
import Error from './Pages/Error'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </StrictMode>,
)
