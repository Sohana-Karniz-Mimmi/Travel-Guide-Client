import icon1 from '../../assets/images/Icon/icon-1.png'
import icon2 from '../../assets/images/Icon/icon-2.png'
import icon3 from '../../assets/images/Icon/icon-3.png'
import { motion } from "framer-motion"

const ExtraSection = () => {
    return (
        <div className=' container py-10 mb-12 mx-auto md:px-10 px-1'>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                    opacity: 1, y: 0, transition: {
                        type: 'tween',
                        duration: 0.8,
                        ease: [0.25, 0.25, 0.25, 0.75],
                    }
                }}
                viewport={{ once: false, amount: 0.7 }}
            >
                <h1 className='text-xl font-semibold text-center text-gray-800 capitalize lg:text-4xl '>
                    How Job Portal Works for You?
                </h1>

                <p className='max-w-xl mx-auto mt-2 mb-8 text-center text-gray-500 '>
                    Set up a comprehensive profile highlighting your skills, experience, and aspirations. Make a strong first impression on potential employers.
                </p>
            </motion.div>

            <div
                className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3'>
                <motion.div initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                        opacity: 1, y: 0, transition: {
                            type: 'tween',
                            duration: 0.8,
                            ease: [0.25, 0.25, 0.25, 0.75],
                        }
                    }}
                    viewport={{ once: false, amount: 0.7 }} className='lg::w-[365px] w-full py-12 px-10 text-center rounded-md shadow-md bg-[#f5f7fc]'>

                    <div className="mx-auto mb-5">
                        <img className='mx-auto' src={icon1} />
                    </div>
                    <div className='space-y-3'>
                        <h1 className='mt-2 text-lg font-semibold '>
                            Need Any Jobs?
                        </h1>
                        <p>
                            Whether you're exploring new career paths or seeking part-time gigs, our platform connects you with tailored job listings that fit your needs.
                        </p>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                        opacity: 1, y: 0, transition: {
                            type: 'tween',
                            duration: 0.8,
                            ease: [0.25, 0.25, 0.25, 0.75],
                        }
                    }}
                    viewport={{ once: false, amount: 0.7 }} className='lg::w-[365px] w-full py-12 px-10 text-center rounded-md shadow-md bg-[#f5f7fc]'>

                    <div className="mx-auto mb-5">
                        <img className='mx-auto' src={icon2} />
                    </div>
                    <div className='space-y-3'>
                        <h1 className='mt-2 text-lg font-semibold '>
                            Post Your Jobs
                        </h1>
                        <p>
                            Streamline your hiring process and find the perfect fit for your team with JobPortal's easy-to-use job posting feature.
                        </p>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                        opacity: 1, y: 0, transition: {
                            type: 'tween',
                            duration: 0.8,
                            ease: [0.25, 0.25, 0.25, 0.75],
                        }
                    }}
                    viewport={{ once: false, amount: 0.7 }} className='lg::w-[365px] w-full py-12 px-10 text-center rounded-md shadow-md bg-[#f5f7fc]'>

                    <div className="mx-auto mb-5">
                        <img className='mx-auto' src={icon3} />
                    </div>
                    <div className='space-y-3'>
                        <h1 className='mt-2 text-lg font-semibold '>
                            Apply to Jobs
                        </h1>
                        <p> Discover your dream job
                            Explore exciting opportunities across industries and apply seamlessly through JobPortal.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
};

export default ExtraSection;