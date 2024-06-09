import Guide from "../assets/images/guide.png";

const TourPlan = () => {
    return (
        <div>
            <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4">
                    <div className="mx-auto mb-4">
                        <div className="flex items-center gap-2">
                            <h2 className="mb-1 text-3xl leading-[1.2] sm:text-4xl md:text-[35px] font-semibold"
                            >Tour Plan </h2>
                            <img className="w-[55px] h-3" src={Guide} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-4">
                <details className="group [&_summary::-webkit-details-marker]:hidden" open>
                    <summary
                        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                    >
                        <h2 className="font-medium">
                            <button className="md:py-[4px] md:pt-1.5 py-[3px] md:px-3 px-2 text-sm bg-[#FF0143] rounded-sm text-white mr-4">Day 01</button>
                            Starting
                        </h2>

                        <svg
                            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </summary>

                    <p className="mt-4 px-4 leading-relaxed lg:w-[1000px] text-gray-700">
                        <h2 className="mb-4 font-semibold text-base">Around 09:00 – 09:30 AM</h2>
                        <p className="text-sm mb-4">You will arrive at Got pier in which the nice crew is waiting to welcome you with drinks, and then a cruise safety introduction. Enjoy lunch while feasting eyes on the scenic canals and islets of Da Chong (Stacking Stones), Con Vit (Duck Islet), and Gia Luan village (Cat Ba). You will spend the afternoon to explore Trung Trang Valley and Trung Trang Cave in the middle of Cat Ba Island. There will be also time to visit Tra Bau for swimming and kayaking.</p>
                        <p className="text-sm mb-4">Later, relax on this 5-star floating hotel; also, join the cooking show if interested.</p>
                    </p>
                </details>

                <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary
                        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                    >
                        <h2 className="font-medium">
                            <button className="md:py-[4px] md:pt-1.5 py-[3px] md:px-3 px-2 text-sm bg-[#FF0143] rounded-sm text-white mr-4">Day 02</button>
                            Relax
                        </h2>

                        <svg
                            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </summary>

                    <p className="mt-4 px-4 leading-relaxed lg:w-[1000px] text-gray-700">
                        <p className="text-sm mb-4">The relaxing morning with fresh air, majestic sunrise, and the nice view of local fishing life will be followed by an explorative trip on the bamboo boat to Bright and Dark Cave (Hang Sang Toi).</p>
                        <p className="text-sm mb-4">You have more time to explore Viet Hai fishing village, Da Chong Islet, Cat Ba National Park – Trung Trang Cave, Cua Van area, Ba Trai Dao Beach, Tra Bau area, Van Boi Beach, Ba Ham Lake, and Bright & Dark Cave. Take it easy to directly work with the tour agent on the detail</p>
                    </p>
                </details>

                <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary
                        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                    >
                        <h2 className="font-medium">
                            <button className="md:py-[4px] md:pt-1.5 py-[3px] md:px-3 px-2 text-sm bg-[#FF0143] rounded-sm text-white mr-4">Day 03</button>
                            End Tour
                        </h2>

                        <svg
                            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </summary>

                    <p className="mt-4 px-4 leading-relaxed lg:w-[1000px] text-gray-700">
                    <p className="text-sm mb-4">Get back to the cruise for farewell brunch, pack your stuff for the voyage back to the harbor.</p>
                    <p className="text-sm mb-4">In the meantime, enjoy photo hunting as the cruise peacefully sails across many islands and islets of Lan Ha Bay and Halong Bay</p>
                    </p>
                </details>

            </div>
        </div>
    );
};

export default TourPlan;