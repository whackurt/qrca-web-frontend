import { useState } from 'react'
import './App.css'
import { Home, Registration, Login } from './pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  
  return (
    <>
      <BrowserRouter>    
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Registration/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
