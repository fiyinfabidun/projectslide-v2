import React from 'react';
import NavBar from '../components/NavBar';
import HeroBakground from '../components/HeroBakground';
import picture from '../assets/phronesis.jpg';
// import PhronesisSlides from './PhroSLides';
import lesson1 from '../assets/mls.pdf'
import Test from './test';
import Footer from '../components/Footer';
// pharmac slides
import phar1 from '../assets/PHARMACOKINETICS AND PHARMACODYNAMICS.ppt';
// histo slides
import intod from '../assets/INTRODUCTION_TO_HISTO_PATHOLOGY NEW (1).pptx';
import intro from '../assets/INTRODUCTION TO FIXATION (2).pptx';
import fixation2 from '../assets/FIXATION 2.ppt';
import clear from '../assets/CMUL MLS 334 DEHYDRATION, CLEARING, INFILTRATION(EMBEDDING).ppt';
import tissue from '../assets/TISSUE PROCESSING.ppt';
// haemat slides
import ert from '../assets/ERYTHROPOIESIS-1 (1).pptx';
import redcount from '../assets/Red Cell Indices ppt (3).pptx';




function Phronesis() {
  const CLINICAL_CHEM=[
    { file: `${lesson1}`, filename: 'introductory to microbiology', label: 'introductory to microbiology' },
    { file: `${lesson1}`, filename: 'Link 2', label: 'Link 2' },
    { file: `${lesson1}`, filename: 'Link 3', label: 'Link 3' },
    { file: `${lesson1}`, filename: 'Link 4', label: 'Link 4' },
  ]
  const HEAMAT=[
    { file: `${ert}`, filename: 'ERYTHROPOIESIS', label: 'ERYTHROPOIESIS' },
    { file: `${redcount}`, filename: 'RED CELL INDICES', label: 'Red Cell Indices' },
    { file: `${lesson1}`, filename: 'Link 4', label: 'Link 4' },
     { file: `${lesson1}`, filename: 'Link 4', label: 'Link 4' },
     { file: `${lesson1}`, filename: 'Link 4', label: 'Link 4' },
]
const HISTO=[
    { file: `${intod}`, filename: 'INTRODUCTION_TO_HISTO_PATHOLOGY ', label: 'INTRODUCTION_TO_HISTO_PATHOLOGY ' },
   { file: `${intro}`, filename: 'INTRODUCTION TO FIXATION', label: 'INTRODUCTION TO FIXATION' },
  { file: `${fixation2}`, filename: 'FIXATION 2', label: 'FIXATION 2' },
  { file: `${clear}`, filename: '/CMUL MLS 334 DEHYDRATION, CLEARING, INFILTRATION/(EMBEDDING)', label: ' DEHYDRATION, CLEARING, INFILTRATION' },
  { file: `${tissue}`, filename: 'TISSUE PROCESSING', label: 'TISSUE PROCESSING' },
]
const MICRO=[
  { file: `${lesson1}`, filename: 'Link 2', label: 'Link 2' },
  { file: `${lesson1}`, filename: 'Link 3', label: 'Link 3' },
  { file: `${lesson1}`, filename: 'Link 4', label: 'Link 4' },
]
  const BCH=[
  { file: `${lesson1}`, filename: 'Link 2', label: 'Link 2' },
  { file: `${lesson1}`, filename: 'Link 3', label: 'Link 3' },
  { file: `${lesson1}`, filename: 'Link 4', label: 'Link 4' },
]
const PHARMAC=[
  { file: `${phar1}`, filename: 'PHARMACOKINETICS AND PHARMACODYNAMICS', label: 'Pharmacokinectics and Pharmacodynamics' },
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
    <h2 className='vault-text'>Welcome Phronesis, what are you getting from the vault?</h2>
    <h2 className='header'>Vault items available</h2>
    <div className="courses-available">
    <Test label="Basic clinical chemistry- 311" links={CLINICAL_CHEM} downloadable={true}/>
    <Test label="Basic Hematology- 312" links={HEAMAT} downloadable={true}/>
    <Test label="Basic Microbiology- 313" links={MICRO} downloadable={true}/>
    <Test label="Basic histopathology- 314" links={HISTO} downloadable={true}/>
    <Test label="General Biochemistry- 316" links={BCH} downloadable={true}/>
    <Test label="Basic pharmac thera-317" links={PHARMAC} downloadable={true}/>

   </div>
    
    </div>
   
    <Footer/>
     </>
    
  )
}

export default Phronesis
