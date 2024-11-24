import React from 'react'

const Button = ({ className, text, type }) => {
    const buttonClasses = `${className || ''} py-2 px-4 bg-[var(--primary-color)] rounded-sm text-white transition-all duration-200 ease-in-out`

    const renderButton = () => (
        <button type={type} className={buttonClasses}>{text}</button>
    )
  return renderButton(); 
}

export default Button
