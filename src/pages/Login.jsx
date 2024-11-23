import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import JobsterLight  from '../assets/images/jobster-light.png'

import LoginForm from '../components/login/LoginForm';
import SocialLogin from '../components/login/SocialLogin';
import Button from '../ui/Button';

import { FaArrowLeft } from "react-icons/fa";


const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-10 w-full h-screen px-10'>

      {/* Logo */}
      <div>
        <img src={JobsterLight} width={248} alt="Jobster Light Logo" />
      </div>

      {/* Login Form */}
      <LoginForm />


      {/* Login with social media */}
      {/* <SocialLogin /> */}

      {/* Sign up if no account */}
      <p className='text-gray-800'>Don't have an account? <Link to='/register' className='text-[var(--primary-color)] font-medium'>Sign Up</Link></p>

      {/* Divider */}
      <div className="flex items-center w-full">
        <hr className="bg-gray-500 w-full"></hr>
        <span className="px-2 text-gray-600">or</span>
        <hr className="bg-gray-500 w-full"></hr>
      </div>

      <p>Stay as <Link to='/' className='text-[var(--primary-color)] font-medium'>Guest</Link></p>
    </div>
  )
}

export default Login
