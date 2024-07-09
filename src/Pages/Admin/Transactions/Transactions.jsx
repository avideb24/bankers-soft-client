import { FaCalendarAlt } from "react-icons/fa";
import Button from "../../../components/Shared/Button/Button";
import Header from "../../../components/Shared/Header/Header";
import { BiTransferAlt } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
// import { Link } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";
import { useTranslation } from "react-i18next";


const Transactions = () => {

    // fake data
    const transactions = [
        { name: 'Belal', mobile: '01723622125', image: 'https://i.ibb.co/GCYmQNR/user.png' },
        { name: 'Belal', mobile: '01723622125', image: 'https://i.ibb.co/GCYmQNR/user.png' },
        { name: 'Belal', mobile: '01723622125', image: 'https://i.ibb.co/GCYmQNR/user.png' },
        { name: 'Belal', mobile: '01723622125', image: 'https://i.ibb.co/GCYmQNR/user.png' },
        { name: 'Belal', mobile: '01723622125', image: 'https://i.ibb.co/GCYmQNR/user.png' },
        { name: 'Belal', mobile: '01723622125', image: 'https://i.ibb.co/GCYmQNR/user.png' },
        { name: 'Belal', mobile: '01723622125', image: 'https://i.ibb.co/GCYmQNR/user.png' },
        { name: 'Belal', mobile: '01723622125', image: 'https://i.ibb.co/GCYmQNR/user.png' },
    ]

    // --------------------------------

    // translation -----------------
    const { t } = useTranslation();
    const lang = t('Transactions');
    const modal = t('Modals').SearchByDate;
    // -----------------------------

    // search reports by date
    const handleSearchByDate = e => {
        e.preventDefault();

        const fromDate = e.target.fromDate.value;
        const toDate = e.target.toDate.value;

        console.log(fromDate, toDate);

    };

    return (
        <div>
            <Header title={lang.transactions} />

            <div className="bg-white m-4 p-5 shadow-sm rounded-sm">

                <div className="flex justify-between items-center gap-3 flex-wrap pb-2 border-b border-b-slate-300">
                    <h2 className="text-lg md:text-xl font-bold flex items-center gap-1"><BiTransferAlt className="mt-1" />{lang.transactions}</h2>

                    {/* search btn */}
                    <Button text={lang.search} icon={FiSearch} bg="bg-orange-600" handleClick={() => document.getElementById('my_modal_1').showModal()} />
                    {/* search modal */}
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box p-4 relative bg-white">
                            <h3 className="text-base md:text-xl font-semibold flex items-center gap-2"><FaCalendarAlt />{modal.searchByDate}</h3>
                            {/* date form */}
                            <form onSubmit={handleSearchByDate} className="pt-4">
                                <div className="flex gap-5">
                                    <div className="w-1/2">
                                        <label htmlFor="from" className="font-bold">{modal.fromDate}</label>
                                        <input type="date" className="w-full mt-2 bg-white border border-slate-300" name="fromDate" id="from" required />
                                    </div>
                                    <div className="w-1/2">
                                        <label htmlFor="to" className="font-bold">{modal.toDate}</label>
                                        <input type="date" className="w-full mt-2 bg-white border border-slate-300" name="toDate" id="to" required />
                                    </div>
                                </div>
                                <div className="text-right">
                                    <input type="submit" value={modal.search} className="bg-green-600 text-white font-semibold px-3 py-1 rounded-sm mt-6 cursor-pointer" />
                                </div>
                            </form>
                            {/* close btn */}
                            <div className="modal-action text-right absolute right-28 bottom-4">
                                <form method="dialog">
                                    <button className=" bg-red-600 text-white font-semibold px-3 py-1 rounded-sm mt-5">{modal.cancel}</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>

                {/* transaction table */}
                <div className="overflow-x-scroll my-6">
                    <table className="w-full bg-slate-50 text-center">
                        <thead>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                {/* <td></td> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                transactions?.map((transac, idx) =>
                                    <tr key={idx} className="py-3 border-t border-t-slate-300">
                                        <td>
                                            <img src={transac?.image} className="w-10 h-10 object-cover rounded-full" alt="" />
                                        </td>
                                        <td className="p-1">
                                            <p className="font-bold">Belal</p>
                                            <p>25-06-24</p>
                                        </td>
                                        <td className="p-1">
                                            <p>Finances (Expense) </p>
                                            <p className="flex justify-center items-center"><FaCirclePlus /><span className="text-sm md:text-lg ml-1">৳</span>100</p>
                                        </td>
                                        <td className="p-1">
                                            <p className="font-semibold">Approver</p>
                                            <p>Avi Debnath</p>
                                        </td>
                                        {/* <td className="p-1">
                                            <Link to={'/admin'}>
                                                <button className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-md">Check</button>
                                            </Link>
                                        </td> */}
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
};

export default Transactions;