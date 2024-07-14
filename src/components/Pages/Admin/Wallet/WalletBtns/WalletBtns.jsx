import Button from "../../../../Shared/Button/Button";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { FaCircleXmark } from "react-icons/fa6";
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";


const WalletBtns = ({title, accountType }) => {

    // translation ---------------
    const {t} = useTranslation();
    const deposit = t('Wallet').Modals.Deposit;
    const withdraw = t('Wallet').Modals.Withdraw;
    // ---------------------------

    // deposit fn
    const handleDeposit = e => {
        e.preventDefault();

        const depositDate = e.target.depositDate.value;
        const depositAmount = e.target.depositAmount.value;
        const installmemts = e.target.installmemts.value;

        console.log(depositDate, depositAmount, installmemts);


        // specify the deposit with accountType - (prop)

        if (accountType == 'share') {
            // call share deposit api here
        }
        else if (accountType == 'savings') {
            // call savings deposit api here
        }
        else if (accountType == 'dps') {
            // call dps deposit api here
        }
        else if (accountType == 'fixed-deposit') {
            // call fixed-deposit api here
        }
        else {
            // call insurance deposit api here
        }


    };

    // withdraw fn for savings, insurance
    const handleWithdraw = e => {
        e.preventDefault();

        // specify the withdraw with accountType - (prop)

        const withDrawData = {
            withdrawDate: e.target.withdrawDate.value,
            withdrawAmount: e.target.withdrawAmount.value,
        };

        console.log(withDrawData);
        
        if(accountType == 'savings'){
            // call your api here
        }
        else{
            // call your api here
        }

    };

    // withdraw fn for share - fixed deposit - dps
    const handleWithdrawClose = e => {
        e.preventDefault();

        if(accountType == 'share'){
            // call your api here
        }
        else if(accountType == 'fixed-deposit'){
            // call your api here
        }
        else{
            // call your api here
        }
    };


    return (
        <div className={`${accountType == 'loan' ? 'hidden' : ''} flex items-center gap-2`}>

            {/* fixed deposit acc */}
            <div className={`${accountType == 'fixed-deposit' ? '' : 'hidden'}`}>
                <p className="font-bold px-3 py-1 rounded-[4px] text-green-600 flex items-center gap-1" disabled><TiTick className="text-lg md:text-2xl" />{deposit.acountActivated}</p>
            </div>

            <div className={`${accountType == 'fixed-deposit' ? 'hidden' : ''}`}>
                {/* deposit btn */}
                <Button text={deposit.deposit} icon={FaPlusCircle} bg="bg-blue-600" handleClick={() => document.getElementById('my_modal_2').showModal()} />

                {/* deposit modal body */}
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box p-4 relative bg-white">
                        <h3 className="text-base md:text-xl font-semibold flex items-center gap-2 capitalize"><FaPlusCircle />{title} {deposit.deposit}</h3>
                        {/* date form */}
                        <form onSubmit={handleDeposit} className="pt-4">
                            <div className="flex gap-5">
                                <div className="w-1/2">
                                    <label htmlFor="depositDate" className="font-bold">{deposit.selectDate}</label>
                                    <input type="date" className="w-full px-2 py-1 mt-2 bg-white border border-slate-300 outline-none" name="depositDate" id="depositDate" required />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="depositAmount" className="font-bold">{deposit.amount}</label>
                                    <input type="number" className="w-full px-2 py-1 mt-2 bg-white border border-slate-300 outline-none" name="depositAmount" id="depositAmount" placeholder={deposit.amount} required />
                                </div>
                            </div>
                            <div className={`w-full ${accountType == 'dps' ? '' : 'hidden'}`}>
                                <label htmlFor="installmemts" className="font-bold">{deposit.installments}</label>
                                <input type="number" className="w-full px-2 py-1 mt-2 bg-white border border-slate-300 outline-none" name="installmemts" id="installmemts" placeholder={deposit.installments} required />
                            </div>
                            <div className="text-right">
                                <input type="submit" value={deposit.deposit} className="bg-green-600 text-white font-semibold px-3 py-1 rounded-sm mt-6 cursor-pointer" />
                            </div>
                        </form>
                        {/* close btn */}
                        <div className="modal-action text-right absolute right-24 bottom-4">
                            <form method="dialog">
                                <button className=" bg-red-600 text-white font-semibold px-3 py-1 rounded-sm mt-5">{deposit.cancel}</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>


            {/* withdraw btn for savings & insurance */}
            <div className={`${accountType === 'savings' || accountType === 'insurance' ? '' : 'hidden'}`}>
                {/* withdraw btn */}
                <Button text={withdraw.withdraw} icon={FaMinusCircle} bg="bg-red-600" handleClick={() => document.getElementById('my_modal_3').showModal()} />

                {/* withdraw modal body */}
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box p-4 relative bg-white">
                        <h3 className="text-base md:text-xl font-semibold flex items-center gap-2 capitalize"><FaPlusCircle />{title} {withdraw.withdraw}</h3>
                        {/* date form */}
                        <form onSubmit={handleWithdraw} className="pt-4">
                            <div className="flex gap-5">
                                <div className="w-1/2">
                                    <label htmlFor="withdrawDate" className="font-bold">{withdraw.selectDate}</label>
                                    <input type="date" className="w-full px-2 py-1 mt-2 bg-white border border-slate-300 outline-none" name="withdrawDate" id="withdrawDate" required />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="withdrawAmount" className="font-bold">{withdraw.amount}</label>
                                    <input type="number" className="w-full px-2 py-1 mt-2 bg-white border border-slate-300 outline-none" name="withdrawAmount" id="withdrawAmount" placeholder={withdraw.amount} required />
                                </div>
                            </div>
                            <div className="text-right">
                                <input type="submit" value={withdraw.withdraw} className="bg-green-600 text-white font-semibold px-3 py-1 rounded-sm mt-6 cursor-pointer" />
                            </div>
                        </form>
                        {/* close btn */}
                        <div className="modal-action text-right absolute right-28 bottom-4">
                            <form method="dialog">
                                <button className=" bg-red-600 text-white font-semibold px-3 py-1 rounded-sm mt-5">{withdraw.cancel}</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>


            {/* withdraw btn for share / fixed-deposit / dps */}
            <div className={`${accountType === 'share' || accountType === 'fixed-deposit' || accountType == 'dps' ? '' : 'hidden'}`}>
                {/* withdraw btn */}
                <Button text={withdraw.withdraw} icon={FaMinusCircle} bg="bg-red-600" handleClick={() => document.getElementById('my_modal_5').showModal()} />

                {/* withdraw modal body */}
                <dialog id="my_modal_5" className="modal">
                    <div className="modal-box p-4 relative bg-white">
                        <h3 className="text-base md:text-xl font-semibold flex items-center gap-2 capitalize"><FaMinusCircle />{title} {withdraw.withdraw}</h3>

                        <div className="grid grid-cols-2 gap-2 py-3">
                            <div>
                                {/* main amount */}
                                <div className="flex items-center gap-2">
                                    <p className="w-[50%]"><span className="font-bold">{withdraw.mainAmount}</span></p>
                                    <p>:</p>
                                    <p><span className="text-base md:text-lg">৳</span>5000</p>
                                </div>
                                {/* Interest*/}
                                <div className="flex items-center gap-2">
                                    <p className="w-[50%]"><span className="font-bold">{withdraw.interest}</span></p>
                                    <p>:</p>
                                    <p>10%</p>
                                </div>
                                {/* total amount */}
                                <div className="flex items-center gap-2">
                                    <p className="w-[50%]"><span className="font-bold">{withdraw.totalAmount}</span></p>
                                    <p>:</p>
                                    <p><span className="text-base md:text-lg">৳</span>5000</p>
                                </div>
                            </div>
                            <div>
                                {/* Duration */}
                                <div className="flex items-center gap-2">
                                    <p className="w-[50%]"><span className="font-bold">{withdraw.duration}</span></p>
                                    <p>:</p>
                                    <p>10 Week</p>
                                </div>
                                {/* amount interest */}
                                <div className="flex items-center gap-2">
                                    <p className="w-[50%]"><span className="font-bold">{withdraw.interestAmount}</span></p>
                                    <p>:</p>
                                    <p><span className="text-base md:text-lg">৳</span>1000</p>
                                </div>
                                {/*	Has crossed  */}
                                <div className="flex items-center gap-2">
                                    <p className="w-[50%]"><span className="font-bold">{withdraw.hascrossed}</span></p>
                                    <p>:</p>
                                    <p>0 Month</p>
                                </div>
                            </div>
                        </div>

                        {/* info form */}
                        <form onSubmit={handleWithdrawClose}>
                            <div className="flex gap-5">
                                <div className="w-1/2">
                                    <label htmlFor="amount" className="font-bold">{withdraw.amount}</label>
                                    <input type="number" className="w-full px-2 py-1 mt-2 bg-slate-300 border border-slate-300 outline-none" name="amount" id="amount" defaultValue={2000} disabled />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="currentProfit" className="font-bold">{withdraw.currentProfits}</label>
                                    <input type="number" className="w-full px-2 py-1 mt-2 bg-slate-300 border border-slate-300 outline-none" name="currentProfit" id="currentProfit" disabled defaultValue={0} />
                                </div>
                            </div>
                            <p className="font-bold pt-6 pb-3 text-orange-600">{withdraw.ifYou}</p>
                            <div className="flex gap-5">
                                <div className="w-1/2">
                                    <label className="font-bold text-green-600">{withdraw.customerWillReceive}</label>
                                    <input type="number" className="w-full px-2 py-1 mt-2 bg-slate-300 border border-slate-300 outline-none" defaultValue={2000} disabled />
                                </div>
                                {/* loss */}
                                <div className="w-1/2">
                                    <label className="font-bold text-red-600">{withdraw.totalLoss}</label>
                                    <input type="number" className="w-full px-2 py-1 mt-2 bg-slate-300 border border-slate-300 outline-none" disabled defaultValue={500} />
                                </div>
                            </div>
                            <div className="text-right">
                                <input type="submit" value={withdraw.withdraw} className="bg-green-600 text-white font-semibold px-3 py-1 rounded-sm mt-6 cursor-pointer" />
                            </div>
                        </form>

                        {/* close btn */}
                        <div className="modal-action text-right absolute -top-6 right-4">
                            <form method="dialog">
                                <button className="  text-red-600 text-lg md:text-2xl font-semibold rounded-sm mt-5"><FaCircleXmark /></button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>


        </div>
    );
};

export default WalletBtns;



WalletBtns.propTypes = {
    title: PropTypes.string,
    accountType: PropTypes.string,
};
