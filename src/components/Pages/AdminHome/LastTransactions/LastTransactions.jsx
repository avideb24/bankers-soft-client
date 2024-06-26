import { Link } from "react-router-dom";
import { TbTransfer } from "react-icons/tb";
import { MdOutlineChecklist } from "react-icons/md";


const LastTransactions = () => {
    return (
        <div className="bg-white p-4 shadow-sm mt-6">

            <div className="flex justify-between gap-4 pb-3 mb-3 border-b border-b-slate-300">
                {/* title */}
                <h2 className="text-base md:text-xl font-bold flex items-center gap-2"><TbTransfer className="mt-1" />Last Transactions</h2>
                <div className="flex items-center gap-3">
                    <Link to={'/'}>
                        <p className="flex items-center gap-1 bg-slate-200 px-3 py-1"><MdOutlineChecklist /> See All</p>
                    </Link>
                </div>
            </div>

            {/* transaction table */}
            <div>
                <table>
                    
                </table>
            </div>

        </div>
    );
};

export default LastTransactions;