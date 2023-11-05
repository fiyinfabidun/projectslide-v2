import React from 'react';
import NavBar from '../components/NavBar';
import HeroBakground from '../components/HeroBakground';
import pnx from '../assets/phoenix.jpg'
// import PhronesisSlides from './PhroSLides';
import lesson1 from '../assets/mls.pdf'
import Test from './test';
import Footer from '../components/Footer';



function Genezens() {
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
  { file: `${lesson1}`, filename: 'Origin of pharmacology-prof olayemi', label: 'Origin of pharmacology' },
  { file: `${lesson1}`, filename: 'Pharmacokinetics and structure-activity relationship of drugs', label: 'Pharmacokinetics and structure-activity' },
  { file: `${lesson1}`, filename: 'Link 4', label: 'Link 4' },
]
  return (

    <>
    <NavBar/>
    <HeroBakground 
    title='Phoenix'
    backgroundImage={pnx}
    />
    <div className="class-body">
    {/* <a href={lesson1} download='lesson1' className='link'>mls305</a> */}
    <h2 className='vault-text'>Welcome Phoenix, what are you getting from the vault?</h2>
    <h2 className='header'>Vault items available</h2>
    <div className="courses-available">
    <Test label="NSC 311: Basic Med/Surg" links={CLINICAL_CHEM} downloadable={true}/>
    <Test label="NSC 312: Human Nutrition in Health & Disease " links={HEAMAT} downloadable={true}/>
    <Test label="NSC 313: Human Behaviour in Health & Illness " links={HISTO} downloadable={true}/>
    <Test label="NSC 315: General & Cellular Pathology" links={MICRO} downloadable={true}/>
    <Test label="PHA 317: Basic Pharmacology/Therapeutics"links={MICRO} downloadable={true}/>
    <Test label="MLS 333: Medical Microbiology" links={MICRO} downloadable={true}/>
    <Test label="BTS 300: Basic Therapeutic Skills" links={MICRO} downloadable={true}/>
    <Test label="PSY 234: Developmental Psychology" links={PHARMAC} downloadable={true}/>

   </div>
    
    </div>
   
    <Footer/>
     </>
    
  )
}

export default Genezens
