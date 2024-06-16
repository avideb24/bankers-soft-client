import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";


const Root = () => {
    return (
        <div className="lg:flex">
            <div className="min-w-72 max-w-[25%] h-full overflow-y-scroll fixed top-0 -left-72 lg:left-0 sidebar-custom-scrollbar">
                <Sidebar />
            </div>
            <div className="relative left-72">
                <Outlet />
            </div>
        </div>
    );
};

export default Root;