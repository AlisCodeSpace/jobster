import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import JobsterLight from "../../assets/images/jobster-light.png";

import Button from "../../ui/Button";
import navlinks from '../../data/navlinks'

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

  const renderNavLinks = navlinks.map((link, index) => (
    <NavLink key={index} to={link.path} className={({isActive}) =>`w-16 py-2 flex flex-col items-center gap-2 rounded-sm border-t-[3px] ${isActive ? 'text-[var(--primary-color)] border-[var(--primary-color)]' : 'text-gray-600 border-transparent'}`}>
        <span>{React.createElement(link.icon)}</span>
        <span className="text-sm">{link.text}</span>
    </NavLink>
  ))

  const renderMobileNav = () => (
    <div className="">
        <div className="w-full h-16"></div>
        <nav className="fixed bottom-0 w-full border shadow-md bg-white z-50">
            <div className="flex justify-between items-center">
                {renderNavLinks}
            </div>
        </nav>
    </div>
  )

  return isMobile ? renderMobileNav() : renderDesktopNav();
};

export default Navbar;
