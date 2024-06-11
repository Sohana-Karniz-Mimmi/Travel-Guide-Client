import PropTypes from 'prop-types';
import { Helmet } from "react-helmet-async";
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
// import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
// import AddJobBanner from "../Components/AddJobBanner";
import useAuth from "../Hook/useAuth";
import LoadingSpinner from "./Shared/LoadingSpinner";
import useAxiosSecure from "../Hook/useAxiosSecure";
import toast from 'react-hot-toast'

const BookingForm = ({tourPackage}) => {
    const { user, loading } = useAuth()
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    

    const [tourDate, setTourDate] = useState(new Date())
    // const [deadline, setDeadline] = useState(new Date())

    // React Hook Form
    const {
        register,
        handleSubmit,
    } = useForm()
    const email = user?.email
    const displayName = user?.displayName
    const photo = user?.photoURL

    
    // Tanstack Query for post the data   
    const { mutateAsync } = useMutation({
        mutationFn: async bookingData => {
          const { data } = await axiosSecure.post(`/booking`, bookingData)
          return data
        },
        onSuccess: () => {
          console.log('Data Saved Successfully')
          toast.success('Booking Added Successfully!')
          navigate('/dashboard/my-bookings')
        //   setLoading(false)
        },
      })

        const handleSubmitForm = async data => {
            // data.preventDefault();
            console.log(data);
            const {  guideName, tourPrice, photo } = data
            const price = parseFloat(tourPrice)
    
            
            try {
                const bookingData = {
                     touristName: displayName, touristEmail: email, guideName, tourDate, price, photo, status: 'In Review', tour_type: tourPackage.tour_type
               }
                console.table(bookingData)
          
                //   Post request to server
                await mutateAsync(bookingData)
              } catch (err) {
                console.log(err)
                toast.error(err.message)
              }
            }


    if(loading) return <LoadingSpinner></LoadingSpinner>


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
                            <h3 className="rubik text-xl font-medium">Your Details</h3>
                        </div>
                        <div className="lato lg:w-[848px] md:w-[680px] w-[300px] grid grid-cols-6 gap-4 col-span-full lg:col-span-3">



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

                            {/* First Row  */}
                            <div className="col-span-full sm:col-span-3">
                                <label className="lato font-semibold text-base text-[#333] block mb-2">Tour Date</label>
                                <div className="relative">
                                    <DatePicker
                                        className='lg:w-[416px] md:w-[332px] border w-[300px] rounded-lg px-2 py-[9px] '
                                        selected={tourDate}
                                        onChange={date => setTourDate(date)}
                                    />

                                </div>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="lato font-semibold text-base text-[#333] block mb-2">Tour guide name</label>
                                <div className="relative">
                                    <select {...register("guideName", { required: true })} name="guideName" type="text" required className="w-full border rounded-lg border-gray-300 focus:border-[#333] px-2 py-[9px] outline-none bg-transparent text-[15px]">
                                        <option value="">Select Guide...</option>
                                        <option value="Sohana">Sohana</option>
                                        <option value="Soharab Hasan">Soharab Hasan</option>
                                        <option value="Part Time">Part Time</option>
                                        <option value="Hybrid">Hybrid</option>
                                    </select>
                                    {/* {errors.guideName && <span className="text-red-600">Please Enter Your Country</span>} */}

                                </div>
                            </div>

                            {/* 2nd Row  */}
                            <div className="col-span-full sm:col-span-3">
                                <label className="lato font-semibold text-base text-[#333] block mb-2">Price</label>
                                <div className="salaryRange">
                                    <input {...register("tourPrice", { required: true })} name="tourPrice" type="text" required className="w-full border rounded-lg border-gray-300 focus:border-[#333] px-2 py-[9px] outline-none bg-transparent text-[15px]" placeholder="Salary" />
                                    {/* {errors.tourPrice && <span className="text-red-600">Please Enter Your Photo URL</span>} */}

                                </div>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="lato font-semibold text-base text-[#333] block mb-2">Photo URL</label>
                                <div className="relative">
                                    <input {...register("photo", { required: true })} value={photo} name="photo" type="text" required className="w-full border rounded-lg border-gray-300 focus:border-[#333] px-2 py-[9px] outline-none bg-transparent text-[15px]" placeholder="Enter Your Photo URL" />
                                    {/* {errors.photo && <span className="text-red-600">Please Enter Your Photo URL</span>} */}

                                </div>
                            </div>


                            {/* Btn */}
                            <div className="col-span-full">
                                <input type="submit" value='Book Now' className="text-base py-[10px] px-[20px] rounded-[3px] btn bg-[#FD4C5C] hover:bg-[#FF0143] text-white" />
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </>
    )
}

BookingForm.propTypes = {
    tourPackage: PropTypes.object.isRequired,
};

export default BookingForm