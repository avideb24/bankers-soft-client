import { useEffect, useState } from "react";


const useLoggedUser = () => {

    
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [userRole, setUserRole] = useState(null);

    if(!localStorage.getItem == 'isLoggedIn'){
        localStorage.setItem('isLoggedIn', null)
    }
    else if(!localStorage.getItem == 'userRole'){
        localStorage.setItem('isLoggedIn', null)
    }

    useEffect(() => {
        const loggedIn = localStorage.getItem("isLoggedIn");
        const role = localStorage.getItem("userRole");

        setIsLoggedIn(loggedIn === "true");
        setUserRole(role);
    }, []);


    return { isLoggedIn, userRole, setIsLoggedIn, setUserRole };

};

export default useLoggedUser;