import React from 'react'
import { Navigate } from 'react-router-dom';
import { UseUserAuth } from '../context/UserAuthConfig';
// import { useState,useEffect } from 'react';

  function ProtectedRoute({children}) {
    let {user} = UseUserAuth();
    if (!user){
       return  <Navigate to='/'/>
    }
  return children;
}



export default ProtectedRoute