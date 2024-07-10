import { FaEdit } from "react-icons/fa";
import Button from '../../../../Shared/Button/Button';
import { FaSquarePlus,FaRegMoneyBill1 } from "react-icons/fa6";
import { useTranslation } from "react-i18next";


const SavingsElement = () => {

    // all data are static
    // also set the interest defaultValue at modal


    // translation -----------
    const {t} = useTranslation();
    const lang = t('Wallet').Shared;
    const modal = t('Wallet').Modals;
    // -----------------------

    // update interest
    const handleUpdateInterest = e => {
        e.preventDefault();

        const newInterest = e.target.interest.value;

        console.log(newInterest);
    };

    // pay interest
    const handlePayInterest = e => {
        e.preventDefault();

    };


    return (
        <div className="py-4">

            <div className='flex items-center gap-3'>
                <p className='w-[30%] font-bold'>{lang.savingsInterest}</p>
                <p>:</p>
                <div className='flex gap-3'>
                    <p>10.00%</p>
                    <button onClick={() => document.getElementById('my_modal_6').showModal()} className='text-lg'><FaEdit /></button>

                    {/* modal */}
                    <dialog id="my_modal_6" className="modal">
                        <div className="modal-box p-4 relative bg-white">
                            <h3 className="text-base md:text-xl font-semibold flex items-center gap-2 capitalize"><FaEdit />{modal.updateInterest}</h3>
                            {/* date form */}
                            <form onSubmit={handleUpdateInterest} className="pt-4">
                                <div className="w-full">
                                    <label htmlFor="interest" className="font-bold">{modal.newInterest}</label>
                                    <input type="number" className="w-full px-2 py-1 mt-2 bg-white border border-slate-300 outline-none" name="interest" id="interest" placeholder={modal.newInterest} required />
                                </div>
                                <div className="text-right">
                                    <input type="submit" value={modal.update} className="bg-green-600 text-white font-semibold px-3 py-1 rounded-sm mt-6 cursor-pointer" />
                                </div>
                            </form>
                            {/* close btn */}
                            <div className="modal-action text-right absolute right-28 bottom-4">
                                <form method="dialog">
                                    <button className=" bg-red-600 text-white font-semibold px-3 py-1 rounded-sm mt-5">{modal.close}</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <p className='w-[30%] font-bold'>{lang.interest}</p>
                <p>:</p>
                <p><span className='text-base md:text-lg'>৳</span>1</p>
            </div>

            <div className='mt-2'>
                {/* interest pay btn */}
                <Button text={modal.payInterest} icon={FaSquarePlus} bg='bg-sky-600' handleClick={() => document.getElementById('my_modal_7').showModal()} />

                {/* pay interest modal */}
                {/* modal */}
                <dialog id="my_modal_7" className="modal">
                    <div className="modal-box p-4 relative bg-white">
                        <h3 className="text-base md:text-xl font-semibold flex items-center gap-2 capitalize mb-3"><FaRegMoneyBill1 />{modal.payInterest}</h3>
                        {/* date form */}
                        <form onSubmit={handlePayInterest} className="pt-3 border-t border-t-slate-300">
                            {/* savings interest */}
                            <div className='flex gap-2 mb-2'>
                                <p className='w-[30%] font-bold'>{modal.savingsInterest}</p>
                                <p>:</p>
                                <p>10.00%</p>
                            </div>
                            {/* current profile */}
                            <div className='flex gap-2'>
                                <p className='w-[30%] font-bold'>{modal.interest}</p>
                                <p>:</p>
                                <p><span className='text-base md:text-lg'>৳</span>1</p>
                            </div>
                            {/* Total days */}
                            <div className='flex gap-2'>
                                <p className='w-[30%] font-bold'>{modal.totalDays}</p>
                                <p>:</p>
                                <p>3</p>
                            </div>
                            <div className="text-right">
                                <input type="submit" value={modal.pay} className="bg-green-600 text-white font-semibold px-3 py-1 rounded-sm mt-6 cursor-pointer" />
                            </div>
                        </form>
                        {/* close btn */}
                        <div className="modal-action text-right absolute right-28 bottom-4">
                            <form method="dialog">
                                <button className=" bg-red-600 text-white font-semibold px-3 py-1 rounded-sm mt-5">{modal.close}</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>

        </div>
    );
};

export default SavingsElement;
