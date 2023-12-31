// import React, { useState } from 'react';
// import loginimage from '../assets/signed.png';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { UseUserAuth } from '../context/UserAuthConfig';



// function Login() {
// const [usermail, setmail] = useState('');
// const [userPassword, setUserpassword] = useState('')
// const {login,googleSignIn} = UseUserAuth();
// const navigate = useNavigate();
// const[error, setError]= useState('')

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     try{
//       await login(usermail,userPassword);
//       navigate('/home')
//     }  catch (error) {
//       // Set the error message in state
//       setError(error.message);
//     } setUserpassword('')
//       setmail('')
   
//   }
//   const handleGoogleSignIn = async (e) => {
//     e.preventDefault();
//     try {
//       await googleSignIn();
//       navigate("/home");
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
  

//   return (
//     <>
//     <section className="grid">
//     <div className="image-login">
//       <img src={loginimage} alt="" />
//     </div>
//     <form onSubmit={handleSubmit}>
//       <div className="textbox">
//       <p className='intro-login-signed'><b>Welcome,</b> </p>
//       <p className="intro-login">to classvault😊</p>
//       <p className='blue-text'>LOG IN</p>
//       </div>
    
//       {error && <p className="error">{error}</p>}
//        <input
//        className='signed'
//         type="email"
//         placeholder='email'
//         value={usermail}
//         onChange={(e)=>{
//           setmail(e.target.value)
//          }}
//         />

//         <input 
//         className='signed'
//         type="password" 
//         placeholder='password'
//         value={userPassword}
//         onChange={(e)=>{
//           setUserpassword(e.target.value)
//          }}/>

//         <p>don't have an account? <Link to='/create'className='link'> create account </Link> </p>
//         <p>forgot password? <Link to='/reset-password' className='link'>reset password</Link></p>
//         <button className='login-btn-signed'>Log in</button>
        
//     </form>
//           <button className='login-btn-signed' onClick={handleGoogleSignIn}>Sign in with Google</button>
//     </section>
//     </>
//   )
// }

// export default Login;




import React, { useState } from 'react';
import loginimage from '../assets/Tablet login-pana.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UseUserAuth } from '../context/UserAuthConfig';

function Login() {
  const [usermail, setmail] = useState('');
  const [userPassword, setUserpassword] = useState('');
  const { login, googleSignIn } = UseUserAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous error

    try {
      await login(usermail, userPassword);
      navigate('/home');
    } catch (error) {
      // Set the error message in state
      setError(error.message);
    }

    // Clear userPassword and usermail regardless of success or failure
    setUserpassword('');
    setmail('');
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate('/home');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <section className="grid">
        <div className="image-login">
          <img src={loginimage} alt="" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="textbox">
            <p className='intro-login-signed'><b>Welcome,</b></p>
            <p className="intro-login">to classvault😊</p>
            <p className='blue-text'>LOG IN</p>
          </div>

          {error && <p className="error">{error}</p>}
          <input
            className='signed'
            type="email"
            placeholder='email'
            value={usermail}
            onChange={(e) => {
              setmail(e.target.value);
            }}
          />

          <input
            className='signed'
            type="password"
            placeholder='password'
            value={userPassword}
            onChange={(e) => {
              setUserpassword(e.target.value);
            }}
          />

          <p>Don't have an account? <Link to='/create' className='link'>Create account</Link></p>
          <button className='login-btnn-signed' onClick={handleGoogleSignIn}>Sign in with Google</button>
          <button className='login-btn-signed' type="submit">Log in</button>
        </form>
       
      </section>
    </>
  );
}

export default Login;

