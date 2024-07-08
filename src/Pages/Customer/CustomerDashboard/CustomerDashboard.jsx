import { useTranslation } from "react-i18next";
import CustomerHeader from "../../../components/Shared/CustomerHeader/CustomerHeader";
import { PiBankBold } from "react-icons/pi";
import { FaChartBar } from "react-icons/fa";
import { Link } from "react-router-dom";


const Dashboard = () => {


    // fake data
    const transactions = [
        { type: 'Deposit', amount: '550', approver: 'Avi Debnath' },
        { type: 'Withdraw', amount: '550', approver: 'Avi Debnath' },
        { type: 'Withdraw', amount: '550', approver: 'Avi Debnath' },
        { type: 'Deposit', amount: '550', approver: 'Avi Debnath' },
    ];


    // ------------------------------------------------

    const tHeads = ['Trx Type', 'Amount', 'Approver'];

    // translation---------
    const { t } = useTranslation();
    const lang = t('Customer').Dashboard;
    // --------------------


    return (
        <div>
            <CustomerHeader title={lang.dashboard} />
            <div className="m-4 grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* accounts */}
                <div className="bg-white p-5 shadow-sm rounded-sm h-max">
                    <h2 className="text-base lg:text-xl font-bold flex items-center gap-2 pb-3 border-b border-slate-300 mb-6"><PiBankBold />{lang.yourAccounts}</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {/* share */}
                        <div className="flex flex-col items-center border border-slate-300 p-4">
                            <p><span className="text-base md:text-lg">৳</span>0.00</p>
                            <p className="font-bold ">{lang.share}</p>
                        </div>
                        {/* savings */}
                        <div className="flex flex-col items-center border border-slate-300 p-4">
                            <p><span className="text-base md:text-lg">৳</span>0.00</p>
                            <p className="font-bold ">{lang.savings}</p>
                        </div>
                        {/* dps */}
                        <div className="flex flex-col items-center border border-slate-300 p-4">
                            <p><span className="text-base md:text-lg">৳</span>0.00</p>
                            <p className="font-bold ">{lang.dps}</p>
                        </div>
                        {/* fixed deposit */}
                        <div className="flex flex-col items-center border border-slate-300 p-4">
                            <p><span className="text-base md:text-lg">৳</span>0.00</p>
                            <p className="font-bold ">{lang.fixedDeposit}</p>
                        </div>
                        {/* loan */}
                        <div className="flex flex-col items-center border border-slate-300 p-4">
                            <p><span className="text-base md:text-lg">৳</span>0.00</p>
                            <p className="font-bold ">{lang.loan}</p>
                        </div>
                        {/* insurance */}
                        <div className="flex flex-col items-center  border border-slate-300 p-4">
                            <p><span className="text-base md:text-lg">৳</span>0.00</p>
                            <p className="font-bold ">{lang.insurance}</p>
                        </div>
                    </div>
                </div>

                {/* transactions */}
                <div className="bg-white p-5 shadow-sm rounded-sm h-max">

                    {/* title */}
                    <div className="flex justify-between items-center pb-3 border-b border-slate-300 mb-6">
                        <div>
                            <h2 className="text-base lg:text-xl font-bold flex items-center gap-2"><FaChartBar />{lang.lastTransactions}</h2>
                            <p className="opacity-70 mt-1">{lang.last10Transactions}</p>
                        </div>
                        <Link to={'/customer/transactions'} className="bg-slate-200 px-2 py-[2px] rounded-sm text-xs">{lang.seeAll}</Link>
                    </div>

                    {/* transactions table */}
                    {
                        transactions?.length == 0 ?
                            <div>{lang.notFound}</div>
                            :
                            <div className="overflow-x-scroll">
                                <table className="w-full text-center">
                                    <thead>
                                        <tr>
                                            {
                                                tHeads?.map((head, idx) =>
                                                    <th key={idx} className="border border-slate-300 p-2">{head}</th>
                                                )
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            transactions?.map((trx, idx) =>
                                                <tr key={idx}>
                                                    <td className="border border-slate-300 p-1">{trx?.type}</td>
                                                    <td className="border border-slate-300 p-1">
                                                        <span className="text-base md:text-lg">৳</span>
                                                        {trx?.amount}
                                                        </td>
                                                    <td className="border border-slate-300 p-1">{trx?.approver}</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                    }

                </div>

            </div>
        </div>
    );
};

export default Dashboard;