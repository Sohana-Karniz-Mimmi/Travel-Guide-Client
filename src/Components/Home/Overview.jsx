import { useState } from "react";
import youTubeLogo from "../../assets/images/play.png";
import closeIcon from "../../assets/images/icon-close-black.png";
import { SlBadge } from "react-icons/sl";

const Overview = () => {
    const [showIframe, setShowIframe] = useState(false);

    const handleShowVideo = () => {
        setShowIframe(true);
    };

    const handleCloseVideo = () => {
        setShowIframe(false);
    };

    return (
        <div className="mt-10">
            <section className="flex justify-between py-24 relative">
                <div className="w-1/2 absolute h-full top-0 left-0 hidden md:block">
                    <img
                        className="object-cover w-full h-full rounded-xl"
                        src="https://media1.thrillophilia.com/filestore/5rij0vbesu1vpkkzc8erfzgi24bt_880px-Kuakata_beach.jpg?w=753&h=450&dpr=1.0"
                        alt="Our official team work"
                    />
                    <button onClick={handleShowVideo} className="absolute inset-0 flex items-center justify-center
                     top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/45 w-full h-full pt-6 pl-6 pr-8 pb-8 lg:pb-0 lg:px-10 lg:pt-11 rounded-2xl">
                        <img
                            className=" w-20 h-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            src={youTubeLogo}
                            alt="Play Video"
                        />
                    </button>
                </div>
                <div className="container mx-auto">
                    <div className="flex justify-end">
                        <div className="md:w-5/12">
                            <div className="">
                                <p className="section_subtitle text-[#FD4C5C] text-lg font-semibold">What we are</p>
                                <h2 className="mb-4 text-[#363636] text-4xl font-bold">We are dynamic team of creative people</h2>
                                <div className="mt-5 flex ">
                                    <SlBadge className="text-[#FD4C5C] text-8xl px-2 -mt-8" />
                                    <div>
                                        <h4 className="text-2xl font-semibold">We are Perfect Solution</h4>
                                        <p className="mt-2 text-lg">We provide consulting services in the area of IFRS and management reporting, helping companies to reach their highest level. We optimize business processes, making them easier.</p>
                                        <button className="font-medium mt-4 bg-[#FD4C5C] text-white border-[#FD4C5C] border pt-[11.2px] px-[24px] py-2 rounded-full block w-fit hover:bg-[#F42626] transition-all duration-300">GET STARTED</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {showIframe && (
                <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
                    <div className="relative bg-black px-2 rounded shadow-lg">
                        <button onClick={handleCloseVideo} className="absolute -top-8 right-[5px] text-3xl font-bold"><img src={closeIcon} alt="" /></button>
                        <iframe
                            className="w-[850px] h-[480px]"
                            src="https://www.youtube.com/embed/4-I2f2h-fDk?si=m06vS7-AYrlLW7FJ"
                            frameBorder="0"
                            allow="autoplay; fullscreen"
                            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen
                            title="YouTube video player"
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Overview;
