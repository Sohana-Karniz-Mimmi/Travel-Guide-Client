import PropTypes from 'prop-types';
import axios from "axios";
import useAuth from "../Hook/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
// import { format } from 'date-fns';

const Modal = ({ _id, job_title, deadline, category, salary, buyer }) => {

    const { user } = useAuth()
    const navigate = useNavigate()
    const buyer_email = buyer?.email
    const jobId = _id

    const [applyDeadline, setApplyDeadline] = useState(new Date(deadline));
    const [today, setDeadline] = useState(new Date())

    const isDeadlineOver = today > applyDeadline;
    console.log('today', today);
    console.log('deadline', deadline);
    console.log('isDeadlineOver', isDeadlineOver);

    // const today = format(today, 'dd-MM-yyyy');

    const handleApplyForm = async e => {
        e.preventDefault();
            if (user?.email === buyer?.email){
                navigate(location?.pathname);
                return toast.error('Employers cannot apply for their own jobs.')
        }

        // date validation 
        if (isDeadlineOver) {
            return toast.error('Application deadline has passed. You cannot apply now')
        }

        const form = e.target
        const userName = form.userName.value
        const email = form.email.value
        const resumeLink = form.resumeLink.value
        // console.log(name, email, resumeLink);

        const applyJob = { jobId, job_title, salary, userName, email, deadline: today, resumeLink, category, buyer_email, buyer }
        console.table(applyJob);

        await axios.post(`${import.meta.env.VITE_API_URL}/apply`, applyJob)
            .then(data => {
                console.log(data.data)
                toast.success('Apply Successfully!')
                navigate('/appliedJobs')
            })
            .catch((error) => {
                // console.log(error.response.data);
                toast.error(error.response.data)
            });
    }

    return (
        <>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn hover:bg-[#FD4C5C] bg-green-600 font-semibold text-white duration-300 border-green-600 hover:border-[#FD4C5C] text-center transition-all ease-out" onClick={() => document.getElementById('my_modal_5').showModal()}>

                Apply_Now
            </button>

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box pb-10">

                    <div className="flex items-center justify-between">
                        <h3 className="font-bold  text-lg pb-4">Apply_Now</h3>
                        <div className=" mb-6">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="p-1 mb-5 hover:bg-red-500 btn-outline">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </form>
                        </div>
                    </div>

                    <form onSubmit={handleApplyForm} className="space-y-4">
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input name='userName' value={user?.displayName} type="text" className="grow" placeholder="Username" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input name='email' value={user?.email} type="text" className="grow" placeholder="Email" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <DatePicker required
                                selected={today}
                                onChange={date => setDeadline(date)}
                            />
                        </label>
                        {/* Resume Link */}
                        <label className="input input-bordered flex items-center gap-2">
                            <input required name='resumeLink' type="text" className="grow" placeholder="Resume Link" />
                        </label>
                        <div className="text-center">
                            <button type="submit" className="btn btn-block bg-green-600 text-white hover:bg-green-600">Submit</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
};

Modal.propTypes = {
    children: PropTypes.node,
    _id: PropTypes.node,
    job_title: PropTypes.node,
    category: PropTypes.node,
    salary: PropTypes.node,
    buyer: PropTypes.node,
    deadline: PropTypes.node
};


export default Modal;
