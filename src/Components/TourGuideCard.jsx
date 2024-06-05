import PropTypes from 'prop-types';
// import team4 from "../assets/images/team5.jpg"
// import team1 from "../assets/images/Team1.jpg"
// import team2 from "../assets/images/team2.jpg"
// import team3 from "../assets/images/team3.jpg"
import { Link } from "react-router-dom";

const TourGuideCard = ({guide }) => {

    const {_id, image, name} = guide;
    
    return (
            <div className="">
                <div className="mx-auto mb-10 w-full max-w-[370px]">
                    <div className="relative overflow-hidden rounded-t-lg">
                        <img
                            src={image}
                            className="w-full h-[362px] object-cover"
                        />
                        <div className="absolute bottom-5 left-0 w-full text-center">
                            <div
                                className="relative mx-5 overflow-hidden rounded-lg bg-white dark:bg-dark-2 py-5 px-3"
                            >
                                <h3 className="text-dark dark:text-black font-semibold text-xl">
                                    {name}
                                </h3>
                                <p className="text-body-color dark:text-[#909397] text-sm">Tour Guide</p>
                            </div>
                        </div>
                    </div>
                    <Link to={`/guide-profile-details/${_id}`} className="btn rounded-t-none w-full btn-primary">View Details</Link>
                </div>
            </div>
    );
};

TourGuideCard.propTypes = {
    guide: PropTypes.object.isRequired,
};

export default TourGuideCard;