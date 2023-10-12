import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import { createUserWithEmailAndPassword, 
         signOut,
         signInWithEmailAndPassword,
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

    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(dataBase,(currentuser)=>{
        setUser(currentuser)
        
     })
     return()=>{
        unsubscribe()
     }
    },[])
    
    return (
        <UserAuthcontext.Provider value={{user, Signup,login, logOut, ResetPassword}}> {children}</UserAuthcontext.Provider>)
    
}

export function UseUserAuth (){
    return(
        useContext(UserAuthcontext)
    )
}