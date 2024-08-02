import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error/Error";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import OurPolicy from "../Pages/OurPolicy/OurPolicy";

// Admin Pages
import Dashboard from "../Pages/Admin/Dashboard/Dashboard";
import AddUser from "../Pages/Admin/Users/AddUser/AddUser";
import UsersList from "../Pages/Admin/Users/UsersList/UsersList";
import Area from "../Pages/Admin/Customers/Area/Area";
import AddNew from "../Pages/Admin/Customers/AddNew/AddNew";
import CustomersList from "../Pages/Admin/Customers/CustomersList/CustomersList";
import CustomerLaser from "../Pages/Admin/Customers/CustomerLaser/CustomerLaser";
import SettlementReports from "../Pages/Admin/Reports/SettlementReports/SettlementReports";
import CollectionReports from "../Pages/Admin/Reports/CollectionReports/CollectionReports";
import CollectionSheet from "../Pages/Admin/Reports/CollectionSheet/CollectionSheet";
import MessageReports from "../Pages/Admin/Reports/MessageReports/MessageReports";
import Share from "../Pages/Admin/Accounts/Share/Share";
import Dps from "../Pages/Admin/Accounts/DPS/DPS";
import Savings from "../Pages/Admin/Accounts/Savings/Savings";
import FixedDeposit from "../Pages/Admin/Accounts/FixedDeposit/FixedDeposit";
import Loan from "../Pages/Admin/Accounts/Loan/Loan";
import Insurance from "../Pages/Admin/Accounts/Insurance/Insurance";
import Wallet from "../Pages/Admin/Accounts/Wallet/Wallet";
import Banking from "../Pages/Admin/Banking/Banking";
import IncomeExpenditure from "../Pages/Admin/IncomeExpenditure/IncomeExpenditure";
import SalariesOfEmployees from "../Pages/Admin/SalariesOfEmployees/SalariesOfEmployees";
import ProfitsDistribution from "../Pages/Admin/ProfitsDistribution/ProfitDistribution";
import HelpCenter from "../Pages/Admin/HelpCenter/HelpCenter";
import BusinessSettings from "../Pages/Admin/Settings/BusinessSettings/BusinessSettings";
import Profile from "../Pages/Admin/Settings/Profile/Profile";
import UserProfile from "../Pages/Admin/UserProfile/UserProfile";
import CustomerProfile from "../Pages/Admin/CustomerProfile.jsx/CustomerProfile";
import CustomerDocuments from "../Pages/Admin/CustomerDocuments/CustomerDocuments";
import NomineeDocuments from "../Pages/Admin/NomineeDocuments/NomineeDocuments";
import UserReports from "../Pages/Admin/UserReports/UserReports";
import BankProfile from "../Pages/Admin/BankProfile/BankProfile";
import Transactions from "../Pages/Admin/Transactions/Transactions";

// Customer Pages
import CustomerDashboard from '../Pages/Customer/CustomerDashboard/CustomerDashboard';
import CustomerAccounts from "../Pages/Customer/CustomerAccounts/CustomerAccounts";
import CustomerTransactions from "../Pages/Customer/CustomerTransactions/CustomerTransactions";

// PrivateRoute
import PrivateRoute from "./PrivateRoute";

