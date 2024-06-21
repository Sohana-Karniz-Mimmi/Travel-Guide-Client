import { Link } from 'react-router-dom';
import useAxiosCommon from '../../Hook/useAxiosCommon';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../Shared/LoadingSpinner';
import ViewBanner from '../ViewBanner';


const AllStories = () => {

  const axiosCommon = useAxiosCommon()

  const {
    data: stories = [], isLoading
  } = useQuery({
    queryKey: ['stories'],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/stories`)

      return data
    },
  })

  console.log(stories)

  if (isLoading) return <LoadingSpinner />

  return (

    <>

      <ViewBanner name={'All Stories'}></ViewBanner>

      <div className="max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story) => (
            <div key={story.id} className="border p-4 rounded-lg">
              <img src={story.image} alt={story.title} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-bold mb-2">{story.title}</h3>
              <p className="mb-4">{story.description.slice(0, 57)}</p>
              <Link to={`/stories/${story._id}`} className="text-blue-500 hover:underline">Read More</Link>
            </div>
          ))}
        </div>
      </div>
    </>

  );
};

export default AllStories;
