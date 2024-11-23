import React, { useState } from 'react'

import JobsterLight from '../assets/images/jobster-light.png'

import UserForm from '../components/register/UserForm'
import CompanyForm from '../components/register/CompanyForm'
import SwitchForm from '../components/register/SwitchForm'

import { Link } from 'react-router-dom'
import SocialLogin from '../components/login/SocialLogin'

const Register = () => {
  const [switchForm, setSwitchForm] = useState('user')


  return (
    <div className='flex flex-col items-center justify-center h-screen gap-4 px-10'>
      {/* Logo */}
      <div className='mb-5'>
        <img src={JobsterLight} width={248} alt="Jobster Light Logo" />
      </div>

      <div className='flex flex-col items-center gap-3'>
        <h2 className='text-2xl text-center font-medium dark:text-white'>Begin the Job Hunt</h2>
        <p className='text-gray-700 dark:text-gray-400 text-center'>Create a user or company account to continue</p>
      </div>

      <SwitchForm switchForm={switchForm} setSwitchForm={setSwitchForm}/>
    

      {/* Register Form */}
      {switchForm === 'user' ? <UserForm /> : <CompanyForm />}

      <p className='text-gray-500 text-center text-xs'>By continuing, you agree to the Jobster <Link className='text-[var(--primary-color)] font-medium'>User Agreement</Link>, <Link className='text-[var(--primary-color)] font-medium'>Privacy Policy</Link>, and <Link className='text-[var(--primary-color)] font-medium'>Cookie Policy</Link>.</p>


      <p className='text-gray-700 dark:text-gray-400'>Already have an account? <Link to='/login' className='text-[var(--primary-color)] font-medium'>Login</Link></p>
    </div>
  )
}

export default Register
