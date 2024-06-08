import { Helmet } from 'react-helmet-async'
import { useQuery } from '@tanstack/react-query'

import LoadingSpinner from '../../../Components/Shared/LoadingSpinner'
import UserDataRow from '../../../Components/Dashboard/TableRows/UserDataRow'
import useAxiosSecure from './../../../Hook/useAxiosSecure';
import { useState } from 'react';
const ManageUsers = () => {
  const axiosSecure = useAxiosSecure()

  /****Use Search and filter****/
  const [filter, setFilter] = useState('')
  const [search, setSearch] = useState('')
  const [searchText, setSearchText] = useState('')

  const handleReset = () => {
    setFilter('')
    setSearch('')
    setSearchText('')
  }

  const handleSearch = e => {
    e.preventDefault()

    setSearch(searchText)
  }

  console.log(search)


  //   Fetch users Data
  const {
    data: users = [], isLoading, refetch, } = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
        const { data } = await axiosSecure(`/users`)
        // const { data } = await axiosSecure(`/all-users?filter=${filter}&search=${search}`)
        return data
      },
    })

  console.log(users)
  if (isLoading) return <LoadingSpinner />
  return (
    <>
      <div className='container mx-auto px-4 sm:px-8'>
        <Helmet>
          <title>Manage Users</title>
        </Helmet>
        <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
          <div>
            <select
              onChange={e => {
                setFilter(e.target.value)
              }}
              value={filter}
              name='category'
              id='category'
              className='border p-4 rounded-lg'
            >
              <option value=''>Filter By Category</option>
              <option value='Web Development'>Web Development</option>
              <option value='Graphics Design'>Graphics Design</option>
              <option value='Digital Marketing'>Digital Marketing</option>
            </select>
          </div>

          <form onSubmit={handleSearch}>
            <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
              <input
                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
                onChange={e => setSearchText(e.target.value)}
                value={searchText}
                name='search'
                placeholder='Enter Job Title'
                aria-label='Enter Job Title'
              />

              <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                Search
              </button>
            </div>
          </form>
          <button onClick={handleReset} className='btn'>
            Reset
          </button>
        </div>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Email
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Role
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Status
                    </th>

                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <UserDataRow
                      key={user?._id}
                      user={user}
                      refetch={refetch}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ManageUsers
