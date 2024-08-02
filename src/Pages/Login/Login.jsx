import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../Provider/AuthProvider/AuthProvider";


const Login = () => {

    // translation --------
    const { t } = useTranslation();
    const lang = t('Login');
    // --------------------

    const location = useLocation();
    const navigate = useNavigate();
    const { isLoggedIn, userRole, setIsLoggedIn, setUserRole } = useAuth();

    useEffect(() => {
        if (isLoggedIn) {
            // If already
            if (userRole === "admin") {
                navigate('/admin');
            }
            else if (userRole === "customer") {
                navigate('/customer');
            }
        }
    }, [isLoggedIn, userRole, navigate]);


    // login fn
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;

        const mobile = form.mobile.value;
        const password = form.password.value;
        const checkbox = form.checkbox.checked;

        console.log(checkbox, mobile, password);

        const isValidUser = true; // Replace with actual validation

        if (isValidUser) {
            localStorage.setItem("isLoggedIn", "true");
            setIsLoggedIn(true);

            // navigate to customer
            if (checkbox) {
                localStorage.setItem("userRole", "customer");
                setUserRole("customer");
                navigate(location?.state ? location?.state : '/customer');
            }
            // navigate to admin
            else {
                localStorage.setItem("userRole", "admin");
                setUserRole("admin");
                navigate(location?.state ? location?.state : '/admin');
            }
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Invalid Credentials!",
            });
        }
    };


    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">

            <div className="min-w-80 md:min-w-96 shadow-lg p-4">
                <h2 className="text-lg md:text-2xl font-bold pb-3 border-b border-b-slate-300 mb-4">{lang.loginPlease}</h2>

                {/* login form */}
                <form onSubmit={handleLogin} className="w-full flex flex-col gap-2">
                    {/* mobile */}
                    <label htmlFor="number" className="font-bold">{lang.mobile}</label>
                    <input type="number" name="mobile" className="bg-white w-full px-3 py-1 rounded-sm mb-2 border border-slate-300 outline-none" placeholder="Type here" required />
                    {/* password */}
                    <label htmlFor="password" className="font-bold">{lang.password}</label>
                    <input type="password" name="password" className="bg-white w-full px-3 py-1 rounded-sm mb-2 border border-slate-300 outline-none" placeholder="Type here" required />
                    {/* checkbox */}
                    <div className="flex justify-end gap-2 font-semibold">
                        <span>{lang.admin}</span>
                        <input type="checkbox" name="checkbox" className="toggle toggle-success" />
                        <span>{lang.customer}</span>
                    </div>
                    <input type="submit" value={lang.login} className="w-full bg-blue-600 font-bold text-white py-[6px] rounded-sm mt-2 cursor-pointer" />
                </form>

            </div>
        </div>
    );
};

export default Login;