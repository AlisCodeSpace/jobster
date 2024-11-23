import React, { useState, useEffect } from "react";

import JobsterLight from "../../assets/images/jobster-light.png";
import { FaSuitcase, FaSignInAlt, FaUserCircle, FaBuilding, FaClipboardList } from 'react-icons/fa';

import Button from "../../ui/Button";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Check screen size


  // Update isMobile state on screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderDesktopNav = () => (
    <nav className="flex justify-between items-center py-3 px-6 shadow-md bg-white z-50">
      {/* Logo */}
      <div>
        <img src={JobsterLight} width={128} alt="Jobster Light Logo" />
      </div>

      {/* Middle Nav Elements */}
      <div className="flex items-center gap-4 text-gray-600">
        <Button text="Jobs" path="jobs" />
        <Button text="Companies" path="companies" />
        <Button text="Applications" path="applications" />
      </div>

      {/* Login and Register */}
      <div className="flex items-center gap-4">
        <Button text="Login" path="/login" className="text-gray-600"/>
        <Button
          text="Register"
          path="/register"
          className="py-2 px-4 bg-[var(--primary-color)] border-2 border-transparent rounded-sm text-white transition-all font-semibold duration-200 ease-in-out hover:border-[var(--primary-color)] hover:bg-white hover:text-[var(--primary-color)]"
        />
      </div>
    </nav>
  );

  const renderMobileNav = () => (
    <div>
        <div className="w-full h-16"></div>
        <nav className="fixed top-0 w-full shadow-md bg-white z-50 navbar">
            <div className="flex justify-between items-center px-4 py-3">
                <NavLink to='jobs' className={({isActive}) =>`flex flex-col items-center gap-2 rounded-sm ${isActive ? 'text-[var(--primary-color)]' : 'text-gray-600'}`}>
                    <span><FaSuitcase /></span>
                    <span className="text-sm">Jobs</span>
                </NavLink>
                <NavLink to='companies' className={({isActive}) =>`flex flex-col items-center gap-2 rounded-sm ${isActive ? 'text-[var(--primary-color)]' : 'text-gray-600'}`}>
                    <span><FaBuilding /></span>
                    <span className="text-sm">Companies</span>
                </NavLink>
                <NavLink to='applications' className={({isActive}) =>`flex flex-col items-center gap-2 rounded-sm ${isActive ? 'text-[var(--primary-color)]' : 'text-gray-600'}`}>
                    <span><FaClipboardList /></span>
                    <span className="text-sm">Apps</span>
                </NavLink>
                <NavLink to='profile' className={({isActive}) =>`flex flex-col items-center gap-2 rounded-sm ${isActive ? 'text-[var(--primary-color)]' : 'text-gray-600'}`}>
                    <span><FaUserCircle /></span>
                    <span className="text-sm">Profile</span>
                </NavLink>
                <NavLink to='/login' className="text-gray-600 flex flex-col items-center gap-2">
                    <span><FaSignInAlt /></span>
                    <span className="text-sm">Login</span>
                </NavLink>
            </div>
        </nav>
    </div>
  )

  return isMobile ? renderMobileNav() : renderDesktopNav();
};

export default Navbar;
