import PropTypes from 'prop-types';
import Swal from "sweetalert2";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from '../Provider/AuthProvider/AuthProvider';
import { useTranslation } from 'react-i18next';


const PrivateRoute = ({ roles, children }) => {

    // translation --------------
    const {t} = useTranslation();
    const lang = t('Modals').Alert;
    // --------------------------

    const { isLoggedIn, userRole, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className='w-full h-screen py-5 flex justify-center items-center'>
                <span className="loading loading-dots loading-lg"></span>
            </div>
        );
    }

    if (!isLoggedIn) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: `${lang.PleaseLoginFirst}`,
            showConfirmButton: false,
            timer: 1500
        });
        return <Navigate state={{ from: location }} to="/login" />;
    }

    if (roles && !roles.includes(userRole)) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: `${lang.warning}`,
            text: `${lang.doNotHavePermission}`,
            showConfirmButton: false,
            timer: 1500
          });
        return <Navigate to="/login" />;
    }

    console.log(children);
    return children;
};

PrivateRoute.propTypes = {
    roles: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;
