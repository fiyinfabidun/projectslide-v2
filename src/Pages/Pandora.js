import React from 'react'
import Footer from '../components/Footer'
import pan from '../assets/delph.jpg';
import NavBar from '../components/NavBar';

function Pandora() {
  return (
    <>
     <NavBar/>
        <HeroBakground 
        title='pandora'
        backgroundImage={pan}
        />
      <Footer/>
          </>
  )
}

export default Pandora
