// import { useLoaderData } from "react-router-dom";
// import AllTouristsSpotsCard from "../Components/AllTouristsSpotsCard";
import { useEffect, useState } from "react";
// import { RiArrowDropDownLine } from "react-icons/ri";
import { Helmet } from "react-helmet-async";
// import AllPackagesCard from "../Components/Home/AllPackagesCard";
import ViewBanner from "../Components/ViewBanner";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../Components/Shared/LoadingSpinner";
import OurPackagesCard from "../Components/Home/OurPackagesCard";



const AllPackages = () => {

    // const loadedTouristsSpotsData = useLoaderData();
    // console.log(loadedTouristsSpotsData);
    // const [displayData, setDisplayData] = useState(loadedTouristsSpotsData);
    // const sortInAscending = () => {
    //     const display = [...loadedTouristsSpotsData].sort((a, b) => parseInt(a.averageCost) - parseInt(b.averageCost));
    //     setDisplayData(display);
    // }
    // const sortInDescending = () => {
    //     const display = [...loadedTouristsSpotsData].sort((a, b) => parseInt(b.averageCost) - parseInt(a.averageCost));
    //     setDisplayData(display);
    // }
    // const normalView = () => {
    //     setDisplayData(loadedTouristsSpotsData);
    // }

    // console.log(displayData);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setLoading(false);
    //     }, 300);
    //     return () => clearTimeout(timer);
    // }, []);
    const [allTourPackages, setAllTourPackage] = useState([])
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/tour-package`)
            setAllTourPackage(data)
        }
        getData()
    }, [])

    // eslint-disable-next-line no-unused-vars
    const { data: tourPackage = [], isLoading, } = useQuery({
        queryFn: () => getData(),
        queryKey: ['tourPackage'],
    })

    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/tour-package`)
        // setJobs(data)import PopularSpot from './PopularSpot';

        return data;
    }

    
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }


    return (
        <div>
            <Helmet>
                <title>All Packages - Travel-Guide</title>
            </Helmet>
            <div  >
                <ViewBanner name={'All Packages'}></ViewBanner>
            </div>
            <div className="barlow-condensed-regular mt-4 mb-10 md:mt-16 container max-w-6xl mx-auto">

                {/* Sort By*/}
                {/* <div className="text-end mt-4 mb-4 pr-10">
                <details className="dropdown">
                    <summary className="m-1 btn bg-[#FD4C5C] hover:bg-[#FD4C5C] rounded-lg text-white flex items-center justify-center">Sort By
                        <span className="text-3xl"><RiArrowDropDownLine /></span>
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={normalView}><a>All</a></li>
                        <li onClick={sortInAscending}><a>Ascending in Average Cost</a></li>
                        <li onClick={sortInDescending}><a>Descending in Average Cost</a></li>
                    </ul>
                </details>
            </div> */}

                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">

                    {
                        allTourPackages?.map(touristsSpot => <OurPackagesCard key={touristsSpot._id} tourPackage={touristsSpot} ></OurPackagesCard>)
                    }

                    {/* ************** */}
                    {/* <CountriesCard></CountriesCard>
                    <CountriesCard></CountriesCard>
                    <CountriesCard></CountriesCard> */}
                    {/* *************** */}


                </div>
            </div>
        </div>
    );
};

export default AllPackages;