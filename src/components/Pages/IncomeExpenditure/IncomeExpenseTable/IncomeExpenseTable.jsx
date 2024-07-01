import { FaChartBar } from "react-icons/fa";
import { MdLocalPrintshop } from "react-icons/md";
import Button from "../../../Shared/Button/Button";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";


const IncomeExpenseTable = () => {

    // fake data
    const datas = [
        { type: 'Income', date: '24-06-2024', amount: 200 },
        { type: 'Expense', date: '24-06-2024', amount: 100 },
        { type: 'Income', date: '24-06-2024', amount: 200 },
    ];

    const tableHeads = ['Trx Type', 'Trx Date', 'Amount', 'Current Balance', 'Edit'];


    // codes

    const printedContentRef = useRef();


    const handlePrint = useReactToPrint({
        content: () => printedContentRef.current
    })

    const handleEdit = e => {
        e.preventDefault();

        const updatedData = {
            type: e.target.type.value,
            date: e.target.date.value?.split('-')?.reverse()?.join('-'),
            amount: e.target.amount.value,
        }

        console.log(updatedData);
    }

    return (
        <div className="bg-white p-5 shadow-sm mt-6  ">

            <div className="flex justify-between items-center gap-3 pb-3 border-b border-b-slate-300 mb-5">
                <h2 className="flex items-center gap-2 text-base md:text-lg font-bold"><FaChartBar />Income - Expenditure (Table)</h2>
                <Button text="Print" icon={MdLocalPrintshop} bg="bg-sky-500" handleClick={handlePrint} />
            </div>

            {/* table / printed document */}
            <div className="overflow-x-scroll">
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
                                    <td className="p-1">{data?.type}</td>
                                    <td className="p-1">{data?.date}</td>
                                    <td className="flex justify-center items-center gap-1 p-1">
                                        {
                                            data?.type == 'Income' ?
                                                <FaCirclePlus className="text-green-600 mt-[2px]" /> : <FaCircleMinus className="text-red-600 mt-[2px]" />
                                        }
                                        <span className="text-base md:text-lg">৳</span>{data?.amount}
                                    </td>
                                    <td className="p-1"><span className="text-base md:text-lg">৳</span>500</td>
                                    <td className="p-1">
                                        {/* edit btn */}
                                        <button onClick={() => document.getElementById(`my_modal_${idx + 8}`).showModal()} className="md:text-lg"><FaEdit /></button>

                                        {/* modal body */}
                                        <dialog id={`my_modal_${idx + 8}`} className="modal">
                                            <div className="modal-box min-w-80 relative bg-white">
                                                <div className="rounded-sm">
                                                    <h2 className="flex items-center gap-2 text-base md:text-xl font-bold pb-2"><FaEdit />Update Info</h2>
                                                    <form onSubmit={handleEdit} className="space-y-3">
                                                        <div className="grid grid-cols-2 gap-3">
                                                            {/* type */}
                                                            <div>
                                                                <label className="text-sm md:text-base font-semibold text-left block mb-2" htmlFor="type">Type</label>
                                                                <select name="type" className="w-full bg-white border border-slate-300 rounded-sm px-2 py-1 outline-none" id="type" defaultValue={data?.type}>
                                                                    <option value="Income">Income</option>
                                                                    <option value="Expense">Expense</option>
                                                                </select>
                                                            </div>
                                                            {/* date */}
                                                            <div>
                                                                <label className="text-sm md:text-base font-semibold text-left block mb-2" htmlFor="date">Date</label>
                                                                <input type="date" name="date" className="w-full bg-white border border-slate-300 rounded-sm px-2 py-1 outline-none" id="date" placeholder="Type here..." required defaultValue={data?.date?.split('-')?.reverse()?.join('-')} />
                                                            </div>
                                                        </div>
                                                        {/* amount */}
                                                        <label className="text-sm md:text-base font-semibold text-left block" htmlFor="amount">Amount</label>
                                                        <input type="number" name="amount" className="w-full bg-white border border-slate-300 rounded-sm px-2 py-1 outline-none" id="amount" placeholder="Type here..." required defaultValue={data?.amount} />
                                                        <div className="text-right">
                                                            <input type="submit" value="Save" className="bg-green-600 px-3 py-1 rounded-sm text-white font-semibold cursor-pointer" />
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="modal-action absolute right-24 bottom-6">
                                                    <form method="dialog">
                                                        {/* close btn */}
                                                        <button className="bg-red-600 text-white px-3 py-1 rounded-sm">Close</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>

                                    </td>
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