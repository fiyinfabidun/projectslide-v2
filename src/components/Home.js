
import Homeimg from '../assets/home.png';
import NavBar from './NavBar';
import download from '../assets/archive.png'
import book from '../assets/book.png';
import pick from '../assets/pick.png';
import { Link } from 'react-router-dom';
import Footer from './Footer';



function Home() {

  
  return (
    <>
     <NavBar/>
     <section className="homepage">
      <div className="first-segment">
        <div className="picture">
          <img src={Homeimg} alt="" />
        </div>
        <div className="welcome-text">
          <h2>Welcome to <b>classvault</b></h2>
          <p>We're delighted to have you as part of our community. To unlock the full experience, kindly choose your category. Your journey with us begins now."</p>
        </div>
      </div>

    
     </section>
     <section className='hero'>
      <h2>Why do you need classVault?</h2>
     <div className="info">
        <div className="first-info">
          <img src={download} alt="" className='icon'/>
          <p>
          Make it easy to download school files with just one click. so students can quickly access their study materials without hassle.
          </p>
        </div>
        <div className="second-info">
          <img src={book} alt=""  className='icon'/>
          <p>
          Students can access their specific courses according to the class and department they belong to.
          </p>
        </div>
      </div>
      <br />
      <h2 className='class-text'>SELECT YOUR CLASS</h2>
      <div className="class-section">
       
        <div className="picture">
          <img src={pick} alt="" />
        </div>
        <div className="classes">
          <div className=" class-box">
            <Link to='/phronesis'>Phronesis</Link>
          </div>

          <div className="class-box">
          <Link to='/delphinium'>Delphinium</Link>
          </div>

          <div className=" class-box">
          <Link to='/pandora'>Pandora</Link>
          </div>
          <div className=" class-box">
            <Link to='/amabilis'>Amabilis</Link>
          </div>
          <div className=" class-box phoenix">
            <Link to='/aspectum'>Aspectum</Link>
          </div>
          <div className=" class-box pandora">
            <Link to='/phoenix'>Phoenix</Link>
          </div>
           <div className=" class-box pandora">
            <Link to='/genezens'>Genezens</Link>
          </div>
          
         
        </div>
      </div>
     </section>
     <Footer/>
    </>)
}


export default Home
