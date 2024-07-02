import { useParams } from "react-router-dom";
import Header from "../../../../components/Shared/Header/Header";
import Transactions from "../../../../components/Pages/Admin/Wallet/Transactions/Transactions";
import Profile from "../../../../components/Pages/Admin/Wallet/Profile/Profile";
import WalletBtns from "../../../../components/Pages/Admin/Wallet/WalletBtns/WalletBtns";
import SavingsElement from "../../../../components/Pages/Admin/Wallet/SavingsElement/SavingsElement";
import CustomerInfo from "../../../../components/Pages/Admin/Wallet/CustomerInfo/CustomerInfo";
import ShareElement from "../../../../components/Pages/Admin/Wallet/ShareElement/ShareElement";
import FixedDepositElement from "../../../../components/Pages/Admin/Wallet/FixedDepositElement/FixedDepositElement";
import DpsElement from "../../../../components/Pages/Admin/Wallet/DpsElement/DpsElement";


const Wallet = () => {

    // transaction fake data
    const data = [
        { type: 'Deposit', date: '2024-06-24', amount: 200, collector: 'Avi Debnath', },
        { type: 'Withdraw', date: '2024-06-21', amount: 100, collector: 'Avi Debnath', },
        { type: 'Deposit', date: '2024-06-27', amount: 200, collector: 'Avi Debnath', },
    ];

    // customer fake data
    const customer = {
        nameEn: 'Belal',
        image: 'https://i.ibb.co/NZFtFPL/user.png',
        nameBn: 'বেলাল',
        father: 'Hasan Ali',
        mother: 'Moriam Begum',
        birthDate: '1999-08-03',
        registrationDate: '2024-06-25',
        occupation: 'Farmer',
        gender: 'Male',
        presentAddress: 'Nilphamari',
        permanentAddress: 'Nilphamari',
        accountNumber: '586354',
        identityType: 'NID',
        identityNumber: '7854654654',
        mobile: '01723622125',
        email: 'belal@gmail.com',
    };


    // ---------------------------
    const { accountType, id } = useParams();

    console.log(accountType, id);

    return (
        <div>
            <Header title={`${accountType} Wallet`} />

            <div className="m-4 grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="bg-white p-5 shadow-sm">

                    <Profile profileData={customer} />

                    <div className="flex justify-between items-center gap-3 flex-wrap pt-6 pb-4 border-b border-b-slate-300">
                        {/* btns */}
                        <WalletBtns accountType={accountType} />

                        {/* total amount */}
                        <h2><span className="font-bold capitalize">{accountType}: </span><span className="text-base md:text-lg">৳</span>500</h2>
                    </div>

                    {/* share element */}
                    <div className={`${accountType == 'share' ? '' : 'hidden'}`}>
                        <ShareElement />
                    </div>

                    {/* savings element */}
                    <div className={`${accountType == 'savings' ? '' : 'hidden'}`}>
                        <SavingsElement />
                    </div>

                    {/* fixed deposit element */}
                    <div className={`${accountType == 'dps' ? '' : 'hidden'}`}>
                        <DpsElement />
                    </div>

                    {/* dps element */}
                    <div className={`${accountType == 'fixed-deposit' ? '' : 'hidden'}`}>
                        <FixedDepositElement />
                    </div>


                    {/* customer info */}
                    <CustomerInfo customer={customer} />

                </div>
                <Transactions title={accountType} data={data} />
            </div>
        </div>
    );
};

export default Wallet;