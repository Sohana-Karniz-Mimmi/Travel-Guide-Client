import { Helmet } from "react-helmet-async";
import teamImg from '../assets/images/team.jpg'
import { ScrollRestoration } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import TourGuide from "../Components/TourGuide";
import Testimonial from "./Testimonial";

const About = () => {
    return (
        <div className="">
            <Helmet>
                <title>About Us- Dream Home</title>
            </Helmet>
            <ScrollRestoration />
            <div className="text-white bg-black ">
                <Navbar></Navbar>
            </div>
            <section className="relative bg-cover bg-center bg-no-repeat h-[565px]" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(' + teamImg + ')' }}>

                <div
                    className="absolute inset-0 sm:bg-transparent  sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                >
                </div>

                <div
                    className="relative lg:h-screen lg:items-center lg:px-8"
                >
                    <div className='text-white flex items-center justify-center h-[400px]'>

                        <div>

                            <p data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" className=" text-center mt-24 max-w-lg sm:text-lg/relaxed">
                                Get to know our talented team.
                            </p>
                            <h1 data-aos="fade-up" data-aos-duration="500" className="text-3xl sm:text-5xl mt-2">
                                MORE ABOUT US
                            </h1>

                        </div>
                    </div>
                </div>

            </section>


            {/* About Our Company */}
            <div className="mt-12 md:mt-24 container max-w-6xl mx-auto space-y-6 sm:space-y-12">
                <div className="text-center mb-12">

                    {/*  */}
                    <i className="text-sm lg:text-[16px] text-[#FD4C5C] font-medium">WHO WE ARE</i>
                    <h2 className="font-semibold text-3xl lg:text-[40px] lg:mb-4 mb-2">About our company</h2>
                    <p className="lg:w-[623px] lg:text-[16px] md:w-[550px] text-sm  w-80 mx-auto text-[#8a8f94]">Utilizing our exceptional experience and knowledge of the luxury waterfront markets,we serve an extensive and elite worldwide client base. </p>
                </div>

                <div className="md:flex justify-between gap-[70px]">
                    <div className="shadow-custom p-6 rounded-xl mb-5">
                        <h2 className="text-xl font-medium mb-3 text-[#FD4C5C]">Our Mission</h2>
                        <p className="text-[#aaa6a6]">With over $2 Billion in sales, Our agency is the industry’s top luxury producer with over 27 years of experience in marketing Seattles’s most prestigious waterfront properties. Council.</p>
                    </div>
                    <div className="shadow-custom p-6 rounded-xl mb-5">
                        <h2 className="text-xl font-medium mb-3 text-[#FD4C5C]">Our Vision</h2>
                        <p className="text-[#aaa6a6]">Due to our unparalleled results, expertise and dedication, we rank amongst the Top 6 agencies in Seattle and our area. She is also and is an elite member to Corcoran’s Presidents Council. </p>
                    </div>
                </div>
                <div className="md:flex justify-between gap-10">
                    <div className="shadow-custom p-6 rounded-xl mb-5">
                        <h2 className="text-xl font-medium mb-3 text-[#FD4C5C]">Our Values</h2>
                        <p className="text-[#aaa6a6]">With her years of experience, impressive property portfolio, celebrity clientele, and unparalleled knowledge of the market and pedigree estates, Simone estimable business is sophisticated and renowned </p>
                    </div>
                    <div className="shadow-custom p-6 rounded-xl mb-5">
                        <h2 className="text-xl font-medium mb-3 text-[#FD4C5C]">Our Resources</h2>
                        <p className="text-[#aaa6a6]">With her years of experience, impressive property portfolio, celebrity clientele, and unparalleled knowledge of the market and pedigree estates, Simone estimable business is sophisticated and renowned. </p>
                    </div>
                </div>
            </div>

            {/* Meet our team */}
            <div className="container mx-auto lg:px-20 pt-10">
                <TourGuide></TourGuide>
            </div>

            <div>
                <Testimonial></Testimonial>
            </div>

        </div>
    );
};

export default About;