import { BsGraphUp } from "react-icons/bs";
import { FaCirclePlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaCalendarAlt, FaExclamationCircle, FaEdit } from "react-icons/fa";
import Button from "../../../Shared/Button/Button";



const SectorList = () => {

    // fake sector data
    const sectors = [
        { name: 'Tea', amount: 200 },
        { name: 'Biscuits', amount: 100 },
    ];



    // add new sector
    const handleAddSector = e => {
        e.preventDefault();

        const sector = e.target.sector.value;

        console.log(sector);
    };



    // search sector by date
    const handleSearchByDate = e => {
        e.preventDefault();

        const fromDate = e.target.fromDate.value;
        const toDate = e.target.toDate.value;

        console.log(fromDate, toDate);

    };

    // edit sector
    const handleEditSector = e => {
        e.preventDefault();

        const fromDate = e.target.fromDate.value;
        const toDate = e.target.toDate.value;

        console.log(fromDate, toDate);

    };


    return (
        <div className="bg-white p-5 shadow-sm">

            <div className="flex justify-between items-center gap-3 mb-5 flex-wrap">
                <h2 className="text-base md:text-lg font-bold flex items-center gap-2"><BsGraphUp />Income-Expenditure Sector</h2>
                <div className="flex gap-3">

                    {/* add sector */}
                    <Button text="Add New" icon={FaCirclePlus} bg="bg-blue-600" handleClick={() => document.getElementById('my_modal_1').showModal()} />
                    {/* add sector modal body */}
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box min-w-80 relative bg-white">
                            <div className="rounded-sm">
                                <h2 className="flex items-center gap-2 text-base md:text-xl font-bold pb-2"><FaCirclePlus />Add New Sector</h2>
                                <form onSubmit={handleAddSector} className="space-y-3">
                                    <label className="text-sm md:text-base font-semibold" htmlFor="sector">Sector Name</label>
                                    <input type="text" name="sector" className="w-full bg-white border border-slate-300 rounded-sm px-2 py-1 outline-none" id="sector" placeholder="Type here..." required />
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

                    {/* search sector */}
                    <Button text="Search" icon={IoSearch} bg="bg-orange-600" handleClick={() => document.getElementById('my_modal_2').showModal()} />
                    {/* modal body */}
                    <dialog id="my_modal_2" className="modal">
                        <div className="modal-box p-4 relative bg-white">
                            <h3 className="text-base md:text-xl font-semibold flex items-center gap-2"><FaCalendarAlt />Search By Date</h3>
                            {/* date form */}
                            <form onSubmit={handleSearchByDate} className="pt-4">
                                <div className="flex gap-5">
                                    <div className="w-1/2">
                                        <label htmlFor="from" className="font-bold">From Date</label>
                                        <input type="date" className="w-full bg-white mt-2  border border-slate-300" name="fromDate" id="from" required />
                                    </div>
                                    <div className="w-1/2">
                                        <label htmlFor="to" className="font-bold">To Date</label>
                                        <input type="date" className="w-full bg-white mt-2  border border-slate-300" name="toDate" id="to" required />
                                    </div>
                                </div>
                                <p className="mt-4"><span className="text-red-600 font-semibold"><FaExclamationCircle className="inline" /> Special Note: </span>If no dates are selected, sectors will show manually.</p>
                                <div className="text-right">
                                    <input type="submit" value="Search" className="bg-green-600 text-white font-semibold px-3 py-1 rounded-sm mt-6 cursor-pointer" />
                                </div>
                            </form>
                            {/* close btn */}
                            <div className="modal-action text-right absolute right-24 bottom-4">
                                <form method="dialog">
                                    <button className="bg-red-600 text-white font-semibold px-3 py-1 rounded-sm mt-5">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>

                </div>

            </div>

            {/* sector list */}
            {
                sectors?.length == 0 ?
                    <p>No sector found!</p>
                    :
                    <div>
                        {
                            sectors?.map((sector, idx) =>
                                <div key={idx} className="flex justify-between border border-slate-300 p-4">
                                    <p className="w-[30%] overflow-hidden">{sector?.name}</p>
                                    <p><span className="text-base md:text-lg">৳</span>{sector?.amount}</p>
                                    <button onClick={() => document.getElementById(`my_modal_${idx + 3}`).showModal()} className="text-base md:text-lg"><FaEdit /></button>
                                    <dialog id={`my_modal_${idx + 3}`} className="modal">
                                        <div className="modal-box min-w-80 relative bg-white">
                                            <div className="rounded-sm">
                                                <h2 className="flex items-center gap-2 text-base md:text-xl font-bold pb-2"><FaEdit />Edit Sector</h2>
                                                <form onSubmit={handleEditSector} className="space-y-3">
                                                    <label className="text-sm md:text-base font-semibold" htmlFor="sector">Sector Name</label>
                                                    <input type="text" name="sector" className="w-full bg-white border border-slate-300 rounded-sm px-2 py-1 outline-none" id="sector" placeholder="Type here..." defaultValue={sector?.name} required />
                                                    <div className="text-right">
                                                        <input type="submit" value="Save" className="bg-green-600 px-3 py-1 rounded-sm text-white font-semibold cursor-pointer" />
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="modal-action absolute right-24 bottom-6">
                                                <form method="dialog">
                                                    {/* close btn */}
                                                    <button className=" bg-red-600 text-white px-3 py-1 rounded-sm">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </div>
                            )
                        }
                    </div>
            }

        </div>

    );
};

export default SectorList;