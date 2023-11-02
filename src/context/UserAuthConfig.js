import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import { createUserWithEmailAndPassword, 
         signOut,
         signInWithEmailAndPassword,
         GoogleAuthProvider,
         signInWithPopup,
         onAuthStateChanged ,
        sendPasswordResetEmail} from 'firebase/auth';
import { dataBase } from '../components/Firebaseconfig';         

const UserAuthcontext = createContext();

export function UserAuthContextProvider({children}){
    const[user, setUser] =useState('')

    function Signup(email,password){
        return createUserWithEmailAndPassword(dataBase,email,password)
    }
    function login(email,password){
        return signInWithEmailAndPassword(dataBase,email,password)
    }
    function ResetPassword(email){
        return sendPasswordResetEmail(email)
    }
    function logOut(){
        return signOut(dataBase)
    }
  function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
      }


    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(dataBase,(currentuser)=>{
        setUser(currentuser)
        
     })
     return()=>{
        unsubscribe()
     }
    },[])
    
    return (
        <UserAuthcontext.Provider value={{user, Signup,login, logOut, ResetPassword, googleSignIn}}> {children}</UserAuthcontext.Provider>)
    
}

export function UseUserAuth (){
    return(
        useContext(UserAuthcontext)
    )
}
