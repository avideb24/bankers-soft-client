import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';


const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [userRole, setUserRole] = useState(null); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        const loggedIn = localStorage.getItem("isLoggedIn");
        const role = localStorage.getItem("userRole");

        setIsLoggedIn(loggedIn === "true");
        setUserRole(role);
        setLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, userRole, loading, setIsLoggedIn, setUserRole }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
