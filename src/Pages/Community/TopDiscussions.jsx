import { FaRegComments } from "react-icons/fa";
import { PiArrowBendDownRight } from "react-icons/pi";

const discussions = [
    {
        title: 'Step-by-Step Guide to Building Your Own Notes App',
        author: 'ZUNAID AHAMMED',
        comment: 'Hello brother, I went through your GitHub repo...',
        authorImg: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1707678584203/bba791c5-703b-463e-b1c6-8194e0f8b099.jpeg?w=64&h=64&fit=crop&crop=faces&auto=compress,format&format=webp',
        replies: 2,
        likes: 31,
    },
    {
        title: 'Choosing the Right Programming Language for DSA: Finding Your...',
        author: 'Abhishek Tyagi',
        comment: 'Great content really helped in clearing some of the doubts...',
        authorImg: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1692697664612/15c76099-12f9-4591-a543-f39b3af385ad.jpeg?w=64&h=64&fit=crop&crop=faces&auto=compress,format&format=webp',
        replies: 8,
        likes: 19,
    },
    {
        title: 'To Dict Or Not To Dict: Comparing Data Structure Sizes',
        author: 'Richard Careaga',
        comment: 'Great walkthrough on custom data structures. I have...',
        authorImg: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1685904144525/db84146b-ea36-4602-9d4d-e57311f4c0be.jpeg?w=64&h=64&fit=crop&crop=faces&auto=compress,format&format=webp',
        replies: 4,
        likes: 44,
    },
];

const DiscussionCard = ({ title, author, comment, authorImg, replies, likes }) => {
    return (
        <div className="flex items-center p-4 bg-white border border-gray-300 rounded-2xl shadow-md">
            <div className="flex-grow">
                <h3 className="text-gray-800 text-lg font-semibold mb-1">{title}</h3>
                <p className="text-gray-600 flex items-center text-sm mb-2">
                <PiArrowBendDownRight className="mr-2" />
                    <img src={authorImg} alt={author} className="rounded-full w-7 h-7 mr-3" />
                    <span className="font-bold mr-2">{author}</span> {comment}
                </p>
            </div>
            <div className="flex text-gray-500 text-base">
                <div className="flex items-center mr-4 cursor-pointer">
                    <FaRegComments className="w-5 h-5 mr-1" />
                    {replies}
                </div>
                <div className="flex items-center cursor-pointer">
                    {likes} likes
                </div>
            </div>
        </div>
    );
};

const TopDiscussions = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 max-w-[800px] w-full">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-gray-800 text-xl font-semibold">Top Discussions</h2>
                <a href="#all" className="text-blue-500 text-sm">See all discussions →</a>
            </div>
            <div className="space-y-4">
                {discussions.map((discussion, index) => (
                    <DiscussionCard key={index} {...discussion} />
                ))}
            </div>
        </div>
    );
};

export default TopDiscussions;
