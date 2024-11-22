import React, { useState } from 'react'

import JobsterLight  from '../../../public/jobster-light.png'
import { FaBars, FaTimes } from "react-icons/fa";
import Button from '../../ui/Button'

const Navbar = () => {
    const [collapse, setCollapse] = useState(true)
    const renderDesktopNav = () => (
        <nav className='flex justify-between items-center py-3 px-6 drop-shadow-sm bg-white z-50'>
            {/* Logo */}
            <div>
                <img src={JobsterLight} width={128} alt="Jobster Light Logo" />
            </div>

            {/* Middle Nav Elements */}
            <div className='flex items-center gap-4'>
                <Button text='Find Jobs' path="/login"/>
                <Button text='My Applications' path="/login"/>
                <Button text='Find Jobs' path="/login"/>
            </div>

            {/* Login and Register */}
            <div className='flex items-center gap-4'>
                <Button text='Login' path="/login"/>
                <Button text='Register' path="/register" className="py-2 px-4 bg-[var(--primary-color)] border-2 border-transparent rounded-sm text-white transition-all font-semibold duration-200 ease-in-out hover:border-[var(--primary-color)] hover:bg-white hover:text-[var(--primary-color)]"/>
            </div>
        </nav>
    )

    const renderMobileNav = () => (
        <div className={`w-full px-4 py-4 flex ${collapse ? 'flex-row justify-end' : 'flex-col items-center bg-white h-screen'}`}>
            <button onClick={() => setCollapse(prevState => !prevState)}>{collapse ? <FaBars /> : <FaTimes />}</button>
            <nav className={`flex-col items-center justify-around w-full h-screen ${collapse ? 'hidden' : 'flex'}`}>
                <Button text='Find Jobs' path="/login"/>
                <Button text='My Applications' path="/login"/>
                <Button text='Find Jobs' path="/login"/>
                <Button text='Login' path="/login"/>
                <Button text='Register' path="/register"/>
            </nav>
        </div>
    )
  return renderMobileNav()
}

export default Navbar
