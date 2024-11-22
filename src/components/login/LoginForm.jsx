import React, { useState } from 'react'

import Button from '../../ui/Button'
import Input from '../../ui/Input'

import { FaEye, FaEyeSlash } from 'react-icons/fa'

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    /* Login Form */
    <div className='flex flex-col items-center gap-10 w-full'>
        <h1 className='text-3xl font-medium'><span className='text-[var(--primary-color)] '>Welcome</span> back!</h1>
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
            <Button text='Forgot Password?' path='/forgotpass' className='button text-sm'/>
        </div>

        {/* Submit Button */}
        <Button type='submit' text='Login' className='button w-full'/>
        </form>  
    </div>
  )
}

export default LoginForm
