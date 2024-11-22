import React from 'react'


const Input = ({ className, type, placeholder, value, id, name, handleChange }) => {
    const classes = `${className || 'bg-transparent rounded-sm px-2 py-2 border border-gray-400 focus:border-[var(--primary-color)] text-[var(--primary-color)] placeholder-gray-500 w-full outline-none '} `

    const renderInput = () => (
        <input 
            className={classes} 
            type={type} 
            placeholder={placeholder}
            value={value} 
            id={id} 
            name={name}  
            onChange={handleChange} 
            required 
        />  
    )


    return renderInput()
}

export default Input