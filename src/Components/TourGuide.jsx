import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../Hook/useAxiosCommon";
import LoadingSpinner from "./Shared/LoadingSpinner";
import TourGuideCard from "./TourGuideCard";

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
            <section className="barlow-condensed-regular pt-20 pb-10 lg:pt-20 lg:pb-20 dark:bg-dark">
                <div className="container mx-auto">
                    {/* <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                                <h2 data-aos="fade-up" data-aos-duration="1000"
                                    className="mb-3 text-3xl leading-[1.2] sm:text-4xl md:text-[44px]  font-semibold"
                                >
                                    Tour Guide
                                </h2>
                                <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className="text-body-color lg:text-lg text-[#9ca3a9] font-medium">Expert guidance awaits with Turio. Discover insider tips, local secrets, and personalized recommendations for your dream travel experience.
                                </p>
                            </div>
                        </div>
                    </div> */}
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