import { useTranslation } from "react-i18next";
import Button from "../../../../components/Shared/Button/Button";
import Header from "../../../../components/Shared/Header/Header";
import { IoIosMailOpen } from "react-icons/io";
import { IoSearch } from "react-icons/io5";


const MessageReports = () => {

     // translation ----------------
     const { t } = useTranslation();
     const lang = t('Reports').MessageReports;
     const modals = t('Modals').SearchCustomer;
     // ---------------------------


    const handleSearchCustomer = e => {
        e.preventDefault();

        const searchText = e.target.mobile.value;

        console.log(searchText);
    }

    return (
        <div>
            <Header title={lang.messageReports} />

            <div className="bg-white m-4 p-5 shadow-sm">

                <div className="flex justify-between items-center gap-2 pb-3 border-b border-b-slate-300">
                    <div className="flex items-center gap-2 text-lg md:text-2xl font-semibold">
                        <IoIosMailOpen className="" />
                        <h2>{lang.messageList}</h2>
                    </div>

                    {/* search modal */}
                    <div>
                        <p onClick={() => document.getElementById('my_modal_1').showModal()} >
                            <Button text={lang.search} icon={IoSearch} bg="bg-sky-500" />
                        </p>
                        {/* modal body */}
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box min-w-80 relative bg-white">
                                <div className="rounded-sm">
                                    <h2 className="flex items-center gap-2 text-base md:text-xl font-bold pb-2"><IoSearch />{modals.searchCustomer}</h2>
                                    <form onSubmit={handleSearchCustomer} className="space-y-3">
                                        <label className="text-sm md:text-base font-semibold" htmlFor="mobile">{modals.searchByMobile}</label>
                                        <input type="number" name="mobile" className="w-full bg-white border border-slate-300 rounded-sm px-2 py-1 outline-none" id="mobile" placeholder={modals.typeHere} required />
                                        <div className="text-right">
                                            <input type="submit" value={modals.search} className="bg-green-600 px-3 py-1 rounded-sm text-white font-semibold cursor-pointer" />
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-action absolute right-32 bottom-6">
                                    <form method="dialog">
                                        {/* close btn */}
                                        <button className=" bg-red-600 text-white px-3 py-1 rounded-sm">{modals.cancel}</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>

                </div>

                {/* message list */}
                <div className="py-3">
                    <p>{lang.notFound}</p>
                </div>

            </div>

        </div>
    );
};

export default MessageReports;