import React from 'react'
import { NavLink } from 'react-router-dom'

const Button = ({ className, text, path, type }) => {
    const linkClasses = `${className || ''} hover:text-[var(--primary-color)] transition-all duration-200 ease-in-out text-lg`
    const buttonClasses = `${className || ''} py-2 px-4 bg-[var(--primary-color)] rounded-sm text-white transition-all duration-200 ease-in-out`

    const renderButton = () => (
        <button type={type} className={buttonClasses}>{text}</button>
    )

    const renderLink = () => (
        <NavLink to={path} className={linkClasses}>{text}</NavLink>
    )
  return path ? renderLink() : renderButton(); 
}

export default Button
