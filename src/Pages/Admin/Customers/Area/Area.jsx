import Header from "../../../../components/Shared/Header/Header";
import { FaPlusCircle, FaSearch } from "react-icons/fa";


const Area = () => {
    return (
        <div>

            <Header title="Areas" />

            <button className="bg-green-600 text-white font-semibold flex items-center gap-2 px-4 py-2 m-4 rounded-sm">
                <FaPlusCircle />
                <span>New Area</span>
            </button>

            <div className="bg-white mx-5 my-4 p-4 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                    <h2 className="text-base font-bold">Area List</h2>
                    <form className="flex items-center gap-2">
                        <input type="text" className="w-full border-2 border-slate-200 bg-transparent px-2 py-[6px] rounded-sm outline-none" placeholder="Type area name..." />
                        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-sm">
                            <FaSearch />
                            <span>Search</span>
                        </button>
                    </form>
                </div>

        </div>
    );
};

export default Area;