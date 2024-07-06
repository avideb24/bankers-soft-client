import { useTranslation } from "react-i18next";
import OtherInfos from "../../../components/Pages/CustomerProfile/OtherInfos/OtherInfos";
import ProfileInfos from "../../../components/Pages/CustomerProfile/ProfileInfos/ProfileInfos";
import Header from "../../../components/Shared/Header/Header";


const CustomerProfile = () => {

    // translations --------------
    const {t} = useTranslation();
    const lang = t('Profile').Customer;
    // ---------------------------

    return (
        <div>
            <Header title={lang.customerProfile} />

            <div className="m-4 flex flex-col md:flex-row gap-5">
                <ProfileInfos />
                <OtherInfos />
            </div>
            
        </div>
    );
};

export default CustomerProfile;