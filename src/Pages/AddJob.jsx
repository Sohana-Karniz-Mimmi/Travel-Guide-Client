import { Helmet } from "react-helmet-async";
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
// import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
// import AddJobBanner from "../Components/AddJobBanner";
import useAuth from "../Hook/useAuth";

const AddJob = () => {
    const { user } = useAuth()
    const navigate = useNavigate()

    const [postedDate, setPostDate] = useState(new Date())
    const [deadline, setDeadline] = useState(new Date())

    // React Hook Form
    const {
        register,
        handleSubmit,
    } = useForm()
    const email = user.email
    const displayName = user.displayName

    const handleSubmitForm = data => {
        // data.preventDefault();
        console.log(data);
        const { job_title, category, salaryRange, description, photo } = data
        const salary = parseFloat(salaryRange)

        const jobs = {
            job_title, category, postedDate, deadline, salary, description, photo, buyer: {
                email,
                displayName,
                buyerPhoto: user?.photoURL,
            },
            apply_count: 0,
        }
        console.table(jobs);

        mutateAsync({ jobs })
        // axios.post(`${import.meta.env.VITE_API_URL}/job`, jobs)
        //     .then(data => {
        //         if (data.data.insertedId) {
        //             Swal.fire({
        //                 title: "Job Added Successfully",
        //                 icon: "success"
        //             });
        //         }
        //         console.log('inside post response data', data);
        //     })

    }

     // Tanstack Query for post the data   
    const { mutateAsync } = useMutation({
        mutationFn: async ({ jobs }) => {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/job`, jobs)
            console.log(data)
            return data
        },
        onSuccess: () => {
            console.log('Job Added Successfully')
            navigate('/myJobs')
            Swal.fire({
                title: "Job Added Successfully",
                icon: "success"
            });
        },
    })


    return (
        <> <Helmet>
            <title>Add Job - Job-Portal</title>
        </Helmet>

            {/* <div>
                <AddJobBanner></AddJobBanner>
            </div> */}
            <section className=" p-6 barlow-condensed-regular dark:text-gray-900">
                <form onSubmit={handleSubmit(handleSubmitForm)} className="lato container mx-auto flex justify-center space-y-12">
                    <fieldset className=" py-5 md:px-[30px] px-5 rounded-md shadow-xl dark:bg-white mt-5">
                        <div className="py-[10px] border-b mb-6 flex justify-between items-center">
                            <h3 className="rubik text-xl font-medium">POST A PACKAGE</h3>
                        </div>
                        <div className="lato lg:w-[848px] md:w-[680px] w-[300px] grid grid-cols-6 gap-4 col-span-full lg:col-span-3">


                            {/* First Row  */}
                            <div className="col-span-full sm:col-span-3">
                                <label className="lato font-semibold text-base text-[#333] block mb-2">Job Title</label>
                                <div className="relative">
                                    <input {...register("job_title", { required: true })} name="job_title" required type="text" className="w-full border rounded-lg border-gray-300 focus:border-[#333] px-2 py-[9px] outline-none bg-transparent text-[15px]" placeholder="Enter as Job Title" />
                                    {/* {errors.job_title && <span className="text-red-600">Please Enter a Job Title</span>} */}

                                </div>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="lato font-semibold text-base text-[#333] block mb-2">Job Category</label>
                                <div className="relative">
                                    <select {...register("category", { required: true })} name="category" type="text" required className="w-full border rounded-lg border-gray-300 focus:border-[#333] px-2 py-[9px] outline-none bg-transparent text-[15px]">
                                        <option value="">Select Job...</option>
                                        <option value="On Site">On Site</option>
                                        <option value="Remote">Remote</option>
                                        <option value="Part Time">Part Time</option>
                                        <option value="Hybrid">Hybrid</option>
                                    </select>
                                    {/* {errors.category && <span className="text-red-600">Please Enter Your Country</span>} */}

                                </div>
                            </div>

                            {/* 2nd Row  */}
                            <div className="col-span-full sm:col-span-3">
                                <label className="lato font-semibold text-base text-[#333] block mb-2">Job Posting Date</label>
                                <div className="relative">
                                    <DatePicker
                                        className='lg:w-[416px] md:w-[332px] border w-[300px] rounded-lg px-2 py-[9px] '
                                        selected={postedDate}
                                        onChange={date => setPostDate(date)}
                                    />

                                </div>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="lato font-semibold text-base text-[#333] block mb-2">Application Deadline</label>
                                <div className="relative">
                                    <DatePicker
                                        className='lg:w-[416px] md:w-[332px] border w-[300px] rounded-lg px-2 py-[9px] '
                                        selected={deadline}
                                        onChange={date => setDeadline(date)}
                                    />
                                </div>
                            </div>

                            {/* 3rd Row  */}
                            <div className="col-span-full sm:col-span-3">
                                <label className="lato font-semibold text-base text-[#333] block mb-2">Salary rang</label>
                                <div className="salaryRange">
                                    <input {...register("salaryRange", { required: true })} name="salaryRange" type="text" required className="w-full border rounded-lg border-gray-300 focus:border-[#333] px-2 py-[9px] outline-none bg-transparent text-[15px]" placeholder="Salary" />
                                    {/* {errors.salaryRange && <span className="text-red-600">Please Enter Your Photo URL</span>} */}

                                </div>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="lato font-semibold text-base text-[#333] block mb-2">Photo URL</label>
                                <div className="relative">
                                    <input {...register("photo", { required: true })} name="photo" type="text" required className="w-full border rounded-lg border-gray-300 focus:border-[#333] px-2 py-[9px] outline-none bg-transparent text-[15px]" placeholder="Enter Your Photo URL" />
                                    {/* {errors.photo && <span className="text-red-600">Please Enter Your Photo URL</span>} */}

                                </div>
                            </div>



                            {/* User Name  and email */}
                            <div className="col-span-full sm:col-span-3">
                                <label className="lato font-semibold text-base text-[#333] block mb-2">Your Name</label>
                                <div className="relative">
                                    <input  {...register("userName", { required: true })} value={displayName} name="userName" type="text" className="w-full border rounded-lg border-gray-300 focus:border-[#333] px-2 py-[9px] outline-none bg-transparent text-[15px]" />

                                </div>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="lato font-semibold text-base text-[#333] block mb-2">Your Email</label>
                                <div className="relative">
                                    <input  {...register("email", { required: true })} name="email" value={user.email} type="text" className="w-full border rounded-lg border-gray-300 focus:border-[#333] px-2 py-[9px] outline-none bg-transparent text-[15px]" />

                                </div>
                            </div>


                            {/* description */}
                            <div className="col-span-full">
                                <label className="lato font-semibold text-base text-[#333] block mb-2">Job Description</label>
                                <div className="relative">
                                    <textarea {...register("description", { required: true })} name="description" type="text" cols="10" rows="3" placeholder="Write a short description..." className="w-full border rounded-lg border-gray-300 focus:border-[#333] px-2 py-[9px] outline-none bg-transparent text-[15px]"></textarea>

                                </div>
                            </div>
                            {/* Btn */}
                            <div className="col-span-full">
                                <input type="submit" value='Add Job' className="text-base py-[10px] px-[20px] rounded-[3px] btn bg-green-600 hover:bg-green-600 text-white" />
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </>
    )
}

export default AddJob