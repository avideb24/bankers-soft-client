import Button from "../../../../Shared/Button/Button";
import { FaCirclePlus } from "react-icons/fa6";


const ProfileBtns = () => {


    // new share fn
    const handleNewShare = e => {
        e.preventDefault();

        const newShareData = {
            amount: e.target.amount.value,
            interest: e.target.interest.value,
            duration: e.target.duration.value,
            durationType: e.target.durationType.value,
        }

        console.log(newShareData);
    };

    // new savings fn
    const handleNewSavings = e => {
        e.preventDefault();

        const newSavingsData = {
            date: e.target.date.value,
            amount: e.target.amount.value,
            interest: e.target.interest.value,
        }

        console.log(newSavingsData);
    };

    // new fdr fn
    const handleNewFdr = e => {
        e.preventDefault();

        const newFdrData = {
            amount: e.target.amount.value,
            interest: e.target.interest.value,
            duration: e.target.duration.value,
            durationType: e.target.durationType.value,
        }

        console.log(newFdrData);
    };

    // new dps fn
    const handleNewDps = e => {
        e.preventDefault();

        const newDpsData = {
            group: e.target.group.value,
            perInstallment: e.target.perInstallment.value,
            interest: e.target.interest.value,
            duration: e.target.duration.value,
            installments: e.target.installments.value,
        }

        console.log(newDpsData);
    };

    // new dps fn
    const handleNewLoan = e => {
        e.preventDefault();

        const newLoanData = {
            group: e.target.group.value,
            loanAmount: e.target.loanAmount.value,
            savings: e.target.savings.value,
            interest: e.target.interest.value,
            installments: e.target.installments.value,
            fromDate: e.target.fromDate.value,
            toDate: e.target.toDate.value,
        }

        console.log(newLoanData);
    };

    // new insurance fn
    const handleNewInsurance = e => {
        e.preventDefault();

        const newInsuranceData = {
            date: e.target.date.value,
            amount: e.target.amount.value,
        }

        console.log(newInsuranceData);
    };


    return (
        <div className="flex gap-2 flex-wrap">

            {/* ---------------- SHARE---------------------- */}
            {/* new share btn */}
            <Button text={'Share'} icon={FaCirclePlus} bg={'bg-violet-600'} handleClick={() => document.getElementById('my_modal_1').showModal()} />

            {/* new share modal */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box p-4 relative bg-white rounded-none">
                    <h3 className="text-base md:text-xl font-semibold flex items-center gap-2"><FaCirclePlus />New Share</h3>
                    {/* share form */}
                    <form onSubmit={handleNewShare} className="pt-4 space-y-2 text-left">
                        {/* share amount and interest */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="amount" className="font-bold">Share Amount</label>
                                <input type="number" className="w-full mt-2 bg-white px-3 py-1 border border-slate-300 outline-none" name="amount" id="amount" placeholder="0.00" required />
                            </div>
                            <div>
                                <label htmlFor="interest" className="font-bold">Interest</label>
                                <input type="number" className="w-full bg-white px-3 py-1 mt-2 border border-slate-300 outline-none" name="interest" id="interest" placeholder="0%" required />
                            </div>
                        </div>
                        {/* duration */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="duration" className="font-bold">Duration</label>
                                <input type="number" className="w-full mt-2 bg-white px-3 py-1 border border-slate-300 outline-none" name="duration" id="duration" placeholder="0" required />
                            </div>
                            <div>
                                <label htmlFor="durationType" className="font-bold"></label>
                                <select name="durationType" id="durationType" className="w-full bg-white px-3 py-1 border border-slate-300 mt-7 outline-none" defaultValue={'Monthly'}>
                                    <option value="Monthly">Monthly</option>
                                    <option value="Weekly">Weekly</option>
                                    <option value="Daily">Daily</option>
                                </select>
                            </div>
                        </div>

                        {/* submit btn */}
                        <div className="text-right">
                            <input type="submit" value="Save" className="bg-green-600 text-white font-semibold px-3 py-1 rounded-sm mt-6 cursor-pointer" />
                        </div>
                    </form>
                    {/* close btn */}
                    <div className="modal-action text-right absolute right-20 bottom-4">
                        <form method="dialog">
                            <button className="bg-red-600 text-white font-semibold px-3 py-1 rounded-sm mt-5">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>


            {/* ---------------- SAVINGS---------------------- */}
            {/* new savings btn */}
            <Button text={'Savings'} icon={FaCirclePlus} bg={'bg-green-600'} handleClick={() => document.getElementById('my_modal_2').showModal()} />
            {/* new savings modal */}
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box p-4 relative bg-white rounded-none">
                    <h3 className="text-base md:text-xl font-semibold flex items-center gap-2"><FaCirclePlus />New Savings</h3>
                    {/* savings form */}
                    <form onSubmit={handleNewSavings} className="pt-4 space-y-2 text-left">
                        {/* date and interest */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="date" className="font-bold">Select Date</label>
                                <input type="date" className="w-full mt-2 bg-white px-3 py-1 border border-slate-300 outline-none" name="date" id="date" required />
                            </div>
                            <div>
                                <label htmlFor="interest" className="font-bold">Interest</label>
                                <input type="number" className="w-full bg-white px-3 py-1 mt-2 border border-slate-300 outline-none" name="interest" id="interest" placeholder="0%" required />
                            </div>
                        </div>
                        {/* amount */}
                        <div>
                            <label htmlFor="amount" className="font-bold">Amount</label>
                            <input type="number" className="w-full mt-2 bg-white px-3 py-1 border border-slate-300 outline-none" name="amount" id="amount" placeholder="0" required />
                        </div>

                        {/* submit btn */}
                        <div className="text-right">
                            <input type="submit" value="Save" className="bg-green-600 text-white font-semibold px-3 py-1 rounded-sm mt-6 cursor-pointer" />
                        </div>
                    </form>
                    {/* close btn */}
                    <div className="modal-action text-right absolute right-20 bottom-4">
                        <form method="dialog">
                            <button className="bg-red-600 text-white font-semibold px-3 py-1 rounded-sm mt-5">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>


            {/* ---------------- FDR---------------------- */}
            {/* new fdr btn */}
            <Button text={'FDR'} icon={FaCirclePlus} bg={'bg-orange-600'} handleClick={() => document.getElementById('my_modal_3').showModal()} />

            {/* new fdr modal */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box p-4 relative bg-white rounded-none">
                    <h3 className="text-base md:text-xl font-semibold flex items-center gap-2"><FaCirclePlus />New Share</h3>
                    {/* fdr form */}
                    <form onSubmit={handleNewFdr} className="pt-4 space-y-2 text-left">
                        {/* amount and interest */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="amount" className="font-bold">Deposit Amount</label>
                                <input type="number" className="w-full mt-2 bg-white px-3 py-1 border border-slate-300 outline-none" name="amount" id="amount" placeholder="0.00" required />
                            </div>
                            <div>
                                <label htmlFor="interest" className="font-bold">Interest</label>
                                <input type="number" className="w-full bg-white px-3 py-1 mt-2 border border-slate-300 outline-none" name="interest" id="interest" placeholder="0%" required />
                            </div>
                        </div>
                        {/* duration */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="duration" className="font-bold">Duration</label>
                                <input type="number" className="w-full mt-2 bg-white px-3 py-1 border border-slate-300 outline-none" name="duration" id="duration" placeholder="0" required />
                            </div>
                            <div>
                                <label htmlFor="durationType" className="font-bold"></label>
                                <select name="durationType" id="durationType" className="w-full bg-white px-3 py-1 border border-slate-300 mt-7 outline-none" defaultValue={'Monthly'}>
                                    <option value="Monthly">Monthly</option>
                                    <option value="Weekly">Weekly</option>
                                    <option value="Daily">Daily</option>
                                </select>
                            </div>
                        </div>

                        {/* submit btn */}
                        <div className="text-right">
                            <input type="submit" value="Save" className="bg-green-600 text-white font-semibold px-3 py-1 rounded-sm mt-6 cursor-pointer" />
                        </div>
                    </form>
                    {/* close btn */}
                    <div className="modal-action text-right absolute right-20 bottom-4">
                        <form method="dialog">
                            <button className="bg-red-600 text-white font-semibold px-3 py-1 rounded-sm mt-5">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>


            {/* ---------------- DPS ---------------------- */}
            {/* new dps btn */}
            <Button text={'DPS'} icon={FaCirclePlus} bg={'bg-sky-500'} handleClick={() => document.getElementById('my_modal_4').showModal()} />

            {/* new dps modal */}
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box p-4 relative bg-white rounded-none">
                    <h3 className="text-base md:text-xl font-semibold flex items-center gap-2"><FaCirclePlus />New DPS</h3>
                    {/* dps form */}
                    <form onSubmit={handleNewDps} className="pt-4 space-y-2 text-left">
                        {/* group and first installment */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="group" className="font-bold">Select a Group</label>
                                <select name="group" id="group" className="w-full bg-white px-3 py-1 border border-slate-300 mt-2 outline-none" defaultValue={'Monthly'}>
                                    <option value="Monthly">Monthly</option>
                                    <option value="Weekly">Weekly</option>
                                    <option value="Daily">Daily</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="perInstallment" className="font-bold">Per Installment <span className="text-pink-500 text-[10px] md:text-xs">(First Deposit)</span></label>
                                <input type="number" className="w-full bg-white px-3 py-1 mt-2 border border-slate-300 outline-none" name="perInstallment" id="perInstallment" placeholder="0.00" required />
                            </div>
                        </div>
                        {/* duration */}
                        <div className="grid grid-cols-3 gap-3">
                            <div>
                                <label htmlFor="duration" className="font-bold">Duration <span className="text-pink-500 text-[10px] md:text-xs">(Year)</span></label>
                                <input type="number" className="w-full mt-2 bg-white px-3 py-1 border border-slate-300 outline-none" name="duration" id="duration" placeholder="0" required />
                            </div>
                            <div>
                                <label htmlFor="interest" className="font-bold">Interest</label>
                                <input type="number" className="w-full bg-white px-3 py-1 mt-2 border border-slate-300 outline-none" name="interest" id="interest" placeholder="0%" required />
                            </div>
                            <div>
                                <label htmlFor="installments" className="font-bold">Installments</label>
                                <input type="number" className="w-full bg-white px-3 py-1 mt-2 border border-slate-300 outline-none" name="installments" id="installments" placeholder="0" required />
                            </div>
                        </div>

                        {/* submit btn */}
                        <div className="text-right">
                            <input type="submit" value="Save" className="bg-green-600 text-white font-semibold px-3 py-1 rounded-sm mt-6 cursor-pointer" />
                        </div>
                    </form>
                    {/* close btn */}
                    <div className="modal-action text-right absolute right-20 bottom-4">
                        <form method="dialog">
                            <button className="bg-red-600 text-white font-semibold px-3 py-1 rounded-sm mt-5">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>


            {/* ---------------- LOAN ---------------------- */}
            {/* new loan btn */}
            <Button text={'Loan'} icon={FaCirclePlus} bg={'bg-rose-600'} handleClick={() => document.getElementById('my_modal_8').showModal()} />

            {/* new loan modal */}
            <dialog id="my_modal_8" className="modal">
                <div className="modal-box p-4 relative bg-white rounded-none">
                    <h3 className="text-base md:text-xl font-semibold flex items-center gap-2"><FaCirclePlus />New Loan</h3>
                    {/* loan form */}
                    <form onSubmit={handleNewLoan} className="pt-4 space-y-2 text-left">
                        {/* group and amount */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="group" className="font-bold">Select Group</label>
                                <select name="group" id="group" className="w-full bg-white px-3 py-1 border border-slate-300 mt-2 outline-none" defaultValue={'Monthly'}>
                                    <option value="Monthly">Monthly</option>
                                    <option value="Weekly">Weekly</option>
                                    <option value="Daily">Daily</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="loanAmount" className="font-bold">Loan Amount</label>
                                <input type="number" className="w-full mt-2 bg-white px-3 py-1 border border-slate-300 outline-none" name="loanAmount" id="loanAmount" placeholder="0.00" required />
                            </div>
                        </div>
                        {/* savings , interest and installments */}
                        <div className="grid grid-cols-3 gap-3">
                            <div>
                                <label htmlFor="savings" className="font-bold">Savings</label>
                                <input type="number" className="w-full mt-2 bg-white px-3 py-1 border border-slate-300 outline-none" name="savings" id="savings" placeholder="0.00" required />
                            </div>
                            <div>
                                <label htmlFor="interest" className="font-bold">Interest</label>
                                <input type="number" className="w-full bg-white px-3 py-1 mt-2 border border-slate-300 outline-none" name="interest" id="interest" placeholder="0%" required />
                            </div>
                            <div>
                                <label htmlFor="installments" className="font-bold">Installments</label>
                                <input type="number" className="w-full bg-white px-3 py-1 mt-2 border border-slate-300 outline-none" name="installments" id="installments" placeholder="0" required />
                            </div>
                        </div>
                        {/* fromtDate and toDate */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="fromDate" className="font-bold">From Date</label>
                                <input type="date" className="w-full mt-2 bg-white px-3 py-1 border border-slate-300 outline-none" name="fromDate" id="fromDate" required />
                            </div>
                            <div>
                                <label htmlFor="toDate" className="font-bold">To Date</label>
                                <input type="date" className="w-full bg-white px-3 py-1 mt-2 border border-slate-300 outline-none" name="toDate" id="toDate" required />
                            </div>
                        </div>

                        {/* submit btn */}
                        <div className="text-right">
                            <input type="submit" value="Save" className="bg-green-600 text-white font-semibold px-3 py-1 rounded-sm mt-6 cursor-pointer" />
                        </div>
                    </form>
                    {/* close btn */}
                    <div className="modal-action text-right absolute right-20 bottom-4">
                        <form method="dialog">
                            <button className="bg-red-600 text-white font-semibold px-3 py-1 rounded-sm mt-5">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>


            {/* ---------------- INSURANCE ---------------------- */}
            {/* new insurance btn */}
            <Button text={'Insurance'} icon={FaCirclePlus} bg={'bg-emerald-700'} handleClick={() => document.getElementById('my_modal_6').showModal()} />

            {/* new insurance modal */}
            <dialog id="my_modal_6" className="modal">
                <div className="modal-box p-4 relative bg-white rounded-none">
                    <h3 className="text-base md:text-xl font-semibold flex items-center gap-2"><FaCirclePlus />New Insurance</h3>
                    {/* insurance form */}
                    <form onSubmit={handleNewInsurance} className="pt-4 space-y-2 text-left">

                        {/* date and amount */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="date" className="font-bold">Select Date</label>
                                <input type="date" className="w-full bg-white px-3 py-1 mt-2 border border-slate-300 outline-none" name="date" id="date" required />
                            </div>
                            <div>
                                <label htmlFor="amount" className="font-bold">Amount</label>
                                <input type="number" className="w-full bg-white px-3 py-1 mt-2 border border-slate-300 outline-none" name="amount" id="amount" placeholder="0.00" required />
                            </div>
                        </div>

                        {/* submit btn */}
                        <div className="text-right">
                            <input type="submit" value="Save" className="bg-green-600 text-white font-semibold px-3 py-1 rounded-sm mt-6 cursor-pointer" />
                        </div>
                    </form>
                    {/* close btn */}
                    <div className="modal-action text-right absolute right-20 bottom-4">
                        <form method="dialog">
                            <button className="bg-red-600 text-white font-semibold px-3 py-1 rounded-sm mt-5">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default ProfileBtns;