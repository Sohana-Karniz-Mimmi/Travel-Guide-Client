import { Helmet } from "react-helmet-async";
import Navbar from "../Components/Navbar";

import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import axios from "axios"
import { useLoaderData, useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import Swal from 'sweetalert2'

const Update = () => {

    // React Hook Form
    const {
        register,
        handleSubmit,
    } = useForm()

    const { user } = useContext(AuthContext);
    const job = useLoaderData()
    const navigate = useNavigate()
    // console.log(job);


    const email = user.email
    const displayName = user.displayName
    const {
        _id,
          job_title,
          postedDate,
          deadline,
          salary,
          photo,
          category,
          description,
    } = job || {}

    const [postDate, setPostDate] = useState(new Date(postedDate)|| new Date())
    const [applicationDeadline, setDeadline] = useState(new Date(deadline) || new Date())
    
    const handleUpdateForm = data => {
        const deadline = applicationDeadline;
        const postedDate = postDate

        const { job_title, category, salaryRange, description, photo } = data
        const salary = parseFloat(salaryRange)

        const jobs = {
            job_title, category, postedDate, deadline, salary, description, photo, buyer: {
                email,
                displayName,
                buyerPhoto: user?.photoURL,
            },
        }
        console.table(jobs);

        mutateAsync({ _id, jobs })
        //     axios.put(`${import.meta.env.VITE_API_URL}/job/${_id}`, jobs)
        //         .then(data => {
        //             if (data.data.modifiedCount > 0) {
        //                 navigate('/myJobs')
        //                 toast.success('Update Successfully')
        //             }
        //             // console.log('inside post response data', data);
        //         })
    }

    // Tanstack Query for post the data   
    const { mutateAsync } = useMutation({
        mutationFn: async ({ _id, jobs }) => {
            const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/job/${_id}`, jobs)
            console.log(data)
            return data
        },
        onSuccess: () => {
            console.log('Job Update Successfully')
            navigate('/myJobs')
            Swal.fire({
                title: "Job Update Successfully",
                icon: "success"
            });
        },
    })


    return (
        <div>
            <Helmet>
                <title>Update Job Post - Job-Portal</title>
            </Helmet>
            <div>
                <Navbar></Navbar>
            </div>
            <section className="p-6 barlow-condensed-regular dark:text-gray-900">
                <form onSubmit={handleSubmit(handleUpdateForm)} className="lato container mx-auto flex justify-center space-y-12">
                    <fieldset className=" py-5 md:px-[30px] px-5 rounded-md shadow-xl dark:bg-white mt-5">
                        <div className="py-[10px] border-b mb-6 flex justify-between items-center">
                            <h3 className="rubik text-xl font-medium">UPDATE JOB</h3>
                        </div>
                        <div className="lato lg:w-[848px] md:w-[680px] w-[300px] grid grid-cols-6 gap-4 col-span-full lg:col-span-3">


                            {/* First Row  */}
                            <div className="col-span-full sm:col-span-3">
                                <label className="lato font-semibold text-base text-[#333] block mb-2">Job Title</label>
                                <div className="relative">
                                    <input {...register("job_title", { required: true })} defaultValue={job_title} name="job_title" required type="text" className="w-full border rounded-lg border-gray-300 focus:border-[#333] px-2 py-[9px] outline-none bg-transparent text-[15px]" placeholder="Enter as Job Title" />
                                    {/* {errors.job_title && <span className="text-red-600">Please Enter a Job Title</span>} */}

                                </div>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="lato font-semibold text-base text-[#333] block mb-2">Job Category</label>
                                <div className="relative">
                                    <select {...register("category", { required: true })} defaultValue={category} name="category" type="text" required className="w-full border rounded-lg border-gray-300 focus:border-[#333] px-2 py-[9px] outline-none bg-transparent text-[15px]">
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
                                        selected={postDate}
                                        onChange={date => setPostDate(date)}
                                    />

                                </div>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="lato font-semibold text-base text-[#333] block mb-2">Application Deadline</label>
                                <div className="relative">
                                    <DatePicker
                                        className='lg:w-[416px] md:w-[332px] border w-[300px] rounded-lg px-2 py-[9px] '
                                        selected={applicationDeadline}
                                        onChange={date => setDeadline(date)}
                                    />
                                </div>
                            </div>

                            {/* 3rd Row  */}
                            <div className="col-span-full sm:col-span-3">
                                <label className="lato font-semibold text-base text-[#333] block mb-2">Salary rang</label>
                                <div className="salaryRange">
                                    <input {...register("salaryRange", { required: true })} defaultValue={salary} name="salaryRange" type="text" required className="w-full border rounded-lg border-gray-300 focus:border-[#333] px-2 py-[9px] outline-none bg-transparent text-[15px]" placeholder="Salary" />
                                    {/* {errors.salaryRange && <span className="text-red-600">Please Enter Your Photo URL</span>} */}

                                </div>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="lato font-semibold text-base text-[#333] block mb-2">Photo URL</label>
                                <div className="relative">
                                    <input {...register("photo", { required: true })} defaultValue={photo} name="photo" type="text" required className="w-full border rounded-lg border-gray-300 focus:border-[#333] px-2 py-[9px] outline-none bg-transparent text-[15px]" placeholder="Enter Your Photo URL" />
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
                                    <textarea {...register("description", { required: true })} defaultValue={description} name="description" type="text" cols="10" rows="3" placeholder="Write a short description..." className="w-full border rounded-lg border-gray-300 focus:border-[#333] px-2 py-[9px] outline-none bg-transparent text-[15px]"></textarea>

                                </div>
                            </div>
                            {/* Btn */}
                            <div className="col-span-full">
                                <input type="submit" value='Update Job' className="text-base py-[10px] px-[20px] rounded-[3px] btn bg-green-600 hover:bg-green-600 text-white" />
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};


export default Update;