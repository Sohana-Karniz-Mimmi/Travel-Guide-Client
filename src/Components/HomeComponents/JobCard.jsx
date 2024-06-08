import PropTypes from 'prop-types';
import { AiOutlineDollar } from 'react-icons/ai'
import { LuUserSquare } from 'react-icons/lu'
import { PiUsersFour } from 'react-icons/pi'
// import { TfiUser } from 'react-icons/tfi'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import { format } from 'date-fns';
import useAuth from '../../Hook/useAuth';
import toast from 'react-hot-toast';


const JobCard = ({ job }) => {

  const { user } = useAuth()

  const showToast = () => {
    toast.error('You have to log in first to view details')
  }

  const {
    _id, job_title, postedDate, deadline, salary, photo, buyer,
    apply_count,
  } = job || {}

  const postDate = format(postedDate, 'dd-MM-yyyy');
  const applicationDeadline = format(deadline, 'dd-MM-yyyy');
  return (
    <motion.div
      whileHover={{
        scale: 1.05, transition: {
          duration: 0.3,
          ease: [0.25, 0.25, 0.25, 0.75],
        }
      }}
      // whileTap={{ scale: 0.9 }}
      className='lg::w-[365px] w-full px-4 py-3 bg-white rounded-md shadow-md '
    >
      <div className='flex items-center justify-between'>
        <div className="avatar">
          <div className="w-10 rounded">
            <img src={photo} />
          </div>
        </div>
      </div>



      <div>
        <h1 className='mt-2 text-lg font-semibold '>
          {job_title}
        </h1>
        <h1 className='flex items-center gap-2 mt-1 text-[16px] font-medium'>
          <LuUserSquare />{buyer?.displayName}
        </h1>
        <div className='flex justify-between items-center'>
          <p className='mt-2 text-sm'>
            Posted at - {postDate}
          </p>
          <p className='mt-2 text-sm'>
            Deadline: {applicationDeadline}
          </p>
        </div>

        <p className='flex items-center gap-2 mt-2 text-sm font-medium'>
          <AiOutlineDollar className=' text-lg' /> Salary: ${salary}
        </p>
        <div className='flex justify-between items-center'>

          <p className='flex items-center gap-2 mt-2 text-sm font-medium'>
            <PiUsersFour className=' text-lg' />Applicants: {apply_count}
          </p>
          <div className=' text-center'>
            {
              user ? <Link to={`/job/${_id}`} className="md:px-4 md:py-2 px-3 py-2 border hover:bg-[#FD4C5C] group-hover:text-white duration-300 border-green-600 hover:border-[#FD4C5C] text-center transition-all ease-out md:text-[16px] text-sm btn-outline rounded-md hover:outline-none bg-green-600 text-white">View Details</Link> : <Link to={`/job/${_id}`} onClick={showToast} className="md:px-4 md:py-2 px-3 py-2 border hover:bg-[#FD4C5C] group-hover:text-white duration-300 border-green-600 hover:border-[#FD4C5C] text-center transition-all ease-out md:text-[16px] text-sm btn-outline rounded-md hover:outline-none bg-green-600 text-white">View Details</Link>
            }
          </div>

        </div>
      </div>
    </motion.div>
  )
}
JobCard.propTypes = {
  job: PropTypes.node
};


export default JobCard
