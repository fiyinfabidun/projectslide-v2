import React from 'react';
import NavBar from '../components/NavBar';
import HeroBakground from '../components/HeroBakground';
import picture from '../assets/phronesis.jpg';
// import PhronesisSlides from './PhroSLides';
import Test from './test';
import Footer from '../components/Footer';
// pharmac slides
import phar1 from '../assets/PHARMACOKINETICS AND PHARMACODYNAMICS.ppt';
import phar2 from '../assets/Synthesis and Physiology of Neurotransmitters_non-major.pptx';
// histo slides
import intod from '../assets/INTRODUCTION_TO_HISTO_PATHOLOGY NEW (1).pptx';
import intro from '../assets/INTRODUCTION TO FIXATION (2).pptx';
import fixation2 from '../assets/FIXATION 2.ppt';
import clear from '../assets/CMUL MLS 334 DEHYDRATION, CLEARING, INFILTRATION(EMBEDDING).ppt';
import tissue from '../assets/TISSUE PROCESSING.ppt';
// haemat slides
import ert from '../assets/ERYTHROPOIESIS-1 (1).pptx';
import redcount from '../assets/Red Cell Indices ppt (3).pptx';
import meth from '../assets/Methods for Blood Cell Counting (2).pptx';
import principle from '../assets/Principle and Mode of Action Common Anticoagulants (2).pdf';
import bloodfilm from '../assets/Untitled presentation (1).pdf';
import func from '../assets/FUNCTIONS OF BLOOD CELLS.pptx';
// clinicAL CHEM
import plasma from '../assets/PLASMA PROTEINS 300L.pptx';
// micro
import history from '../assets/MLS 333_ HISTORY  OF MICROBIOLOGY (1).pdf';
import etha from '../assets/ETHANOL PRODUCTION _MICROORGANISM.pdf';
// bch
import bch1 from '../assets/BCH 222 INTRO METABOLISM APRIL 2023.pdf';
import bch2 from '../assets/BCH 222 LECTURE METABOLISM 2021-converted.pdf';





function Phronesis() {
  const CLINICAL_CHEM=[
    { file: `${plasma}`, filename: 'PLASMA PROTEINS 300L', label: 'PLASMA PROTEINS 300L' },
  ]
  const HEAMAT=[
    { file: `${ert}`, filename: 'ERYTHROPOIESIS', label: 'ERYTHROPOIESIS' },
    { file: `${redcount}`, filename: 'RED CELL INDICES', label: 'RED CELL INDICES' },
    { file: `${meth}`, filename: 'METHOD OF BLOOD CELL COUNTING', label: 'METHOD OF BLOOD CELL COUNTING' },
     { file: `${func}`, filename: 'FUNCTIONS OF BLOOD CELLS', label: 'FUNCTIONS OF BLOOD CELLS' },
     { file: `${principle}`, filename: 'Principle and Mode of Action Common Anticoagulants ', label: 'PRINCIPLE AND MODE OF ACTION OF COMMON ANTICOAGULANTS' },
     { file: `${bloodfilm}`, filename: 'peripheral blood film reading and examination', label: 'PERIPHERAL BLOOD FILM READING AND EXAMINATION' },
   
    
]
const HISTO=[
    { file: `${intod}`, filename: 'INTRODUCTION_TO_HISTO_PATHOLOGY ', label: 'INTRODUCTION_TO_HISTO_PATHOLOGY ' },
   { file: `${intro}`, filename: 'INTRODUCTION TO FIXATION', label: 'INTRODUCTION TO FIXATION' },
  { file: `${fixation2}`, filename: 'FIXATION 2', label: 'FIXATION 2' },
   { file: `${tissue}`, filename: 'TISSUE PROCESSING', label: 'TISSUE PROCESSING' },
  { file: `${clear}`, filename: '/CMUL MLS 334 DEHYDRATION, CLEARING, INFILTRATION/(EMBEDDING)', label: ' DEHYDRATION, CLEARING, INFILTRATION' },
 
]
const MICRO=[
  { file: `${history}`, filename: 'MLS 333_ HISTORY  OF MICROBIOLOGY', label: 'MLS 333_ HISTORY  OF MICROBIOLOGY' },
  { file: `${ etha }`, filename: 'ETHANOL PRODUCTION _MICROORGANISM', label: 'ETHANOL PRODUCTION _MICROORGANISM' },
]
  const BCH=[
  { file: `${bch1}`, filename: 'BCH 222 INTRO METABOLISM APRIL 2023', label: 'BCH 222 INTRO METABOLISM' },
  { file: `${bch2}`, filename: 'BCH 222 LECTURE METABOLISM 2021-converted', label: 'BCH 222 LECTURE METABOLISM' },
 
]
const PHARMAC=[
  { file: `${phar1}`, filename: 'PHARMACOKINETICS AND PHARMACODYNAMICS', label: 'Pharmacokinectics and Pharmacodynamics' },
  { file: `${phar2}`, filename: 'Synthesis and Physiology of Neurotransmitters_non-major', label: 'Synthesis and Physiology of Neurotransmitters_non-major' },
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
