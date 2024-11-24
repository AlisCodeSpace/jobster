import React from 'react'

import CompanyLogo from '../../assets/images/google.png'
import { Link } from 'react-router-dom'

const Job = ({ logo, companyName, position, jobType, location, workStyle, skills, datePosted}) => {
  const skillset = skills.map((skill, index) => (
    <span key={index} className='rounded-lg border border-[var(--primary-color)] bg-[var(--primary-color)] text-white text-sm px-2 '>{skill}</span>
  ))

  return (
    <Link to='1' className='bg-white rounded-sm w-full'>
      <div className='flex gap-3 py-3 px-1'>
        <div className='mt-2 w-1/6 flex justify-center items-start'>
            <img src={logo} width={48} alt={logo} />
        </div>
        <div className='w-5/6'>
            <div className='flex gap-2 items-center'>
                <h1 className='font-semibold'>{position}</h1>
                <span className='text-gray-600'> - </span>
                <span className='text-[var(--primar-color)]'>{jobType}</span>
            </div>
            <h3>{companyName}</h3>
            <p className='text-gray-600'>{location} ({workStyle})</p>
            <div className='flex justify-between items-center mt-2 w-full'>
                <div className='flex gap-3'>
                  {skillset}
                </div>
                <span className='text-xs text-gray-600'>{datePosted}</span>
            </div>
        </div>
      </div>
    </Link>
  )
}

export default Job
