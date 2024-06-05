import PropTypes from 'prop-types';
// import photo from "../../assets/images/Saint_Martin_Island.jpg"
import errorImage from "../../../public/404.jpg"
import { FaHeart, FaRegUserCircle } from "react-icons/fa";
import { FaRegClock, FaRegMap, FaStar } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const OurPackagesCard = ({tourPackage}) => {
    console.log(tourPackage);

    const {_id, image1, tourists_spot_name, tour_type, price} = tourPackage
    
    return (
        <div>
            <div className=" max-w-sm mx-auto group rounded border-2 lg::w-[365px]">

                <div className="overflow-hidden relative">
                    <img role="presentation" className="object-cover transition-all group-hover:scale-110 duration-700 ease-in-out w-full rounded h-56 bg-gray-500" src={image1 || errorImage} />
                    <h3 className="z-10 group-hover:bg-white bg-[#00000050] text-sm font-medium text-white absolute top-4 right-5 rounded-full py-2 px-2 xs:text-xl md:text-sm flex items-center gap-2"> <FaHeart className="group-hover:text-[#FF0143]" /></h3>
                    <h3 className="z-10 bg-green-600 text-sm font-medium text-white absolute top-4 left-4 rounded-md py-2 px-[14px] xs:text-xl md:text-sm flex items-center gap-2"> <AiOutlineSafetyCertificate className='text-lg' /> {tour_type}</h3>
                </div>


                <div className="p-6 space-y-2">
                    <div className="flex justify-between">
                        <span className=" flex items-center gap-2 text-[#9ca3a9] font-medium"><FaStar className="text-[#ffa801] " /> 8.0 Superb</span>
                    </div>
                    <h3 className="text-2xl  font-semibold ">{tourists_spot_name}</h3>

                    <div className=" flex justify-between items-center border-b pb-6">
                        <h2 className=" text-[#9ca3a9] font-medium">
                            <span className="text-[#FF0143] font-semibold text-2xl ">${price}</span> / Per Person
                        </h2>
                    </div>

                    <div className=" pt-3 flex justify-between items-center">
                        <div className="flex gap-6 font-medium text-[#9ca3a9]">
                            <p className="flex gap-2 items-center"><FaRegClock /> 3 Days </p>
                            <p className="flex gap-2 items-center"><FaRegUserCircle /> 12+ </p>
                            <p className="flex gap-2 items-center"><FaRegMap /> Bangladesh</p>
                        </div>
                        <Link to={`/packages-details/${_id}`} ><GoArrowRight className="text-2xl"></GoArrowRight></Link>
                        {/* <button className="btn bg-green-600 text-white">View Details</button> */}
                    </div>

                </div>
            </div>
        </div>
    );
};

OurPackagesCard.propTypes = {
    tourPackage: PropTypes.object.isRequired,
};

export default OurPackagesCard;