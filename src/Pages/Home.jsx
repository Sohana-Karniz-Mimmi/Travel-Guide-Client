import { Helmet } from "react-helmet-async";
import Banner from "../Components/HomeComponents/Banner";
import TabCategories from "../Components/HomeComponents/TabCategories";
import Counting from "../Components/HomeComponents/CountUp";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title> Travel Guide - Home</title>
            </Helmet>

            <Banner></Banner>
            <div className="md:pt-12 md:pb-6 bg-[#f5f7fc]">
            <TabCategories></TabCategories>
            </div>
            <Counting></Counting>
            {/* <ExtraSection></ExtraSection> */}
            {/* <Testimonial></Testimonial> */}
        </div>
    );
};

export default Home;