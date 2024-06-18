import { Helmet } from "react-helmet-async";
import ViewBanner from "../Components/ViewBanner";
import { FaRegComments } from "react-icons/fa6";
import { GoFileDirectory } from "react-icons/go";
import { LuCalendarDays } from "react-icons/lu";
import { RiFileCopyLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";


const Blogs = () => {
    return (
        <div>
            <Helmet>
                <title>Blogs - Job-Portal</title>
            </Helmet>
            <div>
                <ViewBanner name={'TOUR BLOG'}></ViewBanner>
            </div>

            <section className="bg-[#f9f9f9] text-gray-800 pt-16">
                <div className="container mx-auto">
                    <div className="md:flex gap-8">

                        <div rel="noopener noreferrer" href="#" className="md:p-8 p-4 rounded block md:w-[950px] w-full mx-auto bg-white shadow-custom">

                            <div className="mb-10">

                                <img src='https://demo.ovatheme.com/tripgo/wp-content/uploads/2022/07/blog-05.jpg' alt="" className="object-cover mx-auto md:w-[950px] w-full h-[450px] lg:col-span-7 bg-gray-500 mb-7" />
                                <h3 className="md:text-3xl text-lg font-semibold my-5 hover:text-[#FD4C5C] cursor-pointer">
                                    How to travel with paper map</h3>
                                <div className=" lg:col-span-5">
                                    <div className="mb-5 flex">
                                        <span className="border-r-2 pr-1.5 md:text-sm text-xs flex gap-2 items-center text-[#999]" >
                                            <LuCalendarDays className="text-base text-[#FF4C5C]" />
                                            July 1, 2024</span>
                                        <span className="px-1.5 border-r-2 md:text-sm text-xs flex gap-2 items-center  text-[#999]" >
                                            <GoFileDirectory className="text-base text-[#FF4C5C]" />
                                            Tips and Tricks</span>
                                        <span className="pl-1.5 md:text-sm text-xs flex gap-2 items-center text-[#999]" >
                                            <FaRegComments className="text-lg text-[#FF4C5C]" />
                                            0 Comments </span>
                                    </div>

                                    <p className="mb-5">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat....
                                    </p>

                                    <button className="btn mb-5 text-white bg-[#FD4C5C] hover:bg-[#FF0143]"> Read More</button>
                                </div>
                            </div>

                            <div className="mb-10">

                                <img src='https://demo.ovatheme.com/tripgo/wp-content/uploads/2022/07/blog-07.jpg' alt="" className="object-cover mx-auto md:w-[950px] w-full h-[450px] lg:col-span-7 bg-gray-500 mb-7" />
                                <h3 className="md:text-3xl text-lg font-semibold my-5 cursor-pointer hover:text-[#FD4C5C] ">Introducing this amazing tour</h3>
                                <div className=" lg:col-span-5">
                                    <div className="mb-5 flex">
                                        <span className="border-r-2 pr-1.5 md:text-sm text-xs flex gap-2 items-center text-[#999]" >
                                            <LuCalendarDays className="text-base text-[#FF4C5C]" />
                                            July 1, 2024</span>
                                        <span className="px-1.5 border-r-2 md:text-sm text-xs flex gap-2 items-center  text-[#999]" >
                                            <GoFileDirectory className="text-base text-[#FF4C5C]" />
                                            Travel</span>
                                        <span className="pl-1.5 md:text-sm text-xs flex gap-2 items-center text-[#999]" >
                                            <FaRegComments className="text-lg text-[#FF4C5C]" />
                                            0 Comments </span>
                                    </div>

                                    <p className="mb-5">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat....
                                    </p>

                                    <button className="btn mb-5 text-white bg-[#FD4C5C] hover:bg-[#FF0143]"> Read More</button>
                                </div>
                            </div>

                            <div className="mb-10">

                                <img src='https://demo.ovatheme.com/tripgo/wp-content/uploads/2022/07/blog-04.jpg' alt="" className="object-cover mx-auto md:w-[950px] w-full h-[450px] lg:col-span-7 bg-gray-500 mb-7" />
                                <h3 className="md:text-3xl text-lg font-semibold my-5 cursor-pointer hover:text-[#FD4C5C] ">
                                    Most Beautiful Islands in Asia</h3>
                                <div className=" lg:col-span-5">
                                    <div className="mb-5 flex">
                                        <span className="border-r-2 pr-1.5 md:text-sm text-xs flex gap-2 items-center text-[#999]" >
                                            <LuCalendarDays className="text-base text-[#FF4C5C]" />
                                            July 1, 2024</span>
                                        <span className="px-1.5 border-r-2 md:text-sm text-xs flex gap-2 items-center  text-[#999]" >
                                            <GoFileDirectory className="text-base text-[#FF4C5C]" />
                                            Off Topic</span>
                                        <span className="pl-1.5 md:text-sm text-xs flex gap-2 items-center text-[#999]" >
                                            <FaRegComments className="text-lg text-[#FF4C5C]" />
                                            0 Comments </span>
                                    </div>

                                    <p className="mb-5">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat....
                                    </p>

                                    <button className="btn mb-5 text-white bg-[#FD4C5C] hover:bg-[#FF0143]"> Read More</button>
                                </div>
                            </div>

                            <div className="mb-10">

                                <img src='https://demo.ovatheme.com/tripgo/wp-content/uploads/2022/07/blog-02.jpg' alt="" className="object-cover mx-auto md:w-[950px] w-full h-[450px] lg:col-span-7 bg-gray-500 mb-7" />
                                <h3 className="md:text-3xl text-lg font-semibold my-5 hover:text-[#FD4C5C] ">
                                    Best Nature Weekend Tour in Bangladesh</h3>
                                <div className=" lg:col-span-5">
                                    <div className="mb-5 flex">
                                        <span className="border-r-2 pr-1.5 md:text-sm text-xs flex gap-2 items-center text-[#999]" >
                                            <LuCalendarDays className="text-base text-[#FF4C5C]" />
                                            July 1, 2024</span>
                                        <span className="px-1.5 border-r-2 md:text-sm text-xs flex gap-2 items-center  text-[#999]" >
                                            <GoFileDirectory className="text-base text-[#FF4C5C]" />
                                            Tips and Tricks</span>
                                        <span className="pl-1.5 md:text-sm text-xs flex gap-2 items-center text-[#999]" >
                                            <FaRegComments className="text-lg text-[#FF4C5C]" />
                                            0 Comments </span>
                                    </div>

                                    <p className="mb-5">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat....
                                    </p>

                                    <button className="btn mb-5 text-white bg-[#FD4C5C] hover:bg-[#FF0143]"> Read More</button>
                                </div>
                            </div>

                        </div>

                        <div className="flex-1">
                            <div className=" pb-6">
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="text" className="grow" placeholder="Search..." />
                                    <IoSearchOutline className="text-lg" />
                                </label>
                            </div>

                            <div className="bg-white rounded-lg mb-6">
                                <h2 className="border font-semibold text-xl p-4 rounded-t-lg">Blog Categories</h2>
                                <div className="border border-t-0 p-4 rounded-b-lg">
                                    <h2 className="flex items-center gap-4 mb-2.5"><RiFileCopyLine className="text-[#c2bdbd]" /> <span className="hover:text-[#FD4C5C] cursor-pointer">Food</span> </h2>
                                    <h2 className="flex items-center gap-4 mb-2.5"><RiFileCopyLine className="text-[#c2bdbd]" /> <span className="hover:text-[#FD4C5C] cursor-pointer">Off Topic</span> </h2>
                                    <h2 className="flex items-center gap-4 mb-2.5"><RiFileCopyLine className="text-[#c2bdbd]" /> <span className="hover:text-[#FD4C5C] cursor-pointer">Tips and Tricks</span> </h2>
                                    <h2 className="flex items-center gap-4 mb-2.5"><RiFileCopyLine className="text-[#c2bdbd]" /> <span className="hover:text-[#FD4C5C] cursor-pointer">Travel</span> </h2>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg">
                                <h2 className="border font-semibold text-xl p-4 rounded-t-lg">Popular Post</h2>
                                <div className="border border-t-0 p-4 rounded-b-lg">

                                    <div className="flex items-center gap-4 mb-2.5">
                                        <div className="avatar">
                                            <div className="w-[75px] rounded-lg">
                                                <img src="https://demo.ovatheme.com/tripgo/wp-content/uploads/2022/07/blog-05-100x100.jpg" />
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className="text-[16px] font-semibold hover:text-[#FD4C5C] cursor-pointer pb-1">How to travel with paper map</h2>
                                            <p className="hover:text-[#FD4C5C] cursor-pointer">July 1, 2024</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 mb-2.5">
                                        <div className="avatar">
                                            <div className="w-[75px] rounded-lg">
                                                <img src="https://demo.ovatheme.com/tripgo/wp-content/uploads/2022/07/blog-07.jpg" />
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className="text-[16px] font-semibold hover:text-[#FD4C5C] cursor-pointer pb-1">Introducing this amazing tour</h2>
                                            <p className="hover:text-[#FD4C5C] cursor-pointer">July 1, 2024</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 mb-2.5">
                                        <div className="avatar">
                                            <div className="w-[75px] rounded-lg">
                                                <img src="https://demo.ovatheme.com/tripgo/wp-content/uploads/2022/07/blog-04.jpg" />
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className="text-[16px] font-semibold hover:text-[#FD4C5C] cursor-pointer pb-1">Most Beautiful Islands in Asia</h2>
                                            <p className="hover:text-[#FD4C5C] cursor-pointer">July 1, 2024</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>


                    </div>

                </div>
            </section>

        </div>
    );
};

export default Blogs;

