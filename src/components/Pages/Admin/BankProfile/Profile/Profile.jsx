import { PiBankFill } from "react-icons/pi";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import Button from "../../../../Shared/Button/Button";
import { useTranslation } from "react-i18next";


const Profile = () => {

    // translation ---------------
    const {t} = useTranslation();
    const lang = t('Banking').BankProfile;
    // ---------------------------


    // bank deposit
    const handleBankDeposit = e => {
        e.preventDefault();

        const depositData = {
            type: 'Deposit',
            date: e.target.date.value,
            amount: e.target.amount.value,
        }

        console.log(depositData);
    };


    // bank withdraw
    const handleBankWithdraw = e => {
        e.preventDefault();

        const withdrawData = {
            type: 'Withdraw',
            date: e.target.date.value,
            amount: e.target.amount.value,
        }

        console.log(withdrawData);
    };


    return (
        <div className="bg-white p-5 shadow-sm rounded-sm">
            <h2 className="text-lg md:text-xl font-bold flex items-center gap-1 pb-2 mb-4 border-b border-b-slate-300"><PiBankFill className="mt-1" />{lang.bankProfile}</h2>

            <div className="flex flex-col items-center gap-1">
                <MdAccountBalanceWallet className="text-2xl md:text-5xl" />
                <h2 className="text-lg md:text-2xl font-bold">Sonali Bank</h2>
                <p>{lang.bankDeposit}: <span className="text-base md:text-lg">৳</span>500.00</p>
                <div className="flex items-center gap-3 mt-4">

                    {/* deposit btn */}
                    <Button text={lang.deposit} bg="bg-green-600" icon={FaCirclePlus} handleClick={() => document.getElementById("my_modal_1").showModal()} />

                    {/* deposit modal */}
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box p-4 relative bg-white">
                            <h3 className="text-base md:text-xl font-semibold flex items-center gap-2"><FaCirclePlus />{lang.bankDeposit}</h3>
                            {/* date form */}
                            <form onSubmit={handleBankDeposit} className="pt-4">
                                <div className="flex gap-3">
                                    {/* date */}
                                    <div className="w-1/2">
                                        <label htmlFor="date" className="font-bold">{lang.date}</label>
                                        <input type="date" className="w-full px-2 py-1 my-2 bg-white border border-slate-300 outline-none" name="date" id="date" required />
                                    </div>
                                    {/* amount */}
                                    <div className="w-1/2">
                                        <label htmlFor="amount" className="font-bold">{lang.amount}</label>
                                        <input type="number" className="w-full px-2 py-1 mt-2 bg-white border border-slate-300 outline-none" name="amount" id="amount" placeholder={lang.amount} required />
                                    </div>
                                </div>
                                <div className="text-right">
                                    <input type="submit" value={lang.deposit} className="bg-green-600 text-white font-semibold px-3 py-1 rounded-sm mt-6 cursor-pointer" />
                                </div>
                            </form>
                            {/* close btn */}
                            <div className="modal-action text-right absolute right-28 bottom-4">
                                <form method="dialog">
                                    <button className=" bg-red-600 text-white font-semibold px-3 py-1 rounded-sm mt-5">{lang.close}</button>
                                </form>
                            </div>
                        </div>
                    </dialog>



                    <p className="w-[1px] h-3 bg-slate-400"></p>

                    {/* withdraw btn */}
                    <Button text={lang.withdraw} bg="bg-red-600" icon={FaCircleMinus} handleClick={() => document.getElementById("my_modal_2").showModal()} />

                    {/* withdraw modal */}
                    <dialog id="my_modal_2" className="modal">
                        <div className="modal-box p-4 relative bg-white">
                            <h3 className="text-base md:text-xl font-semibold flex items-center gap-2"><FaCircleMinus />{lang.bankWithdraw}</h3>
                            {/* date form */}
                            <form onSubmit={handleBankWithdraw} className="pt-4">
                                <div className="flex gap-3">
                                    {/* date */}
                                    <div className="w-1/2">
                                        <label htmlFor="date" className="font-bold">{lang.date}</label>
                                        <input type="date" className="w-full px-2 py-1 my-2 bg-white border border-slate-300 outline-none" name="date" id="date" required />
                                    </div>
                                    {/* amount */}
                                    <div className="w-1/2">
                                        <label htmlFor="amount" className="font-bold">{lang.amount}</label>
                                        <input type="number" className="w-full px-2 py-1 mt-2 bg-white border border-slate-300 outline-none" name="amount" id="amount" placeholder={lang.amount} required />
                                    </div>
                                </div>
                                <div className="text-right">
                                    <input type="submit" value={lang.withdraw} className="bg-green-600 text-white font-semibold px-3 py-1 rounded-sm mt-6 cursor-pointer" />
                                </div>
                            </form>
                            {/* close btn */}
                            <div className="modal-action text-right absolute right-28 bottom-4">
                                <form method="dialog">
                                    <button className=" bg-red-600 text-white font-semibold px-3 py-1 rounded-sm mt-5">{lang.close}</button>
                                </form>
                            </div>
                        </div>
                    </dialog>

                </div>
            </div>

        </div>
    );
};

export default Profile;