import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";


const Root = () => {
    return (
        <div className="lg:flex">
            <div className="min-w-72 max-w-[25%] absolute -left-72 lg:static">
                <Sidebar />
            </div>
            <div className="">
                <Outlet />
            </div>
        </div>
    );
};

export default Root;