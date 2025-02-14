import useAuth from './useAuth'
import useAxiosSecure from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
const useGuideName = () => {
  const { user, loading } = useAuth()
  const axiosSecure = useAxiosSecure()

  const { data: guideName = '', isLoading } = useQuery({
    queryKey: ['guideName', user?.displayName],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure(`/all/users/name/${user?.displayName}`)
      return data
    },
  })

  //   Fetch user info using logged in user email

  return [guideName, isLoading]
}

export default useGuideName
