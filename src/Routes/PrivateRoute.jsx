import PropTypes from 'prop-types';
import Swal from "sweetalert2";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from '../Provider/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { isLoggedIn, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className='py-5 flex justify-center items-center'>
                <span className="loading loading-dots loading-lg"></span>
            </div>
        );
    }

    if (!isLoggedIn) {
        Swal.fire({
            icon: "error",
            title: "Please Login First!",
        });
        return <Navigate state={{ from: location }} to="/login" />;
    }

    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;
