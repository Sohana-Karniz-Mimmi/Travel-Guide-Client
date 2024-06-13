import { Helmet } from "react-helmet-async";
import Banner from "../Components/Home/Banner";
import TabCategories from "../Components/Home/TabCategories";
import TourType from "../Components/Home/TourType";
import TouristStories from "../Components/Stories/TouristStories";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title> Travel Guide - Home</title>
            </Helmet>

            <Banner></Banner>
            <div className="md:pt-12 md:pb-6 ">
            <TabCategories></TabCategories>
            </div>
            <TourType></TourType>

            <div>
                <TouristStories></TouristStories>
            </div>
            {/* <ExtraSection></ExtraSection> */}
            {/* <Testimonial></Testimonial> */}
        </div>
    );
};

export default Home;