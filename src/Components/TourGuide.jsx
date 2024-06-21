import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../Hook/useAxiosCommon";
import LoadingSpinner from "./Shared/LoadingSpinner";
import TourGuideCard from "./TourGuideCard";
import Guide from "../assets/images/guide.png";

const TourGuide = () => {

    const axiosCommon = useAxiosCommon()

    const { data: guides = [], isLoading } = useQuery({
        queryKey: ['guides'],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/tour-guide`)
            return data
        },
    })

    if (isLoading) return <LoadingSpinner />

    console.log(guides);

    return (
        <div>
            {/* <!-- ====== Team Section Start --> */}
            <section className="pt-5 pb-5 dark:bg-dark">
                <div className="container mx-auto">

                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-10">
                                <div className="flex items-center gap-2">
                                    <h2 className="mb-1 text-3xl leading-[1.2] sm:text-4xl md:text-[32px] font-semibold">
                                        Meet Our Tour Guides
                                    </h2>
                                    <img className="w-[55px] h-3" src={Guide} alt="Guide Icon" />
                                </div>
                                <p className="text-[#9ca3a9] font-medium">
                                    Our dedicated tour guides are here to make your travel experience unforgettable.
                                    {/* Each guide is well-versed in local culture, history, and attractions, ensuring you get the most out of your visit. */}
                                </p>
                            </div>
                        </div>
                    </div>



                    <div className="-mx-4 grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">

                        {
                            guides.map(guide => <TourGuideCard key={guide._id} guide={guide}></TourGuideCard>)
                        }
                    </div>
                </div>
            </section>
            {/* <!-- ====== Team Section End --> */}
        </div>
    );
};

export default TourGuide;