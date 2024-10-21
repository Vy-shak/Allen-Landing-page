import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Pages/Home.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter >
    <Routes>
       <Route path='/' element={<Home />} />
    </Routes>
  </BrowserRouter>
)
    