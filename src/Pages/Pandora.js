import React from 'react'
import Footer from '../components/Footer'
import pan from '../assets/delph.jpg';

function Pandora() {
  return (
    <>
     <NavBar/>
        <HeroBakground 
        title='Delphinium'
        backgroundImage={pan}
        />
      <Footer/>
          </>
  )
}

export default Pandora
