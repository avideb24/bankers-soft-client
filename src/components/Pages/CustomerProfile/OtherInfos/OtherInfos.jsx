import { Link } from "react-router-dom";
import { FaFolder } from "react-icons/fa";
import TransactionTable from "./TransactionTable/TransactionTable";


const OtherInfos = () => {

    // fake data
    const data = [
        {date: '25-06-2024', balance: 2000}
    ]

    return (
        <div className="w-full md:w-4/12 ">
            
            {/* file documents */}
            <div className="bg-white p-5 shadow-sm">
                <h2 className="text-lg md:text-xl font-bold pb-2 border-b border-b-slate-300 mb-3">Other Documents</h2>
                <div className="space-y-2">
                    <Link to={'/customer-documents'} className="flex items-center gap-1 bg-slate-300 px-3 py-1 rounded-sm font-semibold">
                        <FaFolder className="mt-[2px]" />
                        <span>Customer Documents</span>
                    </Link>
                    <Link to={'/nominee-documents'} className="flex items-center gap-1 bg-slate-300 px-3 py-1 rounded-sm font-semibold">
                        <FaFolder className="mt-[2px]" />
                        <span>Nominee Documents</span>
                    </Link>
                </div>
            </div>

            {/* transactions */}
            <TransactionTable title={'Share'} data={data} />
            <TransactionTable title={'Savings'} data={data} />
            <TransactionTable title={'Fixed Deposit'} data={data} />
            <TransactionTable title={'DPS'} data={data} />
            <TransactionTable title={'Loan'} data={data} />

        </div>
    );
};

export default OtherInfos;