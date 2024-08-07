import Header from "../../../../components/Shared/Header/Header";
import { MdLocalPrintshop } from "react-icons/md";
import { FaUserTie, FaWallet } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { IoMdWallet, IoMdCash } from "react-icons/io";
import { RiDonutChartFill, RiFlowerFill } from "react-icons/ri";
import { SiGoogletagmanager } from "react-icons/si";
import { BsGridFill } from "react-icons/bs";
import { PiBankFill } from "react-icons/pi";
import PropTypes from 'prop-types';
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useTranslation } from "react-i18next";


const ReportElement = ({ text, amount, icon: Icon }) => (
    <div className="bg-slate-200 flex justify-center sm:justify-start gap-2 px-3 py-2 rounded-sm">
        <Icon className='text-5xl' />
        <div className="flex flex-col justify-between">
            <p className="text-lg font-bold flex items-center"><TbCurrencyTaka />{amount}</p>
            <p className="font-semibold ml-1">{text}</p>
        </div>
    </div>
)


const SattlementReports = () => {

    // translation ----------------
    const { t } = useTranslation();
    const lang = t('Reports').SettlementReports;
    // ---------------------------

    const printedContentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => printedContentRef.current
    })

    return (
        <div>
            <Header title={lang.settlementReports} />

            <div className="bg-white m-4 p-5">

                <button onClick={handlePrint} className="bg-sky-600 px-3 py-1 text-white  font-semibold flex items-center gap-2 rounded-sm mx-auto"><MdLocalPrintshop />{lang.print}</button>

                {/* reports */}
                <div ref={printedContentRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-10 pb-6">
                    <ReportElement text={lang.ownersShare} amount={'204'} icon={FaUserTie} />
                    <ReportElement text={lang.customersShare} amount={'10004'} icon={IoMdWallet} />
                    <ReportElement text={lang.customersSavings} amount={'204'} icon={FaWallet} />
                    <ReportElement text={lang.fixedDeposit} amount={'204'} icon={RiDonutChartFill} />
                    <ReportElement text={lang.customerDps} amount={'204'} icon={SiGoogletagmanager} />
                    <ReportElement text={lang.insurance} amount={'204'} icon={RiFlowerFill} />
                    <ReportElement text={lang.customerLoan} amount={'204'} icon={BsGridFill} />
                    <ReportElement text={lang.bankDeposit} amount={'204'} icon={PiBankFill} />
                    <ReportElement text={lang.totalProfit} amount={'204'} icon={IoMdCash} />
                </div>

            </div>
        </div>
    );
};

export default SattlementReports;


ReportElement.propTypes = {
    text: PropTypes.string.isRequired,
    amount: PropTypes.string,
    icon: PropTypes.elementType.isRequired,
};