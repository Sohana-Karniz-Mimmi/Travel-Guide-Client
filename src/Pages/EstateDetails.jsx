import Navbar from "../Components/Navbar";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdOutlineBathroom } from "react-icons/md";
import { BiSolidCarGarage } from "react-icons/bi";
import { IoCalendarClearOutline } from "react-icons/io5";
import { LuGanttChartSquare } from "react-icons/lu";
import { Link, ScrollRestoration, useLoaderData, useParams } from "react-router-dom";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, } from 'swiper/modules';
import { Helmet } from "react-helmet-async";


const EstateDetails = () => {

    const propertyDetails = useLoaderData()
    const {id} = useParams();
    const propertyData = propertyDetails.find(propertyData => propertyData.id == id)
    const {image, image1, image2, estate_title, status, price, location, yearBuilt, updatedOn, garages, facilities, area, description, country, state, city, zip, address, segment_name} = propertyData
    

    return (
        <div>
            <Helmet>
                <title> {estate_title} - Dream Home</title>
            </Helmet>
             <ScrollRestoration />
            <div>
                <Navbar></Navbar>
            </div>
            <div className="container mx-auto mb-10">

                <div className=" flex justify-between items-end mb-6">
                    <div className="space-y-2">
                        <div className="flex gap-3">
                            <button data-aos="fade-down" data-aos-duration="1000" className="md:py-[4px] py-[3px] md:px-3 px-2 rounded-2xl md:text-sm text-xs bg-white text-black">For {status}</button>
                            <button data-aos="fade-down" data-aos-duration="1000" data-aos-delay="800" className=" md:py-[4px] py-[3px] md:px-3 px-2 rounded-2xl text-sm bg-[#ff8a05] text-white">{segment_name}</button>
                        </div>
                        <h2 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1800" className="md:text-4xl text-2xl font-medium">{estate_title}</h2>
                        <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="2000" className="md:text-[17px] text-xs flex items-center gap-2">
                            <FaLocationDot /> {location}
                        </p>
                    </div>

                    <div>
                        <h2 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="2500" className="md:text-[30px] text-[#ff8a05] text-xl font-medium">{price}</h2>
                    </div>
                </div>

                <Swiper
                    navigation={true}
                    breakpoints={{
                        // when window width is >= 320px
                        320: {
                          slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                          slidesPerView: 3,
                        },
                      }}
                    spaceBetween={20}
                    effect="fade"
                    modules={[Navigation]}
                    loop={true}
                >
                    <SwiperSlide>
                        <section className="relative bg-cover bg-center bg-no-repeat h-[565px]" style={{ backgroundImage: `url(${image})` }}>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section className="relative bg-cover bg-center bg-no-repeat h-[565px]" style={{ backgroundImage: `url(${image1})` }}>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section className="relative bg-cover bg-center bg-no-repeat h-[565px]" style={{ backgroundImage: `url(${image2})` }}>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section className="relative bg-cover bg-center bg-no-repeat h-[565px]" style={{ backgroundImage: `url(${image1})` }}>
                        </section>
                    </SwiperSlide>
                </Swiper>

                {/* Details */}
                <div data-aos="fade-down" data-aos-duration="1000" className="p-6 rounded-lg bg-white my-8" >
                    <h2 className="text-black text-xl font-medium">Overview</h2>
                    <div className=" py-6 md:flex justify-between items-center text-black text-sm">
                        <p>
                            <p className="mb-2 text-[15px]">Updated On:</p>
                            {updatedOn}</p>

                        <p className="md:mt-0 mt-5"><MdOutlineBedroomParent className="mb-2 text-xl md:mx-auto" /> {facilities[0]}</p>

                        <p className="md:mt-0 mt-5"><MdOutlineBathroom className="mb-2 text-xl md:mx-auto" /> {facilities[1]}</p>

                        <p className="md:mt-0 mt-5"><BiSolidCarGarage className="mb-2 text-xl md:mx-auto" />{garages} Garages</p>

                        <p className="md:mt-0 mt-5"><LuGanttChartSquare className="mb-2 text-xl md:mx-auto" /> {area}</p>

                        <p className="md:mt-0 mt-5">
                            <IoCalendarClearOutline className="mb-2 text-xl md:mx-auto" />
                            Year Built: {yearBuilt}
                        </p>

                    </div>

                </div>

                <div className="lg:flex gap-6 justify-between" >
                    <div>

                        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1500" className="p-6 rounded-lg bg-white my-8" >
                            <h2 className="text-black text-xl font-medium">Description</h2>
                            <div className=" pb-4 pt-3 flex justify-between items-center text-black text-sm">
                                <p className="text-[#5c727d]">{description}</p>
                            </div>

                        </div>

                        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1700" className="p-6 rounded-lg bg-white my-8" >
                            <h2 className="text-black text-xl font-medium">Address</h2>
                            <div className=" pb-4 pt-3 flex md:gap-48 gap-10 items-center text-black text-sm">
                                <div className="space-y-3">
                                    <p className="font-medium"> Address : <span className="text-[#5c727d] font-normal">{address}</span></p>
                                    <p className="font-medium">Area : <span className="text-[#5c727d] font-normal"> {location}</span></p>
                                    <p className="font-medium">Zip : <span className="text-[#5c727d] font-normal">{zip}</span></p>
                                </div>
                                <div className="space-y-3">
                                    <p className="font-medium">City : <span className="text-[#5c727d] font-normal">{city}</span></p>
                                    <p className="font-medium">State/Count : <span className="text-[#5c727d] font-normal"> {state}</span></p>
                                    <p className="font-medium"> Country : <span className="text-[#5c727d] font-normal">{country}</span></p>
                                </div>
                            </div>
                                <Link to={`/locations`} className=" -ml-2 py-[4px] px-3 rounded-2xl text-sm bg-green-500 text-white">Open In Google Maps</Link>


                        </div>
                    </div>

                    {/* Form */}
                    <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="2500" className=" md:max-w-md w-full bg-white sm:px-6 mt-8 pb-6 px-4 rounded-lg">
                        <form>
                            <div className="py-6 text-center">
                                <h3 className="text-3xl text-black font-extrabold">Request Info</h3>
                            </div>

                            <div >
                                <div className="relative flex items-center">
                                    <input name="name" type="text" required className="w-full text-black text-sm border rounded-lg border-gray-300 focus:border-[#333] px-2 py-3 outline-none bg-transparent" placeholder="Your Name" />
                                </div>
                            </div>


                            <div className="mt-4">
                                <div className="relative flex items-center">
                                    <input name="email" type="text" required className="w-full text-black text-sm border rounded-lg border-gray-300 focus:border-[#333] px-2 py-3 outline-none bg-transparent" placeholder="Enter email" />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
                                        <defs>
                                            <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                                <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                                            </clipPath>
                                        </defs>
                                        <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                            <path fill="none" stroke-miterlimit="10" stroke-width="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                                            <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>

                            <div className="mt-4">
                                <div className="relative flex items-center">
                                    <input name="phone" type="text" required className="w-full text-black text-sm border rounded-lg border-gray-300 focus:border-[#333] px-2 py-3 outline-none bg-transparent" placeholder="Your Phone" />
                                </div>
                            </div>

                            <div className="mt-4">
                                <div className="relative flex items-center">
                                    <textarea name="comment" type="text" required className="w-full text-black text-sm border rounded-lg border-gray-300 focus:border-[#333] px-2 py-3 outline-none bg-transparent" placeholder="I'm interested in..." />
                                </div>
                            </div>

                            <div className="mt-6">
                                <button className=" w-full relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                                    <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                                    <span className="relative md:px-6 md:py-3 px-3 py-2 transition-all ease-out rounded-md group-hover:bg-opacity-0 duration-400">
                                        <span className="relative text-white md:text-[16px] text-sm">Send Email</span>
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default EstateDetails;