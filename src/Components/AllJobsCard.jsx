import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import errorImage from "../../public/404.jpg"
import { FaRegCalendarDays, FaRegClock, FaUsers } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';
import { HiOutlineUserGroup } from 'react-icons/hi';

const AllJobsCard = ({ touristsSpot }) => {
    const { _id, touristsSpotName, countryName, totalVisitors, averageCost, location, travelTime, photo, seasonality } = touristsSpot;
    
    return (
        <div>
            <div className="barlow-regular max-w-sm mx-auto group rounded border-2 lg::w-[365px]">

                <div className="overflow-hidden relative">
                    <img role="presentation" className="object-cover transition-all group-hover:scale-110 duration-700 ease-in-out w-full rounded h-52 bg-gray-500" src={photo || errorImage} />
                </div>

                <div className="p-6 space-y-2 relative">
                    
                <div>
                    <h3 className="z-10 justify-center transition-all duration-500 else-in-out hover:bg-green-600 text-sm font-medium hover:text-white bg-white text-green-600 absolute top-[-20px] left-[30%] rounded-full py-2 px-8 flex items-center gap-2 shadow-sm"> <FaRegClock /> {seasonality}</h3>
                </div>
                    <h3 className="text-2xl font-semibold ">{touristsSpotName}</h3>
                    <div className="flex justify-between">
                        <span className="text-[#9ca3a9] font-medium flex items-center gap-2"><IoLocationOutline /> {countryName}, {location}</span>
                    </div>
                    <div className="text-[#9ca3a9] font-medium">
                        <p className='flex items-center gap-2'><HiOutlineUserGroup /> Total Visitor Per Year <span className='font-bold'>{totalVisitors}</span></p>
                    </div>
                    <div className=" flex justify-between items-center">
                        <span className="font-bold text-lg flex items-center gap-2"><FaRegCalendarDays /> {travelTime}</span>
                        <h2 className="text-2xl font-semibold text-green-600">
                            ${averageCost}
                        </h2>
                    </div>

                    <Link to={`/details/${_id}`} className=" w-full relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden transition-all ease-out duration-300 bg-green-600 hover:bg-transparent rounded-md">
                        <span className="md:px-6 border text-white hover:text-green-600 duration-300 border-green-600 w-full text-center md:py-3 px-3 py-2 transition-all ease-out rounded-md md:text-[16px] text-sm">View Details</span>
                    </Link>

                </div>
            </div>
        </div>
    );
};

AllJobsCard.propTypes = {
    touristsSpot: PropTypes.object.isRequired,
};

export default AllJobsCard;