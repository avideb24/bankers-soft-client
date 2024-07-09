import { useTranslation } from "react-i18next";
import Profile from "../../../components/Pages/Admin/BankProfile/Profile/Profile";
import Transactions from "../../../components/Pages/Admin/BankProfile/Transactions/Transactions";
import Header from "../../../components/Shared/Header/Header";


const BankProfile = () => {

    // translation ---------------
    const {t} = useTranslation();
    const lang = t('Banking').BankProfile;
    // ---------------------------
    
    return (
        <div>
            <Header title={lang.bankProfile} />

            <div className="m-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Profile />
                <Transactions />
            </div>
            
        </div>
    );
};

export default BankProfile;