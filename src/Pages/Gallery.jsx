import Navbar from "../Components/Navbar";

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


const Gallery = () => {

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

  const { image1, image2, image3, image4, image5} = tourPackage
    
    
    return (
        <div>

            <Helmet>
                <title>Gallery- Dream Home</title>
            </Helmet>

            <div>
                <Navbar></Navbar>
            </div>

            <div>
                {/* <div className="text-center mt-8 mb-12">
                    <h2 data-aos="fade-up" data-aos-duration="1000" className="font-semibold text-3xl lg:text-[40px] lg:mb-4 mb-2">PHOTO GALLERY</h2>
                    <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className="lg:w-[623px] lg:text-[16px] md:w-[550px] text-sm  w-80 mx-auto text-[#C5CBD1]">A Visual Odyssey Through Domestic Delights - Discovering Comfort, Beauty, and Inspiration in Every Snapshot. </p>
                </div> */}

                <section className="bg-white mb-12">
                    <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
                            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                                <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                    <img src={image1} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                    <h3 className="z-10 text-xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-2xl">Home</h3>
                                </a>
                            </div>
                            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                                <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                                    <img src={image2} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                    <h3 className="z-10 text-xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-2xl">Living Room</h3>
                                </a>
                                <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                                    <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                        <img src={image3} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                        <h3 className="z-10 text-xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-2xl">Bedroom</h3>
                                    </a>
                                    <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                        <img src={image4} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                        <h3 className="z-10 text-xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-2xl">Craft Room</h3>
                                    </a>
                                </div>
                            </div>
                            <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
                                <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                    <img src={image5} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                    <h3 className="z-10 text-xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-2xl">Dining Room</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>



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

export default Gallery;