import AddSalary from "../../../components/Pages/SalariesOfEmployees/AddSalary/AddSalary";
import SalaryTable from "../../../components/Pages/SalariesOfEmployees/SalaryTable/SalaryTable";
import Header from "../../../components/Shared/Header/Header";


const SalariesOfEmployees = () => {
    return (
        <div>
            <Header title="Employee's Salary" />

            <div className="m-4 grid grid-cols-1 md:grid-cols-2 gap-5">

                <AddSalary />
                <SalaryTable />

            </div>
            
        </div>
    );
};

export default SalariesOfEmployees;