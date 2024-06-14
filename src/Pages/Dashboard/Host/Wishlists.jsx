import { Helmet } from 'react-helmet-async'
import { useMutation, useQuery } from '@tanstack/react-query'
import WishlistDataRows from '../../../Components/Dashboard/TableRows/WishlistDataRows'
import toast from 'react-hot-toast'
import useAuth from '../../../Hook/useAuth'
import useAxiosSecure from '../../../Hook/useAxiosSecure'
import LoadingSpinner from '../../../Components/Shared/LoadingSpinner'
const Wishlists = () => {
  const { user } = useAuth()
  const axiosSecure = useAxiosSecure()
  //   Fetch Wishlist Data
  const {
    data: wishlists = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['wishlists', user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/wishlist/${user?.email}`)

      return data
    },
  })

  console.log(wishlists);

  //   delete
  const { mutateAsync } = useMutation({
    mutationFn: async id => {
      const { data } = await axiosSecure.delete(`/wishlist/${id}`)
      return data
    },
    onSuccess: data => {
      console.log(data)
      refetch()
      toast.success('Successfully deleted.')
    },
  })

  //  Handle Delete
  const handleDelete = async id => {
    console.log(id)
    try {
      await mutateAsync(id)
    } catch (err) {
      console.log(err)
    }
  }
  if (isLoading) return <LoadingSpinner />
  return (
    <>
      <Helmet>
        <title>My Listings</title>
      </Helmet>

      <div className='container mx-auto px-4 sm:px-8'>
        <div className='flex items-center pt-8 gap-x-3'>
          <h2 className='text-lg font-medium text-gray-800 '>My Wishlist</h2>
        </div>
        <div className='pb-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Photo
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Title
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Package Name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Price
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Delete
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Room row data */}

                  {wishlists.map(wishlist => (
                    <WishlistDataRows
                      key={wishlist._id}
                      wishlist={wishlist}
                      handleDelete={handleDelete}
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

export default Wishlists
