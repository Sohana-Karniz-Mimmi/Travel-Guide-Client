import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import MatchTypeCard from "./MatchTypeCard";
import LoadingSpinner from "../Components/Shared/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../Hook/useAxiosCommon";
import ViewBanner from "../Components/ViewBanner";

const TourTypeMatch = () => {

    const {tourType} = useParams();
    console.log(tourType);

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
                <title>{tourType} All Package In - Travel Guide</title>
            </Helmet>
            <div>
                <ViewBanner name={`All Package In ${tourType}`}></ViewBanner>
            </div>
            <div className="barlow-condensed-regular mt-12 mb-10 md:mt-18 container max-w-6xl mx-auto space-y-6 sm:space-y-12">

                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">

                    {
                        remaining?.map(matchingPackage => <MatchTypeCard key={matchingPackage._id} matchingPackage={matchingPackage} ></MatchTypeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TourTypeMatch;