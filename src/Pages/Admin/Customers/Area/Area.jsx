import { useTranslation } from "react-i18next";
import Header from "../../../../components/Shared/Header/Header";
import { FaPlusCircle, FaSearch } from "react-icons/fa";


const Area = () => {

    // translation -----------
    const { t } = useTranslation();
    const lang = t('Customers')
    // -----------------------
    return (
        <div>

            <Header title={lang.area} />

            <button className="bg-green-600 text-white font-semibold flex items-center gap-2 px-4 py-2 m-4 rounded-sm">
                <FaPlusCircle />
                <span>{lang.newArea}</span>
            </button>

            <div className="bg-white mx-5 my-4 p-4 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <h2 className="text-base font-bold">{lang.areaList}</h2>
                <form className="flex items-center gap-2">
                    <input type="text" className="w-full border-2 border-slate-200 bg-transparent px-2 py-[6px] rounded-sm outline-none" placeholder={lang.searchArea} />
                    <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-sm">
                        <FaSearch />
                        <span>{lang.search}</span>
                    </button>
                </form>
            </div>

        </div>
    );
};

export default Area;