import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import FirstPage from './WelcomePage/firstPage'
import Registration from './RegistrationPage/Registration'
import DonorInfoPage from './DonorInfoPage/DonorInfoPage'




function App() {
  

  return (
    <>
    <NavBar/>
<Routes>
<Route path="/" element={<FirstPage/>} />
<Route path="/Registration" element={<Registration />} />
<Route path="/DonorInfo" element={<DonorInfoPage />} />



</Routes>
    </>
  )
}

export default App
