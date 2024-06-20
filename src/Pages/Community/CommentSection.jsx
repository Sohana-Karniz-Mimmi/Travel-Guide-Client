import { useState } from "react";

const commentsData = [
  { postId: 1, author: 'Alice', content: 'Great post!' },
  { postId: 1, author: 'Bob', content: 'Thanks for the tips.' },
  // Add more comments as needed
];

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState(commentsData.filter(comment => comment.postId === postId));
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, { postId, author: 'Current User', content: newComment }]);
      setNewComment('');
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-4">Comments</h3>
      <div className="space-y-4 mb-6">
        {comments.map((comment, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <p className="font-bold">{comment.author}</p>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          className="w-full p-2 border rounded-lg"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <button type="submit" className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Submit</button>
      </form>
    </div>
  );
};

export default CommentSection;
