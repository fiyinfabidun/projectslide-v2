import React from 'react'
import whatsapp from '../assets/whatsapp.png'
import x from '../assets/twitter.png'
import insta from '../assets/instagram.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer">
        <div className="footer-content">
        <h3 className="Logo" 
        style={{
           padding:'10px', 
           fontSize:'30px',
           textAlign:'center'
        }}><Link to='/home'>classVault</Link></h3>

            <div className="class-link">
          
            <Link to='/phronesis'>Phronesis</Link>
            <Link to='/delphinium'>Delphinium</Link>
            <Link to='/pandora'>Pandora</Link>
            <Link to='/amabilis'>Amabilis</Link>
            <Link to='/aspectum'>Aspectum</Link>
            <Link to='/phoenix'>Phoenix</Link>
          </div>
          <div className="footer-media">
               
            <img src={whatsapp} alt="" />
            <img src={x} alt="" />
            <a href="https://instagram.com/f.iyin__?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
                 <img src={insta} alt="" />
                </a>
          

          </div>
          <p style={{
            textAlign: 'center',
            backgroundColor:'black',
            color:'white',
            padding: '10px'
          }}>Made with ❤️</p>
            </div>
       

        </div>
  )
}

export default Footer
