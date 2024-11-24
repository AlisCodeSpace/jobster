import React, { useState } from 'react'

import { FaSearch } from "react-icons/fa";

const Search = () => {
    const [expandSearch, setExpandSearch] = useState(false)

  return (
    <div className={`rounded-full flex items-center gap-3 border  p-2 transition-all ease-in-out duration-150 overflow-hidden ${expandSearch ? 'border-[var(--primary-color)] w-[180px]' : 'w-[30px] border-gray-500'}`}>
        <span onClick={() => setExpandSearch(prevState => !prevState)} className={`${expandSearch ? 'text-[var(--primary-color)]' : 'text-gray-500'}`}><FaSearch size={12}/></span>
        <input type="text" placeholder='Search jobs' className={`${expandSearch ? 'block' : 'hidden'} text-[var(--primary-color)] outline-none w-[130px] placeholder:text-[var(--primary-color)]`}/>
    </div>
  )
}

export default Search
