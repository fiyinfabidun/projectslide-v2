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
import phar3 from '../assets/Drug used in Renal failure, anticoagulant and.pptx';
// histo slides
import intod from '../assets/INTRODUCTION_TO_HISTO_PATHOLOGY NEW (1).pptx';
import intro from '../assets/INTRODUCTION TO FIXATION (2).pptx';
import fixation2 from '../assets/FIXATION 2.ppt';
import clear from '../assets/CMUL MLS 334 DEHYDRATION, CLEARING, INFILTRATION(EMBEDDING).ppt';
import tissue from '../assets/TISSUE PROCESSING.ppt';
import basic from '../assets/BASIC HISTOLOGY  MLS 300L.pptx';
import decal from '../assets/DECALCIFICATION.ppt';


// haemat slides
import ert from '../assets/ERYTHROPOIESIS-1 (1).pptx';
import redcount from '../assets/Red Cell Indices ppt (3).pptx';
import meth from '../assets/Methods for Blood Cell Counting (2).pptx';
import principle from '../assets/Principle and Mode of Action Common Anticoagulants (2).pdf';
import bloodfilm from '../assets/Untitled presentation (1).pdf';
import func from '../assets/FUNCTIONS OF BLOOD CELLS.pptx';
import anemia from '../assets/INTRODUCTION TO ANAEMIAS.pptx';
import ida from'../assets/IDA MLS 332.pptx';

// clinicAL CHEM
import plasma from '../assets/PLASMA PROTEINS 300L.pptx';
import grn1 from '../assets/CARBOHYDRATE METABOLISM 300L.pptx';
import grn2 from '../assets/DIABETES MELITUS CAUSES AND INVESTIGATIONS 300L LECTURE (1).pptx';
import grn3 from '../assets/HYPOGLCEAMIA 300L.pptx';
import grn4 from '../assets/Introduction to plasma lipids.pptx';
import grn5 from '../assets/MLS 301 RENAL PLASMA FLOW & DYE EXCRETION TEST.pptx';
// micro
import history from '../assets/MLS 333_ HISTORY  OF MICROBIOLOGY (1).pdf';
import etha from '../assets/ETHANOL PRODUCTION _MICROORGANISM.pdf';
import genetics from '../assets/MLS333 BACTERIA GENETICS AND VARIATION.pdf';
import bacteria from '../assets/MLS333 BACTERIA METABOLISM.ppt';
import steri from '../assets/MLS333 STERILISATION IN MICROBIOLOGY.ppt';
// bch
import bch1 from '../assets/BCH 222 INTRO METABOLISM APRIL 2023.pdf';
import bch2 from '../assets/BCH 222 LECTURE METABOLISM 2021-converted.pdf';
import bch3 from '../assets/Updated BCH211 WATER AND PH 2022 (1).pdf';
import bch4 from '../assets/BCH 202 2017 VIT COF HORM.ppt';
import bch5 from '../assets/LIPID METAB TRINITY.ppt';
import bch6 from '../assets/BCH 211 2021-converted (1).pdf';





