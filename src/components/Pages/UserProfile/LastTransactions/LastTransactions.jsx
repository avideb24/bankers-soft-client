import { useTranslation } from "react-i18next";
import { FaChartBar } from "react-icons/fa";


const LastTransactions = () => {

    // fake data
    const transactions = [
        { type: 'Salary Expense', date: '02-07-2024', amount: 500, approval: 'Avi Debnath' },
        { type: 'Salary Expense', date: '02-07-2024', amount: 500, approval: 'Avi Debnath' },
        { type: 'Salary Expense', date: '02-07-2024', amount: 500, approval: 'Avi Debnath' },
        { type: 'Salary Expense', date: '02-07-2024', amount: 500, approval: 'Avi Debnath' },
    ];

    // ----------------------------------

     // translation ------------------
     const {t} = useTranslation();
     const lang = t('Profile').User;
     // ------------------------------


    return (
        <div className="w-full bg-white p-5 shadow-sm h-max">
            <h2 className="flex items-center gap-2 text-lg md:text-xl font-bold pb-3 border-b border-b-slate-300"><FaChartBar className="mt-1" />{lang.lastTransactions}</h2>

            {/* transaction table */}
            <div className=" overflow-x-scroll mt-5">
                <table className="w-full text-center border-collapse">
                    <thead>
                        <tr className="bg-slate-200">
                            <th className="border border-slate-300 font-bold p-1">Transaction Type</th>
                            <th className="border border-slate-300 font-bold p-1">Amount</th>
                            <th className="border border-slate-300 font-bold p-1">Approval</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transactions?.map((transaction, idx) =>
                                <tr key={idx}>
                                    <td className="border border-slate-300 p-1">
                                        <p className="font-bold">{transaction?.type}</p>
                                        <p>{transaction?.date}</p>
                                    </td>
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