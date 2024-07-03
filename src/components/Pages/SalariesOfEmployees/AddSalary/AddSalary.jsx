import { useTranslation } from "react-i18next";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import Swal from "sweetalert2";


const AddSalary = () => {

    // fake data
    const employees = ['Belal', 'Hasan', 'Jillur', "Rifat"];


    // ----------------------------

    // translation----------------
    const {t} = useTranslation();
    const lang = t('SalariesOfEmployees');
    // ---------------------------


    const handleAddSalary = e => {
        e.preventDefault();

        const addedSalary = {
            employee: e.target.selectEmployee.value,
            salaryAmount: e.target.salaryAmount.value
        }

        if (addedSalary.employee == 'default') {
            Swal.fire({
                icon: "error",
                text: "Please select your Employee!",
            });
        }

        else {
            console.log(addedSalary);
        }
    }


    return (
        <div className="bg-white p-5 ">

            <div className="flex justify-between items-center gap-3 pb-3 border-b border-b-slate-300 mb-5">
                <h2 className="flex items-center gap-2 text-base md:text-lg font-bold"><FaMoneyCheckDollar className="mt-1" />{lang.paymentOfSalary}</h2>
            </div>

            {/* salary form */}
            <form onSubmit={handleAddSalary} className="space-y-2">
                {/* select employee */}
                <label htmlFor="select" className="font-bold">{lang.employee}</label>
                <select id="select" name="selectEmployee" className="w-full border border-slate-300 px-3 py-1 bg-white rounded-sm" defaultValue={'default'}>
                    <option value="default" disabled>Choose Employee</option>
                    {
                        employees?.map((employee, idx) =>
                            <option key={idx} value={employee}>{employee}</option>
                        )
                    }
                </select>
                {/* salary amount */}
                <label htmlFor="salaryAmount" className="font-bold inline-block pt-1">{lang.salary}</label>
                <input type="number" name="salaryAmount" className="w-full bg-white border border-slate-300 px-3 py-1 outline-none rounded-sm" id="salaryAmount" placeholder="0.00" required />

                <input type="submit" value={lang.submit} className="bg-blue-600 text-white font-semibold px-3 py-1 cursor-pointer float-right" />
            </form>

        </div>
    );
};

export default AddSalary;