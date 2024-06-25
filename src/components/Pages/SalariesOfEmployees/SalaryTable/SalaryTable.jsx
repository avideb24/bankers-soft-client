import { FaChartBar } from "react-icons/fa";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";


const SalaryTable = () => {

    // fake data
    const datas = [
        { type: 'Income', date: '24-06-24', amount: 200 },
        { type: 'Expense', date: '24-06-24', amount: 100 },
        { type: 'Income', date: '24-06-24', amount: 200 },
        { type: 'Income', date: '24-06-24', amount: 200 },
    ];

    const tableHeads = ['Trx Type', 'Trx Date', 'Amount', 'Current Balance'];

    return (
        <div className="bg-white p-5">

            <div className="flex justify-between items-center gap-3 pb-3 border-b border-b-slate-300 mb-5">
                <h2 className="flex items-center gap-2 text-base md:text-lg font-bold"><FaChartBar className="mt-1" />Income Expenditure</h2>
            </div>

            {/* content / table */}
            <div>
                <table className="w-full text-center border-collapse">
                    <thead>
                        <tr>
                            {
                                tableHeads?.map(head =>
                                    <th key={head} className="bg-slate-100 p-1 font-bold">{head}</th>
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

export default SalaryTable;