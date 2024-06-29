import LastTransactions from "../../../components/Pages/UserProfile/LastTransactions/LastTransactions";
import ProfileInfos from "../../../components/Pages/UserProfile/ProfileInfos/ProfileInfos";
import Header from "../../../components/Shared/Header/Header";


const UserProfile = () => {
    return (
        <div>
            <Header title="User Profile" />

            <div className="m-4 flex flex-col lg:flex-row gap-6">
                <ProfileInfos />
                <LastTransactions />
            </div>
            
        </div>
    );
};

export default UserProfile;