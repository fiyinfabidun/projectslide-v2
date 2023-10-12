import React from 'react'
import pictures from '../assets/delph.jpg';
import NavBar from '../components/NavBar';
import HeroBakground from '../components/HeroBakground';
import Test from './test';
import lesson1 from '../assets/mls.pdf'
import Footer from '../components/Footer';

function Delphinium() {
    const links=[
        { file: `${lesson1}`, filename: 'Link 1', label: 'Link 1' },
        { file: `${lesson1}`, filename: 'Link 2', label: 'Link 2' },
        { file: `${lesson1}`, filename: 'Link 3', label: 'Link 3' },
        { file: `${lesson1}`, filename: 'Link 4', label: 'Link 4' },
        { file: `${lesson1}`, filename: 'Link 5', label: 'Link 5' },
        { file: `${lesson1}`, filename: 'Link 6', label: 'Link 6' },
        { file: `${lesson1}`, filename: 'Link 7', label: 'Link 7' },
        { file: `${lesson1}`, filename: 'Link 8', label: 'Link 8' },
      ];
    return (
        <>
        <NavBar/>
        <HeroBakground 
        title='Delphinium'
        backgroundImage={pictures}
        />
        <div className="class-body">
        <h2 className='vault-text'>Welcome Delphinium, what are you getting from the vault?</h2>
        <h2 className='header'>Vault items available</h2>
        <div className="courses-available">
        <Test label="Basic histopathology- 334" links={links} downloadable={true}/>

          </div>
    
    </div>
        <Footer/>
         </>
        
      )
  
}

export default Delphinium