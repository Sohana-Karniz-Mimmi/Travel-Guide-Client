import { useParams } from "react-router-dom";
import useAxiosCommon from "../Hook/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../Components/Shared/LoadingSpinner";
import ViewBanner from "../Components/ViewBanner";
import Container from "../Components/Shared/Container";
import { GrCheckmark } from "react-icons/gr";
import contact from '../assets/images/Contact.jpg'
import { RiSendPlaneFill } from "react-icons/ri";

const GuideProfileDetails = () => {

    const { id } = useParams()
    const axiosCommon = useAxiosCommon()

    const {
        data: tourGuide = {},
        isLoading,
    } = useQuery({
        queryKey: ['tourGuide', id],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/tour-guide/${id}`)
            return data
        },
    })

    if (isLoading) return <LoadingSpinner />
    console.log(tourGuide)
    const { image, name } = tourGuide;

    return (
        <div>
            <div>
                <ViewBanner name={`I Am ${name}`}></ViewBanner>
            </div>
            <div className="bg-[#f9f9f9] md:pb-16 pb-6">
                <Container>
                    <div className=" mx-auto text-center">
                        <div className="avatar mt-10 mb-3">
                            <div className="w-40 rounded-full ring ring-[#FC4C5C] ring-offset-base-100 ring-offset-2">
                                <img src={image} />
                            </div>
                        </div>
                        <h2 className="text-xl font-semibold text-center text-gray-800 capitalize lg:text-4xl my-2">
                            {name} - Certified tourist guide
                        </h2>
                        <p className="max-w-4xl text-xl mx-auto mb-8 text-center text-gray-500 ">Eu tota moderatius usu, ad putant aliquando constituam ius, commodo sententiae suscipiantur nam eu. Tamquam nominati abhorreant at vis, has id harum melius petentium. Mea wisi debet omnium ne, est ea graecis noluisse recusabo, denique deterruisset ius et.</p>
                    </div>

                    <div className="md:flex md:px-12 gap-8">
                        <div>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 capitalize lg:text-[22px] my-2">
                                    Education
                                </h2>
                                <p className="max-w-4xl text-sm mb-8 text-gray-500 ">Lorem ipsum dolor sit amet, ex justo nominavi eum, cu veniam salutatus reprimique quo, nisl virtute meliore ei eos. Quaestio consequat sed no, urbanitas honestatis ei usu. Ex nec aliquid appetere petentium, ei eum soleat possim. Has ea omnes prompta. Vel te magna voluptaria, cu nec fabulas voluptatum, has et dictas quaeque labores. Qui ex mazim sadipscing.</p>
                                <h2 className="text-xl font-semibold text-gray-800 capitalize lg:text-[22px] my-2">
                                    Past experiences
                                </h2>
                                <p className="max-w-4xl text-sm mb-8 text-gray-500 ">Lorem ipsum dolor sit amet, ex justo nominavi eum, cu veniam salutatus reprimique quo, nisl virtute meliore ei eos. Quaestio consequat sed no, urbanitas honestatis ei usu. Ex nec aliquid appetere petentium, ei eum soleat possim. Has ea omnes prompta. Vel te magna voluptaria, cu nec fabulas voluptatum, has et dictas quaeque labores. Qui ex mazim sadipscing.</p>
                            </div>
                        </div>
                        <div>

                            <h2 className="text-xl font-semibold text-gray-800 capitalize lg:text-[22px] my-2">
                                Spoken languages
                            </h2>
                            <p className="max-w-4xl text-sm mb-8 text-gray-500 ">Eu tota moderatius usu, ad putant aliquando constituam ius, commodo sententiae suscipiantur nam eu.</p>
                            <div className="flex gap-1">
                                <img src="https://www.ansonika.com/citytours/img/lang_en.png" alt="" />
                                <img src="https://www.ansonika.com/citytours/img/lang_fr.png" alt="" />
                                <img src="https://www.ansonika.com/citytours/img/lang_de.png" alt="" />
                                <img src="https://www.ansonika.com/citytours/img/lang_es.png" alt="" />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800 capitalize lg:text-[22px] my-2">
                                Certificates
                            </h2>
                            <p className="max-w-4xl text-sm mb-4 text-gray-500 ">Eu tota moderatius usu, ad putant aliquando constituam ius, commodo sententiae suscipiantur nam eu.</p>
                            <ul className="">
                                <li className="flex gap-2.5 items-center"><GrCheckmark className="text-base text-[#FC4C5C]" />Putant aliquando constituam</li>
                                <li className="flex gap-2.5 items-center"><GrCheckmark className="text-base text-[#FC4C5C]" />Commodo sententiae</li>
                                <li className="flex gap-2.5 items-center"><GrCheckmark className="text-base text-[#FC4C5C]" />Denique deterruisset</li>
                                <li className="flex gap-2.5 items-center"><GrCheckmark className="text-base text-[#FC4C5C]" />Putant aliquando constituam</li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Contact Section */}

                <section className="relative bg-cover bg-center bg-no-repeat h-[377px]" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${contact})` }}>

                    <div className="lg:flex items-center justify-between h-[377px] py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
                        <div className="">
                            <h2 className="md:text-5xl text-3xl lg:mt-0 mt-8 font-semibold mb-2 text-white">Find Best Tourist Spot For Touring</h2>
                            <p className="md:text-xl text-lg lg:w-[623px] md:w-[550px] w-80 text-[#bbbbbb]">Spend vacations in best hotels and resorts find the great place of your
                                choice using different searching options.</p>
                        </div>
                        <div className=" lg:mt-0 mt-10 inline-flex items-center rounded bg-[#FC4C5C] dark:text-gray-100 ">
                            <button type="button" className="px-8 py-3.5 font-semibold">CONTACT US</button>
                            <button type="button" title="Toggle dropdown" className="p-3.5 bg-[#ec3737]">
                                <RiSendPlaneFill className="text-2xl mt-0.5 mr-0.5" />
                            </button>
                        </div>



                    </div>

                </section>

        </div>
    );
};

export default GuideProfileDetails;