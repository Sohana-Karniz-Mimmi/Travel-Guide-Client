import { useMutation } from "@tanstack/react-query";
import useAxiosCommon from "../Hook/useAxiosCommon";
import toast from 'react-hot-toast'

const AddStoryForm = () => {
  const axiosCommon = useAxiosCommon()

  // Tanstack Query for post the data   
  const { mutateAsync } = useMutation({
    mutationFn: async story => {
      const { data } = await axiosCommon.post(`/story`, story)
      return data
    },
    onSuccess: () => {
      console.log('Data Saved Successfully')
      toast.success('Story Added Successfully!')
      //   setLoading(false)
    },
  })

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target
    const title = form.title.value
    const image = form.image.value
    const description = form.content.value

    try {
      const story = {
        title, image, description
      }
      console.table(story)

      //   Post request to server
      await mutateAsync(story)
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    }

  };

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-4">Add a Story</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-2">Title:</label>
          <input
            name="title"
            type="text"
            className="w-full p-2 border border-gray-300 focus:outline-rose-500 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="image" className="block mb-2">Image URL:</label>
          <input
            name="image"
            type="text"
            className="w-full p-2 border border-gray-300 focus:outline-rose-500 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="content" className="block mb-2">Content:</label>
          <textarea
            name="content"
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
