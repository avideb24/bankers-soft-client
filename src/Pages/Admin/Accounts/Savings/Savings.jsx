import { useTranslation } from "react-i18next";
import AccountCommon from "../../../../components/Pages/Accounts/AccountCommon/AccountCommon";
import { RiBankCardFill } from "react-icons/ri";


const Savings = () => {

    // translation -----------
    const {t} = useTranslation();
    const lang = t('Accounts').PageTitles;
    // -----------------------


    return (
        <AccountCommon title={lang.savings} icon={RiBankCardFill} />
    );
};

export default Savings;