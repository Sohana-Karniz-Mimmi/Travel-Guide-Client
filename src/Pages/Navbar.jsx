import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import './navbar.css'
import logo from "../assets/images/logo/logo3.png";
import { Tooltip as ReactTooltip } from 'react-tooltip'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    // const [theme, setTheme] = useState(() => {
    //     // Initialize theme from localStorage or default to 'light'
    //     return localStorage.getItem('theme') || 'light';
    // });

    // const handleToggle = (e) => {
    //     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    // };

    // useEffect(() => {
    //     // Update localStorage when theme changes
    //     localStorage.setItem('theme', theme);
    //     // Update data-theme attribute
    //     document.documentElement.setAttribute('data-theme', theme);
    // }, [theme]);


    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);


    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const navLinks = <>
        <li> <NavLink className={({ isActive }) =>
            isActive ? 'p-0 pb-1 rounded-none text-[16px] border-b-2 font-bold mt-2 border-green-600' : 'font-bold p-0 hover:pb-1 hover:rounded-none text-[16px] hover:border-b-2 border-green-600 mt-2'
        } to={'/'}> Home </NavLink> </li>

        <li> <NavLink className={({ isActive }) =>
            isActive ? 'p-0 pb-1 rounded-none text-[16px] border-b-2 font-bold mt-2 border-green-600'
                :
                'font-bold p-0 hover:pb-1 hover:rounded-none text-[16px] hover:border-b-2 mt-2 border-green-600'
        } to={'/allTourists'}>All Tourists Spot </NavLink> </li>

        {user && <>

            <li> <NavLink className={({ isActive }) =>
                isActive ? 'p-0 pb-1 rounded-none text-[16px] border-b-2 font-bold mt-2 border-green-600'
                    :
                    'font-bold p-0 hover:pb-1 hover:rounded-none text-[16px] hover:border-b-2 mt-2 border-green-600'
            } to={'/addTourists'}> Add Tourists Spot </NavLink> </li>


            <li> <NavLink className={({ isActive }) =>
                isActive ? 'p-0 pb-1 rounded-none text-[16px] border-b-2 font-bold mt-2 border-green-600'
                    :
                    'font-bold p-0 hover:pb-1 hover:rounded-none text-[16px] hover:border-b-2 mt-2 border-green-600'
            } to={'/myList'}> My List </NavLink> </li>

        </>}


        {/* <li> <NavLink className={({ isActive }) =>
            isActive ? 'p-0 pb-1 rounded-none text-[16px] border-b-2 font-bold mt-2 border-green-600'
                :
                'font-bold p-0 hover:pb-1 hover:rounded-none text-[16px] hover:border-b-2 mt-2 border-green-600'
        } to={'/about'}> About Us</NavLink> </li> */}
    </>


    const handleLogoutBtn = () => {
        logOut()
        navigate('/')
            .then(() => {
                console.log("Sing Out Successfully");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (

        <div className="barlow-regular navbar p-0 md:py-3 py-5 container mx-auto md:px-10 px-1">
            <div className="navbar-start">

                <details className="dropdown">
                    <summary className="m-1 btn bg-transparent border-none hover:bg-transparent lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </summary>
                    <ul className="p-2 shadow dropdown-content z-50 bg-white rounded-box w-52 text-black space-y-2">
                        {
                            navLinks
                        }
                    </ul>
                </details>



                {/* <img className="w-full h-full" src="" alt="" /> */}
                <Link to={'/'} className="font-bold text-lg md:text-2xl gap-3 flex items-center"> <img className="md:w-12 md:h-10 w-7 h-7 relative" src={logo} alt="" /><span className="">Turio</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal space-x-5 ">
                    {
                        navLinks
                    }
                </ul>
            </div>

            {/* NavEnds */}
            <div className="navbar-end">
                <div className="md:mr-5 mr-2 mt-1.5">
                    <label onMouseEnter={() => setIsOpen(true)}
                        onMouseLeave={() => setIsOpen(false)}
                        onClick={() => setIsOpen(false)} id="darkMode" className="swap swap-rotate">

                        <ReactTooltip
                            anchorId="darkMode"
                            place="bottom"
                            content="Switch between dark and light mode"
                            anchorSelect="#clickable"
                            isOpen={isOpen}
                        />

                        {/* this hidden checkbox controls the state */}
                        <input onChange={handleToggle}
                            checked={theme == "light" ? false : true} type="checkbox"/>


                        {/* sun icon */}
                        <svg className=" swap-off fill-current md:w-9 md:h-9 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg className="swap-on fill-current md:w-9 md:h-9 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>



                    </label>
                </div>
                {
                    user ? <>


                        <ul className="mainMenuItem relative">
                            <li>
                                <div className="btn btn-ghost btn-circle avatar text-white">
                                    <div className=" w-12 rounded-full ">
                                        <img alt={"User"} src={user.photoURL} />
                                    </div>
                                </div>

                                <ul className="subMenuItem absolute bg-white right-[-40px] p-4 z-10 w-[150px] border-t-2 border-[#ddd]">
                                    <li>
                                        <a className="text-black">{user.displayName}</a>
                                    </li>
                                    <Link to={`/`} onClick={handleLogoutBtn} className="w-full mt-2 relative inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                                        <span className="w-full h-full bg-green-600 absolute"></span>
                                        <span className="relative md:px-3 md:py-1.5 px-3 py-1.5 transition-all ease-out rounded-md group-hover:bg-opacity-0 duration-400">
                                            <span className="relative text-white md:text-[16px] text-sm">Log Out</span>
                                        </span>
                                    </Link>
                                </ul>

                            </li>
                        </ul>

                    </>
                        :
                        <>
                            <Link to={`/login`} className="md:mr-2 mr-1 relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                                <span className="w-full h-full bg-green-600 absolute">

                                </span>
                                <span className="relative md:px-6 md:py-2 px-1 transition-all ease-out  rounded-md group-hover:bg-opacity-0 duration-400">
                                    <span className="relative text-white md:text-[16px] text-sm">Login</span>
                                </span>
                            </Link>
                            <Link to={`/register`} className=" relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                                <span className="w-full h-full bg-green-600 absolute"></span>
                                <span className="relative md:px-6 md:py-2 px-1 transition-all ease-out rounded-md group-hover:bg-opacity-0 duration-400">
                                    <span className="relative text-white md:text-[16px] text-sm">Register</span>
                                </span>
                            </Link>
                        </>
                }

            </div>
        </div>
    );
};


export default Navbar;