import { FaCalendarAlt, FaChartBar, FaExclamationCircle } from "react-icons/fa";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import Button from "../../../../Shared/Button/Button";
import PropTypes from 'prop-types';
import { FiSearch } from "react-icons/fi";


const Transactions = ({ title, data }) => {

    // ---------------------
    const tableHeads = ['Trx Type', 'Trx Date', 'Amount', 'Current Balance', 'Collector'];


     // search reports by date
     const handleSearchByDate = e => {
        e.preventDefault();

        const fromDate = e.target.fromDate.value;
        const toDate = e.target.toDate.value;

        console.log(fromDate, toDate);

    };

    return (
        <div className="bg-white p-5 shadow-sm h-max">

            <div className="flex justify-between items-center gap-3 pb-3 border-b border-b-slate-300 mb-5">
                <h2 className="flex items-center gap-2 text-base md:text-lg font-bold capitalize"><FaChartBar />{title == 'fixed-deposit' ? 'FDR' : title} Transactions</h2>

                {/* search btn */}
                <Button text="search" icon={FiSearch} bg="bg-orange-600" handleClick={() => document.getElementById('my_modal_1').showModal()} />

                {/* search modal body */}
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box p-4 relative bg-white">
                        <h3 className="text-base md:text-xl font-semibold flex items-center gap-2"><FaCalendarAlt />Search By Date</h3>
                        {/* date form */}
                        <form onSubmit={handleSearchByDate} className="pt-4">
                            <div className="flex gap-5">
                                <div className="w-1/2">
                                    <label htmlFor="from" className="font-bold">From Date</label>
                                    <input type="date" className="w-full px-2 py-1 mt-2 bg-white border border-slate-300 outline-none" name="fromDate" id="from" required />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="to" className="font-bold">To Date</label>
                                    <input type="date" className="w-full px-2 py-1 mt-2 bg-white border border-slate-300 outline-none" name="toDate" id="to" required />
                                </div>
                            </div>
                            <p className="mt-4"><span className="text-red-600 font-semibold"><FaExclamationCircle className="inline" /> Special Note: </span>If no dates are selected, search result will be made on today&apos;s date.</p>
                            <div className="text-right">
                                <input type="submit" value="Search" className="bg-green-600 text-white font-semibold px-3 py-1 rounded-sm mt-6 cursor-pointer" />
                            </div>
                        </form>
                        {/* close btn */}
                        <div className="modal-action text-right absolute right-24 bottom-4">
                            <form method="dialog">
                                <button className=" bg-red-600 text-white font-semibold px-3 py-1 rounded-sm mt-5">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>

            {/* table */}
            <div className="overflow-x-scroll">
                <table className="w-full text-center">
                    <thead>
                        <tr>
                            {
                                tableHeads?.map(head =>
                                    <th key={head} className="font-bold bg-slate-200 p-1">{head}</th>
                                )
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((data, idx) =>
                                <tr key={idx}>
                                    <td className="p-1">{data?.type}</td>
                                    <td className="p-1">{data?.date}</td>
                                    <td className="flex justify-center items-center gap-1 p-1">
                                        {
                                            data?.type == 'Deposit' ?
                                                <FaCirclePlus className="text-green-600 mt-[2px]" /> : <FaCircleMinus className="text-red-600 mt-[2px]" />
                                        }
                                        <span className="text-base md:text-lg">৳</span>{data?.amount}
                                    </td>
                                    <td className="p-1"><span className="text-base md:text-lg">৳</span>500</td>
                                    <td className="p-1">{data?.collector}</td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Transactions;


Transactions.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
};