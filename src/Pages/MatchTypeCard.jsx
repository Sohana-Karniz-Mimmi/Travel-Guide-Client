import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
// import photo from '../assets/images/Saint_Martin_Island.jpg'
import errorImage from "../../public/404.jpg"
import { IoLocationOutline } from 'react-icons/io5';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';

// { touristsSpot }
const MatchTypeCard = ({ matchingPackage }) => {
    const { _id, image1, tourists_spot_name, tour_type, description, price, country_name } = matchingPackage;
    console.log(matchingPackage);
    return (
        <div>
            <div className="barlow-regular w-full mx-auto group rounded border-2 lg::w-[365px]">

                <div className="overflow-hidden relative">
                    <img role="presentation" className="object-cover transition-all hover:scale-110 duration-700 ease-in-out w-full rounded h-52 bg-gray-500" src={image1 || errorImage} />
                    {/* <h3 className="z-10 bg-[#FD4C5C] text-sm font-medium text-white absolute top-4 left-4 rounded-md py-2 px-[14px] xs:text-xl md:text-sm flex items-center gap-2"> <FaRegClock /> {seasonality}</h3> */}
                </div>

                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold ">{tourists_spot_name}</h3>
                    <div className="flex justify-between">
                        <span className="text-gray-700 flex items-center gap-2"><IoLocationOutline className='text-black' /> {country_name} </span>
                        <h3 className="z-10 bg-[#FD4C5C] text-sm font-medium text-white rounded-md py-1 px-[10px] xs:text-xl md:text-sm flex items-center gap-2">
                        <AiOutlineSafetyCertificate className='text-lg' />{tour_type}</h3>
                    </div>
                    <div className="text-gray-500 text-[15px]">
                        <p className='flex items-center gap-2'>{description.slice(0, 135)}</p>
                    </div>
                    <div className=" flex justify-between items-center">
                        <h2 className="text-2xl font-semibold text-[#FD4C5C]">
                            ${price}
                        </h2>
                    </div>

                    <Link to={`/packages-details/${_id}`} className=" w-full relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden transition-all ease-out duration-300 rounded-md">
                        <span className="md:px-6 border bg-[#FD4C5C] text-white duration-300 border-[#FD4C5C] w-full text-center md:py-3 px-3 py-2 transition-all ease-out rounded-md md:text-[16px] text-sm">View Details</span>
                    </Link>

                </div>
            </div>
        </div>
    );
};

MatchTypeCard.propTypes = {
    matchingPackage: PropTypes.object.isRequired,
};

export default MatchTypeCard;