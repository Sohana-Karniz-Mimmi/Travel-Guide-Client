import Navbar from "./Navbar";
import PropTypes from 'prop-types';
import banner from "../assets/images/banner.jpg"
import { Link } from "react-router-dom";

const AllJobsBanner = ({setSearchText, setSearch}) => {

    const handleReset = () => {
        setSearch('')
        setSearchText('')
    }
    
    return (
        <div>
            <section className="relative bg-cover bg-center bg-no-repeat h-[510px]" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${banner})` }}>
                <div>
                    <div className='bg-[#00000080] text-white'>
                        <Navbar></Navbar>
                    </div>
                    <div className='flex items-center justify-center h-[340px]'>
                        <div className=" text-white mx-auto md:max-w-[820px] text-center ltr:sm:text-left rtl:sm:text-right p-10 rounded-lg">
                            <Link onClick={handleReset} className='text-5xl font-bold mb-1'>
                                All Jobs
                            </Link>

                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

AllJobsBanner.propTypes = {
    setSearchText: PropTypes.node,
    setSearch: PropTypes.node,
};

export default AllJobsBanner;