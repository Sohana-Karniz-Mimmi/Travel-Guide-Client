import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import useAxiosCommon from "../Hook/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../Components/Shared/LoadingSpinner";

const GuideProfileDetails = () => {

    const { id } = useParams()
    const axiosCommon = useAxiosCommon()

    const {
        data: tourGuide = {},
        isLoading,
    } = useQuery({
        queryKey: ['tourGuide', id],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/tour-guide/${id}`)
            return data
        },
    })

    if (isLoading) return <LoadingSpinner />
    console.log(tourGuide)
    const {image} = tourGuide;

    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            This is Tour Guide Profile Page
            <div className="avatar">
                <div className="w-24 rounded-full">
                    <img src={image} />
                </div>
            </div>
        </div>
    );
};

export default GuideProfileDetails;