import Swal from "sweetalert2";
import useLoggedUser from "../hooks/useLoggedUser";
import { useNavigate } from "react-router-dom";



const PrivateRoute = ({ children }) => {

    const { isLoggedIn } = useLoggedUser();
    const navigate = useNavigate();


    if (!isLoggedIn) {
        Swal.fire({
            icon: "error",
            title: "Please Login Frist!",
        });
        navigate('/login')
    }
    else{
        return children
    }

};

export default PrivateRoute;