import { MdCardGiftcard } from 'react-icons/md';
import count from '../../assets/images/count.jpg';
// import { FaRegCircleUser } from 'react-icons/fa6';
// import { FaRegFileAlt } from 'react-icons/fa';
// import { TbBrandCampaignmonitor } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../Shared/LoadingSpinner';
import useAxiosCommon from '../../Hook/useAxiosCommon';
import { useQuery } from '@tanstack/react-query';


const TourType = () => {

    const axiosCommon = useAxiosCommon()
  
    const { data: tourTypes = [], isLoading } = useQuery({
      queryKey: ['tourTypes'],
      queryFn: async () => {
        const { data } = await axiosCommon.get(`/tour-types`)
  
        return data
      },
    })
  
    if (isLoading) return <LoadingSpinner />
  
    console.log(tourTypes);

    return (
        <section className="relative bg-cover mb-12 bg-center bg-no-repeat lg:h-[350px] md:h-[470px] h-[650px]" style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.0)), url(${count})`
        }}
        >
            <div className=''>
                <h2 className='mx-auto text-center pb-3 border-b w-52 pt-6 text-3xl font-semibold text-white uppercase'>Tour Type</h2>
            </div>
            

            <div
                className=" mt-1 container items-center justify-between h-[150px] py-4 px-2 mx-auto lg:px-32 grid grid-cols-1 md:gap-8 gap-4 md:grid-cols-2 lg:grid-cols-3 text-white">

                    {
                        tourTypes.map(tourType => <Link key={tourType._id} to={`/tour-type-match-package/${tourType.type_name}`} className="hover:border border p-3 flex gap-2 items-center">
                        <MdCardGiftcard className='text-[#FD4C5C] md:text-[55px] text-[30px]'/>
                        <div>
                            <h1 className='md:text-[30px] text-[20px] font-bold'>3,560</h1>
                            <p className='md:text-[15px] text-[12px]'>{tourType.type_name}</p>
                        </div>
                    </Link>)
                    }
                    
                {/* <Link to={`/match-type-details`} className="hover:border border p-3 flex gap-2 items-center">
                    <FaRegCircleUser className='text-[#FD4C5C] md:text-[55px] text-[30px] ' />
                    <div>
                        <h1 className='md:text-[30px] text-[20px] font-bold'>8,563</h1>
                        <p className='md:text-[15px] text-[12px]'>Sports</p>
                    </div>
                </Link>
                <Link to={`/match-type-details`} className="hover:border border p-3 flex gap-2 items-center">
                    <FaRegFileAlt className='text-[#FD4C5C] md:text-[55px] text-[30px]' />
                    <div>
                        <h1 className='md:text-[30px] text-[20px] font-bold'>6,852</h1>
                        <p className='md:text-[15px] text-[12px]'>Walking</p>
                    </div>
                </Link>
                <Link to={`/match-type-details`} className="hover:border border p-3 flex gap-2 items-center">
                    <TbBrandCampaignmonitor className='text-[#FD4C5C] md:text-[55px] text-[30px]' />
                    <div>
                        <h1 className='md:text-[30px] text-[20px] font-bold'>420</h1>
                        <p className='md:text-[15px] text-[12px]'>Air Rides</p>
                    </div>
                </Link>
                <Link to={`/match-type-details`} className="hover:border border p-3 flex gap-2 items-center">
                    <MdCardGiftcard className='text-[#FD4C5C] md:text-[55px] text-[30px]' />
                    <div>
                        <h1 className='md:text-[30px] text-[20px] font-bold'>3,560</h1>
                        <p className='md:text-[15px] text-[12px]'>Hinking</p>
                    </div>
                </Link>
                <Link to={`/match-type-details`} className="hover:border border p-3 flex gap-2 items-center">
                    <FaRegCircleUser className='text-[#FD4C5C] md:text-[55px] text-[30px]' />
                    <div>
                        <h1 className='md:text-[30px] text-[20px] font-bold'>8,563</h1>
                        <p className='md:text-[15px] text-[12px]'>Sports</p>
                    </div>
                </Link> */}
            </div>


        </section>
    );
};

export default TourType;