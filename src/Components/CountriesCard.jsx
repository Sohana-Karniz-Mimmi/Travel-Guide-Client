import PropTypes from 'prop-types';

import errorImage from "../../public/404.jpg"
import { Link } from 'react-router-dom';

const CountriesCard = ({ countries }) => {
    const { countryName, description, photo } = countries;
    return (
        <Link to={`/countries/${countryName}`}>
            <div className="barlow-regular max-w-sm mx-auto group rounded border-2 lg::w-[365px]">

                <div className="overflow-hidden relative">
                    <img role="presentation" className="object-cover transition-all group-hover:scale-110 duration-700 ease-in-out w-full rounded h-52 bg-gray-500" src={photo || errorImage} />
                </div>

                <div className="p-6 space-y-2">
                    <h3 className="text-2xl group-hover:text-[#FD4C5C] transition-all duration-300 text-center font-semibold ">{countryName}</h3>
                    <div className="text-[#9ca3a9] text-[17px] font-medium text-center flex justify-between items-center barlow-condensed-regular ">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

CountriesCard.propTypes = {
    countries: PropTypes.object.isRequired,
};

export default CountriesCard;