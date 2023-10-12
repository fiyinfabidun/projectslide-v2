import React, { useState } from 'react';
import loginimage from '../assets/sign.png';
import { Link, useNavigate} from 'react-router-dom';
import { UseUserAuth } from '../context/UserAuthConfig';


function Registerandlogin() {

const [username, setUserName] = useState('');
const [usermail, setmail] = useState('');
const [userPassword, setUserpassword] = useState('')
const [userMatric,setmatric] = useState('')
const { Signup } = UseUserAuth();
const navigate = useNavigate();
const[error, setError]= useState('')



  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('')
    try{
      await Signup(usermail,userPassword);
      navigate('/')
    }  catch (error) {
      // Set the error message in state
      setError('An error occurred 😢 . Please try again.');
    }
    
    setUserName('')
    setUserpassword('')
    setmatric('')
    setmail('')
   
  }
  

  return (
    <>
    <section className="grid">
    <div className="image">
      <img src={loginimage} alt="" />
    </div>
    <form onSubmit={handleSubmit}>
      <div className="textbox">
      <p className='intro-login'><b >Welcome,</b> </p>
      <p className="intro-login">to classVault😊</p>
      <p className='blue-text'>SIGN IN</p>
      </div>
    
   {error && <p className="error">{error}</p>}
      <input
       type="text"
       value={username}
       placeholder='nickname'
       onChange={(e)=>{
        setUserName(e.target.value)
        setError('')
       }}
      />
        <input 
        type="number" 
        placeholder='Matric no'
        value={userMatric}
        onChange={(e)=>{
          setmatric(e.target.value)
          setError('')
         }}/>
       <input
        type="email"
        placeholder='email'
        value={usermail}
        onChange={(e)=>{
          setmail(e.target.value)
          setError('')
         }}
        />

        <input 
        type="password" 
        placeholder='password'
        value={userPassword}
        onChange={(e)=>{
          setUserpassword(e.target.value)
          if(userPassword.length < 6){
            setError('password should at least be 6 characters')
          }else{
            setError('')
          }
         }}/>

        <p>already have am account? <Link to='/'className='link'> log in </Link> </p>
        <button className='login-btn'>Log in</button>
    </form>
    </section>
    </>
  )
}

export default Registerandlogin
