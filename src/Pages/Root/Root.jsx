import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import LangChange from "../../components/Shared/LangChange/LangChange";


const Root = () => {

    const [showSidebar, setShowSidebar] = useState(false);


    return (
        <main className="lg:flex min-h-screen max-w-screen-2xl text-xs md:text-sm">
            <div className="min-w-60 w-[20%] ">
                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            </div>
            <div className="lg:relative lg:w-[80%]">
                <button onClick={() => setShowSidebar(true)} className="absolute top-3 md:top-[14px] left-3 z-40 text-2xl text-primary-color bg-white border-2 border-primary-color p-1 rounded-md lg:hidden"><GiHamburgerMenu /></button>
                <Outlet />
            </div>

            {/* lan change */}
            <div className="fixed right-14 bottom-10">
                <LangChange />
            </div>
        </main>
    );
};

export default Root;