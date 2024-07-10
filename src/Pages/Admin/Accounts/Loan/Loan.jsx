import { useTranslation } from "react-i18next";
import AccountCommon from "../../../../components/Pages/Accounts/AccountCommon/AccountCommon";
import { BsGridFill } from "react-icons/bs";

const Loan = () => {

    // translation --------------
    const {t} = useTranslation();
    const lang = t('Accounts').PageTitles;
    // --------------------------

    return (
       <AccountCommon accountType={'loan'} title={lang.loan} icon={BsGridFill} />
    );
};

export default Loan;