// Function to wrap routes with PrivateRoute and roles
const privateRoute = (element, roles) => (
    <PrivateRoute roles={roles}>{element}</PrivateRoute>
);

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/our-policy',
                element: <OurPolicy />
            },
            {
                path: '/login',
                element: <Login />
            },
            // Admin Routes 
            {
                path: '/admin',
                element: privateRoute(<Dashboard />, ['admin'])
            },
            {
                path: '/admin/add-user',
                element: privateRoute(<AddUser />, ['admin'])
            },
            {
                path: '/admin/userslist',
                element: privateRoute(<UsersList />, ['admin'])
            },
            {
                path: '/admin/area',
                element: privateRoute(<Area />, ['admin'])
            },
            {
                path: '/admin/add-customer',
                element: privateRoute(<AddNew />, ['admin'])
            },
            {
                path: '/admin/customers-list',
                element: privateRoute(<CustomersList />, ['admin'])
            },
            {
                path: '/admin/customer-laser',
                element: privateRoute(<CustomerLaser />, ['admin'])
            },
            {
                path: '/admin/settlement-reports',
                element: privateRoute(<SettlementReports />, ['admin'])
            },
            {
                path: '/admin/collection-reports',
                element: privateRoute(<CollectionReports />, ['admin'])
            },
            {
                path: '/admin/collection-sheet',
                element: privateRoute(<CollectionSheet />, ['admin'])
            },
            {
                path: '/admin/message-reports',
                element: privateRoute(<MessageReports />, ['admin'])
            },
            {
                path: '/admin/share',
                element: privateRoute(<Share />, ['admin'])
            },
            {
                path: '/admin/savings',
                element: privateRoute(<Savings />, ['admin'])
            },
            {
                path: '/admin/fixed-deposit',
                element: privateRoute(<FixedDeposit />, ['admin'])
            },
            {
                path: '/admin/dps',
                element: privateRoute(<Dps />, ['admin'])
            },
            {
                path: '/admin/loan',
                element: privateRoute(<Loan />, ['admin'])
            },
            {
                path: '/admin/insurance',
                element: privateRoute(<Insurance />, ['admin'])
            },
            {
                path: '/admin/wallet/:accountType/:id',
                element: privateRoute(<Wallet />, ['admin'])
            },
            {
                path: '/admin/banking',
                element: privateRoute(<Banking />, ['admin'])
            },
            {
                path: '/admin/bank-profile',
                element: privateRoute(<BankProfile />, ['admin'])
            },
            {
                path: '/admin/income-expenditure',
                element: privateRoute(<IncomeExpenditure />, ['admin'])
            },
            {
                path: '/admin/salaries-of-employees',
                element: privateRoute(<SalariesOfEmployees />, ['admin'])
            },
            {
                path: '/admin/profits-distribution',
                element: privateRoute(<ProfitsDistribution />, ['admin'])
            },
            {
                path: '/admin/business-settings',
                element: privateRoute(<BusinessSettings />, ['admin'])
            },
            {
                path: '/admin/profile',
                element: privateRoute(<Profile />, ['admin'])
            },
            {
                path: '/admin/user-profile',
                element: privateRoute(<UserProfile />, ['admin'])
            },
            {
                path: '/admin/user-reports',
                element: privateRoute(<UserReports />, ['admin'])
            },
            {
                path: '/admin/customer-profile',
                element: privateRoute(<CustomerProfile />, ['admin'])
            },
            {
                path: '/admin/customer-documents',
                element: privateRoute(<CustomerDocuments />, ['admin'])
            },
            {
                path: '/admin/nominee-documents',
                element: privateRoute(<NomineeDocuments />, ['admin'])
            },
            {
                path: '/admin/transactions',
                element: privateRoute(<Transactions />, ['admin'])
            },
            {
                path: '/admin/help-center',
                element: privateRoute(<HelpCenter />, ['admin'])
            },

            // Customer Routes 
            {
                path: '/customer',
                element: privateRoute(<CustomerDashboard />, ['customer'])
            },
            {
                path: '/customer/transactions',
                element: privateRoute(<CustomerTransactions />, ['customer'])
            },
            {
                path: '/customer/accounts',
                element: privateRoute(<CustomerAccounts />, ['customer'])
            },
            {
                path: '/customer/customer-documents',
                element: privateRoute(<CustomerDocuments />, ['customer'])
            },
            {
                path: '/customer/nominee-documents',
                element: privateRoute(<NomineeDocuments />, ['customer'])
            },
        ]
    }
]);

export default Routes;
