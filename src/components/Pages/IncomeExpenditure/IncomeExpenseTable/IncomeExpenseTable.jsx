import { FaChartBar } from "react-icons/fa";
import { MdLocalPrintshop } from "react-icons/md";
import Button from "../../../Shared/Button/Button";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";


const IncomeExpenseTable = () => {

    // fake data
    const datas = [
        { type: 'Income', date: '24-06-24', amount: 200 },
        { type: 'Expense', date: '24-06-24', amount: 100 },
        { type: 'Income', date: '24-06-24', amount: 200 },
    ];

    const tableHeads = ['Trx Type', 'Trx Date', 'Amount', 'Current Balance'];


    // codes

    const printedContentRef = useRef();


    const handlePrint = useReactToPrint({
        content: () => printedContentRef.current
    })


    return (
        <div className="bg-white p-5 shadow-sm mt-6  ">

            <div className="flex justify-between items-center gap-3 pb-3 border-b border-b-slate-300 mb-5">
                <h2 className="flex items-center gap-2 text-base md:text-lg font-bold"><FaChartBar />Income - Expenditure (Table)</h2>
                <Button text="Print" icon={MdLocalPrintshop} bg="bg-sky-500" handleClick={handlePrint} />
            </div>

            {/* table / printed document */}
            <div>
                <table ref={printedContentRef} className="w-full text-center">
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
                            datas.map((data, idx) =>
                                <tr key={idx}>
                                    <td>{data?.type}</td>
                                    <td>{data?.date}</td>
                                    <td className="flex justify-center items-center gap-1">
                                        {
                                            data?.type == 'Income' ?
                                            <FaCirclePlus className="text-green-600 mt-[2px]" /> : <FaCircleMinus className="text-red-600 mt-[2px]" />
                                        }
                                        <span className="text-base md:text-lg">৳</span>{data?.amount}
                                    </td>
                                    <td><span className="text-base md:text-lg">৳</span>500</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default IncomeExpenseTable;