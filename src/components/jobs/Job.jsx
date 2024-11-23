import React from 'react'

import CompanyLogo from '../../assets/images/google.png'

const Job = () => {
  return (
    <div className='bg-white rounded-sm'>
      <div className='flex gap-2'>
        <div>
            <img src={CompanyLogo} width={48} alt="Company Logo" />
        </div>
        <div>
            <h1>Junior Web Developer</h1>
        </div>
      </div>
    </div>
  )
}

export default Job
