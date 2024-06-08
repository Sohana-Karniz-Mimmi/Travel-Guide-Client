import { useState } from "react";
import youTubeLogo from "../../assets/images/pngwing.com.png"
// import VideoPlayer from "./VideoPlayer ";

const Overview = () => {
    const [showIframe, setShowIframe] = useState(false);

  const handleShowVideo = () => {
    setShowIframe(true);
  };

  console.log(showIframe);
  
    return (
        <div>
            <section className="about py-[100px] relative ">
                <div className="about_bg w-[50vw] absolute h-full top-0 left-0 md:block ">
                    <img className="object-cover" src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1032&amp;q=80" alt="Our official team work" />
                   {showIframe && (
                        <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/bwmSjveL3Lc?si=J4FFJa-prUxjaItB" 
                        title="YouTube video player" 
                        // frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        // referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                        ></iframe>
                    )}
                    <button onClick={handleShowVideo} className="youtube-link play_btn">
                        <img className=" w-[110px] h-[80px] text-[80px] text-red-600 absolute top-[41%] left-[41%]" src={youTubeLogo} alt="" />
                    </button>
                    
                </div>
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-md-5">
                            <div className="about_content">
                                <p className="section_subtitle">What we are</p>
                                <h2 className="section_title">We are dynamic team of creative people</h2>
                                <div className="about_content_card mt-5 d-flex">
                                    <i className="icofont-badge px-3"></i>
                                    <div>
                                        <h4>We are Perfect Solution</h4>
                                        <p>We provide consulting services in the area of IFRS and management reporting, helping companies to
                                            reach their highest level. We optimize business processes, making them easier.</p>
                                        <a href="#" className="app_btn app_btn_filled">GET STARTED </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Overview;