import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";


const Root = () => {

    const [showSidebar, setShowSidebar] = useState(false);


    return (
        <div className="lg:flex min-h-screen max-w-screen-2xl 2xl:mx-auto text-xs md:text-sm">
            <div className="min-w-72 w-[25%] ">
                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            </div>
            <div className="lg:relative lg:w-[75%]">
                <button onClick={() => setShowSidebar(true)} className="absolute top-3 md:top-[14px] left-3 z-40 text-2xl text-primary-color bg-white border-2 border-primary-color p-1 rounded-md lg:hidden"><GiHamburgerMenu /></button>
                <Outlet />
            </div>
        </div>
    );
};

export default Root;