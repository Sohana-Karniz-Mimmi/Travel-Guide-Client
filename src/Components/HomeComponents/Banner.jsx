import slider1 from '../../assets/images/Banner Slider/slider1.jpg'
import slider3 from '../../assets/images/Banner Slider/slider2.jpg'
import slider4 from '../../assets/images/Banner Slider/slider3.jpg'

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import 'swiper/css/effect-fade';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import Navbar from '../Navbar';




const Banner = () => {
    return (
        <Swiper
            navigation={true}
            effect="fade"
            modules={[Navigation, Autoplay, EffectFade]}
            // autoplay={{
            //     delay: 3000,
            //   }}
            loop={true}
        >
            
            <SwiperSlide>
                <section className="relative bg-cover bg-fixed bg-center bg-no-repeat md:h-[720px] h-[500px]" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${slider4})` }}>

                    <div
                        className="absolute inset-0 sm:bg-transparent  sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                    >
                    </div>

                    
                    
                    <div
                        className="relative lg:h-screen lg:items-center"
                    >
                        <div className='bg-[#00000080] text-white'>
                            <Navbar></Navbar>
                        </div>
                        <div className='flex items-center justify-center md:h-[540px] h-[350px]'>
                            <div className=" text-white mx-auto md:max-w-[820px] text-center ltr:sm:text-left rtl:sm:text-right p-10 rounded-lg">
                                <h1 className="text-3xl font-bold sm:text-6xl">
                                        <div>Your jouney starts here</div>
                                </h1>
                                <p className="md:text-[17px] text-sm mt-4 mb-10 max-w-2xl ">
                                Discover and book amazing travel experiences with Tripgo
                                </p>
                                <button className='border border-green-600 py-[9px] bg-green-600 hover:bg-transparent px-6 font-semibold'> Find Jobs </button>
                            </div>
                        </div>
                    </div>



                </section>
            </SwiperSlide>
            
            <SwiperSlide>
                <section className="relative bg-cover bg-fixed bg-center bg-no-repeat md:h-[720px] h-[500px]" style={{ backgroundImage: `url(${slider1})` }}>

                    <div
                        className="absolute inset-0 sm:bg-transparent  sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                    >
                    </div>

                    <div
                        className="relative lg:h-screen lg:items-center"
                    >
                        <div className='bg-[#00000080] text-white'>
                            <Navbar></Navbar>
                        </div>
                        <div className='flex items-center justify-center md:h-[540px] h-[350px]'>
                            <div className=" text-white mx-auto md:max-w-[820px] text-center ltr:sm:text-left rtl:sm:text-right p-10 rounded-lg">
                                <h1 className="text-3xl font-bold sm:text-6xl">
                                        <div>Your jouney starts here</div>
                                </h1>
                                <p className="md:text-[17px] text-sm mt-4 mb-10 max-w-2xl ">
                                Discover and book amazing travel experiences with Tripgo
                                </p>
                                <button className='border border-green-600 py-[9px] bg-green-600 hover:bg-transparent px-6 font-semibold'> Find Jobs </button>
                            </div>
                        </div>
                    </div>

                </section>
            </SwiperSlide>


            <SwiperSlide>
                <section className="relative bg-cover bg-fixed bg-center bg-no-repeat md:h-[720px] h-[500px]" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${slider3})` }}>

                    <div
                        className="absolute inset-0 sm:bg-transparent  sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                    >
                    </div>

                    
                    <div
                        className="relative lg:h-screen lg:items-center"
                    >
                        <div className='bg-[#00000080] text-white'>
                            <Navbar></Navbar>
                        </div>
                        <div className='flex items-center justify-center md:h-[540px] h-[350px]'>
                            <div className=" text-white mx-auto md:max-w-[820px] text-center ltr:sm:text-left rtl:sm:text-right p-10 rounded-lg">
                                <h1 className="text-3xl font-bold sm:text-6xl">
                                        <div>Your jouney starts here</div>
                                </h1>
                                <p className="md:text-[17px] text-sm mt-4 mb-10 max-w-2xl ">
                                Discover and book amazing travel experiences with Tripgo
                                </p>
                                <button className='border border-green-600 py-[9px] bg-green-600 hover:bg-transparent px-6 font-semibold'> Find Jobs </button>
                            </div>
                        </div>
                    </div>


                </section>
            </SwiperSlide>

            
            

        </Swiper>
    );
};

export default Banner;