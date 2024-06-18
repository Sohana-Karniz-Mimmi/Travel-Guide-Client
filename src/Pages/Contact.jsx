import Container from '../Components/Shared/Container';
import ViewBanner from '../Components/ViewBanner';
import { IoLocationOutline } from "react-icons/io5";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { FaRegCommentDots } from 'react-icons/fa';

const Contact = () => {
    return (
        <>
            <div>
                <ViewBanner name={'Contact Us'}></ViewBanner>
            </div>

            {/* Get In Touch */}
            <Container>
                <div className="font-[sans-serif] text-[#333] md:mt-12 mt-6 mb-16">
                    <div className="space-y-4 text-center mb-12">
                        <h3 className="md:text-4xl text-3xl font-medium max-md:text-center">
                            Get In Touchn
                        </h3>
                        <p>
                            We are at your disposal 7 days a week!
                        </p>

                    </div>
                    <div className="lg:flex gap-10 ">

                        <div className=" ">
                            <div className="space-y-10 p-4 rounded-b-lg">

                                <div className="flex items-center gap-4 mb-2.5">
                                    <div className="">
                                        <div className="w-[80px] h-[75px] mx-auto flex justify-center items-center bg-emerald-100/60 text-emerald-500 rounded-xl">
                                            <IoLocationOutline className='text-[#00BB98] text-[40px] ' />
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-base font-semibold hover:text-[#FD4C5C] cursor-pointer pb-1.5">Store Location</h2>
                                        <p className="hover:text-[#FD4C5C] cursor-pointer w-52 text-[15px]">2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 mb-2.5">
                                    <div className="">
                                        <div className="w-[80px] h-[75px] mx-auto flex justify-center items-center bg-emerald-100/60 text-emerald-500 rounded-xl">
                                            <FiPhoneCall className='text-[#00BB98] text-[37px] ' />
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-base font-semibold hover:text-[#FD4C5C] cursor-pointer pb-1">Phone Number</h2>
                                        <p className="hover:text-[#FD4C5C] cursor-pointer text-[15px]">(229) 555-0109</p>
                                        <p className="hover:text-[#FD4C5C] cursor-pointer text-base">(229) 555-2872</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 mb-2.5">
                                    <div className="">
                                        <div className="w-[80px] h-[75px] mx-auto flex justify-center items-center bg-emerald-100/60 text-emerald-500 rounded-xl">
                                            <FiMail className='text-[#00BB98] text-[39px] ' />
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-base font-semibold hover:text-[#FD4C5C] cursor-pointer pb-1">Email us</h2>
                                        <p className="hover:text-[#FD4C5C] cursor-pointer text-[15px]">sohanasheikh81@gmail.com</p>
                                    </div>
                                </div>

                            </div>

                            <div className="bg-white rounded-lg">
                                <div className="border p-8 rounded-lg">

                                    <div className="flex items-center gap-4 pb-5 border-b ">
                                        <div className="avatar">
                                            <div className="w-[70px] rounded-full">
                                                <img src="https://demo.ovatheme.com/tripgo/wp-content/uploads/2022/07/avatar.png" />
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className="text-sm font-semibold pb-1">Need help?</h2>
                                            <p className="text-[13px] pb-1">Call our product expert</p>
                                            <p className="text-[#FD4C5C] font-semibold">(406) 555-0120-78</p>
                                        </div>
                                    </div>

                                    <button className='btn w-full mt5 bg-transparent hover:bg-transparent pt-4 pb-9 border border-[#FD4C5C] hover:border-[#FD4C5C] text-[#FD4C5C] text-base font-medium'> <FaRegCommentDots /> Chat With Us </button>

                                    <div className='mt-5'>
                                        <p className='text-gray-400 text-sm pb-1'>Mondays - Sundays</p>
                                        <p className='text-gray-600'>7am - 11pm ET | 4am - 8pm PT</p>
                                    </div>


                                </div>
                            </div>

                        </div>

                        {/* Form */}
                        <div className="border-l pl-8 flex-1">
                            <div className='mb-10'>
                                <h2 className="text-2xl font-semibold mb-2.5">Leave A Reply</h2>
                                <p className="text-base">Your email address will not be published. Required fields are marked *</p>
                            </div>
                            <form className="space-y-6">

                                <div className="flex gap-3">
                                    <div className="w-full">
                                        <input name="firstName" type="text" required className=" border w-full text-sm px-4 py-3.5 rounded-md outline-[#FD4C5C]" placeholder="First Name*" />
                                    </div>
                                    <div className="w-full">
                                        <input name="lastName" type="text" required className="border w-full text-sm px-4 py-3.5 rounded-md outline-[#FD4C5C]" placeholder="Last Name" />
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <div className="w-full">
                                        <input name="email" type="email" required className="border w-full text-sm px-4 py-3.5 rounded-md outline-[#FD4C5C]" placeholder="Email address*" />
                                    </div>
                                    <div className="w-full">
                                        <input name="mobile" type="text" required className="border w-full text-sm px-4 py-3.5 rounded-md outline-[#FD4C5C]" placeholder="Mobile*" />
                                    </div>
                                </div>

                                <div>
                                    <textarea name="message" rows="6" required className="border w-full text-sm px-4 py-3.5 rounded-md outline-[#FD4C5C]" placeholder="Your message..."></textarea>
                                </div>

                                <div>
                                    <button className=" rounded-md font-semibold bg-[#FF0143] text-white py-4 px-8">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </Container>
        </>
    );
};

export default Contact;