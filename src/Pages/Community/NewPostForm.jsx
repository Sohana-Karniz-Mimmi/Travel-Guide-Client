import { useState } from "react";

const NewPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle post submission logic here
    console.log('New Post:', { title, content });
    setTitle('');
    setContent('');
  };

  return (
    <div className="mt-8 bg-white border border-gray-300 rounded-2xl shadow-md max-w-[800px] w-full overflow-hidden p-8">
      <h2 className="text-2xl font-bold mb-4">Create a New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          className="w-full p-2 border rounded-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post Title"
        />
        <textarea
          className="w-full p-2 border rounded-lg"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Post Content"
        />
        <button type="submit" className="px-4 py-2 bg-[#FD4C5C] text-white rounded hover:bg-[#FF0143]">Submit</button>
      </form>
    </div>
  );
};

export default NewPostForm;
