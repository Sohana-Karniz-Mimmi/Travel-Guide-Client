import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
// import { FcSettings } from 'react-icons/fc'
// import { BsFingerprint, BsFillHouseAddFill } from 'react-icons/bs'
// import { GrUserAdmin } from 'react-icons/gr'
// import { MdHomeWork } from 'react-icons/md'
// import { NavLink } from 'react-router-dom'
import { AiOutlineBars } from 'react-icons/ai'
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from 'react-router-dom'
// import ToggleBtn from '../../Shared/Button/ToggleBtn'
import MenuItem from './Menu/MenuItem'
import NormalUser from './Menu/NormalUser'
import useAuth from '../../../Hook/useAuth'
import AdminMenu from './Menu/AdminMenu'
import Guide from './Menu/Guide'
import useRole from './../../../Hook/useRole';
import logo from "../../../assets/images/logo2.png";

const Sidebar = () => {
  const { logOut } = useAuth()
  const navigate = useNavigate();
  const [isActive, setActive] = useState(false)
  // const [toggle, setToggle] = useState(true)
  const [role, isLoading] = useRole()
  console.log(role, isLoading)
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }

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
    <>
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Link to='/'>
              <img
                // className='hidden md:block'
                src={logo}
                alt='logo'
                width='100'
                height='100'
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center mx-auto'>
              <Link to='/'>
                <img
                  // className='hidden md:block'
                  src={logo}
                  alt='logo'
                  width='200'
                  height='200'
                />
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>

            {/*  Menu Items */}
            <nav>
              {/* Statistics */}
              <MenuItem
                label='My Profile'
                address='/dashboard'
                icon={CgProfile}
              />
              {role.role === 'normal_user' && <NormalUser />}
              {role.role === 'tour_guide' && <Guide />}
              {role.role === 'admin' && <AdminMenu />}
            </nav>
          </div>
        </div>

        <div>
          <hr />
          <button
            onClick={handleLogoutBtn}
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5' />

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
 
}

export default Sidebar
