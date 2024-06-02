import { MdCardGiftcard } from 'react-icons/md';
import count from '../../assets/images/count.jpg';
import { FaRegCircleUser } from 'react-icons/fa6';
import { FaRegFileAlt } from 'react-icons/fa';
import { TbBrandCampaignmonitor } from 'react-icons/tb';


const Counting = () => {

    return (
        <section className="relative md:flex hidden bg-cover mb-12 bg-center bg-no-repeat h-[222px]" style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.0)), url(${count})`
        }}
        >
            <div
                className=" container lg:flex items-center justify-between h-[222px] py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-32 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-white">
                <div className="flex gap-2 items-center">
                    <MdCardGiftcard className='text-[#fe9703] text-[55px]' />
                    <div>
                        <h1 className='text-[30px] font-bold'>3,560</h1>
                        <p className='text-[15px]'>Available Jobs</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <FaRegCircleUser className='text-[#fe9703] text-[55px]' />
                    <div>
                        <h1 className='text-[30px] font-bold'>8,563</h1>
                        <p className='text-[15px]'>Employees</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <FaRegFileAlt className='text-[#fe9703] text-[55px]' />
                    <div>
                        <h1 className='text-[30px] font-bold'>6,852</h1>
                        <p className='text-[15px]'>CV/Resume</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <TbBrandCampaignmonitor className='text-[#fe9703] text-[55px]' />
                    <div>
                        <h1 className='text-[30px] font-bold'>420</h1>
                        <p className='text-[15px]'>Campaigns</p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Counting;