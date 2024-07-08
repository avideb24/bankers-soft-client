import { useTranslation } from "react-i18next";
import CustomerHeader from "../../../components/Shared/CustomerHeader/CustomerHeader";
import { FaCalendarAlt, FaChartBar } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Button from "../../../components/Shared/Button/Button";


const CustomerTransactions = () => {

    // fake data
    const transactions = [
        { type: 'Deposit', amount: '550', approver: 'Avi Debnath' },
        { type: 'Withdraw', amount: '550', approver: 'Avi Debnath' },
        { type: 'Withdraw', amount: '550', approver: 'Avi Debnath' },
        { type: 'Deposit', amount: '550', approver: 'Avi Debnath' },
    ];


    // ---------------------------------------------------------


    // translation---------
    const { t } = useTranslation();
    const lang = t('Customer').Transactions;
    // --------------------

    const tHeads = ['Trx Type', 'Amount', 'Approver'];


    // search reports by date
    const handleSearchByDate = e => {
        e.preventDefault();

        const fromDate = e.target.fromDate.value;
        const toDate = e.target.toDate.value;

        console.log(fromDate, toDate);

    };


    return (
        <div>

            <CustomerHeader title={lang.transactions} />

            <div className="m-4 bg-white p-4 shadow-sm">

                {/* top */}
                <div className="flex justify-between items-center pb-3 border-b border-slate-300 mb-6">
                    <h2 className="text-base lg:text-xl font-bold flex items-center gap-2"><FaChartBar />{lang.transactions}</h2>

                    <Button text={lang.search} icon={FiSearch} bg={'bg-blue-600'} handleClick={() => document.getElementById('my_modal_1').showModal()} />

                    {/* search modal */}
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box p-4 relative bg-white">
                            <h3 className="text-base md:text-xl font-semibold flex items-center gap-2"><FaCalendarAlt />Search By Date</h3>
                            {/* date form */}
                            <form onSubmit={handleSearchByDate} className="pt-4">
                                <div className="flex gap-5">
                                    <div className="w-1/2">
                                        <label htmlFor="from" className="font-bold">From Date</label>
                                        <input type="date" className="w-full mt-2 bg-white border border-slate-300" name="fromDate" id="from" required />
                                    </div>
                                    <div className="w-1/2">
                                        <label htmlFor="to" className="font-bold">To Date</label>
                                        <input type="date" className="w-full mt-2 bg-white border border-slate-300" name="toDate" id="to" required />
                                    </div>
                                </div>
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

                {/* transactions table */}
                {
                    transactions?.length == 0 ?
                        <div>{lang.notFound}</div>
                        :
                        <div className="overflow-x-scroll">
                            <table className="w-full text-center">
                                <thead>
                                    <tr>
                                        {
                                            tHeads?.map((head, idx) =>
                                                <th key={idx} className="border border-slate-300 p-2">{head}</th>
                                            )
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                        {
                                            transactions?.map((trx, idx) =>
                                                <tr key={idx}>
                                                    <td className="border border-slate-300 p-1">{trx?.type}</td>
                                                    <td className="border border-slate-300 p-1">
                                                        <span className="text-base md:text-lg">৳</span>
                                                        {trx?.amount}
                                                        </td>
                                                    <td className="border border-slate-300 p-1">{trx?.approver}</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                            </table>
                        </div>
                }
            </div>

        </div>
    );
};

export default CustomerTransactions;