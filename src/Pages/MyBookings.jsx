import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../Hook/useAxiosSecure";
import useAuth from "../Hook/useAuth";
import { useMutation } from "@tanstack/react-query";
import { format } from 'date-fns';
// import LoadingSpinner from "../Components/Shared/LoadingSpinner";
import toast from 'react-hot-toast'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";
// import DeleteModal from "../Components/Modal/DeleteModal";
// import { useState } from "react";
// import { RiArrowDropDownLine } from "react-icons/ri";


const MyBookings = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    // const[isOpen, setIsOpen] = useState(false)
    // const closeModal = () => {
    //     setIsOpen(false)
    // }

    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState(0)
    const [filter, setFilter] = useState('')
    const [search, setSearch] = useState('')
    const [users, setUsers] = useState([])
    console.log(search)

    //   Fetch users Data
    useEffect(() => {
        axiosSecure(`/my-bookings/${user?.email}?page=${currentPage}&size=${itemsPerPage}`)
            .then((res) => setUsers(res.data))
    }, [currentPage, itemsPerPage])

    useEffect(() => {
        const getCount = async () => {
            const { data } = await axios(
                `${import.meta.env.VITE_API_URL
                }/users-count?filter=${filter}&search=${search}`
            )

            setCount(data.count)
        }
        getCount()
    }, [filter, search])

    const numberOfPages = Math.ceil(count / itemsPerPage)
    const pages = [...Array(numberOfPages).keys()].map(element => element + 1)
    console.log(pages);

    //  handle pagination button
  const handlePaginationButton = value => {
    console.log(value)
    setCurrentPage(value)
  }


    // const { data: bookings = [], isLoading, refetch } = useQuery({
    //     queryKey: ['bookings'],
    //     queryFn: async () => {
    //         const { data } = await axiosSecure(`/my-bookings/${user?.email}`)
    //         return data
    //     },
    // })

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
        // console.log('sohana', id);
        try {
            await mutateAsync(id)
        } catch (err) {
            console.log(err)
        }
    };


    // if (isLoading) { return <LoadingSpinner /> }


    return (

        <>
            <Helmet>
                <title>Applied Jobs- Job-Portal</title>
            </Helmet>

            {/* <div>
                <AppliedBanner></AppliedBanner>
            </div> */}


            <section className='container px-4 mx-auto py-12'>
                <div className='flex items-center gap-x-3'>
                    <h2 className='text-lg font-medium text-gray-800 '>My Booking</h2>
                </div>

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
                                                    <span>Package Name</span>
                                                </div>
                                            </th>
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
                                            users?.map(booking =>

                                                <tr key={booking._id}>
                                                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                        {booking.tour_type}
                                                    </td>
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
                                                            title="Cancel"
                                                            // onClick={() => setIsOpen(true)}
                                                            onClick={() => handleCancelBookings(booking._id)}
                                                            className="px-3 py-1 rounded-full 
                                                    text-xs text-red-500 bg-pink-100/60"
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
                                                        <button title="Pay Now" className="text-purple-500 bg-purple-100/60 px-3 py-1 rounded-full 
                                                    text-xs"
                                                            disabled={booking.status === 'In Review'}
                                                        >
                                                            Pay Now
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

                {/* Pagination Section */}
                <div className='flex justify-center mt-12'>
                    {/* Previous Button */}
                    <button
                        disabled={currentPage === 1}
                        onClick={() => handlePaginationButton(currentPage - 1)}
                        className='px-4 py-2 mx-1 text-white disabled:text-gray-500 capitalize bg-[#FD4C5C] rounded-full disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:bg-gray-200 disabled:hover:text-gray-500 hover:bg-[#FF0143] hover:text-white'
                    >
                        <div className='flex items-center -mx-1'>
                            <IoIosArrowBack />
                        </div>
                    </button>
                    {/* Numbers */}
                    {pages.map(btnNum => (
                        <button
                            onClick={() => handlePaginationButton(btnNum)}
                            key={btnNum}
                            className={`hidden ${currentPage === btnNum ? 'bg-[#FD4C5C] text-white' : ''
                                } px-4 py-2 mx-1 transition-colors duration-300 transform border rounded-full sm:inline hover:bg-[#FF0143]  hover:text-white`}
                        >
                            {btnNum}
                        </button>
                    ))}
                    {/* Next Button */}
                    <button
                        disabled={currentPage === numberOfPages}
                        onClick={() => handlePaginationButton(currentPage + 1)}
                        className='px-4 py-2 mx-1 text-white transition-colors duration-300 transform bg-[#FD4C5C] rounded-full hover:bg-[#FF0143] disabled:hover:bg-gray-200 disabled:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'
                    >
                        <div className='flex items-center -mx-1'>
                            <IoIosArrowForward />
                        </div>
                    </button>
                </div>
            </section>

        </>
    )
}


export default MyBookings

