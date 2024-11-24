import React, { useState } from 'react'

import { FaSlidersH, FaSearch } from "react-icons/fa";
import Search from './filters/Search';

const Filters = () => {

  return (
    <div className='flex items-center gap-5 bg-white w-full overflow-scroll'>
      <div className='py-5 px-4 border-r border-gray-400 rounded-sm'>
        <span className='text-gray-600'><FaSlidersH size={20}/></span>
      </div>
      <div>
        <Search />
      </div>
    </div>
  )
}

export default Filters
