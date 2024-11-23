import React, { useState } from 'react'

import Button from '../../ui/Button'
import Input from '../../ui/Input'
import SocialLogin from '../login/SocialLogin'

import { FaEye, FaEyeSlash } from 'react-icons/fa'

import { PasswordValidation, EmailValidation, UsernameValidation } from '../../utils/Validations'

const UserForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [userFullname, setUserFullname] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPass, setUserPass] = useState('')

  const [formSubmitted, setFormSubmitted] = useState(false);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleNameInput = (e) => {
    setUserFullname(e.target.value);
    setNameError('')
  };

  const handleEmailInput = (e) => {
    setUserEmail(e.target.value);
    setEmailError('')
  };

  const handlePassInput = (e) => {
    setUserPass(e.target.value);
    setPasswordError('')
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    // Validate fields on submit
    const validatedUsername = UsernameValidation(userFullname);
    const validatedEmail = EmailValidation(userEmail);
    const validatedPass = PasswordValidation(userPass);

    setNameError(validatedUsername !== true ? validatedUsername : "");
    setEmailError(validatedEmail !== true ? validatedEmail : "");
    setPasswordError(validatedPass !== true ? validatedPass : "");

    // If all validations pass, handle form submission
    if (
      validatedUsername === true &&
      validatedEmail === true &&
      validatedPass === true
    ) {
      console.log("Form Submitted:", {
        fullName: userFullname,
        email: userEmail,
        password: userPass,
      });
      setFormSubmitted(false); // Reset submission tracking
      setNameError("");
      setEmailError("");
      setPasswordError("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-full flex flex-col items-center gap-5'>
      {/* Username */}
      <div className='w-full'>
        <Input type='text' placeholder='Full Name' value={userFullname} handleChange={handleNameInput} error={nameError}/>
        {nameError && <p className='text-red-700 text-xs mt-2 '>{nameError}</p>}
      </div>

      {/* Email */}
      <div className='w-full'>
        <Input type='email' placeholder='Email' value={userEmail} handleChange={handleEmailInput} error={emailError}/>
        {emailError && <p className='text-red-700 text-xs mt-2 '>{emailError}</p>}
      </div>

      {/* Password */}
      <div className='relative w-full'>
        <Input type={`${showPassword ? 'text' : 'password'}`} placeholder='Password' value={userPass} handleChange={handlePassInput} error={passwordError} />
        <button type='button' onClick={() => setShowPassword(prevState => !prevState)} className='absolute top-3 right-5 text-[var(--primary-color)]'>{showPassword ? <FaEye />  : <FaEyeSlash />}</button>
        {passwordError && <p className='text-red-700 text-xs mt-2 '>{passwordError}</p>}
      </div>

      {/* Confirm Password */}
      {/* <div className='relative w-full'>
          <Input type={`${showPassword ? 'text' : 'password'}`} placeholder='Confirm Password'/>
          <button type='button' onClick={() => setShowPassword(prevState => !prevState)} className='absolute top-3 right-5 text-[var(--primary-color)]'>{showPassword ? <FaEye />  : <FaEyeSlash />}</button>
      </div> */}
      
      {/* <Input type='number' placeholder='Phone Number'/>
      <Input type='text' placeholder="Birth Date" /> */}

      <Button type='submit' text='Register' className='button w-full'/>

      {/* <div className="flex items-center w-full">
        <hr className="w-full"></hr>
        <span className="px-2 text-gray-600">or</span>
        <hr className="w-full"></hr>
      </div>

      <SocialLogin /> */}
    </form>
  )
}

export default UserForm
