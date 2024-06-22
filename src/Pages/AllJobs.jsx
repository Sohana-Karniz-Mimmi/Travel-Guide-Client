import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Table from "../Components/Table";
import axios from "axios";
import AllJobsBanner from "../Components/AllJobsBanner";

const AllJobs = () => {
    const [search, setSearch] = useState('')
    const [searchText, setSearchText] = useState('')
    const [jobs, setJobs] = useState([])


    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(
                `${import.meta.env.VITE_API_URL
                }/all-jobs?search=${search}`
            )
            setJobs(data)
        }
        getData()
    }, [search])

    // const handleReset = () => {
    //     setSearch('')
    //     setSearchText('')
    // }

    const handleSearch = e => {
        e.preventDefault()
        setSearch(searchText)
    }

    // console.log(search)



    return (
        <div>

            <Helmet>
                <title>All Jobs - Travel-Guide</title>
            </Helmet>

            <div>
                <AllJobsBanner setSearch={setSearch} setSearchText={setSearchText} ></AllJobsBanner>
            </div>

            <div className="barlow-condensed-regular mt-4 mb-10 md:mt-5 container max-w-6xl mx-auto">
                {/* Search */}
                <div className='pt-10 pb-7'>
                    <form
                        onSubmit={handleSearch}
                    >
                        <div className='flex p-1 overflow-hidden border focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                            <input className='px-6 py-2 w-full text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                                type='text'
                                onChange={e => setSearchText(e.target.value)}
                                value={searchText}
                                name='search'
                                placeholder='Enter Job Title'
                                aria-label='Enter Job Title'
                            />

                            <button className='px-1 md:px-4 py-[13px] text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-[#FD4C5C] hover:bg-[#FD4C5C] focus:bg-[#FD4C5C] focus:outline-none'>
                                Search
                            </button>
                        </div>
                    </form>
                </div>

                <Table allJobs={jobs} ></Table>
                <></>
            </div>
        </div>
    );
};

export default AllJobs;