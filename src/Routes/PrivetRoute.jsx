import PropTypes from 'prop-types';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';

const PrivetRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation()

    if (loading) {
        return <>
            <div className="flex items-center justify-center space-x-2 h-screen">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-[#FD4C5C]"></div>
            </div>
        </>

    }

    if (user) {
        return children
    }

    return (
        <Navigate to={`/login`} state={location?.pathname || '/'}>
        </Navigate>
    );
};

PrivetRoute.propTypes = {
    children: PropTypes.node
};

export default PrivetRoute;