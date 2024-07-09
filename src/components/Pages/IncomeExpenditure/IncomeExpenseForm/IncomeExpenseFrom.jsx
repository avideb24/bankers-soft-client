import { useState } from "react";
import { useTranslation } from "react-i18next";
import { PiPlusMinusFill } from "react-icons/pi";


const IncomeExpenseFrom = () => {

    // fake sector data
    const sectors = [
        { name: 'Tea', amount: 200 },
        { name: 'Biscuits', amount: 100 },
    ];

    // ---------------------------------------

     // translation -----------
     const { t } = useTranslation();
     const lang = t('IncomeExpenditure');
     // -----------------------

    const [sector, setSector] = useState(sectors[0]?.name);


    // add income / expense
    const handleAddIcomeExpense = e => {
        e.preventDefault();

        const addedItem = {
            sector,
            date: e.target.date.value,
            ammont: e.target.amount.value,
            transDetail: e.target.transDetail.value,
            description: e.target.description.value,
            type: e.target.type.value,
        }

        console.log(addedItem);
    };


    return (
        <div className="bg-white p-5 shadow-sm">
            <h2 className="flex items-center gap-2 text-base md:text-lg font-bold pb-3 border-b border-b-slate-300"><PiPlusMinusFill />{lang.incomeExpenditureForm}</h2>

            {/* form */}
            <form onSubmit={handleAddIcomeExpense} className="pt-3 space-y-2">
                {/* select sector */}
                <div>
                    <label htmlFor="select" className="font-bold">{lang.selectSector}</label>
                    <select onChange={(e) => setSector(e.target.value)} id="select" className="w-full px-2 py-1 bg-white border border-slate-300 mt-1" required>
                        {
                            sectors?.map(sector =>
                                <option key={sector?.name} value={sector?.name}>{sector?.name}</option>
                            )
                        }
                    </select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    {/* date */}
                    <div>
                        <label htmlFor="date" className="font-bold">{lang.selectDate}</label>
                        <input type="date" name="date" id="date" className="w-full px-2 py-1 bg-white border border-slate-300 mt-1 outline-none" required />
                    </div>

                    {/* type */}
                    <div>
                        <label htmlFor="type" className="font-bold">{lang.selectType}</label>
                        <select name="type" id="type" className="w-full px-2 py-1 bg-white border border-slate-300 mt-1" defaultValue={'Income'} required >
                            <option value="Income">{lang.income}</option>
                            <option value="Expence">{lang.expense}</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    {/* amount */}
                    <div>
                        <label htmlFor="amount" className="font-bold">{lang.amount}</label>
                        <input type="number" name="amount" id="amount" className="w-full px-2 py-1 bg-white border border-slate-300 mt-1 outline-none" placeholder={lang.amount} required />
                    </div>

                    {/* transaction detail */}
                    <div>
                        <label htmlFor="transDetail" className="font-bold">{lang.transactionDetails}</label>
                        <input type="text" name="transDetail" id="transDetail" className="w-full px-2 py-1 bg-white border border-slate-300 mt-1 outline-none" placeholder={lang.transactionDetails} required />
                    </div>
                </div>
                {/* description */}
                <div>
                    <label htmlFor="description" className="font-bold">{lang.description}</label>
                    <input type="text" name="description" id="description" className="w-full px-2 py-1 bg-white border border-slate-300 mt-1 outline-none" placeholder={lang.description} required />
                </div>
                {/* submit btn */}
                <div className="text-right">
                    <input type="submit" value={lang.save} className="bg-blue-600 text-white px-3 py-1 rounded-sm cursor-pointer font-semibold" />
                </div>
            </form>
        </div>
    );
};

export default IncomeExpenseFrom;