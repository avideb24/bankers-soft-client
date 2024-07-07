import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import useLoggedUser from "../../hooks/useLoggedUser";


const Root = () => {

    const [showSidebar, setShowSidebar] = useState(false);
    const {isLoggedIn } = useLoggedUser();

    useEffect(() => {
        // This effect ensures the component re-renders when the login state changes
        // You can add any other logic here if necessary
    }, [isLoggedIn]);

    return (
        <main className="min-h-screen text-xs md:text-sm">

            {/* mobile menu btn */}
            <button onClick={() => setShowSidebar(true)} className={`${isLoggedIn ? '' : 'hidden'} fixed top-[14px] md:top-4 left-2 text-2xl p-1 z-[90] lg:hidden`} ><HiMenuAlt1 /></button>

            {/* sidebar */}
            <div className={`${isLoggedIn ? '' : 'hidden'} lg:w-[250px] xl:w-[300px] fixed top-0 ${showSidebar ? 'left-0' : '-left-[400px]'} lg:left-0 z-[100] transition-all duration-500 ease-in-out`}>
                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            </div>

            {/* outlet */}
            <div className={`${isLoggedIn ? 'ml-0 lg:ml-[250px] xl:ml-[300px]' : ''}  pb-6`}>
                <Outlet />
            </div>
        </main>
    );
};

export default Root;