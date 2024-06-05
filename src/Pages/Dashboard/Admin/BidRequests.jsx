import { useContext} from "react";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const BidRequests = () => {

  const { user } = useContext(AuthContext)
  const QueryClient = useQueryClient()


  // Tanstack Query
  const { data: bidRequests = [], isLoading } = useQuery({
    queryFn: () => getData(),
    queryKey: ['bidRequests', user?.email],
  })
  console.log(bidRequests, isLoading);

  // const [bidRequests, setBidRequests] = useState([]);
  // useEffect(() => {
  //   getData()
  // }, [user])

  const getData = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/bid-requests/${user?.email}`)
    return data;
  }


  const { mutateAsync } = useMutation({
    mutationFn: async ({ id, status }) => {
      const { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/bid/${id}`, { status })
      console.log(data)
      return data
    },
    onSuccess: () => {
      console.log('Wow, data updated')
      toast.success('Updated')
      // refresh ui for latest data
      // refetch()

      // Kothin
      QueryClient.invalidateQueries({ queryKey: ['bidRequests'] })
    },
  })


  // Handle Status
  const handleStatus = async (id, prevStatus, status) => {
    if (prevStatus === status) return console.log('Sry vai.. hobena')
      await mutateAsync({ id, status })
    console.log(id, prevStatus, status);
    
    // getData();
  }

  // console.log(bidRequests);

  if (isLoading) return <p>Data is still loading......</p>
  return (
    <section className='container px-4 mx-auto pt-12'>
      <div className='flex items-center gap-x-3'>
        <h2 className='text-lg font-medium text-gray-800 '>Bid Requests</h2>

        <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
          {bidRequests.length} Requests
        </span>
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
                        <span>Title</span>
                      </div>
                    </th>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Email</span>
                      </div>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <span>Deadline</span>
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
                      Category
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      Status
                    </th>

                    <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200 '>
                  {
                    bidRequests?.map(bidRequest => <tr key={bidRequest._id}>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {bidRequest.job_title}
                      </td>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {bidRequest.email}
                      </td>

                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {new Date(bidRequest.deadline).toLocaleDateString()}
                      </td>

                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        ${bidRequest.price}
                      </td>
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        <div className='flex items-center gap-x-2'>
                          <p
                            className={`px-3 py-1 rounded-full 
                            text-xs ${bidRequest.category === 'Web Development' && 'text-blue-500 bg-blue-100/60'} ${bidRequest.category === 'Digital Marketing' && 'text-pink-500 bg-pink-100/60'} ${bidRequest.category === 'Graphics Design' && 'text-emerald-500 bg-emerald-100/60'}
                            `}
                          >
                            {bidRequest.category}
                          </p>
                        </div>
                      </td>
                      <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                        <div
                          className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${bidRequest.status === 'Pending' &&
                            'bg-yellow-100/60 text-yellow-500'
                            } ${bidRequest.status === 'In Progress' &&
                            'bg-blue-100/60 text-blue-500'
                            } ${bidRequest.status === 'Complete' &&
                            'bg-emerald-100/60 text-emerald-500'
                            } ${bidRequest.status === 'Rejected' &&
                            'bg-red-100/60 text-red-500'
                            } `}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${bidRequest.status === 'Pending' && 'bg-yellow-500'
                              } ${bidRequest.status === 'In Progress' && 'bg-blue-500'
                              } ${bidRequest.status === 'Complete' && 'bg-green-500'} ${bidRequest.status === 'Rejected' && 'bg-red-500'
                              }  `}
                          ></span>
                          <h2 className='text-sm font-normal '>{bidRequest.status}</h2>
                        </div>
                      </td>
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        <div className='flex items-center gap-x-6'>
                          {/* Accept Button: In Progress */}
                          <button onClick={() =>
                            handleStatus(bidRequest._id, bidRequest.status, 'In Progress')
                          }
                            disabled={bidRequest.status === 'Complete'} className='text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              className='w-5 h-5'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='m4.5 12.75 6 6 9-13.5'
                              />
                            </svg>
                          </button>

                          {/* Reject Button */}
                          <button onClick={() =>
                            handleStatus(bidRequest._id, bidRequest.status, 'Rejected')}
                            disabled={bidRequest.status === 'Complete'}
                            className='text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              className='w-5 h-5'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636'
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>)
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BidRequests
