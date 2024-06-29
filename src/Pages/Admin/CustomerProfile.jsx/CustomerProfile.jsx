import OtherInfos from "../../../components/Pages/CustomerProfile/OtherInfos/OtherInfos";
import ProfileInfos from "../../../components/Pages/CustomerProfile/ProfileInfos/ProfileInfos";
import Header from "../../../components/Shared/Header/Header";


const CustomerProfile = () => {
    return (
        <div>
            <Header title="Customer Profile" />

            <div className="m-4 flex flex-col md:flex-row gap-5">
                <ProfileInfos />
                <OtherInfos />
            </div>
            
        </div>
    );
};

export default CustomerProfile;