import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar';
import HeroBakground from '../components/HeroBakground';
import amabilis from '../assets/amabilis-pic.jpg'
// import PhronesisSlides from './PhroSLides';
import lesson1 from '../assets/mls.pdf'
import Test from './test';



function Amabilis() {
  const PHG312=[
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
  { file: `${lesson1}`, filename: 'Origin of pharmacology-prof olayemi', label: 'Origin of pharmacology' },
  { file: `${lesson1}`, filename: 'Pharmacokinetics and structure-activity relationship of drugs', label: 'Pharmacokinetics and structure-activity' },
  { file: `${lesson1}`, filename: 'Link 4', label: 'Link 4' },
]
  return (

    <>
    <NavBar/>
    <HeroBakground 
    title='Amabilis'
    backgroundImage={amabilis}
    />
    <div className="class-body">
    {/* <a href={lesson1} download='lesson1' className='link'>mls305</a> */}
    <h2 className='vault-text'>Welcome Phronesis, what are you getting from the vault?</h2>
    <h2 className='header'>Vault items available</h2>
    <div className="courses-available">
    <Test label="Body fluid and renal- 312" links={PHG312} downloadable={true}/>
    <Test label="cardiovascular phys 1- 313" links={HEAMAT} downloadable={true}/>
    <Test label="Respiratory physiology 1- 314" links={HISTO} downloadable={true}/>
    <Test label="Git and Nutrition- 315" links={MICRO} downloadable={true}/>
    <Test label="introduction Biostatics- 316" links={MICRO} downloadable={true}/>
    <Test label="Immunology-317" links={PHARMAC} downloadable={true}/>
    <Test label="General Principle pharmac-311" links={PHARMAC} downloadable={true}/>
    <Test label="ANS Parasympathetic-313" links={PHARMAC} downloadable={true}/>
    <Test label="ANS sympathetic Mechanisms-314" links={PHARMAC} downloadable={true}/>
    <Test label="Experimental pharmacology-316" links={PHARMAC} downloadable={true}/>
    <Test label="General Biochemistry-316" links={PHARMAC} downloadable={true}/>
   </div>
     </div>
   
    <Footer/>
     </>
    
  )
}



export default Amabilis
