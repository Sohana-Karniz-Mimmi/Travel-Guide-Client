import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../Hook/useAxiosSecure";
import useAuth from "../Hook/useAuth";
import { useMutation, useQuery } from "@tanstack/react-query";
import { format } from 'date-fns';
import LoadingSpinner from "../Components/Shared/LoadingSpinner";
import toast from 'react-hot-toast'
// import DeleteModal from "../Components/Modal/DeleteModal";
// import { useState } from "react";
// import { RiArrowDropDownLine } from "react-icons/ri";


const AppliedJobs = () => {

    const axiosSecure = useAxiosSecure()
    // const[isOpen, setIsOpen] = useState(false)
    // const closeModal = () => {
    //     setIsOpen(false)
    // }

    const { user } = useAuth()

    const { data: bookings = [], isLoading, refetch } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const { data } = await axiosSecure(`/my-bookings/${user?.email}`)
            return data
        },
    })

    //   delete
    const { mutateAsync } = useMutation({
        mutationFn: async id => {
            const { data } = await axiosSecure.delete(`/booking/${id}`)
            return data
        },
        onSuccess: async data => {
            console.log(data)
            refetch()
            toast.success('Booking Canceled')
        },
    })

    const handleCancelBookings = async id => {
        console.log('sohana', id);
        try {
            await mutateAsync(id)
        } catch (err) {
            console.log(err)
        }
    };


    if (isLoading) { return <LoadingSpinner /> }


    return (

        <>
            <Helmet>
                <title>Applied Jobs- Job-Portal</title>
            </Helmet>

            {/* <div>
                <AppliedBanner></AppliedBanner>
            </div> */}


            <section className='container px-4 mx-auto py-12'>
                {/* <h2 className="text-2xl md:text-4xl font-bold text-center pb-5">Applied Jobs</h2> */}


                <div className='flex flex-col mt-6'>
                    <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                            <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                                <table className='min-w-full divide-y divide-gray-200'>
                                    <thead className='bg-gray-50'>
                                        <tr>
                                            <th
                                                scope='col'
                                                className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                <div className='flex items-center gap-x-3'>
                                                    <span>Tour Guide Name</span>
                                                </div>
                                            </th>
                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                <span>Tour Date</span>
                                            </th>

                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                <button className='flex items-center gap-x-2'>
                                                    <span>Price</span>
                                                </button>
                                            </th>

                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                Status
                                            </th>

                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                Cancel
                                            </th>

                                            <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                                Pay
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className='bg-white divide-y divide-gray-200 '>
                                        {
                                            bookings?.map(booking =>

                                                <tr key={booking._id}>
                                                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                        {booking.guideName}
                                                    </td>

                                                    {/* Deadline */}
                                                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                        {format(booking.tourDate, 'dd-MM-yyyy')}
                                                    </td>

                                                    {/* Price */}
                                                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                        ${booking.price}
                                                    </td>

                                                    {/* Dynamic category */}
                                                    <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                        <div className='flex items-center gap-x-2'>
                                                            <p
                                                                className={`px-3 py-1 rounded-full 
                                                    text-xs ${booking.status === 'In Review' && 'text-blue-500 bg-blue-100/60'} ${booking.status === 'Rejected' && 'text-red-500 bg-pink-100/60'} ${booking.status === 'Accepted' && 'text-emerald-500 bg-emerald-100/60'} ${booking.status === 'Hybrid' && 'text-violet-500 bg-violet-100/60'}
                                                    `}
                                                            >
                                                                {booking.status}
                                                            </p>
                                                        </div>
                                                    </td>

                                                    {/* Calcel Button */}
                                                    <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                        <button
                                                            // onClick={() => setIsOpen(true)}
                                                            onClick={() => handleCancelBookings(booking._id)}
                                                            className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none"
                                                            disabled={booking.status === 'Accepted'}
                                                        >
                                                            Cancel
                                                        </button>
                                                        {/* Delete Modal */}
                                                        {/* <DeleteModal
                                                            handleDelete={handleCancelBookings}
                                                            closeModal={closeModal}
                                                            isOpen={isOpen}
                                                            id={booking?._id}
                                                        /> */}
                                                    </td>
                                                    {/* Pay Button */}
                                                    <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                        <button className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none"
                                                            disabled={booking.status === 'In Review'}
                                                        >
                                                            Pay
                                                        </button>
                                                    </td>
                                                </tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}


export default AppliedJobs

