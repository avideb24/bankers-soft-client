import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";


const Root = () => {
    return (
        <div className="flex gap-0">
            <div className="w-3/12">
                <Sidebar />
            </div>
            <div className="w-9/12">
                <Outlet />
            </div>
        </div>
    );
};

export default Root;