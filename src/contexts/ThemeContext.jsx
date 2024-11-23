import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false)
    
    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
        document.body.classList.toggle("dark");     
    };

    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
