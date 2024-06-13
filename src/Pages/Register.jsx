import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast'
import { IoEyeOffOutline } from "react-icons/io5";
import { AuthContext } from "../AuthProvider/AuthProvider";
import login from '../assets/images/login.jpg';
import Navbar from "../Components/Shared/Navbar/Navbar";


const Register = () => {

    const { profileUpdate, userRegistration, googleLogin, githubLogin } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const [showPassword, setShowPassword] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const handleRegisterForm = data => {

        const { email, password, name, photo } = data

        // e.preventDefault();
        // console.log(name, email, password);

        if (password.length < 6) {
            return toast.error('Password should be at least 6 characters');

        }
        else if (!/[A-Z]/.test(password)) {
            return toast.error('Password must have at least one uppercase letter');
        }
        else if (!/[a-z]/.test(password)) {
            return toast.error('Password must have at least one lowercase letter');
        }

        userRegistration(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const users = { email, password }
                fetch(`https://tourism-server-beta.vercel.app/users`, {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(users)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            toast.success('Sing Up Successful')

                        }
                    })

                // Update Profile
                profileUpdate(name, photo)
                navigate('/')
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    // Google Login 
    const handleGoogleBtn = () => {
        googleLogin()
            .then(result => {
                console.log(result, 'Google Login');
                if (result.user) {
                    toast.success('Login Successful')
                    navigate(location?.state || "/")
                }
            })
            .catch(error => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                // const email = error.customData.email;
                // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                console.log(errorCode);
                console.log(errorMessage);

            })
    }

    // Github Login 
    const handleGithubBtn = () => {
        githubLogin()
            .then(result => {
                console.log(result, 'Google Login');
                if (result.user) {
                    toast.success('Login Successful')
                    navigate(location?.state || "/")
                }
            })
            .catch(error => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // ...
                console.log(errorCode);
                console.log(errorMessage);

            })
    }


    return (
        <>
            <Helmet>
                <title>Register - Job-Portal</title>
            </Helmet>
            <div className=" bg-cover bg-center bg-no-repeat h-[850px]" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${login})` }}>

                <div className="text-white">
                    <Navbar></Navbar>
                </div>
                <div className="font-[sans-serif] text-[#333] -mt-5">
                    <div className=" flex flex-col items-center justify-center">
                        <div className="mx-auto md:w-[550px] w-full p-4">

                            {/* Form */}
                            <div className="md:max-w-[550px] w-full dark:bg-white border-2 sm:px-6 py-3 px-9 rounded-lg">
                                <form onSubmit={handleSubmit(handleRegisterForm)}>
                                    <div className="my-6 text-center">
                                        <h3 className="text-3xl font-extrabold">Register</h3>
                                    </div>

                                    <div>
                                        <label className="text-sm block mb-2">Your Name</label>
                                        <div className="relative">
                                            <input
                                                {...register("name", { required: true })}
                                                name="name" type="text" className="w-full text-sm border rounded-lg border-gray-300 focus:border-[#333] px-2 py-3 outline-none bg-transparent" placeholder="Enter Your Name" />
                                            {errors.name && <span className="text-red-600">Please Enter Your Name</span>}
                                        </div>

                                    </div>

                                    <div className="mt-4">
                                        <label className="text-sm block mb-2">Photo URL</label>
                                        <div className="relative">
                                            <input {...register("photo", { required: true })} name="photo" type="text" className="w-full text-sm border rounded-lg border-gray-300 focus:border-[#333] px-2 py-3 outline-none bg-transparent" placeholder="Enter Your Photo URL" />
                                            {errors.photo && <span className="text-red-600">Please Enter Your Photo URL</span>}

                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <label className="text-sm block mb-2">Email</label>
                                        <div>
                                            <div className="relative flex items-center">
                                                <input {...register("email", { required: true })} name="email" type="text" className="w-full text-sm border rounded-lg border-gray-300 focus:border-[#333] px-2 py-3 outline-none bg-transparent" placeholder="Enter Your Email" />
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
                                                    <defs>
                                                        <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                                            <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            {errors.email && <span className="text-red-600">Please Enter Your Email</span>}
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <label className="text-sm block mb-2">Password</label>
                                        <div>
                                            <div className="relative flex items-center">
                                                <input {...register("password", { required: true })} name="password" type={showPassword ? "text" : "password"} className="w-full text-sm border rounded-lg border-gray-300 focus:border-[#333] px-2 py-3 outline-none bg-transparent" placeholder="Enter password" />
                                                {
                                                    showPassword ? <IoEyeOffOutline onClick={() => setShowPassword(!showPassword)} className="w-[18px] h-[18px] absolute right-2 cursor-pointer text-[#bbb]" />
                                                        :
                                                        <svg onClick={() => setShowPassword(!showPassword)} xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
                                                            <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                                                        </svg>
                                                }
                                            </div>
                                            {errors.password && <span className="text-red-600">Please Enter a password</span>}
                                        </div>
                                    </div>

                                    {/* Button */}
                                    <div className="mt-6">
                                        <button className=" w-full relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                                            <span className="w-full h-full bg-[#FD4C5C] absolute"></span>
                                            <span className="relative md:px-6 md:py-3 px-3 py-2 transition-all ease-out rounded-md group-hover:bg-opacity-0 duration-400">
                                                <span className="relative text-white md:text-[16px] text-sm">Register</span>
                                            </span>
                                        </button>
                                    </div>

                                    <div className="">
                                        <p className="text-sm mt-4 ">Already have an account?<Link to={`/login`} className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Login</Link></p>
                                    </div>
                                    <p className="mb-8 mt-6 text-sm text-gray-400 text-center">or continue with</p>
                                    <div className="space-x-8 mb-6 flex justify-center">
                                        <button onClick={handleGoogleBtn} type="button"
                                            className="border-none outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30px" className="inline" viewBox="0 0 512 512">
                                                <path fill="#fbbd00"
                                                    d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                                                    data-original="#fbbd00" />
                                                <path fill="#0f9d58"
                                                    d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                                                    data-original="#0f9d58" />
                                                <path fill="#31aa52"
                                                    d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                                                    data-original="#31aa52" />
                                                <path fill="#3c79e6"
                                                    d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                                                    data-original="#3c79e6" />
                                                <path fill="#cf2d48"
                                                    d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                                                    data-original="#cf2d48" />
                                                <path fill="#eb4132"
                                                    d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                                                    data-original="#eb4132" />
                                            </svg>
                                        </button>
                                        <div onClick={handleGithubBtn} className="text-[33px]">
                                            <FaGithub />
                                        </div>
                                        <button type="button"
                                            className="border-none outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30px" fill="#007bff" viewBox="0 0 167.657 167.657">
                                                <path d="M83.829.349C37.532.349 0 37.881 0 84.178c0 41.523 30.222 75.911 69.848 82.57v-65.081H49.626v-23.42h20.222V60.978c0-20.037 12.238-30.956 30.115-30.956 8.562 0 15.92.638 18.056.919v20.944l-12.399.006c-9.72 0-11.594 4.618-11.594 11.397v14.947h23.193l-3.025 23.42H94.026v65.653c41.476-5.048 73.631-40.312 73.631-83.154 0-46.273-37.532-83.805-83.828-83.805z" data-original="#010002"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;