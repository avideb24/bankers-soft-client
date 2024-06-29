import { FaChartBar } from "react-icons/fa";


const LastTransactions = () => {

    // fake data
    const transactions = [
        {type: 'deposit', amount: 500, approval: 'Avi Debnath'},
        {type: 'deposit', amount: 500, approval: 'Avi Debnath'},
        {type: 'deposit', amount: 500, approval: 'Avi Debnath'},
        {type: 'deposit', amount: 500, approval: 'Avi Debnath'},
    ] 

    return (
        <div className="w-full lg:w-5/12 bg-white p-5 shadow-sm h-max">
            <h2 className="flex items-center gap-2 text-lg md:text-xl font-bold"><FaChartBar className="mt-1" />Last Transaction</h2>

            {/* transaction table */}
            <div className=" overflow-x-scroll">
                <table className="w-full text-center border-collapse">
                    <thead>
                        <tr>
                            <th className="border border-slate-300 font-bold p-1">Transaction Type</th>
                            <th className="border border-slate-300 font-bold p-1">Amount</th>
                            <th className="border border-slate-300 font-bold p-1">Approval</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transactions?.map((transaction, idx) =>
                                <tr key={idx}>
                                    <td className="border border-slate-300 p-1">{transaction?.type}</td>
                                    <td className="border border-slate-300 p-1"><span className="text-base md:text-lg">৳</span>{transaction?.amount}</td>
                                    <td className="border border-slate-300 p-1">{transaction?.approval}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default LastTransactions;