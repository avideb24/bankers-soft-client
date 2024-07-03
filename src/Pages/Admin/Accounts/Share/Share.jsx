import { useTranslation } from "react-i18next";
import AccountCommon from "../../../../components/Pages/Accounts/AccountCommon/AccountCommon";
import {RiStackshareFill } from "react-icons/ri";


const Share = () => {

    // translation -----------
    const {t} = useTranslation();
    const lang = t('Accounts').PageTitles;
    // -----------------------

    return (
        <AccountCommon title={lang.share} icon={RiStackshareFill} />
    );
};

export default Share;