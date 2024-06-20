
import { useParams } from 'react-router-dom';
import CommentSection from './CommentSection';

const posts = [
  // Same posts data as before
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
];

const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
      <p className="text-gray-600 mb-4">by {post.author}</p>
      <p className="mb-6">{post.content}</p>
      <CommentSection postId={post.id} />
    </div>
  );
};

export default PostDetail;
