import { useTranslation } from "react-i18next";
import AccountCommon from "../../../../components/Pages/Accounts/AccountCommon/AccountCommon";
import { SiGoogletagmanager } from "react-icons/si";


const Dps = () => {

     // translation -----------
     const {t} = useTranslation();
     const lang = t('Accounts').PageTitles;
     // -----------------------

    return (
       <AccountCommon title={lang.dps} icon={SiGoogletagmanager}  />
    );
};

export default Dps;