import { FaRegCalendarDays, FaRegClock } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Countries = () => {
    return (
        <div>
            <div className="barlow-regular w-full mx-auto group rounded border-2 lg::w-[365px]">

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
            </div>
        </div>
    );
};

export default Countries;