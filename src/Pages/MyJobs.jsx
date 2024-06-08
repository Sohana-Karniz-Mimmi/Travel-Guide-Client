import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import useAxiosSecure from "../Hook/useAxiosSecure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { format } from 'date-fns';
import MyJobsBanner from "../Components/MyJobsBanner";
// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";

const MyJobs = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()

    // const [jobs, setJobs] = useState([])

    // useEffect(() => {
    //     getData()
    // }, [user])


    // Tanstack Query
    const QueryClient = useQueryClient()

    // Tanstack Query for get the data   
    const { data: jobs = [], isLoading, } = useQuery({
        queryFn: () => getData(),
        queryKey: ['jobs', user?.email],
    })
    console.log(jobs, isLoading);


    const getData = async () => {
        const { data } = await axiosSecure(`/jobs/${user?.email}`)
        // setJobs(data)
        return data

    }

    // Tanstack Query for get the data
    const handleDelete = async id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    mutateAsync({ id, })
                    // axiosSecure.delete(`/job/${id}`)
                    // .then(data => {
                    //     if (data.data.deletedCount > 0) {
                    //         Swal.fire({
                    //             title: "Deleted!",
                    //             text: "Your Job has been deleted.",
                    //             icon: "success"
                    //         });

                    //         //refresh ui

                    //         // getData()
                    //     }
                    // })
                }
            })

    }



    const { mutateAsync } = useMutation({
        mutationFn: async ({ id }) => {
            const { data } = await axiosSecure.delete(`/job/${id}`)
            console.log(data)
            return data
        },
        onSuccess: () => {
            console.log('Wow, data Delete')
            // toast.success('Delete Successfully')
            Swal.fire({
                title: "Deleted!",
                text: "Your Job has been deleted.",
                icon: "success"
            });

            // refresh ui for latest data
            // refetch()

            // Kothin
            QueryClient.invalidateQueries({ queryKey: ['jobs'] })
        },
    })


    if (isLoading) {
        return <>
            <div className="flex items-center justify-center space-x-2 h-screen">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-[#FD4C5C]"></div>
            </div>
        </>

    }

    return (
        <div>
            <Helmet>
                <title>My Jobs - Job-Portal</title>
            </Helmet>

            <div>
                <MyJobsBanner></MyJobsBanner>
            </div>
            <div className="barlow-condensed-regular py-10 border border-1 rounded-lg mt-10 container mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold text-center pb-5">My Jobs</h2>
                <div className="overflow-x-auto table-responsive">
                    <table className="table">
                        {/* head */}
                        <thead className=" text-[15px] bg-gray-200 text-black">
                            <tr>
                                <th>Job Title</th>
                                <th>Photo</th>
                                <th >Categories</th>
                                <th className="text-center">Posting Date</th>
                                <th className="text-center">Deadline</th>
                                <th className="text-center">Salary</th>
                                <th className="text-center">Email</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className=" text-sm">
                            {/* row 1 */}
                            {
                                jobs?.map((myJob) =>
                                    <tr key={myJob._id} className="">
                                        <th>{myJob.job_title}</th>
                                        <th>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={myJob.photo} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-sm opacity-50">{myJob.buyer.displayName}</div>
                                                </div>
                                            </div>
                                        </th>
                                        <td >{myJob.category}</td>
                                        <td className="text-center">{format(myJob.postedDate, 'dd-MM-yyyy')}</td>
                                        <td className="text-center">{format(myJob.deadline, 'dd-MM-yyyy')}</td>
                                        <td className="text-center">${myJob.salary}</td>
                                        <td className="text-center">{myJob?.buyer?.email}</td>
                                        <td className="text-center">

                                            <div className=" space-x-1">
                                                {/* <Link to={`/update/${myJob._id}`} className="py-2 px-4 rounded-md join-item text-white bg-green-500">
                                                    Update
                                                </Link>
                                                <button onClick={() => handleDelete(myJob._id)} className="py-2 px-4 rounded-md join-item text-white bg-red-500">
                                                    Delete
                                                </button> */}

                                                <span className="inline-flex gap-4 overflow-hidden rounded-md bg-white">
                                                    <Link to={`/update/${myJob._id}`}
                                                        className="inline-block  p-3 text-gray-700 hover:text-green-600 hover:bg-gray-50 focus:relative"
                                                        title="Update Job"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="1.5"
                                                            stroke="currentColor"
                                                            className="h-5 w-5"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                                            />
                                                        </svg>
                                                    </Link>

                                                    <button onClick={() => handleDelete(myJob._id)}
                                                        className="inline-block p-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 focus:relative"
                                                        title="Delete Job"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="1.5"
                                                            stroke="currentColor"
                                                            className="h-5 w-5"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                            />
                                                        </svg>
                                                    </button>
                                                </span>

                                            </div>

                                        </td>
                                    </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyJobs;