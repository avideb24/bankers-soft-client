import { useTranslation } from "react-i18next";
import LastTransactions from "../../../components/Pages/UserProfile/LastTransactions/LastTransactions";
import ProfileInfos from "../../../components/Pages/UserProfile/ProfileInfos/ProfileInfos";
import Header from "../../../components/Shared/Header/Header";


const UserProfile = () => {

    // translation ------------------
    const {t} = useTranslation();
    const lang = t('Profile').User;
    // ------------------------------


    return (
        <div>
            <Header title={lang.userProfile} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ProfileInfos />
                <LastTransactions />
            </div>
            
        </div>
    );
};

export default UserProfile;