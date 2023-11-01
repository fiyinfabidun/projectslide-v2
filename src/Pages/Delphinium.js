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
        <Test label=" Electrotherapy 1;- 315" links={links} downloadable={true}/>
         <Test label=" Electrotherapy II;;- PST 316" links={links} downloadable={true}/>
         <Test label="Theory and practice of massage ;- PST 317" links={links} downloadable={true}/>
         <Test label="Exercise therapy 1; Introduction to Movements;- PST 318 " links={links} downloadable={true}/>
         <Test label="Introduction to Clinical Physiotherapy;-PST 319" links={links} downloadable={true}/>
         <Test label=" Clinical Psychologyy;-PST 331" links={links} downloadable={true}/>
         <Test label="Physiotherapy in Pharmacology;-PST 332" links={links} downloadable={true}/>
         <Test label="Basic therapeutic skills;-CLS 311" links={links} downloadable={true}/>
         <Test label="Foundation of Nursing 1 ( Nursing skills)- NSC 213" links={links} downloadable={true}/>
         <Test label="Basic Pharmacology and Therapeutics 1;- PHA 317" links={links} downloadable={true}/>

          </div>
    
    </div>
        <Footer/>
         </>
        
      )
  
}

export default Delphinium
