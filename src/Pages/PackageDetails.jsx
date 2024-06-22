// import galery1 from '../assets/images/Gallery/1.jpg'
// import galery2 from '../assets/images/Gallery/Bedroom.avif'
// import galery4 from '../assets/images/Gallery/Craft Room.avif'
// import galery6 from '../assets/images/Gallery/livingroom.webp'
// import galery7 from '../assets/images/Gallery/feature1.jpg'
// import contact from '../assets/images/Gallery/Contact.jpg'
// import { RiSendPlaneFill } from "react-icons/ri";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../Components/Shared/LoadingSpinner";
import useAxiosCommon from "../Hook/useAxiosCommon";
import BookingForm from "../Components/BookingForm";
import { FaLocationDot, FaRegClock, FaRegMap } from "react-icons/fa6";
import Container from "../Components/Shared/Container";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import ViewBanner from "../Components/ViewBanner";
import TourGuide from "../Components/TourGuide";
import { FaRegUserCircle } from "react-icons/fa";
import TourPlan from "./TourPlan";
import TouristsSpots from "../Components/Home/TouristsSpots";


const PackageDetails = () => {

    const { id } = useParams()
    const axiosCommon = useAxiosCommon()

    const {
        data: tourPackage = {},
        isLoading,
    } = useQuery({
        queryKey: ['tourPackage', id],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/tour-package/${id}`)
            return data
        },
    })

    if (isLoading) return <LoadingSpinner />
    console.log(tourPackage)

    const { image1, image2, image3, image4, image5, tour_type, tourists_spot_name, price, country_name, location, description } = tourPackage


    return (
        <div>

            <Helmet>
                <title>Gallery- Dream Home</title>
            </Helmet>

            <div>
                <ViewBanner name={`${tourists_spot_name} Details`}></ViewBanner>
            </div>

            <div>
                <Container>
                    {/* <div className="md:pt-14 pt-6 flex justify-between items-end mb-6">
                    <div className="space-y-2">
                        <div className="flex gap-3">
                            <button className="flex gap-1 items-center md:py-[4px] md:pt-1.5 py-[3px] md:px-3 px-2 rounded-2xl text-sm bg-[#FD4C5C] text-white"><AiOutlineSafetyCertificate className='text-base' />{tour_type}</button>
                        </div>
                        <h2 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1800" className="md:text-4xl text-2xl font-medium">{tourists_spot_name}</h2>
                        <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="2000" className="md:text-[17px] text-xs flex items-center gap-2">
                            <FaLocationDot /> {country_name}
                        </p>
                    </div>

                    <div>
                        <h2 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="2500" className="md:text-[30px] text-[#FD4C5C] text-xl font-medium">${price}</h2>
                    </div>
                </div> */}
                    <div className="relative md:pt-14 pt-6 mb-6">
                        <div className=" border-b pb-6 flex justify-between items-end mb-4">
                            <div className="space-y-2">

                                <h2 className="md:text-5xl text-2xl font-medium">{tourists_spot_name}</h2>
                                <p className="md:text-[17px] text-xs flex items-center font-medium text-[#9ca3a9] gap-2">
                                    <FaLocationDot /> {location || 'Bangladesh' }
                                </p>
                            </div>

                            <div>
                                <h2 className="md:text-[30px] text-[#FF0143] font-semibold text-2xl "> ${price}</h2>
                            </div>
                        </div>
                        <div className="md:flex items-center justify-between">
                            <div className="flex gap-6 font-medium text-[#9ca3a9] mb-6">
                                <p className="flex gap-2 items-center"><FaRegClock /> 10 Days </p>
                                <p className="flex gap-2 items-center"><FaRegUserCircle /> 500 </p>
                                <p className="flex gap-2 items-center"><FaRegMap /> {country_name} </p>
                            </div>
                            <div className="flex gap-3">
                                <button className="flex gap-1 items-center md:py-[4px] md:pt-1.5 py-[3px] md:px-3 px-2 rounded-2xl text-sm bg-[#FF0143] text-white"><AiOutlineSafetyCertificate className='text-base' />{tour_type}</button>
                            </div>
                        </div>

                    </div>

                    {/* Gallery */}
                    <section className="bg-white mb-12">
                        <div className=" max-w-screen-xl ">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2.5 h-full">
                                <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                                    <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                        <img src={image1} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                        
                                    </a>
                                </div>
                                <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                                    <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-2.5">
                                        <img src={image2} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                        
                                    </a>
                                    <div className="grid gap-2.5 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                                        <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                            <img src={image3} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                            
                                        </a>
                                        <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                            <img src={image4} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                            
                                        </a>
                                    </div>
                                </div>
                                <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
                                    <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                        <img src={image5} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                        
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* description */}
                    <div className="p-6 rounded-lg border my-8" >
                        <h2 className="text-black md:text-3xl text-xl font-medium">Overview</h2>
                        <div className=" pb-4 pt-3 flex justify-between items-center font-medium text-[#9ca3a9]">
                            <p className="text-[#5c727d]">{description}</p>
                        </div>

                    </div>

                    <div className="mt-14">
                        <TourPlan></TourPlan>
                    </div>
                    <div className="mt-14">
                        <TourGuide></TourGuide>
                    </div>
                    <div>
                        <BookingForm tourPackage={tourPackage}></BookingForm>
                    </div>
                    <div>
                        <TouristsSpots></TouristsSpots>
                    </div>

                </Container>

                {/* Contact Section */}

                {/* <section className="relative bg-cover bg-center bg-no-repeat h-[377px]" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${contact})` }}>

                    <div className="lg:flex items-center justify-between h-[377px] py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
                        <div className="">
                            <h2 className="md:text-5xl text-3xl lg:mt-0 mt-8 font-semibold mb-2 text-white">Find Best Place For Living</h2>
                            <p className="md:text-xl text-lg lg:w-[623px] md:w-[550px] w-80 text-[#bbbbbb]">Spend vacations in best hotels and resorts find the great place of your
                                choice using different searching options.</p>
                        </div>
                        <div className=" lg:mt-0 mt-10 inline-flex items-center rounded bg-[#8fd613] dark:text-gray-100 ">
                            <button type="button" className="px-8 py-3.5 font-semibold">CONTACT US</button>
                            <button type="button" title="Toggle dropdown" className="p-3.5 bg-[#70b100]">
                                <RiSendPlaneFill className="text-2xl mt-0.5 mr-0.5" />
                            </button>
                        </div>



                    </div>

                </section> */}
            </div>
        </div>
    );
};

export default PackageDetails;