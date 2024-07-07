import CompleteProfile from "../../../components/Pages/AdminHome/CompleteProfile/CompleteProfile";
import LastTransactions from "../../../components/Pages/AdminHome/LastTransactions/LastTransactions";
import Overview from "../../../components/Pages/AdminHome/Overview/Overview";
import TodaysReport from "../../../components/Pages/AdminHome/TodaysReport/TodaysReport";
import Header from "../../../components/Shared/Header/Header";

const Dashboard = () => {
    return (
        <div>
            <Header title="home" />

            <div className="m-4">
                <CompleteProfile />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Overview />
                    <LastTransactions />
                </div>
                <TodaysReport />
            </div>

        </div>
    );
};

export default Dashboard;