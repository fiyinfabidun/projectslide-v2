import React from 'react';
import Footer from '../components/Footer';
import pandora from '../assets/pharmac-bg.jpg';
import NavBar from '../components/NavBar';
import HeroBakground from '../components/HeroBakground';
import lesson1 from '../assets/mls.pdf'
import Test from './test';

function Pandora() {
     < const CLINICAL_CHEM=[
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
    title='Phronesis'
    backgroundImage={picture}
    />
    <div className="class-body">
    {/* <a href={lesson1} download='lesson1' className='link'>mls305</a> */}
    <h2 className='vault-text'>Welcome Pandora, what are you getting from the vault?</h2>
    <h2 className='header'>Vault items available</h2>
    <div className="courses-available">
    <Test label=" General principles of Pharmacology- 311" links={CLINICAL_CHEM} downloadable={true}/>
    <Test label="pharmacokinetics and pharnacogenomics- 312" links={HEAMAT} downloadable={true}/>
    <Test label="ANS parasympathetic mechanisms- 313" links={HISTO} downloadable={true}/>
    <Test label="ANS sympathetic mechanisms- 314" links={MICRO} downloadable={true}/>
    <Test label="systemic toxicology- 316" links={MICRO} downloadable={true}/>
    <Test label="experimental pharmacology I-317" links={PHARMAC} downloadable={true}/>
    <Test label="Basic pharmacology and therapeutics I-317" links={PHARMAC} downloadable={true}/>
    <Test label="General Biochemistry (No-majors)" links={PHARMAC} downloadable={true}/>  
    <Footer/>
          </>
  )
}

export default Pandora
