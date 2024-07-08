import { Link } from "react-router-dom";
import { FaFolder } from "react-icons/fa";
import TransactionTable from "./TransactionTable/TransactionTable";
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';


const OtherInfos = ({isAdmin}) => {

    // fake data
    const data = [
        {date: '25-06-2024', balance: 2000}
    ];



    // ------------------------------------

    // translations --------------
    const {t} = useTranslation();
    const lang = t('Profile').Customer;
    // ---------------------------


    return (
        <div className="w-full md:w-4/12 ">
            
            {/* file documents */}
            <div className="bg-white p-5 shadow-sm">
                <h2 className="text-lg md:text-xl font-bold pb-2 border-b border-b-slate-300 mb-3">{lang.otherDocuments}</h2>
                <div className="space-y-2">
                    <Link to={isAdmin ? '/admin/customer-documents' : '/customer/customer-documents'} className="flex items-center gap-1 bg-slate-300 px-3 py-1 rounded-sm font-semibold">
                        <FaFolder className="mt-[2px]" />
                        <span>{lang.customerDocuments}</span>
                    </Link>
                    <Link to={isAdmin ? '/admin/nominee-documents' : '/customer/nominee-documents'} className="flex items-center gap-1 bg-slate-300 px-3 py-1 rounded-sm font-semibold">
                        <FaFolder className="mt-[2px]" />
                        <span>{lang.nomineeDocuments}</span>
                    </Link>
                </div>
            </div>

            {/* transactions */}
            <TransactionTable title={lang.share} data={data} />
            <TransactionTable title={lang.savings} data={data} />
            <TransactionTable title={lang.fixedDeposit} data={data} />
            <TransactionTable title={lang.dps} data={data} />
            <TransactionTable title={lang.loan} data={data} />

        </div>
    );
};

export default OtherInfos;


OtherInfos.propTypes = {
    isAdmin: PropTypes.bool,
};