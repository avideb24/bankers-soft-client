import { useReactToPrint } from "react-to-print";
import Header from "../../../../components/Shared/Header/Header";
import { MdLocalPrintshop } from "react-icons/md";
import { useRef } from "react";


const CollectionSheet = () => {

    const printedContentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => printedContentRef.current
    });


    const tableHeaders = ['A/c', 'Names', 'Mobile', 'Savings', 'Loans', 'DPS', 'Area'];


    return (
        <div>
            <Header title="Collection Sheet" />

            <div className="bg-white m-4 p-5">

                {/* print btn */}
                <button onClick={handlePrint} className="bg-sky-600 px-3 py-1 text-white  font-semibold flex items-center gap-2 rounded-sm mx-auto"><MdLocalPrintshop />Print</button>

                {/* printed document */}
                <div ref={printedContentRef}>

                    {/* company info */}
                    <div className="text-center space-y-1 pt-6 pb-4">
                        <h3 className="text-xl font-bold">Bazar Zone</h3>
                        <p><span className="font-semibold">Address: </span>Dinajpur</p>
                        <div className="flex justify-center items-center gap-2">
                            <p><span className="font-semibold">Mobile: </span>01723622125</p>
                            <p><span className="font-semibold">E-mail: </span>avideb@gmail.com</p>
                        </div>
                    </div>

                    {/* data table */}
                    <div className="overflow-x-scroll md:overscroll-none">
                        <table className="bg bg-slate-50 w-full text-center border-collapse">
                            <thead>
                                <tr>
                                    {
                                        tableHeaders.map(header =>
                                            <th key={header} className="border border-slate-300 p-1">{header}</th>
                                        )
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-slate-300 p-1"><span className="text-base md:text-lg">৳</span>24545</td>
                                    <td className="border border-slate-300 p-1">Avi Debnath</td>
                                    <td className="border border-slate-300 p-1">01723622125</td>
                                    {/* savings */}
                                    <td className="border border-slate-300 p-1">
                                        <span className="text-base md:text-lg">৳</span>5454
                                    </td>
                                    <td className="grid grid-cols-2 items-center gap-3 border border-slate-300 p-1 min-w-60">
                                        {/* per instalment */}
                                        <p className="flex justify-between items-center">
                                            <span className="font-bold">Per Instalment</span>
                                            <span><span className="text-base md:text-lg">৳</span>500</span>
                                        </p>
                                        {/* collection */}
                                        <p className="flex justify-between items-center">
                                            <span className="font-bold">Colletion</span>
                                            <span><span className="text-base md:text-lg">৳</span>2000</span>
                                        </p>
                                    </td>
                                    {/* DPS */}
                                    <td className="border border-slate-300 p-1">
                                        <span className="text-base md:text-lg">৳</span>545
                                    </td>
                                    <td className="border border-slate-300 p-1">Nilphamari</td>
                                </tr>

                                {/* total row */}
                                <tr>
                                    <td className="font-bold border border-slate-300 p-1">Total</td>
                                    <td className="border border-slate-300 p-1"></td>
                                    <td className="border border-slate-300 p-1"></td>
                                    <td className="border border-slate-300 p-1"></td>
                                    <td className="border border-slate-300 p-1"></td>
                                    <td className="border border-slate-300 p-1"></td>
                                    <td className="border border-slate-300 p-1"></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default CollectionSheet;