import PropTypes from 'prop-types';
import { FaRegCalendarDays } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { HiOutlineUserGroup } from 'react-icons/hi';
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineSafetyCertificate } from 'react-icons/ai';

const AllPackagesCard = ({touristsSpot}) => {

    const {
        _id,
        image1,
        tourists_spot_name,
        country_name,
        price,
        tour_type } = touristsSpot
    
    return (
        <div>
            <div className="barlow-regular max-w-sm mx-auto group rounded border-2 lg::w-[365px]">

                <div className="overflow-hidden relative">
                    <img role="presentation" className="object-cover transition-all group-hover:scale-110 duration-700 ease-in-out w-full rounded h-52 bg-gray-500" src={image1} />
                </div>

                <div className="p-6 space-y-2 relative">

                    <div>
                        <h3 className="z-10 justify-center transition-all duration-500 else-in-out hover:bg-[#FD4C5C] text-sm font-medium hover:text-white bg-white text-[#FD4C5C] absolute top-[-20px] left-[30%] rounded-full py-2 px-8 flex items-center gap-2 shadow-sm"> <AiOutlineSafetyCertificate className='text-lg' />{tour_type}</h3>
                    </div>
                    <h3 className="text-2xl font-semibold ">{tourists_spot_name}</h3>
                    <div className="flex justify-between">
                        <span className="text-[#9ca3a9] font-medium flex items-center gap-2"><IoLocationOutline /> {country_name}</span>
                    </div>
                    <div className="text-[#9ca3a9] font-medium">
                        <p className='flex items-center gap-2'><HiOutlineUserGroup /> Total Visitor Per Year <span className='font-bold'>5000</span></p>
                    </div>
                    <div className=" flex justify-between items-center">
                        <span className="font-bold text-lg flex items-center gap-2"><FaRegCalendarDays /> 10 Days</span>
                        <h2 className="text-2xl font-semibold text-[#FD4C5C]">
                            ${price}
                        </h2>
                    </div>

                    <Link to={`/packages-details/${_id}`} className=" w-full relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden transition-all ease-out duration-300 bg-[#FD4C5C] hover:bg-transparent rounded-md">
                        <span className="md:px-6 border text-white hover:text-[#FD4C5C] duration-300 border-[#FD4C5C] w-full text-center md:py-3 px-3 py-2 transition-all ease-out rounded-md md:text-[16px] text-sm">View Details</span>
                    </Link>

                </div>
            </div>
        </div>
    );
};

AllPackagesCard.propTypes = {
    touristsSpot: PropTypes.object.isRequired,
};

export default AllPackagesCard;