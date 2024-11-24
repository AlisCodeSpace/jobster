import React from 'react'
import Job from '../components/jobs/Job'

import GoogleLogo from '../assets/images/google.png'
import GithubLogo from '../assets/images/github.png'
import Filters from '../components/jobs/filters'


const Jobs = () => {
  const joblist = [
    {
      id: 1,
      logo: GoogleLogo,
      companyName: 'Google',
      position: 'Junior Web Developer',
      jobType: 'Intern',
      location: 'United States',
      workStyle: 'Remote',
      skills: ['React', '.NET', 'SQL'],
      datePosted: '1d',
    },
    {
      id: 2,
      logo: GithubLogo,
      companyName: 'Github',
      position: 'Senior Backend Engineer',
      jobType: 'Fulltime',
      location: 'Lebanon',
      workStyle: 'Hybrid',
      skills: ['Angular', 'Laravel', 'SQL'],
      datePosted: '5m',
    }
  ]

  const jobs = joblist.map((job) => (
    <Job 
      key={job.id} 
      logo={job.logo}
      companyName={job.companyName} 
      position={job.position}
      jobType={job.jobType}
      location={job.location}
      workStyle={job.workStyle}
      skills={job.skills}
      datePosted={job.datePosted}
    />
  ))

  return (
    <div className='flex flex-col items-center w-full gap-3'>
      <Filters />
      <div className='flex flex-col items-center w-full gap-3 px-2'>
        {jobs}
      </div>
    </div>
  )
}

export default Jobs
