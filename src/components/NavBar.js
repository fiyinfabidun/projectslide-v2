import React from 'react';
import { UseUserAuth } from '../context/UserAuthConfig';
import { Link } from 'react-router-dom';

function NavBar() {
    const {user, logOut} = UseUserAuth();
    console.log(user)
    const HandleSignOut = async ()=>{
       try{
         await logOut();
       }
       catch(err){
        console.log(err.message)
       }
      }
  return (
    <div className='navbar'>
        <h3 className="Logo"><Link to='/home'>classVault</Link></h3>
        <button onClick={HandleSignOut}>Log out</button>
    </div>
  )
}

export default NavBar