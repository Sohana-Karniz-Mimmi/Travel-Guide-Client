/* eslint-disable react/prop-types */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
// import TouristsSpots from './TouristsSpots'
import TourGuide from '../TourGuide'
import OurPackage from './OurPackage'
import Overview from './Overview'
// import JobCard from './JobCard'
// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import { motion } from "framer-motion"
// import { useQuery } from '@tanstack/react-query'


const TabCategories = () => {

  // const [jobs, setJobs] = useState([])
  // useEffect(() => {
  //   const getData = async () => {
  //     const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`)
  //     setJobs(data)
  //   }
  //   getData()
  // }, [])

  // Tanstack Query
  // const { data: jobs = [], isLoading, } = useQuery({
  //   queryFn: () => getData(),
  //   queryKey: ['jobs'],
  // })

  // const getData = async () => {
  //   const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`)
  //   // setJobs(data)import PopularSpot from './PopularSpot';

  //   return data;
  // }

  // if (isLoading) {
  //   return <>
  //     <div className="flex items-center justify-center space-x-2 h-screen">
  //       <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-[#FD4C5C]"></div>
  //     </div>
  //   </>
  // }

  // console.log(jobs);

  return (
    <Tabs>
      <div className=' container py-10 mx-auto md:px-10 px-1'>

        <div>
          <h1 className='text-xl font-semibold text-center text-gray-800 capitalize lg:text-4xl '>
            Our Tourism
          </h1>

          <p className='max-w-2xl mx-auto mt-2 mb-8 text-center text-gray-500 '>
            Explore our Job Portals to streamline your job search. From the cutting-edge world of Technology to the strategic realm of Finance,
          </p>
        </div>
        <div className=' text-[#FD4C5C] flex items-center justify-center'>
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Our Packages</Tab>
            <Tab>Meet Our Tour Guides</Tab>
          </TabList>
        </div>

        <TabPanel>
          <Overview></Overview>
        </TabPanel>
        <TabPanel>
          <OurPackage></OurPackage>
        </TabPanel>
        <TabPanel>
          <TourGuide></TourGuide>
        </TabPanel>

        {/* <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3'>
            {jobs.map(job => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        </TabPanel> */}

        {/* <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3'>
            {jobs
              .filter(j => j.category === 'Part Time')
              .map(job => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3'>
            {jobs
              .filter(j => j.category === 'Hybrid')
              .map(job => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3'>
            {jobs
              .filter(j => j.category === 'Remote')
              .map(job => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3'>
            {jobs
              .filter(j => j.category === 'On Site')
              .map(job => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </TabPanel> */}

      </div>
    </Tabs>
  )
}

export default TabCategories
