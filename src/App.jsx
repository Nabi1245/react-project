import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoutes from './router/AppRoutes'

function App() {

  return (
    <>

      {/* Add a simple navigation menu */}
      <nav style={{padding:"20px", background:"#f0f0f0"}}>
        <a href="" style={{marginRight:"10px", textDecoration:"none"}}>Home</a>
        <a href="" style={{marginRight:"10px", textDecoration:"none"}}>About</a>
        <a href="" style={{marginRight:"10px", textDecoration:"none"}}>Contact</a>
      </nav>

      {/* This will show the current page */}
      <AppRoutes/>
    </>
  )
}

export default App
