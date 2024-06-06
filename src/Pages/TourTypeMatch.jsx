import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
// import { useEffect, useState } from "react";
// import MatchCountryCard from "./MatchCountryCard";
import { Helmet } from "react-helmet-async";
import MatchCountryCard from "./MatchCountryCard";
import LoadingSpinner from "../Components/Shared/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../Hook/useAxiosCommon";



const TourTypeMatch = () => {

    // const loadedTouristsSpotsData = useLoaderData();
    // console.log(loadedTouristsSpotsData);
    const {tourType} = useParams();
    console.log(tourType);

    // const [country, setCountry] = useState()

    // useEffect(() => {
    //     fetch(`https://tourism-server-beta.vercel.app/tourists`)
    //     .then(res => res.json())
    //     .then(data => {
    //        setCountry(data)
    //     })
    // }, [])

    const axiosCommon = useAxiosCommon()
  
    const { data: typeMatchPackages = [], isLoading } = useQuery({
      queryKey: ['typeMatchPackages'],
      queryFn: async () => {
        const { data } = await axiosCommon.get(`/tour-package`)
  
        return data
      },
    })
  
    if (isLoading) return <LoadingSpinner />
  
    console.log(typeMatchPackages);
    
    const remaining = typeMatchPackages?.filter(matchingPackage => matchingPackage.tour_type == tourType)
    console.log(remaining);

    return (
        <div>
            <Helmet>
                {/* <title>{countryName} All Tourist Sport - Turio</title> */}
            </Helmet>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="barlow-condensed-regular mt-12 mb-10 md:mt-18 container max-w-6xl mx-auto space-y-6 sm:space-y-12">
                <div className="text-center mb-12">
                    <h2 data-aos="fade-down" data-aos-duration="1000" className="font-semibold text-3xl lg:text-[44px] lg:mb-4 mb-2"> Tourist Spot In {tourType}</h2>
                    
                    
                </div>

                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">

                    {
                        remaining?.map(matchingPackage => <MatchCountryCard key={matchingPackage._id} matchingPackage={matchingPackage} ></MatchCountryCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TourTypeMatch;