import React, { useState } from 'react'

import { FaEye, FaEyeSlash } from "react-icons/fa";

import JobsterLight  from '../../public/jobster-light.png'
import Input from '../ui/Input'
import Button from '../ui/Button';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className='flex flex-col items-center gap-10 w-full h-screen my-4'>
      {/* Logo */}
      <div>
        <img src={JobsterLight} width={248} alt="Jobster Light Logo" />
      </div>

      {/* Login Form */}
      <div className='flex flex-col items-center gap-10 w-full px-10'>
        <h1 className='text-3xl font-medium'><span className='text-[var(--primary-color)] '>Welcome</span> back!</h1>
        <form className='flex flex-col items-center justify-center gap-5 w-full'>
          <Input type='text' placeholder='Username'/>
          <div className='relative w-full'>
            <Input type={`${showPassword ? 'text' : 'password'}`} placeholder='Password'/>
            <button type='button' onClick={() => setShowPassword(prevState => !prevState)} className='absolute top-3 right-5 text-[var(--primary-color)]'>{showPassword ? <FaEye />  : <FaEyeSlash />}</button>
            <Button type='submit' text='Login' className='w-full my-4'/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
