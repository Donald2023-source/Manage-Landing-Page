import { useState } from 'react'

import Navbar from './Components/Navbar'
import LeftText from './Components/LeftText1'
import Right1 from './Components/Right1'
import LeftText2 from './Components/LeftText2'
import TextStep1 from './Components/TextStep1'
import TextStep2 from './Components/TextStep2'
import TextStep3 from './Components/TextStep3'
import Testimonial from './Components/Testimonial1'
import Testimonials from './Components/Testimonials'
import Button from './Components/Button'
import End from './Components/end'
import './App.css'
import Footer from './Components/Footer'


function App() {
 
  return (
    <>
    <Navbar/>
    <div className='flex flex-col-reverse gap-8 items-center justify-around lg:flex lg:flex-row py-3'>
    <LeftText/>
    <Right1/>
    </div>

<div className='flex items-center flex-col lg:flex lg:flex-row lg:items-stretch justify-around py-24'>
    <LeftText2/>
    <div className='w-96 flex flex-col gap-20 py-10 lg:flex lg:flex-col lg:gap-10'>
    <TextStep1/>
    <TextStep2/>
    <TextStep3/>
    </div>
    </div>


    <Testimonials/>
<center className='py-9'>
  <Button/>
</center>

<End/>
    
    <Footer/>
    </>
  )
}

export default App
