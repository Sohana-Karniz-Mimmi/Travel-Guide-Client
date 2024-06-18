import { useEffect, useState } from 'react'
import axios from 'axios'
// import { motion } from "framer-motion"
import { useQuery } from '@tanstack/react-query'
import OurPackagesCard from "./OurPackagesCard";
import { Link } from 'react-router-dom';
import LoadingSpinner from '../Shared/LoadingSpinner';


const OurPackage = () => {

    const [tourPackages, setTourPackage] = useState([])
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/tour-package`)
            setTourPackage(data)
        }
        getData()
    }, [])

    // Tanstack Query
    // eslint-disable-next-line no-unused-vars
    const { data: tourPackage = [], isLoading, } = useQuery({
        queryFn: () => getData(),
        queryKey: ['tourPackages'],
    })

    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/tour-package`)
        // setJobs(data)import PopularSpot from './PopularSpot';

        return data;
    }

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    // console.log(tourPackages);

    return (
        <div>
            <div className="barlow-condensed- roboto mt-12 mb-10 md:mt-20 container max-w-6xl mx-auto space-y-6 sm:space-y-12">

                {/* <div className="text-center mb-12">
                    <h2 data-aos="fade-down" data-aos-duration="1000" className="font-semibold  text-3xl lg:text-[44px] lg:mb-4 mb-2">Most Popular Tourists Spots</h2>
                    <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="200" className="lg:w-[550px] lg:text-lg md:w-[500px] text-sm w-80 mx-auto text-[#9ca3a9] font-medium">Explore Turio top picks. From iconic landmarks to hidden gems, uncover the most sought-after destinations for your next adventure</p>
                </div> */}

                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">

                    {
                        tourPackages.slice(0, 3).map(tourPackage => <OurPackagesCard key={tourPackage._id}
                            tourPackage={tourPackage}
                        ></OurPackagesCard>)
                    }


                </div>

                <div className="text-center">
                    <Link
                     to={`/all-packages`} className='border border-[#FD4C5C] py-[9px] bg-[#FD4C5C] hover:bg-transparent px-10 text-white hover:text-[#FD4C5C] font-semibold rounded-full text-lg'> View All </Link>
                </div>

            </div>
        </div>
    );
};

export default OurPackage;