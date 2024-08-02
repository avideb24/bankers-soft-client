import { useTranslation } from "react-i18next";
import Header from "../../../../components/Shared/Header/Header";
import { FaPlusCircle, FaSearch } from "react-icons/fa";
import Button from "../../../../components/Shared/Button/Button";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin7Fill } from "react-icons/ri";


const Area = () => {

    // fake data
    const areaData = [
        { areaEn: 'Nilphamaari', areaBn: 'নীলফামারি' },
        { areaEn: 'Dinajpur', areaBn: 'দিনাজপুর' },
    ];


    // ----------------------------

    // translation -----------
    const { t, i18n } = useTranslation();
    const lang = t('Customers');
    const modal = t('Modals').Warning;
    // -----------------------

    // search area fn
    const handleSearchArea = e => {
        e.preventDefault();

        const searchText = e.target.searchText.value;
        console.log(searchText);
    }

    // add new area fn
    const handleAddNewArea = e => {
        e.preventDefault();

        const newArea = {
            areaEn: e.target.areaEn.value,
            areaBn: e.target.areaBn.value,
        }

        console.log(newArea);

    };

    // edit area fn
    const handleEditArea = e => {
        e.preventDefault();

        const updatedArea = {
            areaEn: e.target.areaEn.value,
            areaBn: e.target.areaBn.value,
        }

        console.log(updatedArea);
    }

    // delete area fn
    const handleDeleteArea = id => {
        // this id is fake - please provide original id to html fn 
        console.log('deleted area id:', id);
    }


    return (
        <div>

            <Header title={lang.area} />

            <div className="m-4">
                {/* add area btn */}
                <Button text={lang.newArea} icon={FaPlusCircle} bg='bg-blue-600' handleClick={() => document.getElementById('my_modal_1').showModal()} />

                {/* add area modal */}
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box min-w-80 relative bg-white">
                        <div className="rounded-sm">
                            <h2 className="flex items-center gap-2 text-base md:text-xl font-bold pb-2"><FaPlusCircle />{lang.newArea}</h2>
                            <form onSubmit={handleAddNewArea} className="space-y-3">
                                <div className="grid grid-cols-2 gap-4">
                                    {/* area english */}
                                    <div>
                                        <label className="text-sm md:text-base font-semibold" htmlFor="areaEn">{lang.areaName} (English)</label>
                                        <input type="text" name="areaEn" className="w-full bg-white border border-slate-300 rounded-sm px-2 py-1 outline-none" id="areaEn" placeholder={lang.newArea} required />
                                    </div>
                                    {/* area bangla */}
                                    <div>
                                        <label className="text-sm md:text-base font-semibold" htmlFor="areaBn">{lang.areaName} (বাংলা)</label>
                                        <input type="text" name="areaBn" className="w-full bg-white border border-slate-300 rounded-sm px-2 py-1 outline-none" id="areaBn" placeholder={lang.newArea} required />
                                    </div>
                                </div>
                                <div className="text-right">
                                    <input type="submit" value={lang.save} className="bg-green-600 px-3 py-1 rounded-sm text-white font-semibold cursor-pointer" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-action absolute right-28 bottom-6">
                            <form method="dialog">
                                {/* close btn */}
                                <button className="bg-red-600 text-white px-3 py-1 rounded-sm">{lang.close}</button>
                            </form>
                        </div>
                    </div>
                </dialog>


                {/* search area  */}
                <div className="bg-white mt-4 p-4 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                    <h2 className="text-base font-bold">{lang.areaList}</h2>
                    <form onSubmit={handleSearchArea} className="flex items-center gap-2">
                        <input type="text" name="searchText" className="w-full border-2 border-slate-200 bg-transparent px-2 py-[6px] rounded-sm outline-none" placeholder={lang.searchArea} required />
                        <button type="submit" className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-sm">
                            <FaSearch />
                            <span>{lang.search}</span>
                        </button>
                    </form>
                </div>

                {/* area list */}
                <h2 className="px-3 py-2 bg-slate-300 font-bold">{lang.areaName}</h2>
                <div className="px-3 py-4 space-y-3">
                    {
                        areaData?.map((area, idx) =>
                            <div key={idx} className="flex justify-between">
                                <div className="flex gap-2">
                                    <p>{idx + 1}. </p>
                                    {
                                        i18n.language == 'en' ?
                                            <p>{area?.areaEn}</p>
                                            :
                                            <p>{area?.areaBn}</p>
                                    }
                                </div>
                                <div className="flex gap-4">
                                    {/* area edit btn */}
                                    <button className="text-lg md:text-2xl" onClick={() => document.getElementById(`my_modal_${idx + 3}`).showModal()}><FaEdit /></button>
                                    {/* add area modal */}
                                    <dialog id={`my_modal_${idx + 3}`} className="modal">
                                        <div className="modal-box min-w-80 relative bg-white">
                                            <div className="rounded-sm">
                                                <h2 className="flex items-center gap-2 text-base md:text-xl font-bold pb-2"><FaEdit />{lang.editArea}</h2>
                                                <form onSubmit={handleEditArea} className="space-y-3">
                                                    <div className="grid grid-cols-2 gap-4">
                                                        {/* area english */}
                                                        <div>
                                                            <label className="text-sm md:text-base font-semibold" htmlFor="areaEn">{lang.areaName} (English)</label>
                                                            <input type="text" name="areaEn" className="w-full bg-white border border-slate-300 rounded-sm px-2 py-1 outline-none" id="areaEn" placeholder={lang.newArea} defaultValue={area?.areaEn} required />
                                                        </div>
                                                        {/* area bangla */}
                                                        <div>
                                                            <label className="text-sm md:text-base font-semibold" htmlFor="areaBn">{lang.areaName} (বাংলা)</label>
                                                            <input type="text" name="areaBn" className="w-full bg-white border border-slate-300 rounded-sm px-2 py-1 outline-none" id="areaBn" placeholder={lang.newArea} defaultValue={area?.areaBn} required />
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <input type="submit" value={lang.save} className="bg-green-600 px-3 py-1 rounded-sm text-white font-semibold cursor-pointer" />
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="modal-action absolute right-28 bottom-6">
                                                <form method="dialog">
                                                    {/* close btn */}
                                                    <button className="bg-red-600 text-white px-3 py-1 rounded-sm">{lang.close}</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>


                                    {/* delete area btn */}
                                    <button onClick={() => document.getElementById('my_modal_2').showModal()} className="text-lg md:text-2xl text-red-600"><RiDeleteBin7Fill /></button>

                                    {/* area delete modal */}
                                    <dialog id="my_modal_2" className="modal">
                                        <div className="modal-box p-4 relative bg-white">
                                            <h3 className="text-base md:text-xl font-semibold flex items-center gap-2 capitalize">{modal.pleaseConfirm}</h3>
                                            <div className="text-center text-lg md:text-2xl font-bold  py-5 my-4 border-y border-y-slate-300">{modal.areYouSure}</div>
                                            {/* full pay btn */}
                                            <button onClick={() => handleDeleteArea(1)} className="bg-green-600 px-3 py-1 text-white font-semibold float-right">{modal.yes}</button>
                                            {/* close btn */}
                                            <div className="modal-action text-right absolute right-24 bottom-4">
                                                <form method="dialog">
                                                    <button className=" bg-red-600 text-white font-semibold px-3 py-1 rounded-sm mt-5">{modal.no}</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>

                                </div>
                            </div>
                        )
                    }
                </div>

            </div>

        </div>
    );
};

export default Area;