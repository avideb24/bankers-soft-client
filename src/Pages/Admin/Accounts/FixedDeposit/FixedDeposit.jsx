import { useTranslation } from "react-i18next";
import AccountCommon from "../../../../components/Pages/Accounts/AccountCommon/AccountCommon";
import { RiDonutChartFill} from "react-icons/ri";


const FixedDeposit = () => {

     // translation --------------
     const {t} = useTranslation();
     const lang = t('Accounts').PageTitles;
     // --------------------------

    return (
       <AccountCommon accountType={'fixed-deposit'} title={lang.fixedDeposit} icon={RiDonutChartFill} />
    );
};

export default FixedDeposit;