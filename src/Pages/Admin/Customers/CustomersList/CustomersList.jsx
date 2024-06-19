import Header from "../../../../components/Shared/Header/Header";
import { FaUsers } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";


const CustomersList = () => {
    return (
        <div>
            
            <Header title="Customers List" />

            <div className="bg-white m-3 px-5 py-4">

                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                    <h2 className="flex items-center gap-2 text-base font-bold"><FaUsers className="text-2xl" /> <span>All Customers</span></h2>
                    <form className="flex items-center gap-2">
                        <input type="text" className="w-full border-2 border-slate-200 bg-transparent px-2 py-[6px] rounded-sm outline-none" placeholder="Customers's name..." />
                        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-sm">
                            <FaSearch />
                            <span>Search</span>
                        </button>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default CustomersList;