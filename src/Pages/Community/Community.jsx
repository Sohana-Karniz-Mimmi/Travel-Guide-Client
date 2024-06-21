import ViewBanner from "../../Components/ViewBanner";
// import CommunityPage from "./CommunityPage";
import { PiUserCirclePlusThin } from "react-icons/pi";
import { BsBoxArrowUpRight } from "react-icons/bs";
import BlogPostCard from "./BlogPostCard";
import Container from "../../Components/Shared/Container";
import TopDiscussions from "./TopDiscussions";
// import PostList from './PostList';
import NewPostForm from './NewPostForm';

const Community = () => {
    return (
        <div className="">
            <div>
                <ViewBanner name={'Community'}></ViewBanner>
            </div>

            <section className="bg-[#f9f9f9] text-gray-800 py-16">
                <Container>
                    {/* <CommunityPage></CommunityPage> */}
                    <div className="container mx-auto">
                        <div className="md:flex gap-8">

                            {/* Left Site */}
                            <div className="space-y-8">
                                <BlogPostCard></BlogPostCard>
                                <TopDiscussions></TopDiscussions>
                            </div>


                            {/* Right Site */}
                            <div className="flex-1">
                                <div className="bg-white rounded-xl mb-7">
                                    <div className="border p-6 rounded-xl">
                                        <h2 className="text-slate-800 font-semibold text-xl mb-4">
                                            Top commenters this week
                                        </h2>

                                        <div className="flex items-center justify-between mb-4 pr-1.5">
                                            <div className="flex gap-4 items-center">
                                                <div className="avatar">
                                                    <div className="w-10 rounded-full cursor-pointer  ">
                                                        <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1715227661087/101f22fa-25fe-4848-b736-8efcebe2f8d8.jpeg" />
                                                    </div>
                                                </div>
                                                <h2 className="text-[16px] font-semibold hover:text-[#FD4C5C] cursor-pointer pb-1 text-slate-600">Priya Raimagiya</h2>
                                            </div>
                                            <PiUserCirclePlusThin title="Follow" className="mb-1.5 text-[22px] text-slate-600 cursor-pointer " />
                                        </div>
                                        <div className="flex items-center justify-between mb-4 pr-1.5">
                                            <div className="flex gap-4 items-center">
                                                <div className="avatar">
                                                    <div className="w-10 rounded-full cursor-pointer  ">
                                                        <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1645464332466/IynS2q6H6.jpeg" />
                                                    </div>
                                                </div>
                                                <h2 className="text-[16px] font-semibold hover:text-[#FD4C5C] cursor-pointer pb-1 text-slate-600">Tapas Adhikary</h2>
                                            </div>
                                            <PiUserCirclePlusThin title="Follow" className="mb-1.5 text-[22px] text-slate-600 cursor-pointer  " />
                                        </div>
                                        <div className="flex items-center justify-between mb-4 pr-1.5">
                                            <div className="flex gap-4 items-center">
                                                <div className="avatar">
                                                    <div className="w-10 rounded-full cursor-pointer  ">
                                                        <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1692684885226/63d841ca-2e0a-4196-9565-32772935b549.jpeg" />
                                                    </div>
                                                </div>
                                                <h2 className="text-[16px] font-semibold hover:text-[#FD4C5C] cursor-pointer pb-1 text-slate-600">ajit gupta</h2>
                                            </div>
                                            <PiUserCirclePlusThin title="Follow" className="mb-1.5 text-[22px] text-slate-600 cursor-pointer  " />
                                        </div>
                                        <div className="flex items-center justify-between mb-4 pr-1.5">
                                            <div className="flex gap-4 items-center">
                                                <div className="avatar">
                                                    <div className="w-10 rounded-full cursor-pointer  ">
                                                        <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1718555519126/35320e96-2a71-48ac-9faf-136f59a970ff.png" />
                                                    </div>
                                                </div>
                                                <h2 className="text-[16px] font-semibold hover:text-[#FD4C5C] cursor-pointer pb-1 text-slate-600">Doofy2007</h2>
                                            </div>
                                            <PiUserCirclePlusThin title="Follow" className="mb-1.5 text-[22px] text-slate-600 cursor-pointer  " />
                                        </div>
                                        <div className="flex items-center justify-between mb-4 pr-1.5">
                                            <div className="flex gap-4 items-center">
                                                <div className="avatar">
                                                    <div className="w-10 rounded-full cursor-pointer  ">
                                                        <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1718576026879/15063324-95fd-49e6-9b6b-42bc50f1b532.png" />
                                                    </div>
                                                </div>
                                                <h2 className="text-[16px] font-semibold hover:text-[#FD4C5C] cursor-pointer pb-1 text-slate-600">Mr ironcg</h2>
                                            </div>
                                            <PiUserCirclePlusThin title="Follow" className="mb-1.5 text-[22px] text-slate-600 cursor-pointer  " />
                                        </div>

                                    </div>
                                </div>

                                <div className="bg-white rounded-lg">
                                    <div className="border p-8 rounded-lg">

                                        <div className="flex justify-between items-center gap-4 mb-3">
                                            <h2 className="text-xl text-slate-600 font-semibold pb-1">Team Blogs</h2>
                                            <p className="text-[13px] bg-green-500 text-white px-1 m-0 rounded ">New</p>
                                            <p className="text-primary flex gap-3 items-center">Learn More
                                                <BsBoxArrowUpRight className="text-lg" />
                                            </p>
                                        </div>
                                        <p className="mb-3 text-lg text-slate-600">An end-to-end blogging platform for devtools, engineering, and open-source teams.</p>

                                        <button className='btn rounded-full w-full mt-5 bg-transparent hover:bg-[rgb(241 245 249)] hover:bg-opacity-60 border border-slate-200 hover:border-slate-200 text-slate-600 text-base font-medium'> Create a team blog </button>


                                    </div>
                                </div>

                            </div>
                        </div>
                        <NewPostForm />
                    </div>

                    <div>
                        {/* <PostList /> */}
                    </div>

                </Container>
            </section>



        </div>
    );
};

export default Community;