function Phronesis() {
  const CLINICAL_CHEM=[
    { file: `${plasma}`, filename: 'PLASMA PROTEINS 300L', label: 'PLASMA PROTEINS 300L' },
    { file: `${grn1}`, filename: 'CARBOHYDRATE METABOLISM 300L', label: 'CARBOHYDRATE METABOLISM 300L' },
    { file: `${grn2}`, filename: 'DIABETES MELITUS CAUSES AND INVESTIGATIONS 300L LECTURE (1)', label: 'DIABETES MELITUS CAUSES AND INVESTIGATIONS 300L LECTURE (1)'},
    { file: `${grn3}`, filename: 'HYPOGLCEAMIA', label: 'HYPOGLCEAMIA' },
    { file: `${grn4}`, filename: 'Introduction to plasma lipids', label: 'INTRODUCTION TO PLASMA LIPIDS' },
    { file: `${grn5}`, filename: 'MLS 301 RENAL PLASMA FLOW & DYE EXCRETION TEST', label: 'RENAL PLASMA FLOW & DYE EXCRETION TEST' },
  ]
  const HEAMAT=[
    { file: `${ert}`, filename: 'ERYTHROPOIESIS', label: 'ERYTHROPOIESIS' },
    { file: `${redcount}`, filename: 'RED CELL INDICES', label: 'RED CELL INDICES' },
    { file: `${meth}`, filename: 'METHOD OF BLOOD CELL COUNTING', label: 'METHOD OF BLOOD CELL COUNTING' },
     { file: `${func}`, filename: 'FUNCTIONS OF BLOOD CELLS', label: 'FUNCTIONS OF BLOOD CELLS' },
     { file: `${principle}`, filename: 'Principle and Mode of Action Common Anticoagulants ', label: 'PRINCIPLE AND MODE OF ACTION OF COMMON ANTICOAGULANTS' },
     { file: `${bloodfilm}`, filename: 'peripheral blood film reading and examination', label: 'PERIPHERAL BLOOD FILM READING AND EXAMINATION' },
    { file: `${anemia}`, filename: 'INTRODUCTION TO ANAEMIAS', label: 'INTRODUCTION TO ANAEMIA' },
      { file: `${ida}`, filename: 'IDA MLS 332', label: 'IDA' },

    
]
const HISTO=[
    { file: `${intod}`, filename: 'INTRODUCTION_TO_HISTO_PATHOLOGY ', label: 'INTRODUCTION_TO_HISTO_PATHOLOGY ' },
   { file: `${intro}`, filename: 'INTRODUCTION TO FIXATION', label: 'INTRODUCTION TO FIXATION' },
  { file: `${fixation2}`, filename: 'FIXATION 2', label: 'FIXATION 2' },
   { file: `${tissue}`, filename: 'TISSUE PROCESSING', label: 'TISSUE PROCESSING' },
  { file: `${clear}`, filename: '/CMUL MLS 334 DEHYDRATION, CLEARING, INFILTRATION/(EMBEDDING)', label: ' DEHYDRATION, CLEARING, INFILTRATION' },
{ file: `${basic}`, filename: 'BASIC HISTOLOGY MLS 300L', label: 'BASIC HISTOLOGY'},
{ file: `${decal}`, filename: 'DECALCIFICATION', label: 'DECALCIFICATION' },
 
]
const MICRO=[
  { file: `${history}`, filename: 'MLS 333_ HISTORY  OF MICROBIOLOGY', label: 'HISTORY  OF MICROBIOLOGY' },
  { file: `${ etha }`, filename: 'ETHANOL PRODUCTION _MICROORGANISM', label: 'ETHANOL PRODUCTION _MICROORGANISM' },
  { file: `${genetics}`, filename: ' BACTERIA GENETICS AND VARIATION', label: ' BACTERIA GENETICS AND VARIATION' },
  { file: `${bacteria}`, filename: 'BACTERIA METABOLISM', label: 'BACTERIA METABOLISM' },
  { file: `${steri}`, filename: 'STERILISATION IN MICROBIOLOGY', label: 'STERILISATION IN MICROBIOLOGY' },
  
  
]
  const BCH=[
  { file: `${bch1}`, filename: 'BCH 222 INTRO METABOLISM APRIL 2023', label: 'INTRO METABOLISM' },
  { file: `${bch2}`, filename: 'BCH 222 LECTURE METABOLISM 2021-converted', label: 'LECTURE METABOLISM' },
      { file: `${bch3}`, filename: 'Updated BCH211 WATER AND PH 2022 ', label: 'WATER AND PH ' },
      { file: `${bch4}`, filename: 'BCH 202 2017 VIT COF HORM', label: 'BCH 202 2017 VIT COF HORM' },
      { file: `${bch5}`, filename: 'LIPID METAB TRINITY', label: 'LIPID METAB TRINITY' },
      { file: `${bch6}`, filename: 'BCH 211 2021-converted ', label: 'PROKARYOTIC AND EUKARYOTIC CELLS'},
 
]
const PHARMAC=[
  { file: `${phar1}`, filename: 'PHARMACOKINETICS AND PHARMACODYNAMICS', label: 'Pharmacokinectics and Pharmacodynamics' },
  { file: `${phar2}`, filename: 'Synthesis and Physiology of Neurotransmitters_non-major', label: 'Synthesis and Physiology of Neurotransmitters_non-major' },
{ file: `${phar3}`, filename: '  Drug used in Renal failure, anticoagulant', label: '  Drug used in Renal failure, anticoagulant ' },
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
