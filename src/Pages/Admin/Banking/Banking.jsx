import Button from "../../../components/Shared/Button/Button";
import Header from "../../../components/Shared/Header/Header";
import { PiBankFill } from "react-icons/pi";
import { FaCirclePlus } from "react-icons/fa6";


const Banking = () => {


    const handleAddBank = e => {
        e.preventDefault();

        const newBankData = {
            bankNameEn: e.target.bankNameEn.value,
            bankNameBn: e.target.bankNameBn.value,
            address: e.target.address.value
        }

        console.log(newBankData);

    }

    return (
        <div>
            <Header title="Banking" />

            <div className="bg-white m-4 p-5 shadow-sm">

                <div className="flex justify-between items-center gap-3 pb-3 border-b border-b-slate-300">
                    <h2 className="flex items-center gap-2 text-base md:text-xl font-bold"><PiBankFill className="mt-1" />Banking</h2>
                    <Button text="New Bank" icon={FaCirclePlus} bg="bg-sky-600" handleClick={() => document.getElementById('my_modal_1').showModal()} />

                    {/* modal body*/}
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box min-w-80 relative bg-white">
                            <h2 className="flex items-center gap-2 text-base md:text-xl font-bold px-4 py-4 border-b border-b-slate-300"><FaCirclePlus className="mt-1" />New Bank</h2>
                            <div className="rounded-sm">

                                {/* add new bank form */}
                                <form onSubmit={handleAddBank} className="space-y-3">
                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="text-sm md:text-base font-semibold" htmlFor="bankNameEn">Bank Name (English)</label>
                                            <input type="text" name="bankNameEn" className="w-full bg-white border border-slate-300 rounded-sm px-2 py-1 outline-none" id="bankNameEn" placeholder="Type here..." required />
                                        </div>
                                        <div>
                                            <label className="text-sm md:text-base font-semibold" htmlFor="bankNameBn">Bank Name (বাংলা)</label>
                                            <input type="text" name="bankNameBn" className="w-full bg-white border border-slate-300 rounded-sm px-2 py-1 outline-none" id="bankNameBn" placeholder="Type here..." required />
                                        </div>
                                    </div>
                                    {/* bank address */}
                                    <div>
                                        <label className="text-sm md:text-base font-semibold" htmlFor="address">Address</label>
                                        <input type="text" name="address" className="w-full bg-white border border-slate-300 rounded-sm px-2 py-1 outline-none" id="address" placeholder="Type here..." required />
                                    </div>
                                    <div className="text-right">
                                        <input type="submit" value="Save" className="bg-green-600 px-3 py-1 rounded-sm text-white font-semibold cursor-pointer" />
                                    </div>
                                </form>

                            </div>
                            <div className="modal-action absolute right-24 bottom-6">
                                <form method="dialog">
                                    {/* close btn */}
                                    <button className="bg-red-600 text-white px-3 py-1 rounded-sm">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>

                </div>

                {/* content */}
                <div>
                    <h2 className="p-3 text-base md:text-lg font-bold bg-slate-200 mt-3">Bank Name</h2>
                    {/* bank list */}
                    <div className="p-3">
                        <p>No record found!</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banking;