import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";


const Root = () => {

    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <main className="min-h-screen text-xs md:text-sm">

            {/* mobile menu btn */}
            <button onClick={() => setShowSidebar(true)} className="fixed top-[14px] md:top-4 left-2 text-2xl p-1 z-[90] lg:hidden"><HiMenuAlt1 /></button>

            {/* sidebar */}
            <div className={`lg:w-[250px] xl:w-[300px] fixed top-0 ${showSidebar ? 'left-0' : '-left-[400px]'} lg:left-0 z-[100] duration-500`}>
                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            </div>

            {/* outlet */}
            <div className="ml-0 lg:ml-[250px] xl:ml-[300px]">
                <Outlet />
            </div>
        </main>
    );
};

export default Root;