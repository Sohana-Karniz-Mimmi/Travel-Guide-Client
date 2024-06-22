import PropTypes from 'prop-types'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import useAuth from '../../../Hook/useAuth'
import useAxiosSecure from '../../../Hook/useAxiosSecure'
import UserUpdateModal from '../../Modal/UserUpdateModal'
import AdminRoleUpdateModal from '../../Modal/AdminRoleUpdateModal'

const UserDataRow = ({ user, refetch }) => {
  const { user: loggedInUser } = useAuth()
  const axiosSecure = useAxiosSecure()

  const { mutateAsync } = useMutation({
    mutationFn: async role => {
      const { data } = await axiosSecure.patch(`/users/update/${user?.email}`, role)
      return data
    },
    onSuccess: data => {
      refetch()
      console.log(data)
      toast.success('User role updated successfully!')
    },
    onError: error => {
      toast.error(error.message)
    },
  })

  const handleRoleChange = async (newRole) => {
    if (loggedInUser.email === user.email) {
      toast.error('Action Not Allowed')
      return
    }

    const userRole = {
      role: newRole,
      status: 'Verified',
    }

    try {
      await mutateAsync(userRole)
    } catch (err) {
      toast.error(err.message)
    }
  }

  // for modal state management
  const [isUserModalOpen, setIsUserModalOpen] = useState(false)
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false)

  const closeModal = () => {
    setIsUserModalOpen(false)
    setIsAdminModalOpen(false)
  }

  return (
    <tr>
      {/* <td className='pr-5 pl-10 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{indx + 1}</p>
      </td> */}
      <td className='pr-5 pl-10 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.name}</p>
      </td>
      <td className='pr-5 pl-10 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
      </td>
      <td className='pr-5 pl-10 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.role}</p>
      </td>
      <td className='pr-5 pl-10 py-5 border-b border-gray-200 bg-white text-sm'>
        {user?.status ? (
          <p className={`${user.status === 'Verified' ? 'text-green-500' : 'text-yellow-500'} whitespace-no-wrap`}>
            {user.status}
          </p>
        ) : (
          <p className='text-red-500 whitespace-no-wrap'>Unavailable</p>
        )}
      </td>
      <td className='pr-5 pl-10 py-5 border-b border-gray-200 bg-white text-sm'>
        <button
          onClick={() => setIsAdminModalOpen(true)}
          className='relative cursor-pointer inline-block px-3 py-1 font-medium text-green-600 leading-tight'
        >
          <span aria-hidden='true' className='absolute inset-0 bg-emerald-100 opacity-50 rounded-full'></span>
          <span className='relative'>Make Admin</span>
        </button>
        <AdminRoleUpdateModal
          isOpen={isAdminModalOpen}
          closeModal={closeModal}
          handleRoleChange={() => handleRoleChange('admin')}
        />
        <button
          onClick={() => setIsUserModalOpen(true)}
          className='relative cursor-pointer inline-block px-3 py-1 font-medium text-blue-600 leading-tight ml-3'
        >
          <span aria-hidden='true' className='absolute inset-0 bg-blue-100 opacity-50 rounded-full'></span>
          <span className='relative'>Make Tour Guide</span>
        </button>
        <UserUpdateModal
          isOpen={isUserModalOpen}
          closeModal={closeModal}
          handleRoleChange={() => handleRoleChange('tour_guide')}
        />
      </td>
    </tr>
  )
}

UserDataRow.propTypes = {
  user: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
  indx: PropTypes.node.isRequired,
}

export default UserDataRow
