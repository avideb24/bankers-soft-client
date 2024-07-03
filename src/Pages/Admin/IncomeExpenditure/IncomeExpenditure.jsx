import { useTranslation } from "react-i18next";
import IncomeExpenseFrom from "../../../components/Pages/IncomeExpenditure/IncomeExpenseForm/IncomeExpenseFrom";
import IncomeExpenseTable from "../../../components/Pages/IncomeExpenditure/IncomeExpenseTable/IncomeExpenseTable";
import SectorList from "../../../components/Pages/IncomeExpenditure/SectorList/SectorList";
import Header from "../../../components/Shared/Header/Header";



const IncomeExpenditure = () => {

    // translation-----------------
    const { t } = useTranslation();
    const lang = t('IncomeExpenditure');
    // ----------------------------

    return (
        <div>
            <Header title={lang.incomeExpenditure} />

            <div className="m-4 p-5 grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* 1st col */}
                <SectorList />

                {/* 2nd col */}
                <div>

                    {/* sector info form */}
                    <IncomeExpenseFrom />

                    {/* expences details */}
                    <IncomeExpenseTable />

                </div>

            </div>

        </div>
    );
};

export default IncomeExpenditure;