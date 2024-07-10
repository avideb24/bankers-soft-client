import Swal from "sweetalert2";
import Button from "../../../../Shared/Button/Button";
import { FaPlusCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";


const LoanElement = () => {

    // fake data
    const loanData = {
        savings: 1011.00,
        loanID: 1905,
        loanGroup: "Weekly",
        accountNo: 456456456,
        installmentDue: 0,
        loanAmount: 2200.00,
        installments: "20/20",
        perInstallment: 110.00,
        remainingLoan: 2200.00,
        lastPayment: "01st-July-2024",
        nextDate: "08th-July-2024",
        possibleTenorStart: "24th-July-2024",
        possibleTenorEnd: "12th-September-2044"
    };

    // ------------------------------------

    // translation -----------
    const {t} = useTranslation();
    const lang = t('Wallet').Loans;
    // -----------------------

    const handleCollection = e => {
        e.preventDefault();

        const collectionData = {
            collectionDate: e.target.collectionDate.value,
            installmentDue: e.target.installmentDue.value,
            fine: e.target.fine.value,
            installmemts: e.target.installmemts.value,
            savings: e.target.savings.value,
            loanCollection: e.target.loanCollection.value,
            totalCollection: e.target.totalCollection.value,
        };

        console.log(collectionData);
    };


    const handleFullPay = () => {
        Swal.fire({
            icon: "warning",
            title: "Are you sure?",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Full Pay"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: "success",
                    title: "Sucessfully Paid!",
                });
            }
        });
    }


    return (
        <div className="pb-5 pt-2">

            
            {/* btns */}
            <div className="flex gap-4 pb-4">
                {/* collection btn */}
                <Button text={lang.collection} icon={FaPlusCircle} bg={'bg-blue-600'} handleClick={() => document.getElementById('my_modal_10').showModal()} />
                {/* collection modal */}
                <dialog id="my_modal_10" className="modal">
                    <div className="modal-box p-4 relative bg-white">
                        <h3 className="text-base md:text-xl font-semibold flex items-center gap-2 capitalize"><FaPlusCircle /> Loan Collection</h3>
                        {/* date form */}
                        <form onSubmit={handleCollection} className="pt-4">

                            <div className="grid grid-cols-3 gap-3">
                                {/* Collection Date */}
                                <div>
                                    <label htmlFor="date" className="font-bold">Date</label>
                                    <input type="date" className="w-full px-2 py-1 mt-2 bg-white border border-slate-300 outline-none" name="collectionDate" id="date" required />
                                </div>
                                {/* Installment Due */}
                                <div>
                                    <label htmlFor="installmentDue" className="font-bold">Installment Due</label>
                                    <input type="number" className="w-full px-2 py-1 mt-2 bg-white border border-slate-300 outline-none" name="installmentDue" id="installmentDue" placeholder="0" required />
                                </div>
                                {/* Fine */}
                                <div>
                                    <label htmlFor="fine" className="font-bold">Fine</label>
                                    <input type="number" className="w-full px-2 py-1 mt-2 bg-white border border-slate-300 outline-none" name="fine" id="fine" placeholder="0" required />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3 my-2">
                                {/* Installments  */}
                                <div>
                                    <label htmlFor="installmemts" className="font-bold">Installments</label>
                                    <input type="number" className="w-full px-2 py-1 mt-2 bg-white border border-slate-300 outline-none" name="installmemts" id="installmemts" placeholder="0" defaultValue={'1'} required />
                                </div>
                                {/* Savings  */}
                                <div>
                                    <label htmlFor="savings" className="font-bold">Savings</label>
                                    <input type="number" className="w-full px-2 py-1 mt-2 bg-white border border-slate-300 outline-none" name="savings" id="savings" placeholder="0" required />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3 ">
                                {/* Loan Collection  */}
                                <div>
                                    <label htmlFor="installmemts" className="font-bold">Loan Collection</label>
                                    <input type="number" className="w-full px-2 py-1 mt-2 bg-white border border-slate-300 outline-none" name="loanCollection" id="loanCollection" placeholder="0.00" required />
                                </div>
                                {/* Total Collection  */}
                                <div>
                                    <label htmlFor="totalCollection" className="font-bold">Total Collection</label>
                                    <input type="number" className="w-full px-2 py-1 mt-2 bg-white border border-slate-300 outline-none" name="totalCollection" id="totalCollection" placeholder="0.00" required />
                                </div>
                            </div>

                            <div className="text-right">
                                <input type="submit" value="Save" className="bg-green-600 text-white font-semibold px-3 py-1 rounded-sm mt-6 cursor-pointer" />
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

                <Button text={lang.fullPay} icon={FaPlusCircle} bg={'bg-red-600'} handleClick={handleFullPay} />

            </div>

            <div className="flex justify-between items-center gap-3 p-2 bg-slate-200">
                <h2 className="text-base md:text-lg font-bold">{lang.currentLoans}</h2>

                <p>
                    <span className="font-bold"> {lang.savings}: </span>
                    <span><span className="text-base md:text-lg">৳</span>{loanData?.savings}</span>
                </p>
            </div>

            <div className="overflow-x-scroll">
                <table className="w-full min-w-max border-collapse text-left">
                    <tbody>
                        <tr>
                            {/* loan id */}
                            <th className="border border-slate-300 px-2 py-1 text-blue-600">{lang.loanId}</th>
                            <td className="border border-slate-300 px-2 py-1 text-center text-blue-600">:</td>
                            <td className="border border-slate-300 px-2 py-1 text-right text-blue-600">{loanData?.loanID}</td>
                        </tr>
                        <tr>
                            {/* loan group */}
                            <th className="border border-slate-300 px-2 py-1">{lang.loanGroup}</th>
                            <td className="border border-slate-300 px-2 py-1 text-center">:</td>
                            <td className="border border-slate-300 px-2 py-1 text-right">{loanData?.loanGroup}</td>
                        </tr>
                        <tr>
                            {/* Account No */}
                            <th className="border border-slate-300 px-2 py-1">{lang.accountNo}</th>
                            <td className="border border-slate-300 px-2 py-1 text-center">:</td>
                            <td className="border border-slate-300 px-2 py-1 text-right">{loanData?.accountNo}</td>
                        </tr>
                        <tr>
                            {/* Installment Due */}
                            <th className="border border-slate-300 px-2 py-1 text-red-600">{lang.installmentDue}</th>
                            <td className="border border-slate-300 px-2 py-1 text-center text-red-600">:</td>
                            <td className="border border-slate-300 px-2 py-1 text-right text-red-600">{loanData?.installmentDue}</td>
                        </tr>
                        <tr>
                            {/* Loan Amount */}
                            <th className="border border-slate-300 px-2 py-1">{lang.loanAmount}</th>
                            <td className="border border-slate-300 px-2 py-1 text-center">:</td>
                            <td className="border border-slate-300 px-2 py-1 text-right"><span className="text-base md:text-lg">৳</span>{loanData?.loanAmount}</td>
                        </tr>
                        <tr>
                            {/* Installments */}
                            <th className="border border-slate-300 px-2 py-1 text-blue-600">{lang.installments}</th>
                            <td className="border border-slate-300 px-2 py-1 text-center text-blue-600">:</td>
                            <td className="border border-slate-300 px-2 py-1 text-right text-blue-600">{loanData?.installments}</td>
                        </tr>
                        <tr>
                            {/* Per Installment */}
                            <th className="border border-slate-300 px-2 py-1">{lang.perInstallment}</th>
                            <td className="border border-slate-300 px-2 py-1 text-center">:</td>
                            <td className="border border-slate-300 px-2 py-1 text-right"><span className="text-base md:text-lg">৳</span>{loanData?.perInstallment}</td>
                        </tr>
                        <tr>
                            {/* Remaining Loan */}
                            <th className="border border-slate-300 px-2 py-1 text-red-600">{lang.remainingLoan}</th>
                            <td className="border border-slate-300 px-2 py-1 text-center text-red-600">:</td>
                            <td className="border border-slate-300 px-2 py-1 text-right text-red-600"><span className="text-base md:text-lg">৳</span>{loanData?.remainingLoan}</td>
                        </tr>
                        <tr>
                            {/* Last Payment */}
                            <th className="border border-slate-300 px-2 py-1">{lang.lastPayment}</th>
                            <td className="border border-slate-300 px-2 py-1 text-center">:</td>
                            <td className="border border-slate-300 px-2 py-1 text-right">{loanData?.lastPayment}</td>
                        </tr>
                        <tr>
                            {/* Next Date */}
                            <th className="border border-slate-300 px-2 py-1 text-blue-600">{lang.nextDate}</th>
                            <td className="border border-slate-300 px-2 py-1 text-center text-blue-600">:</td>
                            <td className="border border-slate-300 px-2 py-1 text-right text-blue-600">{loanData?.nextDate}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="p-2 bg-slate-200 font-bold">
                <p>{lang.tenor}</p>
                <p>{loanData?.possibleTenorStart} <span className="text-orange-700">{lang.to}</span> {loanData?.possibleTenorEnd}</p>
            </div>


        </div>
    );
};

export default LoanElement;