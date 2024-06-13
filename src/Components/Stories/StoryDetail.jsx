import { useParams } from 'react-router-dom';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from 'react-share';

const stories = [
  {
    id: 1,
    title: 'Amazing Beach Trip',
    description: 'An unforgettable trip to the sunny beaches of California.',
    image: 'https://www.ahsanmanzilticket.gov.bd/images/NMB.jpg',
  },
  {
    id: 2,
    title: 'Mountain Adventure',
    description: 'A thrilling adventure in the Rocky Mountains.',
    image: 'https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/blogzB8BGDn5J45LisskNSi5r3F07ohqWXZ4.png',
  },
  {
    id: 3,
    title: 'City Exploration',
    description: 'Exploring the vibrant city life of New York.',
    image: 'https://a.cdn-hotels.com/gdcs/production99/d1417/4da30a77-ecb2-4ead-a771-e61fac2a73dd.jpg?impolicy=fcrop&w=800&h=533&q=medium',
  },
  {
    id: 4,
    title: 'Historical Journey',
    description: 'A journey through the historical landmarks of Rome.',
    image: 'https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/blogzB8BGDn5J45LisskNSi5r3F07ohqWXZ4.png',
  },
];

const StoryDetail = () => {
  const shareUrl = `https://job-portal-3285e.web.app/`;
  // const shareUrl = `${window.location.origin}${location.pathname}`;
  const { id } = useParams();
  const story = stories.find((story) => story.id === parseInt(id));

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
