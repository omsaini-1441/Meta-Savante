import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Hero from "./components/Hero/Hero"
import Services from './components/Services/Services'
import Slider from "./components/Slider/Slider"
import Banner from "./components/Banner/Banner"
import Footer from "./components/Footer/Footer"
import SignUp from './components/SignUp/SignUp'
import SignUpBrand from './components/SignUpBrand/SignUpBrand'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
            <Route path='/' element={<div className='overflow-x-hidden'><Hero /><Services /><Slider /><Banner /><Footer /></div>} />
            <Route path='/signupbrand' element={<div className='overflow-x-hidden'><SignUpBrand /><Footer /></div>} />
            <Route path='/signup' element={<div className='overflow-x-hidden'><SignUp /><Footer /></div>} />
    </Routes>
    </BrowserRouter>
</div>
  )
}

export default App

