import { useRef } from "react";
import Header from "../../../../components/Shared/Header/Header";
import { MdLocalPrintshop } from "react-icons/md";
import { useReactToPrint } from "react-to-print";

const CustomerLaser = () => {

    const printedContentRef = useRef();


    // print fn
    const handlePrint = useReactToPrint({
        content: () => printedContentRef.current
    })

    return (
        <div>
            <Header title="Customer Laser" />

            <div className="bg-white m-4 p-5">
                <button onClick={handlePrint} className="bg-sky-600 px-3 py-1 text-white  font-semibold flex items-center gap-2 rounded-sm mx-auto"><MdLocalPrintshop />Print</button>

                {/* printed document */}
                <div ref={printedContentRef}>
                    <div className="text-center space-y-1 pt-6 pb-4">
                        <h3 className="text-xl font-bold">Bazar Zone</h3>
                        <p><span className="font-semibold">Address: </span>Dinajpur</p>
                        <div className="flex justify-center items-center gap-2">
                            <p><span className="font-semibold">Mobile: </span>01723622125</p>
                            <p><span className="font-semibold">E-mail: </span>avideb@gmail.com</p>
                        </div>
                    </div>
                    {/* data table */}
                    <table className="w-full text-center table-fixed bg-slate-50">
                        <thead>
                            <tr>
                                <th className="border border-slate-300 p-1 break-words">A/C</th>
                                <th className="border border-slate-300 p-1 break-words">Name</th>
                                <th className="border border-slate-300 p-1 break-words">Mobile</th> 
                                <th className="border border-slate-300 p-1 break-words">Savings</th>
                                <th className="border border-slate-300 p-1 break-words">Share</th>
                                <th className="border border-slate-300 p-1 break-words">Loan</th>
                                <th className="border border-slate-300 p-1 break-words">DPS</th>
                                <th className="border border-slate-300 p-1 break-words">FDR</th>
                                <th className="border border-slate-300 p-1 break-words">Insurance</th>
                                <th className="border border-slate-300 p-1 break-words">Area</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* data row */}
                            <tr>
                                <td className="border border-slate-300 p-1 break-words whitespace-normal">45654</td>
                                <td className="border border-slate-300 p-1 break-words whitespace-normal">Avi Debnath</td>
                                <td className="border border-slate-300 p-1 break-words whitespace-normal">01723622125</td>
                                <td className="border border-slate-300 p-1 break-words whitespace-normal">10052</td>
                                <td className="border border-slate-300 p-1 break-words whitespace-normal">45000</td>
                                <td className="border border-slate-300 p-1 break-words whitespace-normal">50000</td>
                                <td className="border border-slate-300 p-1 break-words whitespace-normal">5200</td>
                                <td className="border border-slate-300 p-1 break-words whitespace-normal">780</td>
                                <td className="border border-slate-300 p-1 break-words whitespace-normal">12000</td>
                                <td className="border border-slate-300 p-1 break-words whitespace-normal">Nilphamari</td>
                            </tr>

                            {/* total row */}
                            <tr className="border border-slate-300">
                                <td className="font-bold p-1">Total</td>
                                <td></td>
                                <td></td>
                                <td className="border border-slate-300 p-1 break-words whitespace-norma font-semibold">10554</td>
                                <td className="border border-slate-300 p-1 break-words whitespace-normal font-semibold">52341</td>
                                <td className="border border-slate-300 p-1 break-words whitespace-normal font-semibold">324345</td>
                                <td className="border border-slate-300 p-1 break-words whitespace-normal font-semibold">3454</td>
                                <td className="border border-slate-300 p-1 break-words whitespace-normal font-semibold">4504</td>
                                <td className="border border-slate-300 p-1 break-words whitespace-normal font-semibold">53452</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    {/* signature */}
                    <div className="flex flex-col items-end gap-1 pt-16">
                        <div className="w-32 h-[1px] bg-black"></div>
                        <p className="font-semibold mr-6">Signature</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default CustomerLaser;
