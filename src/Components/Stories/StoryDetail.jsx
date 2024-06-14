import { useParams } from 'react-router-dom';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from 'react-share';
import useAxiosCommon from '../../Hook/useAxiosCommon';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../Shared/LoadingSpinner';


const StoryDetail = () => {

  const { id } = useParams()
  const axiosCommon = useAxiosCommon()

  const {
    data: story = {}, isLoading,
  } = useQuery({
    queryKey: ['story', id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/stories/${id}`)

      return data
    },
  })

  console.log(story);
  
  const shareUrl = `https://job-portal-3285e.web.app/`;
  // const shareUrl = `${window.location.origin}${location.pathname}`;

  if (isLoading) return <LoadingSpinner />

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <img src={story.image} alt={story.title} className="w-full h-64 object-cover rounded mb-4" />
      <h2 className="text-3xl font-bold mb-4">{story.title}</h2>
      <p className="mb-6">{story.description}</p>
      <div className="flex space-x-1.5">
      <FacebookShareButton url={shareUrl} quote={story.title} className="focus:outline-none">
        <FacebookIcon size={32} round className="transition-transform transform hover:scale-110" />
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl} quote={story.title}  className="focus:outline-none">
        <TwitterIcon size={32} round className="transition-transform transform hover:scale-110" />
      </TwitterShareButton>
      <LinkedinShareButton url={shareUrl} quote={story.title}className="focus:outline-none">
        <LinkedinIcon size={32} round className="transition-transform transform hover:scale-110" />
      </LinkedinShareButton>
      </div>
    </div>
  );
};

export default StoryDetail;
