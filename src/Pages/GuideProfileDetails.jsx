import { useParams } from "react-router-dom";
import useAxiosCommon from "../Hook/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../Components/Shared/LoadingSpinner";
import ViewBanner from "../Components/ViewBanner";
import Container from "../Components/Shared/Container";
import { GrCheckmark } from "react-icons/gr";
import contact from '../assets/images/Contact.jpg'
import { RiSendPlaneFill } from "react-icons/ri";
import Review from "../Components/Review";

const GuideProfileDetails = () => {

    const { id } = useParams()
    const axiosCommon = useAxiosCommon()

    const {
        data: tourGuide = {},
        isLoading,
    } = useQuery({
        queryKey: ['tourGuide', id],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/all-users/${id}`)
            return data
        },
    })

    if (isLoading) return <LoadingSpinner />
    console.log(tourGuide)
    const { image, name } = tourGuide;

    return (
        <div>
            <div>
                <ViewBanner name={`I Am ${name}`}></ViewBanner>
            </div>
            <div className="bg-[#f9f9f9] md:pb-16 pb-6">
                <Container>
                    <div className="mx-auto text-center">
                        <div className="avatar mt-10 mb-3">
                            <div className="w-40 rounded-full ring ring-[#FC4C5C] ring-offset-base-100 ring-offset-2">
                                <img src={image} alt={name} />
                            </div>
                        </div>
                        <h2 className="text-xl font-semibold text-center text-gray-800 capitalize lg:text-4xl my-2">
                            {name} - Certified Tourist Guide
                        </h2>
                        <p className="max-w-4xl text-xl mx-auto mb-8 text-center text-gray-500">
                            With years of experience, {name} is passionate about sharing the beauty and culture of the region, ensuring every tour is informative, engaging, and memorable for all visitors.
                        </p>

                    </div>

                    <div className="md:flex md:px-12 gap-8">
                        <div>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 capitalize lg:text-[22px] my-2">
                                    Some Words About Me
                                </h2>
                                <p className="max-w-4xl text-sm mb-8 text-gray-500">
                                    {name} holds a degree in Tourism Management and has completed various courses in local history and culture. This educational background provides a solid foundation for offering insightful and engaging tours, ensuring that every experience is enriched with valuable knowledge and cultural insights.
                                </p>

                                <h2 className="text-xl font-semibold text-gray-800 capitalize lg:text-[22px] my-2">
                                    Education
                                </h2>
                                <p className="max-w-4xl text-sm mb-8 text-gray-500">
                                    {name} has an impressive educational background with a degree in Tourism Management and various certifications in local history and cultural studies. This solid foundation enables {name} to offer insightful and engaging tours, enriching every experience with valuable knowledge and cultural insights for all visitors.
                                </p>
                                <h2 className="text-xl font-semibold text-gray-800 capitalize lg:text-[22px] my-2">
                                    Past Experiences
                                </h2>
                                <p className="max-w-4xl text-sm mb-8 text-gray-500">
                                    With years of experience guiding tours, Sohana has a wealth of knowledge and a knack for making every tour engaging and informative.
                                    With extensive experience in guiding tours, {name} brings a wealth of knowledge and a unique ability to make each tour both engaging and informative. This expertise ensures that every visitor gains a deep appreciation for the local culture and history, making their tour memorable and enriching.

                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800 capitalize lg:text-[22px] my-2">
                                Spoken Languages
                            </h2>
                            <p className="max-w-4xl text-sm mb-8 text-gray-500">
                                {name} is fluent in multiple languages, enhancing the tour experience for a diverse range of visitors.
                            </p>
                            <div className="flex gap-1">
                                <img src="https://www.ansonika.com/citytours/img/lang_en.png" alt="English" />
                                <img src="https://www.ansonika.com/citytours/img/lang_fr.png" alt="French" />
                                <img src="https://www.ansonika.com/citytours/img/lang_de.png" alt="German" />
                                <img src="https://www.ansonika.com/citytours/img/lang_es.png" alt="Spanish" />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800 capitalize lg:text-[22px] my-2">
                                Certificates
                            </h2>
                            <p className="max-w-4xl text-sm mb-4 text-gray-500">
                                Recognized for excellence in guiding, {name} holds multiple certifications in tour guiding.
                            </p>
                            <ul>
                                <li className="flex gap-2.5 items-center">
                                    <GrCheckmark className="text-base text-[#FC4C5C]" /> Certified in Local History
                                </li>
                                <li className="flex gap-2.5 items-center">
                                    <GrCheckmark className="text-base text-[#FC4C5C]" /> Cultural Studies Expert
                                </li>
                                <li className="flex gap-2.5 items-center">
                                    <GrCheckmark className="text-base text-[#FC4C5C]" /> Award for Excellence in Guiding
                                </li>
                                <li className="flex gap-2.5 items-center">
                                    <GrCheckmark className="text-base text-[#FC4C5C]" /> Certified in Eco-Tourism
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Review Section */}
            <Review />

            {/* Contact Section */}
            <section className="relative bg-cover bg-center bg-no-repeat h-[377px]" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${contact})` }}>
                <div className="lg:flex items-center justify-between h-[377px] py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
                    <div>
                        <h2 className="md:text-5xl text-3xl lg:mt-0 mt-8 font-semibold mb-2 text-white">Find the Best Tourist Spot for Touring</h2>
                        <p className="md:text-xl text-lg lg:w-[623px] md:w-[550px] w-80 text-[#bbbbbb]">
                            Spend vacations in the best hotels and resorts. Discover great places using various search options.
                        </p>
                    </div>
                    <div className="lg:mt-0 mt-10 inline-flex items-center rounded bg-[#FC4C5C] text-white">
                        <button type="button" className="px-8 py-3.5 font-semibold">CONTACT US</button>
                        <button type="button" title="Toggle dropdown" className="p-3.5 bg-[#ec3737]">
                            <RiSendPlaneFill className="text-2xl mt-0.5 mr-0.5" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GuideProfileDetails;
