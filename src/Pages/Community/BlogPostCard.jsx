import { FaRegComments } from "react-icons/fa";
import { SlNotebook } from "react-icons/sl";
import { CiBookmarkPlus } from "react-icons/ci";

const BlogPostCard = () => {
    return (
        <>
            <div className="bg-white border border-gray-300 rounded-2xl shadow-md max-w-[800px] w-full overflow-hidden p-8">
                <div className="flex items-center">
                    <img
                        src="https://cdn.hashnode.com/res/hashnode/image/upload/v1691952187128/dff5bb42-aa67-478c-89c4-9270c15db75f.jpeg?w=124&h=124&fit=crop&crop=faces&auto=compress,format&format=webp"
                        alt="Author"
                        className="rounded-full w-12 h-12 mr-4"
                    />
                    <div className="flex flex-col">
                        <span className="font-bold text-gray-800">Arbash Hussain</span>
                        <span className="text-gray-600 text-sm">Jun 19, 2024</span>
                    </div>
                    <span className="ml-auto bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-xs cursor-pointer">
                        Featured
                    </span>
                </div>
                <div className="flex mt-3 mb-2">
                    <div className="pr-5 flex flex-col">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            Exploring the Hidden Gems of Bali
                        </h2>
                        <p className="text-slate-500 text-lg">
                            Discover the less-known but beautiful locations in Bali that you must visit. Learn about the local culture, food, and breathtaking landscapes.
                        </p>
                    </div>
                    <img
                        src="https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/SGcFBTuSSU4/upload/661d3900ce9c411e2c4e3e54202bc53e.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
                        alt="Bali"
                        className="w-44 h-28 object-cover rounded-md"
                    />
                </div>
                <div className="flex items-center font-semibold text-slate-500 border-gray-300">
                    <div className="flex items-center cursor-pointer mr-6">
                        <FaRegComments className="w-4 h-4 mr-2" />
                        Discuss
                    </div>
                    <div className="flex items-center cursor-pointer mr-6">
                        13 likes
                    </div>
                    <div className="ml-auto flex items-center cursor-pointer">
                        <div className="flex items-center mr-4">
                            <SlNotebook className="w-3.5 h-3.5 mr-1" />
                            Travel
                        </div>
                        <div className="flex items-center cursor-pointer">
                            <CiBookmarkPlus className="w-5 h-5" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white border border-gray-300 rounded-2xl shadow-md max-w-[800px] w-full overflow-hidden p-8">
                <div className="flex items-center">
                    <img
                        src="https://cdn.hashnode.com/res/hashnode/image/upload/v1708966231934/UCDnvZ7N8.jpg?w=124&h=124&fit=crop&crop=faces&auto=compress,format&format=webp"
                        alt="Author"
                        className="rounded-full w-12 h-12 mr-4"
                    />
                    <div className="flex flex-col">
                        <span className="font-bold text-gray-800">Jonathan Gelin</span>
                        <span className="text-gray-600 text-sm">Jun 19, 2024</span>
                    </div>
                    <span className="ml-auto bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-xs cursor-pointer">
                        Featured
                    </span>
                </div>
                <div className="flex mt-3 mb-2">
                    <div className="pr-5 flex flex-col">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            The Ultimate Guide to Backpacking in South America
                        </h2>
                        <p className="text-slate-500 text-lg">
                            An in-depth guide for backpackers exploring South America. Tips on budget travel, must-see destinations, and safety precautions.
                        </p>
                    </div>
                    <img
                        src="https://cdn.hashnode.com/res/hashnode/image/upload/v1718740608019/a69281f6-379a-449f-a98e-fc6f3180c1e0.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
                        alt="Backpacking"
                        className="w-44 h-28 object-cover rounded-md"
                    />
                </div>
                <div className="flex items-center font-semibold text-slate-500 border-gray-300">
                    <div className="flex items-center cursor-pointer mr-6">
                        <FaRegComments className="w-4 h-4 mr-2" />
                        Discuss
                    </div>
                    <div className="flex items-center cursor-pointer mr-6">
                        13 likes
                    </div>
                    <div className="flex items-center cursor-pointer">
                        75 reads
                    </div>
                    <div className="ml-auto flex items-center cursor-pointer">
                        <div className="flex items-center mr-4">
                            <SlNotebook className="w-3.5 h-3.5 mr-1" />
                            Backpacking
                        </div>
                        <div className="flex items-center cursor-pointer">
                            <CiBookmarkPlus className="w-5 h-5" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogPostCard;
