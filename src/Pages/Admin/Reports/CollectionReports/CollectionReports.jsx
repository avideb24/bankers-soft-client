import Header from "../../../../components/Shared/Header/Header";
import { MdLocalPrintshop } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import ReportItem from "./ReportItem";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useTranslation } from "react-i18next";


const CollectionReports = () => {

     // translation ----------------
     const { t } = useTranslation();
     const lang = t('Reports').ColletionReports;
     const modals = t('Modals').SearchByDate;
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
            <Header title={lang.collectionReports} />

            <div className="bg-white m-4 p-5 ">
                <div className="flex justify-center gap-5">
                    <button onClick={handlePrint} className="bg-sky-600 px-3 py-1 text-white  font-semibold flex items-center gap-2 rounded-sm"><MdLocalPrintshop />{lang.print}</button>

                    {/* search btn */}
                    <button onClick={() => document.getElementById('my_modal_1').showModal()} className="bg-slate-600 px-3 py-1 text-white  font-semibold flex items-center gap-2 rounded-sm"><RiSearchLine />{lang.search}</button>
                    {/* search modal body */}
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box p-4 relative bg-white">
                            <h3 className="text-base md:text-xl font-semibold flex items-center gap-2"><FaCalendarAlt />{modals.searchByDate}</h3>
                            {/* date form */}
                            <form onSubmit={handleSearchByDate} className="pt-4">
                                <div className="flex gap-5">
                                    <div className="w-1/2">
                                        <label htmlFor="from" className="font-bold">{modals.fromDate}</label>
                                        <input type="date" className="w-full mt-2 bg-white border border-slate-300" name="fromDate" id="from" required />
                                    </div>
                                    <div className="w-1/2">
                                        <label htmlFor="to" className="font-bold">{modals.toDate}</label>
                                        <input type="date" className="w-full mt-2 bg-white border border-slate-300" name="toDate" id="to" required />
                                    </div>
                                </div>
                                <div className="text-right">
                                    <input type="submit" value={modals.search} className="bg-green-600 text-white font-semibold px-3 py-1 rounded-sm mt-6 cursor-pointer" />
                                </div>
                            </form>
                            {/* close btn */}
                            <div className="modal-action text-right absolute right-28 bottom-4">
                                <form method="dialog">
                                    <button className=" bg-red-600 text-white font-semibold px-3 py-1 rounded-sm mt-5">{modals.cancel}</button>
                                </form>
                            </div>
                        </div>
                    </dialog>

                </div>

                {/* reports */}
                <div ref={printedContentRef} className="pt-5">

                    {/* transaction */}
                    <h2 className="text-lg md:text-xl font-bold">{lang.transactionSummary}</h2>
                    <div>
                        <p className="flex items-center"><span className="block w-28 font-bold">{lang.transaction}</span>: <span className="text-lg ml-4 mr-[2px] mb-[2px]">৳ </span>500</p>
                        <p className="flex items-center"><span className="block w-28 font-bold">{lang.collection}</span>: <span className="text-lg ml-4 mr-[2px] mb-[2px]">৳ </span>500</p>
                        <p className="flex items-center"><span className="block w-28 font-bold">{lang.disbursement}</span>: <span className="text-lg ml-4 mr-[2px] mb-[2px]">৳ </span>500</p>
                    </div>

                    {/* collection reports */}
                    <h2 className="text-lg md:text-xl font-bold mt-5 mb-3">{lang.collectionReports}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        {/* 1st col */}
                        <div>
                            <ReportItem label={lang.shareDeposit} amount={500} />
                            <ReportItem label={lang.shareDeposit} amount={500} />
                            <ReportItem label={lang.savingsDeposit} amount={500} />
                            <ReportItem label={lang.savingsWithdraw} amount={500} />
                            <ReportItem label={lang.loan} amount={500} />
                            <ReportItem label={lang.loanCollection} amount={500} />
                        </div>
                        {/* 2nd col */}
                        <div>
                            <ReportItem label={lang.fixedDeposit} amount={500} />
                            <ReportItem label={lang.fdrWithdraw} amount={500} />
                            <ReportItem label={lang.dpsDeposit} amount={500} />
                            <ReportItem label={lang.dpsWithdraw} amount={500} />
                            <ReportItem label={lang.insuranceDeposit} amount={500} />
                            <ReportItem label={lang.insuranceWithdraw} amount={500} />
                        </div>
                        {/* 3rd col */}
                        <div>
                            <ReportItem label={lang.profits} amount={500} />
                            <ReportItem label={lang.expenses} amount={500} />
                            <ReportItem label={lang.extraIncome} amount={500} />
                            <ReportItem label={lang.paymentOfSalary} amount={500} />
                            <ReportItem label={lang.bankDeposit} amount={500} />
                            <ReportItem label={lang.bankWithdraw} amount={500} />
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default CollectionReports;