import { FaChartBar } from "react-icons/fa";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import Swal from "sweetalert2";


const Transactions = () => {

    // fake data
    const transactions = [
        { type: 'Deposit', date: '02-06-2024', amount: 200 },
        { type: 'Withdraw', date: '02-06-2024', amount: 200 },
    ]


    // --------------------------

    const tableHeads = ['Trx Type', 'Trx Date', 'Amount', 'Current Balance', 'Delete']

    // delete transaction
    // please provide original id to the fn
    const handleDeleteTrx = id => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        }).then((result) => {
            if (result.isConfirmed) {

                // call your delete api here

                Swal.fire({
                    title: "Deleted!",
                    icon: "success"
                });
            }
        });

    };



    return (
        <div className="bg-white p-5 shadow-sm rounded-sm">

            <h2 className="text-lg md:text-xl font-bold flex items-center gap-1 pb-2 mb-4 border-b border-b-slate-300"><FaChartBar className="mt-1" />Transactions</h2>

            {/* transaction table */}
            {
                transactions?.length == 0 ?
                    <div className="py-2">No data found!</div>
                    :
                    <div className="overflow-x-scroll">
                        <table className="w-full text-center">
                            <thead>
                                <tr>
                                    {
                                        tableHeads?.map((head, idx) =>
                                            <th key={idx} className="px-1 py-2 bg-slate-200">{head}</th>
                                        )
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    transactions?.map((trx, idx) =>
                                        <tr key={idx} className="border-b border-b-slate-300">
                                            <td className="p-1">{trx?.type}</td>
                                            <td className="p-1">{trx?.date}</td>
                                            <td className="p-1 flex items-center gap-1">
                                                {
                                                    trx?.type == 'Deposit' ?
                                                        <FaCirclePlus className="text-green-600" /> :
                                                        <FaCircleMinus className="text-red-600" />
                                                }
                                                <span className="text-base md:text-lg">৳</span>
                                                {trx?.amount}
                                            </td>
                                            <td className="p-1"><span className="text-base md:text-lg">৳</span>500</td>
                                            <td className="p-1 text-xl md:text-2xl text-red-600">
                                                <button onClick={() => handleDeleteTrx(1)}><RiDeleteBin7Fill /></button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
            }

        </div>
    );
};

export default Transactions;