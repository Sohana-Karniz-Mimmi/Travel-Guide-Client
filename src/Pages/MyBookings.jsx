import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../Hook/useAxiosSecure";
import useAuth from "../Hook/useAuth";
import { useMutation } from "@tanstack/react-query";
import LoadingSpinner from "../Components/Shared/LoadingSpinner";
import toast from 'react-hot-toast';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";
import MyBookingsRows from "../Components/Dashboard/TableRows/MyBookingsRows";

const MyBookings = () => {

    const axiosSecure = useAxiosSecure();
    const { user, loading } = useAuth();

    // eslint-disable-next-line no-unused-vars
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [count, setCount] = useState(0);
    const [bookings, setBookings] = useState([]);

    // Fetch bookings data
    const fetchBookings = async () => {
        if (user?.email) {
            const { data } = await axiosSecure(`/my-bookings/${user.email}?page=${currentPage}&size=${itemsPerPage}`);
            setBookings(data);
        }
    };

    // Fetch bookings count
    const fetchBookingsCount = async () => {
        if (user?.email) {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/my-bookings/count/${user.email}`);
            setCount(data.count);
        }
    };

    useEffect(() => {
        fetchBookings();
    }, [user?.email, currentPage, itemsPerPage]);

    useEffect(() => {
        fetchBookingsCount();
    }, [user?.email]);

    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()].map(element => element + 1);
    console.log(pages);

    // Handle pagination button
    const handlePaginationButton = value => {
        console.log(value);
        setCurrentPage(value);
    };

    // Delete booking mutation
    const { mutateAsync } = useMutation({
        mutationFn: async id => {
            const { data } = await axiosSecure.delete(`/booking/${id}`);
            return data;
        },
        onSuccess: async data => {
            console.log(data);
            toast.success('Booking Canceled');
            await fetchBookings(); // Refetch bookings after cancellation
        },
    });

    const handleCancelBookings = async id => {
        try {
            await mutateAsync(id);
        } catch (err) {
            console.log(err);
        }
    };

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <>
            <Helmet>
                <title>Bookings - Travel-Guide</title>
            </Helmet>

            <section className='container px-4 mx-auto py-12'>
                <div className='flex items-center gap-x-3'>
                    <h2 className='text-lg font-medium text-gray-800'>My Booking</h2>
                </div>

                <div className='flex flex-col mt-6'>
                    <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                            <div className='overflow-hidden border border-gray-200 md:rounded-lg'>
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
                                    <tbody className='bg-white divide-y divide-gray-200'>
                                        {
                                            bookings?.map(booking => <MyBookingsRows
                                                key={booking._id}
                                                booking={booking}
                                                handleDelete={handleCancelBookings}
                                            ></MyBookingsRows>)
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
    );
}

export default MyBookings;
