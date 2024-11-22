import React, { useState } from 'react'

import Button from '../../ui/Button'
import Input from '../../ui/Input'

import { FaEye, FaEyeSlash } from 'react-icons/fa'

const CompanyForm = () => {
    const [showPassword, setShowPassword] = useState(false)

    return (
      <form className='w-full flex flex-col gap-5'>
          <Input type='text' placeholder='Company Name'/>
          <Input type='email' placeholder='Company Email'/>
  
          {/* Password */}
          <div className='relative w-full'>
              <Input type={`${showPassword ? 'text' : 'password'}`} placeholder='Password'/>
              <button type='button' onClick={() => setShowPassword(prevState => !prevState)} className='absolute top-3 right-5 text-[var(--primary-color)]'>{showPassword ? <FaEye />  : <FaEyeSlash />}</button>
          </div>
  
          {/* Confirm Password */}
          {/* <div className='relative w-full'>
              <Input type={`${showPassword ? 'text' : 'password'}`} placeholder='Confirm Password'/>
              <button type='button' onClick={() => setShowPassword(prevState => !prevState)} className='absolute top-3 right-5 text-[var(--primary-color)]'>{showPassword ? <FaEye />  : <FaEyeSlash />}</button>
          </div> */}
          
          <Input type='number' placeholder='Company Phone Number'/>
          <Input type='text' placeholder='Company URL'/>
  
          <Button type='submit' text='Register' className='button w-full'/>
  
      </form>
    )
}

export default CompanyForm
