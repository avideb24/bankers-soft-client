import { useTranslation } from "react-i18next";
import CustomerHeader from "../../../components/Shared/CustomerHeader/CustomerHeader";
import ProfileInfos from "../../../components/Pages/CustomerProfile/ProfileInfos/ProfileInfos";
import OtherInfos from "../../../components/Pages/CustomerProfile/OtherInfos/OtherInfos";


const CustomerAccounts = () => {
    // translations --------------
    const {t} = useTranslation();
    const lang = t('Profile').Customer;
    // ---------------------------

    return (
        <div>
            <CustomerHeader title={lang.customerProfile} />

            <div className="m-4 flex flex-col md:flex-row gap-5">
                <ProfileInfos isAdmin={false} />
                <OtherInfos isAdmin={false} />
            </div>
            
        </div>
    );
};

export default CustomerAccounts;