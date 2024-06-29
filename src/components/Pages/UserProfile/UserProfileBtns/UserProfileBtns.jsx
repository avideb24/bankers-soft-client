import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";


const UserProfileBtns = () => {


    const handleDeposit = e => {
        e.preventDefault();
        const depositData = {
            dateTime: e.target.dateTime.value,
            amount: e.target.amount.value
        };

        console.log(depositData);
    }

    return (
        <div className="flex gap-2">

            {/* deposit btn */}
            <button onClick={() => document.getElementById('my_modal_1').showModal()} className="flex items-center gap-1 text-white font-semibold bg-green-600 px-3 py-1 rounded-sm"><FaPlusCircle />Deposit</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box p-4 relative bg-white">
                    <h3 className="text-base md:text-xl font-semibold flex items-center gap-2 mb-4"><FaPlusCircle />Deposit</h3>
                    {/* date form */}
                    <form onSubmit={handleDeposit}>
                        <div className="grid grid-cols-2 gap-3">
                            {/* date */}
                            <div>
                                <label htmlFor="date" className="font-semibold inline-block mb-2">Select Date</label>
                                <input type="datetime-local" name="dateTime" id="date" className="w-full bg-white border border-slate-300 px-2 py-1 rounded-sm outline-none" placeholder="Type here..." required />
                            </div>
                            {/* amount */}
                            <div>
                                <label htmlFor="amount" className="font-semibold inline-block mb-2">Amount</label>
                                <input type="number" name="amount" id="amount" className="w-full bg-white border border-slate-300 px-2 py-1 rounded-sm outline-none" placeholder="Type here..." required />
                            </div>
                        </div>
                        <div className="text-right">
                            <input type="submit" value="Deposit" className="bg-green-600 text-white font-semibold px-3 py-1 rounded-sm mt-6 cursor-pointer" />
                        </div>
                    </form>
                    {/* close btn */}
                    <div className="modal-action text-right absolute right-28 bottom-4">
                        <form method="dialog">
                            <button className=" bg-red-600 text-white font-semibold px-3 py-1 rounded-sm mt-5">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>



            {/* withdraw */}
            <button className="flex items-center gap-1 text-white font-semibold bg-red-600 px-3 py-1 rounded-sm"><FaMinusCircle />Withdraw</button>


        </div>
    );
};

export default UserProfileBtns;