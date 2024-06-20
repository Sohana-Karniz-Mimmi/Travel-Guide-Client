
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'Best Beaches in California',
    author: 'John Doe',
    content: 'Check out these amazing beaches...',
  },
  {
    id: 2,
    title: 'Tips for Hiking the Rockies',
    author: 'Jane Smith',
    content: 'Here are some tips for your hiking trip...',
  },
  // Add more posts as needed
];

const PostList = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="p-4 border rounded-lg">
            <h3 className="text-xl font-bold">{post.title}</h3>
            <p className="text-gray-600">by {post.author}</p>
            <p className="mt-2">{post.content}</p>
            <Link to={`/posts/${post.id}`} className="text-blue-500 hover:underline">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
