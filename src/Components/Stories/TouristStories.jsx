import { Link } from 'react-router-dom';
import useAxiosCommon from '../../Hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';


const TouristStories = () => {

  const axiosCommon = useAxiosCommon()

  const {
    data: stories = [],
  } = useQuery({
    queryKey: ['stories'],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/stories`)

      return data
    },
  })

  console.log(stories);


  return (
    <div className="max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      {/* <h2 className="text-3xl font-bold mb-6 text-center ">Tourist Stories</h2> */}
      <div className='text-center py-6'>
        <i className='text-[#FD4C5C]'>Stories</i>
        <h2 className='mx-auto pb-2 border-b w-64 text-3xl font-semibold  uppercase'>Tourist Stories</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stories.slice(0, 4).map((story) => (
          <div key={story.id} className="border p-4 rounded-lg">
            <img src={story.image} alt={story.title} className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-bold mb-2">{story.title}</h3>
            <p className="mb-4">{story.description.slice(0, 50)}</p>
            <Link to={`/stories/${story._id}`} className="text-blue-500 hover:underline">Read More</Link>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/all-stories" className="px-4 py-2 bg-[#FD4C5C] text-white rounded hover:bg-[#FF0143]">All Stories</Link>
      </div>
    </div>
  );
};

export default TouristStories;
