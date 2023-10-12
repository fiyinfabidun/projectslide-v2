import React from 'react'
import { UseUserAuth } from '../context/UserAuthConfig';
import { useState } from 'react';

 
function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [error, seterror] = useState('');
    const {ResetPassword } = UseUserAuth;
    
  
    async function handleResetPassword(e) {
        e.preventDefault();
        seterror('')
      try {
        await ResetPassword(email);
        seterror('Password reset email sent. Check your inbox.');
      } catch (error) {
        seterror('Failed to send reset email. Please check your email address.');
      }
    }
  
    return (
      <form className='flex' onSubmit={handleResetPassword}>
        <h2>Forgot Password</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className='login-btn'>Reset Password</button>
        {error && <p className="error">{error}</p>}
      </form>
    );
  }
  
export default ForgotPassword