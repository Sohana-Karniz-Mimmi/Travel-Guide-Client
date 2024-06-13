import { Link } from 'react-router-dom';

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

const AllStories = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6">All Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stories.map((story) => (
          <div key={story.id} className="border p-4 rounded-lg">
            <img src={story.image} alt={story.title} className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-bold mb-2">{story.title}</h3>
            <p className="mb-4">{story.description}</p>
            <Link to={`/stories/${story.id}`} className="text-blue-500 hover:underline">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllStories;
