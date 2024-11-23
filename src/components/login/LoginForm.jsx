import React, { useState } from 'react'

import Button from '../../ui/Button'
import Input from '../../ui/Input'

import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    /* Login Form */
    <div className='flex flex-col items-center gap-10 w-full'>
        <h1 className='text-3xl font-medium text-gray-800'><span className='text-[var(--primary-color)] '>Welcome</span> back!</h1>
        <form className='flex flex-col items-center justify-center gap-5 w-full'>
          {/* Username input */}
          <Input type='text' placeholder='Username'/>

          {/* Password */}
          <div className='relative w-full'>
              <Input type={`${showPassword ? 'text' : 'password'}`} placeholder='Password'/>
              <button type='button' onClick={() => setShowPassword(prevState => !prevState)} className='absolute top-3 right-5 text-[var(--primary-color)]'>{showPassword ? <FaEye />  : <FaEyeSlash />}</button>
          </div>

          {/* Forgot Password */}
          <div className='flex items-center justify-end w-full'>
              <Button text='Forgot Password?' path='/forgotpass' className='text-[16px] text-gray-800'/>
          </div>

          {/* Submit Button */}
          <Button type='submit' text='Login' className='button w-full'/>

          <p className='text-gray-500 text-center text-xs'>By continuing, you agree to the Jobster <Link className='text-[var(--primary-color)] font-medium'>User Agreement</Link>, <Link className='text-[var(--primary-color)] font-medium'>Privacy Policy</Link>, and <Link className='text-[var(--primary-color)] font-medium'>Cookie Policy</Link>.</p>
          
        </form>  
    </div>
  )
}

export default LoginForm
