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
                <title>Blogs - Travel-Guide</title>
            </Helmet>
            <div>
                <ViewBanner name={'Blogs'}></ViewBanner>
            </div>

            <section className="bg-[#f9f9f9] text-gray-800 pt-16">
                <div className="container mx-auto">
                    <div className="md:flex gap-8">

                        <div rel="noopener noreferrer" href="#" className="md:p-8 p-4 rounded block md:w-[950px] w-full mx-auto bg-white shadow-custom">

                            <div className="mb-10">

                                <img src='https://demo.ovatheme.com/tripgo/wp-content/uploads/2022/07/blog-05.jpg' alt="" className="object-cover mx-auto md:w-[950px] w-full h-[450px] lg:col-span-7 bg-gray-500 mb-7" />
                                <h3 className="md:text-3xl text-lg font-semibold my-5 hover:text-[#FD4C5C] cursor-pointer">
                                    Building a Collaborative Tech Community</h3>
                                <div className=" lg:col-span-5">
                                    <div className="mb-5 flex">
                                        <span className="border-r-2 pr-1.5 md:text-sm text-xs flex gap-2 items-center text-[#999]" >
                                            <LuCalendarDays className="text-base text-[#FF4C5C]" />
                                            July 1, 2024</span>
                                        <span className="px-1.5 border-r-2 md:text-sm text-xs flex gap-2 items-center  text-[#999]" >
                                            <GoFileDirectory className="text-base text-[#FF4C5C]" />
                                            Community Tips</span>
                                        <span className="pl-1.5 md:text-sm text-xs flex gap-2 items-center text-[#999]" >
                                            <FaRegComments className="text-lg text-[#FF4C5C]" />
                                            10 Comments </span>
                                    </div>

                                    <p className="mb-5">
                                        Discover the best practices for building and nurturing a collaborative tech community. Learn how to engage members, foster inclusivity, and create impactful collaborations....
                                    </p>

                                    <button className="btn mb-5 text-white bg-[#FD4C5C] hover:bg-[#FF0143]"> Read More</button>
                                </div>
                            </div>

                            <div className="mb-10">

                                <img src='https://demo.ovatheme.com/tripgo/wp-content/uploads/2022/07/blog-07.jpg' alt="" className="object-cover mx-auto md:w-[950px] w-full h-[450px] lg:col-span-7 bg-gray-500 mb-7" />
                                <h3 className="md:text-3xl text-lg font-semibold my-5 cursor-pointer hover:text-[#FD4C5C] ">How to Host a Successful Tech Meetup</h3>
                                <div className=" lg:col-span-5">
                                    <div className="mb-5 flex">
                                        <span className="border-r-2 pr-1.5 md:text-sm text-xs flex gap-2 items-center text-[#999]" >
                                            <LuCalendarDays className="text-base text-[#FF4C5C]" />
                                            July 1, 2024</span>
                                        <span className="px-1.5 border-r-2 md:text-sm text-xs flex gap-2 items-center  text-[#999]" >
                                            <GoFileDirectory className="text-base text-[#FF4C5C]" />
                                            Event Planning</span>
                                        <span className="pl-1.5 md:text-sm text-xs flex gap-2 items-center text-[#999]" >
                                            <FaRegComments className="text-lg text-[#FF4C5C]" />
                                            5 Comments </span>
                                    </div>

                                    <p className="mb-5">
                                        Hosting a tech meetup can be a great way to bring people together. This guide covers everything from finding the right venue to engaging your audience and making your event memorable....
                                    </p>

                                    <button className="btn mb-5 text-white bg-[#FD4C5C] hover:bg-[#FF0143]"> Read More</button>
                                </div>
                            </div>

                            <div className="mb-10">

                                <img src='https://demo.ovatheme.com/tripgo/wp-content/uploads/2022/07/blog-04.jpg' alt="" className="object-cover mx-auto md:w-[950px] w-full h-[450px] lg:col-span-7 bg-gray-500 mb-7" />
                                <h3 className="md:text-3xl text-lg font-semibold my-5 cursor-pointer hover:text-[#FD4C5C] ">
                                    Success Stories from Our Community</h3>
                                <div className=" lg:col-span-5">
                                    <div className="mb-5 flex">
                                        <span className="border-r-2 pr-1.5 md:text-sm text-xs flex gap-2 items-center text-[#999]" >
                                            <LuCalendarDays className="text-base text-[#FF4C5C]" />
                                            July 1, 2024</span>
                                        <span className="px-1.5 border-r-2 md:text-sm text-xs flex gap-2 items-center  text-[#999]" >
                                            <GoFileDirectory className="text-base text-[#FF4C5C]" />
                                            Inspiration</span>
                                        <span className="pl-1.5 md:text-sm text-xs flex gap-2 items-center text-[#999]" >
                                            <FaRegComments className="text-lg text-[#FF4C5C]" />
                                            2 Comments </span>
                                    </div>

                                    <p className="mb-5">
                                        Be inspired by the success stories from our community members. From landing dream jobs to launching successful startups, these stories showcase the power of community support and collaboration....
                                    </p>

                                    <button className="btn mb-5 text-white bg-[#FD4C5C] hover:bg-[#FF0143]"> Read More</button>
                                </div>
                            </div>

                            <div className="mb-10">

                                <img src='https://demo.ovatheme.com/tripgo/wp-content/uploads/2022/07/blog-02.jpg' alt="" className="object-cover mx-auto md:w-[950px] w-full h-[450px] lg:col-span-7 bg-gray-500 mb-7" />
                                <h3 className="md:text-3xl text-lg font-semibold my-5 hover:text-[#FD4C5C] ">
                                    Tips for Networking in Tech Communities</h3>
                                <div className=" lg:col-span-5">
                                    <div className="mb-5 flex">
                                        <span className="border-r-2 pr-1.5 md:text-sm text-xs flex gap-2 items-center text-[#999]" >
                                            <LuCalendarDays className="text-base text-[#FF4C5C]" />
                                            July 1, 2024</span>
                                        <span className="px-1.5 border-r-2 md:text-sm text-xs flex gap-2 items-center  text-[#999]" >
                                            <GoFileDirectory className="text-base text-[#FF4C5C]" />
                                            Networking Tips</span>
                                        <span className="pl-1.5 md:text-sm text-xs flex gap-2 items-center text-[#999]" >
                                            <FaRegComments className="text-lg text-[#FF4C5C]" />
                                            3 Comments </span>
                                    </div>

                                    <p className="mb-5">
                                        Networking is crucial in tech communities. Here are some tips to help you make meaningful connections, from attending events to leveraging social media and online forums....
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
                                <h2 className="border font-semibold text-xl p-4 rounded-t-lg">Post Categories</h2>
                                <div className="border border-t-0 p-4 rounded-b-lg">
                                    <h2 className="flex items-center gap-4 mb-2.5"><RiFileCopyLine className="text-[#c2bdbd]" /> <span className="hover:text-[#FD4C5C] cursor-pointer">Community Tips</span> </h2>
                                    <h2 className="flex items-center gap-4 mb-2.5"><RiFileCopyLine className="text-[#c2bdbd]" /> <span className="hover:text-[#FD4C5C] cursor-pointer">Event Planning</span> </h2>
                                    <h2 className="flex items-center gap-4 mb-2.5"><RiFileCopyLine className="text-[#c2bdbd]" /> <span className="hover:text-[#FD4C5C] cursor-pointer">Inspiration</span> </h2>
                                    <h2 className="flex items-center gap-4 mb-2.5"><RiFileCopyLine className="text-[#c2bdbd]" /> <span className="hover:text-[#FD4C5C] cursor-pointer">Networking Tips</span> </h2>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg">
                                <h2 className="border font-semibold text-xl p-4 rounded-t-lg">Popular Posts</h2>
                                <div className="border border-t-0 p-4 rounded-b-lg">

                                    <div className="flex items-center gap-4 mb-2.5">
                                        <div className="avatar">
                                            <div className="w-[75px] rounded-lg">
                                                <img src="https://demo.ovatheme.com/tripgo/wp-content/uploads/2022/07/blog-05-100x100.jpg" />
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className="text-[16px] font-semibold hover:text-[#FD4C5C] cursor-pointer pb-1">Building a Collaborative Tech Community</h2>
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
                                            <h2 className="text-[16px] font-semibold hover:text-[#FD4C5C] cursor-pointer pb-1">How to Host a Successful Tech Meetup</h2>
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
                                            <h2 className="text-[16px] font-semibold hover:text-[#FD4C5C] cursor-pointer pb-1">Success Stories from Our Community</h2>
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
