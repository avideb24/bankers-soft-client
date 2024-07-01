import { useRef } from "react";
import Header from "../../../components/Shared/Header/Header";
import { FaCalendarAlt, FaChartBar, FaExclamationCircle } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { MdLocalPrintshop } from "react-icons/md";
import { useReactToPrint } from "react-to-print";
import userImg from '../../../../public/images/user.png';
import UserReportCard from "../../../components/Pages/UserReports/UserReportCard/UserReportCard";


const UserReports = () => {

    // fake data 
    const user = {
        name: 'Bilal', mobile: '01723622125', image: userImg, address: 'Nilphamari', date1: '2024-06-21', date2: '2024-07-25', totalColletion: 0, totalPay: 0
    }

    // ---------------------------
    const printedContentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => printedContentRef.current
    })

    // search reports by date
    const handleSearchByDate = e => {
        e.preventDefault();

        const fromDate = e.target.fromDate.value;
        const toDate = e.target.toDate.value;

        console.log(fromDate, toDate);

    };

    return (
        <div>
            <Header title="User Reports" />

            <div className="bg-white m-4 p-5 shadow-sm">

                {/* title */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <h2 className="flex items-center gap-1 text-lg md:text-xl font-bold"><FaChartBar className="mt-1" />User Reports</h2>
                    <div className="flex items-center gap-4">

                        {/* print btn */}
                        <button onClick={handlePrint} className="bg-blue-600 px-3 py-1 text-white  font-semibold flex items-center gap-2 rounded-sm"><MdLocalPrintshop />Print</button>

                        {/* search btn */}
                        <button onClick={() => document.getElementById('my_modal_1').showModal()} className="bg-slate-600 px-3 py-1 text-white  font-semibold flex items-center gap-2 rounded-sm"><RiSearchLine />Search</button>

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
                                    <p className="mt-4"><span className="text-red-600 font-semibold"><FaExclamationCircle className="inline" /> Special Note: </span>If no dates are selected, deposits will be made on today&apos;s date.</p>
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
                </div>

                <div ref={printedContentRef}>

                    {/* user info */}
                    <div className="flex flex-col sm:flex-row gap-3 py-5">
                        <img src={user?.image} className="max-w-32 m-2 border border-slate-300 object-contain" alt={user?.name} />
                        <table className="w-full">
                            <tbody>
                                {/* name */}
                                <tr>
                                    <th className="text-left w-[20%] p-1">Name</th>
                                    <th className="w-10">:</th>
                                    <td>{user?.name}</td>
                                </tr>
                                {/* mobile */}
                                <tr>
                                    <th className="text-left w-[20%] p-1">Mobile</th>
                                    <th className="w-10">:</th>
                                    <td>{user?.mobile}</td>
                                </tr>
                                {/* address */}
                                <tr>
                                    <th className="text-left w-[20%] p-1">Address</th>
                                    <th className="w-10">:</th>
                                    <td>{user?.address}</td>
                                </tr>
                                {/* date */}
                                <tr>
                                    <th className="text-left w-[20%] p-1">Date</th>
                                    <th className="w-10">:</th>
                                    <td>
                                        {user?.date1?.split('-')?.reverse()?.join('-')} To {user?.date2?.split('-')?.reverse()?.join('-')}
                                    </td>
                                </tr>
                                {/* total collection */}
                                <tr>
                                    <th className="text-left w-[30%] md:w-[20%] text-green-600 pl-1">Total Collection</th>
                                    <th className="w-10">:</th>
                                    <td><span className="text-base md:text-lg">৳</span>{user?.totalColletion}</td>
                                </tr>
                                {/* total pay */}
                                <tr>
                                    <th className="text-left w-[30%] md:w-[20%] text-red-600 pl-1">Total Pay</th>
                                    <th className="w-10">:</th>
                                    <td><span className="text-base md:text-lg">৳</span>{user?.totalPay}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* reports */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <UserReportCard title={'Share'} />
                        <UserReportCard title={'Savings'} />
                        <UserReportCard title={'Fixed Deposit'} />
                        <UserReportCard title={'DPS'} />
                        <UserReportCard title={'Loan'} />
                        <UserReportCard title={'Insurance'} />
                    </div>

                </div>

            </div>

        </div>
    );
};

export default UserReports;