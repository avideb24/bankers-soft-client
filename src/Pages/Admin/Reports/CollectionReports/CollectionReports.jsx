import Header from "../../../../components/Shared/Header/Header";
import { MdLocalPrintshop } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import { FaCalendarAlt, FaExclamationCircle } from "react-icons/fa";
import ReportItem from "./ReportItem";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";


const CollectionReports = () => {

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
            <Header title="Collection Reports" />

            <div className="bg-white m-4 p-5 ">
                <div className="flex justify-center gap-5">
                    <button onClick={handlePrint} className="bg-sky-600 px-3 py-1 text-white  font-semibold flex items-center gap-2 rounded-sm"><MdLocalPrintshop />Print</button>

                    {/* search btn */}
                    <button onClick={() => document.getElementById('my_modal_1').showModal()} className="bg-slate-600 px-3 py-1 text-white  font-semibold flex items-center gap-2 rounded-sm"><RiSearchLine />Search</button>
                    {/* search modal body */}
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

                {/* reports */}
                <div ref={printedContentRef} className="pt-5">

                    {/* transaction */}
                    <h2 className="text-lg md:text-xl font-bold">Transaction Summary</h2>
                    <div>
                        <p className="flex items-center"><span className="block w-28 font-bold">Transaction</span>: <span className="text-lg ml-4 mr-[2px] mb-[2px]">৳ </span>500</p>
                        <p className="flex items-center"><span className="block w-28 font-bold">Collection</span>: <span className="text-lg ml-4 mr-[2px] mb-[2px]">৳ </span>500</p>
                        <p className="flex items-center"><span className="block w-28 font-bold">Disbursement</span>: <span className="text-lg ml-4 mr-[2px] mb-[2px]">৳ </span>500</p>
                    </div>

                    {/* collection reports */}
                    <h2 className="text-lg md:text-xl font-bold mt-5 mb-3">Collection Reports</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        {/* 1st col */}
                        <div>
                            <ReportItem label={'Share Deposits'} amount={500} />
                            <ReportItem label={'Share Withdraw'} amount={500} />
                            <ReportItem label={'Saving Deposit'} amount={500} />
                            <ReportItem label={'Saving Withdraw'} amount={500} />
                            <ReportItem label={'Loan (Disbursement)'} amount={500} />
                            <ReportItem label={'Loan Collection'} amount={500} />
                        </div>
                        {/* 2nd col */}
                        <div>
                            <ReportItem label={'Fixed Deposit'} amount={500} />
                            <ReportItem label={'FDR Withdraw'} amount={500} />
                            <ReportItem label={'DPS Deposit'} amount={500} />
                            <ReportItem label={'DPS Withdraw'} amount={500} />
                            <ReportItem label={'Insurance Deposit'} amount={500} />
                            <ReportItem label={'Insurance Withdraw'} amount={500} />
                        </div>
                        {/* 3rd col */}
                        <div>
                            <ReportItem label={'Profits'} amount={500} />
                            <ReportItem label={'Expenses'} amount={500} />
                            <ReportItem label={'Extra Income'} amount={500} />
                            <ReportItem label={'Payment Of Salary'} amount={500} />
                            <ReportItem label={'Bank Deposit'} amount={500} />
                            <ReportItem label={'Bank Withdraw'} amount={500} />
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default CollectionReports;