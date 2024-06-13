import { imageUpload } from '../api/utils/index'
import useAxiosSecure from "../Hook/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { useMutation } from "@tanstack/react-query";
import 'react-datepicker/dist/react-datepicker.css'
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast'


const AddPackage = () => {
    const axiosSecure = useAxiosSecure()

    // React Hook Form
    const {
        register,
        handleSubmit,
        reset,
    } = useForm()

    // Tanstack Query for post the data   
    const { mutateAsync } = useMutation({
        mutationFn: async tourPackages => {
            const { data } = await axiosSecure.post(`/tour-package`, tourPackages)
            return data
        },
        onSuccess: () => {
            reset()
            console.log('Data Saved Successfully')
            toast.success('Tour Packages Added Successfully!')
        },
    })
    const handleSubmitForm = async data => {
        const { tourists_spot_name, country_name, price, tour_type, description, location, image, image2, image3, image4, image5 } = data
        const salary = parseFloat(price)
        const uploadImage = image[0]
        const uploadImage2 = image2[0]
        const uploadImage3 = image3[0]
        const uploadImage4 = image4[0]
        const uploadImage5 = image5[0]

        try {

            // const image_url = data.data.display_url
            const image_url = await imageUpload(uploadImage)
            const image_url2 = await imageUpload(uploadImage2)
            const image_url3 = await imageUpload(uploadImage3)
            const image_url4 = await imageUpload(uploadImage4)
            const image_url5 = await imageUpload(uploadImage5)

            const tourPackages = {
                tourists_spot_name, country_name, price: salary, tour_type, description, location,
                image1:image_url,
                image2:image_url2,
                image3:image_url3,
                image4:image_url4,
                image5:image_url5,
            }
            // console.log(tourPackages)

            //   Post request to server
            await mutateAsync(tourPackages)
        } catch (err) {
            console.log(err)
            toast.error(err.message)
        }

    }




    return (
        <> <Helmet>
            <title>Add Job - Job-Portal</title>
        </Helmet>

            {/* <div>
                <AddJobBanner></AddJobBanner>
            </div> */}
            <section className=" p-6 barlow-condensed-regular dark:text-gray-900">
                <form onSubmit={handleSubmit(handleSubmitForm)} className=" container mx-auto flex justify-center space-y-12">
                    <fieldset className=" py-5 md:px-[30px] px-5 rounded-md shadow-xl dark:bg-white mt-5">
                        <div className="py-[10px] border-b mb-6 flex justify-between items-center">
                            <h3 className="rubik text-xl font-medium">ADD A PACKAGE</h3>
                        </div>
                        <div className=" lg:w-[848px] md:w-[680px] w-[300px] grid grid-cols-6 gap-4 col-span-full lg:col-span-3">


                            {/* Tourist Spot name and country  */}
                            <div className="col-span-full sm:col-span-3">
                                <label className=" font-semibold text-base text-[#333] block mb-2">Tourist Spot Name</label>
                                <div className="relative">
                                    <input {...register("tourists_spot_name", { required: true })} name="tourists_spot_name" required type="text" className="w-full border rounded-lg border-gray-300 focus:border-[#FD4C5C] px-2 py-[9px] outline-none bg-transparent text-[15px]" placeholder="Enter a Tourist Spot" />
                                    {/* {errors.tourists_spot_name && <span className="text-red-600">Please Enter a Job Title</span>} */}

                                </div>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className=" font-semibold text-base text-[#333] block mb-2">Country Name</label>
                                <div className="relative">
                                    <input {...register("country_name", { required: true })} name="country_name" value={'Bangladesh'} required type="text" className="w-full border rounded-lg border-gray-300 focus:border-[#FD4C5C] px-2 py-[9px] outline-none bg-transparent text-[15px]" />
                                    {/* {errors.country_name && <span className="text-red-600">Please Enter a Job Title</span>} */}

                                </div>
                            </div>

                            {/* 2nd Row price and tour type  */}
                            <div className="col-span-full sm:col-span-3">
                                <label className=" font-semibold text-base text-[#333] block mb-2">Price</label>
                                <div className="salaryRange">
                                    <input {...register("price", { required: true })} name="price" type="number" required className="w-full border rounded-lg border-gray-300 focus:border-[#FD4C5C] px-2 py-[9px] outline-none bg-transparent text-[15px]" placeholder="Price" />
                                    {/* {errors.price && <span className="text-red-600">Please Enter Your Photo URL</span>} */}

                                </div>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className=" font-semibold text-base text-[#333] block mb-2">Tour Type</label>
                                <div className="relative">
                                    <select {...register("tour_type", { required: true })} name="tour_type" type="text" required className="w-full border rounded-lg border-gray-300 focus:border-[#FD4C5C] px-2 py-[9px] outline-none bg-transparent text-[15px]">
                                        <option value="">Select type...</option>
                                        <option value="Nature">Nature</option>
                                        <option value="Island">Island</option>
                                        <option value="Beach">Beach</option>
                                        <option value="City">City</option>
                                        <option value="Historical">Historical</option>
                                        <option value="Mountain">Mountain</option>
                                    </select>
                                    {/* {errors.tour_type && <span className="text-red-600">Please Enter Your Country</span>} */}

                                </div>
                            </div>

                            {/* 2nd Row  */}
                            <div className="col-span-full sm:col-span-3">
                                <label className=" font-semibold text-base text-[#333] block mb-2">Location</label>
                                <div className="relative">
                                    <input {...register("location", { required: true })} name="location" required type="text" className="w-full border rounded-lg border-gray-300 focus:border-[#FD4C5C] px-2 py-[9px] outline-none bg-transparent text-[15px]" placeholder="Enter Tour Location" />
                                    {/* {errors.location && <span className="text-red-600">Please Enter a Job Title</span>} */}

                                </div>
                            </div>
                            {/* <div className="col-span-full sm:col-span-3">
                                <label className=" font-semibold text-base text-[#333] block mb-2">Job Posting Date</label>
                                <div className="relative">
                                    <DatePicker
                                        className='lg:w-[416px] md:w-[332px] border w-[300px] rounded-lg px-2 py-[9px] '
                                        selected={postedDate}
                                        onChange={date => setPostDate(date)}
                                    />

                                </div>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className=" font-semibold text-base text-[#333] block mb-2">Application Deadline</label>
                                <div className="relative">
                                    <DatePicker
                                        className='lg:w-[416px] md:w-[332px] border w-[300px] rounded-lg px-2 py-[9px] '
                                        selected={deadline}
                                        onChange={date => setDeadline(date)}
                                    />
                                </div>
                            </div> */}

                            {/* 3rd Row images  */}
                            <div className="col-span-full sm:col-span-3">
                                <label className=" font-semibold text-base text-[#333] block mb-2">Photo URL</label>
                                <div className="relative">
                                    <input
                                        {...register("image", { required: true })}
                                        type='file'
                                        name='image'
                                        id='image'
                                        accept='image/*'
                                        className="w-full border rounded-lg border-gray-300 focus:border-[#FD4C5C] px-2 py-[9px] outline-none bg-transparent text-[15px]"
                                        required
                                    />
                                    {/* {errors.photo2 && <span className="text-red-600">Please Enter Your Photo URL</span>} */}

                                </div>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className=" font-semibold text-base text-[#333] block mb-2">Photo URL</label>
                                <div className="relative">
                                    <input
                                        {...register("image2", { required: true })}
                                        type='file'
                                        name='image2'
                                        id='image'
                                        accept='image/*'
                                        className="w-full border rounded-lg border-gray-300 focus:border-[#FD4C5C] px-2 py-[9px] outline-none bg-transparent text-[15px]"
                                        required
                                    />
                                    {/* {errors.photo2 && <span className="text-red-600">Please Enter Your Photo URL</span>} */}

                                </div>
                            </div>
                            {/* 4rd Row images  */}
                            <div className="col-span-full sm:col-span-3">
                                <label className=" font-semibold text-base text-[#333] block mb-2">Photo URL</label>
                                <div className="relative">
                                    <input
                                        {...register("image3", { required: true })}
                                        type='file'
                                        name='image3'
                                        id='image'
                                        accept='image/*'
                                        className="w-full border rounded-lg border-gray-300 focus:border-[#FD4C5C] px-2 py-[9px] outline-none bg-transparent text-[15px]"
                                        required
                                    />
                                    {/* {errors.photo2 && <span className="text-red-600">Please Enter Your Photo URL</span>} */}

                                </div>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className=" font-semibold text-base text-[#333] block mb-2">Photo URL</label>
                                <div className="relative">
                                    <input
                                        {...register("image4", { required: true })}
                                        type='file'
                                        name='image4'
                                        id='image'
                                        accept='image/*'
                                        className="w-full border rounded-lg border-gray-300 focus:border-[#FD4C5C] px-2 py-[9px] outline-none bg-transparent text-[15px]"
                                        required
                                    />
                                    {/* {errors.photo2 && <span className="text-red-600">Please Enter Your Photo URL</span>} */}

                                </div>
                            </div>

                            <div className="col-span-full sm:col-span-3">
                                <label className=" font-semibold text-base text-[#333] block mb-2">Photo URL</label>
                                <div className="relative">
                                    <input
                                        {...register("image5", { required: true })}
                                        type='file'
                                        name='image5'
                                        id='image'
                                        accept='image/*'
                                        className="w-full border rounded-lg border-gray-300 focus:border-[#FD4C5C] px-2 py-[9px] outline-none bg-transparent text-[15px]"
                                        required
                                    />
                                    {/* {errors.photo2 && <span className="text-red-600">Please Enter Your Photo URL</span>} */}

                                </div>
                            </div>

                            {/* description */}
                            <div className="col-span-full">
                                <label className=" font-semibold text-base text-[#333] block mb-2">Tour Description</label>
                                <div className="relative">
                                    <textarea {...register("description", { required: true })} name="description" type="text" cols="10" rows="3" placeholder="Write a short description..." className="w-full border rounded-lg border-gray-300 focus:border-[#FD4C5C] px-2 py-[9px] outline-none bg-transparent text-[15px]"></textarea>

                                </div>
                            </div>
                            {/* Btn */}
                            <div className="col-span-full">
                                <input type="submit" value='Add Job' className="text-base py-[10px] px-[20px] rounded-[3px] btn bg-[#FD4C5C] hover:bg-[#FD4C5C] text-white" />
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </>
    )
}

export default AddPackage