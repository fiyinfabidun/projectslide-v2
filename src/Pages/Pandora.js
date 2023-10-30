import React from 'react';
import Footer from '../components/Footer';
import pandora from '../assets/pharmac-bg.jpg';
import NavBar from '../components/NavBar';
import HeroBakground from '../components/HeroBakground';

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
