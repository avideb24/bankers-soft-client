import Button from "../../../components/Shared/Button/Button";
import Header from "../../../components/Shared/Header/Header";
import { PiBankFill } from "react-icons/pi";
import { FaCirclePlus } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { MdAccountBalanceWallet } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const Banking = () => {

    // fake data
    const banks = [
        { nameEn: 'Sonali Bank', nameBn: 'সোনালি ব্যাংক', address: 'Nilphamari' },
        { nameEn: 'Rupali Bank', nameBn: 'রুপালি ব্যাংক', address: 'Dinajpur' },
        { nameEn: 'Pubali Bank', nameBn: 'পুবালি ব্যাংক', address: 'Nilphamari' },
    ];


    // ------------------------------
    
    // translation-----------------
    const { t } = useTranslation();
    const lang = t('Banking');
    const modals = t('Modals').EditBank;
    // ----------------------------


    const handleAddBank = e => {
        e.preventDefault();

        const newBankData = {
            bankNameEn: e.target.bankNameEn.value,
            bankNameBn: e.target.bankNameBn.value,
            address: e.target.address.value
        }

        console.log(newBankData);

    };

    // delete bank
    const handleDeleteBank = id => {

        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        }).then((result) => {


            // call your delete api here

            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    icon: "success"
                });
            }
        });
    };

    // update bank
    const handleUpdateBank = (e, id) => {
        e.preventDefault();

        console.log(id);

    };



    return (
        <div>
            <Header title={lang.banking} />

            <div className="bg-white m-4 p-5 shadow-sm">

                <div className="flex justify-between items-center gap-3 pb-3 border-b border-b-slate-300">
                    <h2 className="flex items-center gap-2 text-base md:text-xl font-bold"><PiBankFill className="mt-1" />{lang.banking}</h2>
                    <Button text={lang.newBank} icon={FaCirclePlus} bg="bg-sky-600" handleClick={() => document.getElementById('my_modal_1').showModal()} />

                    {/* modal body*/}
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box min-w-80 relative bg-white">
                            <h2 className="flex items-center gap-2 text-base md:text-xl font-bold px-4 py-4 border-b border-b-slate-300"><FaCirclePlus className="mt-1" />{lang.newBank}</h2>
                            <div className="rounded-sm">

                                {/* add new bank form */}
                                <form onSubmit={handleAddBank} className="space-y-3">
                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="text-sm md:text-base font-semibold" htmlFor="bankNameEn">{modals.bankName} (English)</label>
                                            <input type="text" name="bankNameEn" className="w-full bg-white border border-slate-300 rounded-sm px-2 py-1 outline-none" id="bankNameEn" placeholder={modals.typeHere} required />
                                        </div>
                                        <div>
                                            <label className="text-sm md:text-base font-semibold" htmlFor="bankNameBn">{modals.bankName} (বাংলা)</label>
                                            <input type="text" name="bankNameBn" className="w-full bg-white border border-slate-300 rounded-sm px-2 py-1 outline-none" id="bankNameBn" placeholder={modals.typeHere} required />
                                        </div>
                                    </div>
                                    {/* bank address */}
                                    <div>
                                        <label className="text-sm md:text-base font-semibold" htmlFor="address">{modals.address}</label>
                                        <input type="text" name="address" className="w-full bg-white border border-slate-300 rounded-sm px-2 py-1 outline-none" id="address" placeholder={modals.typeHere} required />
                                    </div>
                                    <div className="text-right">
                                        <input type="submit" value={modals.save} className="bg-green-600 px-3 py-1 rounded-sm text-white font-semibold cursor-pointer" />
                                    </div>
                                </form>

                            </div>
                            <div className="modal-action absolute right-24 bottom-6">
                                <form method="dialog">
                                    {/* close btn */}
                                    <button className="bg-red-600 text-white px-3 py-1 rounded-sm">{modals.close}</button>
                                </form>
                            </div>
                        </div>
                    </dialog>

                </div>

                {/* content */}
                <div>
                    <h2 className="p-3 text-base md:text-lg font-bold bg-slate-200 mt-3">{lang.bankName}</h2>
                    {/* bank list */}
                    <div className="p-3">
                        {
                            banks?.length == 0 ?
                                <div>{lang.notFound}</div>
                                :
                                <div>
                                    {
                                        banks?.map((bank, idx) =>
                                            <div key={idx} className="flex justify-between items-center gap-3 pt-3">
                                                <Link to={'/admin/bank-profile'}>
                                                    <p className="font-bold mb-1">{idx + 1}. {bank?.nameEn}</p>
                                                    <p><span className="font-bold">{lang.address}: </span>{bank?.address}</p>
                                                </Link>
                                                <div className="flex gap-3">
                                                    <button onClick={() => handleDeleteBank(1)} className="text-lg md:text-2xl text-red-600"><RiDeleteBin7Fill /></button>

                                                    <button onClick={() => document.getElementById(`my_modal_${idx + 5}`).showModal()} className="text-lg md:text-2xl"><FaEdit /></button>

                                                    {/* modal body */}
                                                    <dialog id={`my_modal_${idx + 5}`} className="modal">
                                                        <div className="modal-box p-4 relative bg-white">
                                                            <h3 className="text-base md:text-xl font-semibold flex items-center gap-2"><FaEdit />{modals.editBank}</h3>
                                                            {/* date form */}
                                                            <form onSubmit={(e) => handleUpdateBank(e, 2)} className="pt-4">
                                                                <div className="flex gap-5">
                                                                    {/* name en */}
                                                                    <div className="w-1/2">
                                                                        <label htmlFor="nameEn" className="font-bold">{modals.bankName} (English)</label>
                                                                        <input type="text" className="w-full px-2 py-1 my-2 bg-white border border-slate-300" name="nameEn" id="nameEn" defaultValue={bank?.nameEn} required />
                                                                    </div>
                                                                    {/* name bn */}
                                                                    <div className="w-1/2">
                                                                        <label htmlFor="nameBn" className="font-bold">{modals.bankName} (বাংলা)</label>
                                                                        <input type="text" className="w-full px-2 py-1 my-2 bg-white border border-slate-300" name="nameBn" id="nameBn" defaultValue={bank?.nameBn} required />
                                                                    </div>
                                                                </div>
                                                                {/* address */}
                                                                <div className="w-full">
                                                                    <label htmlFor="address" className="font-bold">{modals.address}</label>
                                                                    <input type="text" className="w-full px-2 py-1 mt-2 bg-white border border-slate-300" name="address" id="address" defaultValue={bank?.address} required />
                                                                </div>
                                                                <div className="text-right">
                                                                    <input type="submit" value={modals.save} className="bg-green-600 text-white font-semibold px-3 py-1 rounded-sm mt-6 cursor-pointer" />
                                                                </div>
                                                            </form>
                                                            {/* close btn */}
                                                            <div className="modal-action text-right absolute right-24 bottom-4">
                                                                <form method="dialog">
                                                                    <button className=" bg-red-600 text-white font-semibold px-3 py-1 rounded-sm mt-5">{modals.close}</button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </dialog>

                                                    {/* link to bank detail page */}
                                                    <Link to={'/admin/bank-profile'}>
                                                        <button className="text-lg md:text-2xl text-blue-500"><MdAccountBalanceWallet /></button>
                                                    </Link>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                        }
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banking;