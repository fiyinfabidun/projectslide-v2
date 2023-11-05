import React from 'react';
import NavBar from '../components/NavBar';
import HeroBakground from '../components/HeroBakground';
import gene from '../assets/genezens.jpg'
// import PhronesisSlides from './PhroSLides';
import lesson1 from '../assets/mls.pdf'
import Test from './test';
import Footer from '../components/Footer';



function Genezens() {
  const CLINICAL_CHEM=[
    { file: `${lesson1}`, filename: 'introductory to microbiology', label: 'introductory tomicrobiology' }
  ];
  const HEAMAT=[
    { file: `${lesson1}`, filename: 'Link 2', label: 'Link 2' }
]
const HISTO=[
  { file: `${lesson1}`, filename: 'Link 2', label: 'Link 2' }
]
const MICRO=[
  { file: `${lesson1}`, filename: 'Link 2', label: 'Link 2' }
]
const PHARMAC=[
  { file: `${lesson1}`, filename: 'Origin of pharmacology-prof olayemi', label: 'Origin of pharmacology' }
]
  return (

    <>
    <NavBar/>
    <HeroBakground 
    title='Genezens'
    backgroundImage={gene}
    />
    <div className="class-body">
    {/* <a href={lesson1} download='lesson1' className='link'>mls305</a> */}
    <h2 className='vault-text'>Welcome Genezens, what are you getting from the vault?</h2>
    <h2 className='header'>Vault items available</h2>
    <div className="courses-available">
    <Test label="hematology" links={CLINICAL_CHEM} downloadable={true}/>
    <Test label="morbid anatomy" links={HEAMAT} downloadable={true}/>
    <Test label="clinical pathology" links={HISTO} downloadable={true}/>
    <Test label="pharmacology" links={MICRO} downloadable={true}/>
    <Test label="microbiology" links={MICRO} downloadable={true}/>
   </div>
   </div>
   
    <Footer/>
     </>
    
  )
}

export default Genezens
