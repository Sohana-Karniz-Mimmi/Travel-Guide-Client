import { Link } from "react-router-dom";
// import TouristsSpotsCard from "./TouristsSpotsCard";
import Countries from "./Countries";



const TouristsSpots = () => {

    // const loadedTouristsSpotsData = useLoaderData();

    return (
        <div className="barlow-condensed-regular mt-12 mb-10 md:mt-24 container max-w-6xl mx-auto space-y-6 sm:space-y-12">
            {/* <div className="text-center mb-12">
                <h2 data-aos="fade-down" data-aos-duration="1000" className="font-semibold text-3xl lg:text-[44px] lg:mb-4 mb-2 ">Tourists Spots</h2>
                <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="200" className="lg:w-[550px] md:w-[500px] text-sm lg:text-lg text-[#9ca3a9] font-medium w-80 mx-auto">Uncover must-see destinations with Turio. From iconic landmarks to hidden treasures, plan your perfect itinerary and make memories.</p>
            </div> */}

            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">

                {/* {
                    loadedTouristsSpotsData.slice(0, 6).map(touristsSpot => <TouristsSpotsCard key={touristsSpot._id} touristsSpot={touristsSpot} ></TouristsSpotsCard>)
                } */}

                {/* ***************** */}
                {/* <div className="barlow-regular w-full mx-auto group rounded border-2 lg::w-[365px]">

                    <div className="overflow-hidden relative">
                        <img role="presentation" className="object-cover transition-all hover:scale-110 duration-700 ease-in-out w-full rounded h-52 bg-gray-500" src='https://www.ahsanmanzilticket.gov.bd/images/NMB.jpg' />
                        <h3 className="z-10 bg-green-600 text-sm font-medium text-white absolute top-4 left-4 rounded-md py-2 px-[14px] xs:text-xl md:text-sm flex items-center gap-2"> <FaRegClock /> Rainy</h3>
                    </div>

                    <div className="p-6 space-y-2">
                        <h3 className="text-2xl  font-semibold  ">Ahsan Manzil</h3>
                        <div className="flex justify-between">
                            <span className="text-[#9ca3a9] font-medium flex items-center gap-2"><IoLocationOutline /> Bangladesh, Kumartoli, Dhaka</span>
                        </div>
                        <div className=" flex justify-between items-center">
                            <span className="font-bold text-lg flex items-center gap-2"><FaRegCalendarDays /> 7 Days</span>
                            <h2 className="text-[#FF0143] font-semibold text-2xl">
                            $1000
                            </h2>
                        </div>

                        <Link to={`/details`} className=" w-full relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden transition-all ease-out duration-300 group-hover:bg-green-600 rounded-md">
                            <span className="md:px-6 border hover:bg-green-600 group-hover:text-white duration-300 border-green-600 w-full text-center md:py-3 px-3 py-2 transition-all ease-out rounded-md  text-green-600 md:text-[16px] text-sm">View Details</span>
                        </Link>

                    </div>
                </div> */}
                <Countries></Countries>
                <Countries></Countries>
                <Countries></Countries>
                {/* ***************** */}


            </div>
            <div className="text-center">
                <Link to={`/all-packages`} className='border border-green-600 py-[9px] bg-green-600 hover:bg-transparent px-10 text-white hover:text-green-600 font-semibold rounded-full text-lg'> View All </Link>
            </div>
        </div>
    );
};

export default TouristsSpots;