import { useState } from "react";

const AddStoryForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (send to server or display locally)
    console.log(`Title: ${title}, Content: ${content}`);
    // Optionally reset the form
    setTitle('');
    setContent('');
  };

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-4">Add a Story</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-2">Title:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 focus:outline-rose-500 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="content" className="block mb-2">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border border-gray-300 focus:outline-rose-500 rounded"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-[#FC4C5C] text-white rounded hover:bg-[#FF0143]"
        >
          Submit Story
        </button>
      </form>
    </div>
  );
};

export default AddStoryForm;
