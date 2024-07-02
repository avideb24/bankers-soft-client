import Button from "../../../../Shared/Button/Button";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import PropTypes from 'prop-types';


const WalletBtns = ({accountType}) => {


    const handleDeposit = e => {
        e.preventDefault();

        // specify the deposit with accountType - (prop)

        const depositData = {
            depositDate: e.target.depositDate.value,
            depositAmount: e.target.depositAmount.value,
        };

        console.log(depositData);
    };
    
    const handleWithdraw = e => {
        e.preventDefault();

        // specify the withdraw with accountType - (prop)

        const depositData = {
            withdrawDate: e.target.withdrawDate.value,
            withdrawAmount: e.target.withdrawAmount.value,
        };

        console.log(depositData);
    };

    
    return (
        <div className={`${accountType == 'loan' ? 'hidden' : ''} flex items-center gap-2`}>
            {/* deposit btn */}
            <Button text="Deposit" icon={FaPlusCircle} bg="bg-blue-600" handleClick={() => document.getElementById('my_modal_2').showModal()} />

            {/* deposit modal body */}
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box p-4 relative bg-white">
                    <h3 className="text-base md:text-xl font-semibold flex items-center gap-2 capitalize"><FaPlusCircle />{accountType} Deposit</h3>
                    {/* date form */}
                    <form onSubmit={handleDeposit} className="pt-4">
                        <div className="flex gap-5">
                            <div className="w-1/2">
                                <label htmlFor="depositDate" className="font-bold">Date</label>
                                <input type="date" className="w-full px-2 py-1 mt-2 bg-white border border-slate-300 outline-none" name="depositDate" id="depositDate" required />
                            </div>
                            <div className="w-1/2">
                                <label htmlFor="depositAmount" className="font-bold">Amount</label>
                                <input type="number" className="w-full px-2 py-1 mt-2 bg-white border border-slate-300 outline-none" name="depositAmount" id="depositAmount" placeholder="Type here..." required />
                            </div>
                        </div>
                        <div className="text-right">
                            <input type="submit" value="Save" className="bg-green-600 text-white font-semibold px-3 py-1 rounded-sm mt-6 cursor-pointer" />
                        </div>
                    </form>
                    {/* close btn */}
                    <div className="modal-action text-right absolute right-24 bottom-4">
                        <form method="dialog">
                            <button className=" bg-red-600 text-white font-semibold px-3 py-1 rounded-sm mt-5">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>


            {/* withdraw btn */}
            <Button text="Withdraw" icon={FaMinusCircle} bg="bg-red-600" handleClick={() => document.getElementById('my_modal_3').showModal()} />

            {/* withdraw modal body */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box p-4 relative bg-white">
                    <h3 className="text-base md:text-xl font-semibold flex items-center gap-2 capitalize"><FaPlusCircle />{accountType} Withdraw</h3>
                    {/* date form */}
                    <form onSubmit={handleWithdraw} className="pt-4">
                        <div className="flex gap-5">
                            <div className="w-1/2">
                                <label htmlFor="withdrawDate" className="font-bold">Date</label>
                                <input type="date" className="w-full px-2 py-1 mt-2 bg-white border border-slate-300 outline-none" name="withdrawDate" id="withdrawDate" required />
                            </div>
                            <div className="w-1/2">
                                <label htmlFor="withdrawAmount" className="font-bold">Amount</label>
                                <input type="number" className="w-full px-2 py-1 mt-2 bg-white border border-slate-300 outline-none" name="withdrawAmount" id="withdrawAmount" placeholder="Type here..." required />
                            </div>
                        </div>
                        <div className="text-right">
                            <input type="submit" value="Save" className="bg-green-600 text-white font-semibold px-3 py-1 rounded-sm mt-6 cursor-pointer" />
                        </div>
                    </form>
                    {/* close btn */}
                    <div className="modal-action text-right absolute right-24 bottom-4">
                        <form method="dialog">
                            <button className=" bg-red-600 text-white font-semibold px-3 py-1 rounded-sm mt-5">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default WalletBtns;



WalletBtns.propTypes = {
    accountType: PropTypes.string.isRequired
};
