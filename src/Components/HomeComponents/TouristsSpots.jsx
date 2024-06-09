import TourSection from "./TourSection";
import Guide from "../../assets/images/guide.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";



const TouristsSpots = () => {

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
        return <>
            <div className="flex items-center justify-center space-x-2 h-screen">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-[#FD4C5C]"></div>
            </div>
        </>
    }


    return (
        <div className="barlow-condensed-regular mt-12 mb-10 md:mt-24 container max-w-6xl mx-auto space-y-6 sm:space-y-12">
            <div className="flex items-center gap-2">
                <h2 className="mb-1 text-3xl leading-[1.2] sm:text-4xl md:text-[35px] font-semibold"
                >You May Like </h2>
                <img className="w-[55px] h-3" src={Guide} alt="" />
            </div>

            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">

                {
                    tourPackages.slice(0, 4).map(tourPackage => <TourSection key={tourPackage._id} tourPackage={tourPackage} ></TourSection>)
                }
            </div>
        </div>
    );
};

export default TouristsSpots;