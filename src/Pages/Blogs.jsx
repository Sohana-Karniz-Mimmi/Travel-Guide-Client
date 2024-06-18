import { Helmet } from "react-helmet-async";
import { FaRegCalendarDays, FaRegComments, FaUser } from "react-icons/fa6";
// import code1 from "../assets/images/code.png"
import ViewBanner from "../Components/ViewBanner";

const Blogs = () => {
    return (
        <div>
            <Helmet>
                <title>Blogs - Job-Portal</title>
            </Helmet>
            <div>
                <ViewBanner name={'Bogs'}></ViewBanner>
            </div>

            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">

                    <div rel="noopener noreferrer" href="#" className="pt-10 block md:w-[870px] w-full mx-auto dark:bg-gray-50">

                        <div>
                            <h3 className="md:text-[22px] text-lg font-semibold  px-6  mb-4 group-hover:underline group-focus:underline">What is an access token and refresh token? How do they work and where should we store them on the client side?</h3>
                            <img src='https://job-portal-3285e.web.app/assets/code-BK-Mb3n8.png' alt="" className="object-cover mx-auto md:w-[870px] w-full rounded h-[450px] lg:col-span-7 dark:bg-gray-500" />
                            <div className="p-6 space-y-2 lg:col-span-5">

                                <div className="flex">
                                    <span className="border-r-2 pr-1.5 md:text-sm text-xs flex gap-2 items-center text-primary" ><FaRegCalendarDays className="text-lg text-primary" /> May 14, 2024</span>
                                    <span className="px-1.5 border-r-2 md:text-sm text-xs flex gap-2 items-center  text-primary" ><FaUser className="text-base text-primary" /> By Sohana</span>
                                    <span className="pl-1.5 md:text-sm text-xs flex gap-2 items-center  text-primary" ><FaRegComments className="text-lg text-primary" /> 5k </span>
                                </div>

                                <p className="">
                                    An access token and a refresh token are both components of an authentication and authorization system commonly used in web applications and APIs. Heres a breakdown of each:

                                    <ul className="list-decimal pl-10 pt-4">
                                        <li> <strong>Access Token:</strong> A credential used by a client to access protected resources on an API server. It is short-lived and obtained after successful authentication.
                                        </li>
                                        <li><strong>Refresh Token:</strong> A credential used to obtain a new access token once the current one expires. It is long-lived and helps maintain user sessions without frequent reauthentication.
                                        </li>
                                    </ul>

                                    <div className="pt-4">
                                        <p>
                                            <strong>Working Mechanism:</strong> When a user logs in or authenticates for the first time, the server issues both an access token and a refresh token. The access token is sent with each request to access protected resources. When the access token expires, the client can use the refresh token to request a new access token from the server without requiring the user to log in again.

                                        </p>
                                        <p> <strong>Storage:</strong> Access tokens should be stored on the client side, typically in memory or local storage, to include them in requests easily. However, it is crucial to ensure that they are not exposed to unauthorized access. Refresh tokens, being more sensitive, should be stored securely on the server side.
                                        </p>
                                    </div>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">

                    <div rel="noopener noreferrer" href="#" className="pt-10 block md:w-[870px] w-full mx-auto dark:bg-gray-50">

                        <h3 className="md:text-[22px] text-lg font-semibold  px-6  mb-4 group-hover:underline group-focus:underline">What is express js? What is Nest JS</h3>
                        <img src='https://www.split.io/wp-content/uploads/Blog-2160x1080-Building-a-CRUD-API-with-Node-js-and-Express-1920x960.png' alt="" className="object-cover mx-auto md:w-[870px] w-full rounded h-[450px] lg:col-span-7 dark:bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">

                            <div className="flex">
                                <span className="border-r-2 pr-1.5 md:text-sm text-xs flex gap-2 items-center  text-primary" ><FaRegCalendarDays className="text-lg text-primary" /> May 14, 2024</span>
                                <span className="px-1.5 border-r-2 md:text-sm text-xs flex gap-2 items-center  text-primary" ><FaUser className="text-base text-primary" /> By Sohana</span>
                                <span className="pl-1.5 md:text-sm text-xs flex gap-2 items-center  text-primary" ><FaRegComments className="text-lg text-primary" /> 5k </span>
                            </div>

                            <p className="">
                                <div className="pt-4">
                                    <p>
                                        <strong>Express.js:</strong> Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It simplifies the process of creating powerful web servers and APIs by providing a thin layer of fundamental web application features, allowing developers to build upon it as needed. Express.js is widely used in the Node.js ecosystem for its simplicity and performance.

                                    </p>
                                    <p className="mt-2"> <strong>Nest.js:</strong> Nest.js is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It is built with TypeScript and heavily inspired by Angular, providing a modular and well-organized structure for building complex applications. Nest.js leverages TypeScripts features to offer strong typing, dependency injection, and intuitive design patterns, making it suitable for large-scale enterprise applications.
                                    </p>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">

                    <div rel="noopener noreferrer" href="#" className="pt-10 block md:w-[870px] w-full mx-auto dark:bg-gray-50">

                        <h3 className="md:text-[22px] text-lg font-semibold  px-6  mb-4 group-hover:underline group-focus:underline">Explain your code. </h3>
                        <img src='https://img.freepik.com/free-photo/programming-background-concept_23-2150170137.jpg' alt="" className="object-cover mx-auto md:w-[870px] w-full rounded h-[450px] lg:col-span-7 dark:bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">

                            <div className="flex">
                                <span className="border-r-2 pr-1.5 md:text-sm text-xs flex gap-2 items-center  text-primary" ><FaRegCalendarDays className="text-lg text-primary" /> May 14, 2024</span>
                                <span className="px-1.5 border-r-2 md:text-sm text-xs flex gap-2 items-center  text-primary" ><FaUser className="text-base text-primary" /> By Sohana</span>
                                <span className="pl-1.5 md:text-sm text-xs flex gap-2 items-center  text-primary" ><FaRegComments className="text-lg text-primary" /> 5k </span>
                            </div>

                            <p className="">

                                <div className="pt-4">
                                    <p>
                                        In our code, we utilize Express.js to create a RESTful API for managing user authentication and authorization. We implement JSON Web Tokens (JWT) for handling access tokens and refresh tokens securely. The authentication process involves validating user credentials, generating JWT tokens (access and refresh tokens), and securely storing the refresh token on the server side.
                                    </p>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Blogs;

