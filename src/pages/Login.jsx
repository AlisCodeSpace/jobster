import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import JobsterLight  from '../../public/jobster-light.png'

import LoginForm from '../components/login/LoginForm';
import SocialLogin from '../components/login/SocialLogin';


const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-10 w-full h-screen px-10'>
      {/* Logo */}
      <div>
        <img src={JobsterLight} width={248} alt="Jobster Light Logo" />
      </div>

      {/* Login Form */}
      <LoginForm />

      {/* Divider */}
      <div className="flex items-center w-full">
        <hr className="bg-gray-500 w-full"></hr>
        <span className="px-2 text-gray-600">or</span>
        <hr className="bg-gray-500 w-full"></hr>
      </div>

      {/* Login with social media */}
      <SocialLogin />

      {/* Sign up if no account */}
      <p>Don't have an account? <Link to='/register' className='text-[var(--primary-color)] font-medium'>Sign Up</Link></p>
    </div>
  )
}

export default Login
