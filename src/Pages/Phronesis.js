import React from 'react';
import NavBar from '../components/NavBar';
import HeroBakground from '../components/HeroBakground';
import picture from '../assets/phronesis.jpg'
// import PhronesisSlides from './PhroSLides';
import lesson1 from '../assets/mls.pdf'
import Test from './test';
import Footer from '../components/Footer';



function Phronesis() {
  const CLINICAL_CHEM=[
    { file: `${lesson1}`, filename: 'introductory to microbiology', label: 'introductory tomicrobiology' },
    { file: `${lesson1}`, filename: 'Link 2', label: 'Link 2' },
    { file: `${lesson1}`, filename: 'Link 3', label: 'Link 3' },
    { file: `${lesson1}`, filename: 'Link 4', label: 'Link 4' },
  ];
  const HEAMAT=[
    { file: `${lesson1}`, filename: 'Link 2', label: 'Link 2' },
    { file: `${lesson1}`, filename: 'Link 3', label: 'Link 3' },
    { file: `${lesson1}`, filename: 'Link 4', label: 'Link 4' },
]
const HISTO=[
  { file: `${lesson1}`, filename: 'Link 2', label: 'Link 2' },
  { file: `${lesson1}`, filename: 'Link 3', label: 'Link 3' },
  { file: `${lesson1}`, filename: 'Link 4', label: 'Link 4' },
]
const MICRO=[
  { file: `${lesson1}`, filename: 'Link 2', label: 'Link 2' },
  { file: `${lesson1}`, filename: 'Link 3', label: 'Link 3' },
  { file: `${lesson1}`, filename: 'Link 4', label: 'Link 4' },
]
const PHARMAC=[
  { file: `${lesson1}`, filename: 'Link 2', label: 'Link 2' },
  { file: `${lesson1}`, filename: 'Link 3', label: 'Link 3' },
  { file: `${lesson1}`, filename: 'Link 4', label: 'Link 4' },
]
  return (

    <>
    <NavBar/>
    <HeroBakground 
    title='Phronesis'
    backgroundImage={picture}
    />
    <div className="class-body">
    {/* <a href={lesson1} download='lesson1' className='link'>mls305</a> */}
    <h2 className='vault-text'>Welcome Phronesis, what are you getting from the vault?</h2>
    <h2 className='header'>Vault items available</h2>
    <div className="courses-available">
    <Test label="Basic clinical chemistry- 311" links={CLINICAL_CHEM} downloadable={true}/>
    <Test label="Basic Hematology- 312" links={HEAMAT} downloadable={true}/>
    <Test label="Basic Microbiology- 313" links={HISTO} downloadable={true}/>
    <Test label="Basic histopathology- 314" links={MICRO} downloadable={true}/>
    <Test label="General Biochemistry- 316" links={MICRO} downloadable={true}/>
    <Test label="Basic pharmac theraputics-317" links={PHARMAC} downloadable={true}/>

   </div>
    
    </div>
   
    <Footer/>
     </>
    
  )
}

export default Phronesis
