// import { Link, useLoaderData } from "react-router-dom";
// import CountriesCard from "./CountriesCard";
// import { useEffect, useState } from "react";



const Countries = () => {

    // const loadedCountriesData = useLoaderData();

    // console.log(loadedCountriesData);

    // const [countriesData, setCountriesData] = useState([]);
    // useEffect(() => {
    //     fetch(`https://tourism-server-beta.vercel.app/countries`)
    //     .then(res => res.json())
    //     .then(data => {
    //         setCountriesData(data);
    //     })
    // }, [])
    // console.log(countriesData);

    return (
        <>
            <div className="barlow-condensed-regular mt-12 mb-10 md:mt-20 container max-w-6xl mx-auto space-y-6 sm:space-y-12">
                <div className="text-center mb-12">
                    <h2 data-aos="fade-down" data-aos-duration="1000" className="font-semibold text-3xl lg:mb-4 mb-2 lg:text-[44px] ">Countries</h2>
                    <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="200" className="lg:w-[550px] lg:text-lg text-[#9ca3a9] font-medium md:w-[500px] text-sm  w-80 mx-auto">Dive into global exploration with Turio. Learn about diverse cultures, stunning landscapes, and unique experiences in countries worldwide.</p>
                </div>

                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">

                    {/* {
                        countriesData.map(countries => <CountriesCard key={countries._id} countries={countries} ></CountriesCard>)
                    } */}
                </div>
            </div>
        </>
    );
};

export default Countries;