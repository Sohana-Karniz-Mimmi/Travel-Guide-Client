import Navbar from "./Navbar";
import banner from "../assets/images/banner.jpg"

const DetailsBanner = () => {
    return (
        <div>
            <section className="relative bg-cover bg-center bg-no-repeat h-[510px]" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${banner})` }}>

                <div                >
                    <div className='bg-[#00000080] text-white'>
                        <Navbar></Navbar>
                    </div>
                    <div className='flex items-center justify-center h-[340px]'>
                        <div className=" text-white mx-auto md:max-w-[820px] text-center ltr:sm:text-left rtl:sm:text-right p-10 rounded-lg">
                            <p className='text-5xl font-bold mb-1'>
                            Job Details
                            </p>

                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default DetailsBanner;