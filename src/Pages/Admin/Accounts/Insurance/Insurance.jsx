import { useTranslation } from "react-i18next";
import AccountCommon from "../../../../components/Pages/Accounts/AccountCommon/AccountCommon";
import { RiFlowerFill } from "react-icons/ri";

const Insurance = () => {

    // translation --------------
    const {t} = useTranslation();
    const lang = t('Accounts').PageTitles;
    // --------------------------

    return (
        <AccountCommon accountType={'insurance'} title={lang.insurance} icon={RiFlowerFill} />
    );
};

export default Insurance;