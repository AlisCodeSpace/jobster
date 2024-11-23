import React from 'react'

import CompanyLogo from '../../assets/images/google.png'

const Job = () => {
  return (
    <div className='bg-white rounded-sm w-full'>
      <div className='flex gap-4 p-3'>
        <div className='flex items-center'>
            <img src={CompanyLogo} width={48} alt="Company Logo" />
        </div>
        <div>
            <div className='flex gap-2 items-center'>
                <h1 className='font-semibold'>Junior Web Developer</h1>
                <span>-</span>
                <p className='text-sm text-gray-600'>(0 - 1) years</p>
            </div>
            <h3>Google</h3>
            <p className='text-gray-600'>Lebanon (Remote)</p>
            <div className='flex gap-3 mt-2'>
                <span className='rounded-lg border border-[var(--primary-color)] bg-[var(--primary-color)] text-white text-sm px-2 '>React</span>
                <span className='rounded-lg border border-[var(--primary-color)] bg-[var(--primary-color)] text-white text-sm px-2 '>Laravel</span>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Job
