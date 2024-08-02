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
                element: <PrivateRoute><Dashboard /></PrivateRoute>
            },
            {
                path: '/admin/add-user',
                element: <PrivateRoute><AddUser /></PrivateRoute>
            },
            {
                path: '/admin/userslist',
                element: <PrivateRoute><UsersList /></PrivateRoute>
            },
            {
                path: '/admin/area',
                element: <PrivateRoute><Area /></PrivateRoute>
            },
            {
                path: '/admin/add-customer',
                element: <PrivateRoute><AddNew /></PrivateRoute>
            },
            {
                path: '/admin/customers-list',
                element: <PrivateRoute><CustomersList /></PrivateRoute>
            },
            {
                path: '/admin/customer-laser',
                element: <PrivateRoute><CustomerLaser /></PrivateRoute>
            },
            {
                path: '/admin/settlement-reports',
                element: <PrivateRoute><SettlementReports /></PrivateRoute>
            },
            {
                path: '/admin/collection-reports',
                element: <PrivateRoute><CollectionReports /></PrivateRoute>
            },
            {
                path: '/admin/collection-sheet',
                element: <PrivateRoute><CollectionSheet /></PrivateRoute>
            },
            {
                path: '/admin/message-reports',
                element: <PrivateRoute><MessageReports /></PrivateRoute>
            },
            {
                path: '/admin/share',
                element: <PrivateRoute><Share /></PrivateRoute>
            },
            {
                path: '/admin/savings',
                element: <PrivateRoute><Savings /></PrivateRoute>
            },
            {
                path: '/admin/fixed-deposit',
                element: <PrivateRoute><FixedDeposit /></PrivateRoute>
            },
            {
                path: '/admin/dps',
                element: <PrivateRoute><Dps /></PrivateRoute>
            },
            {
                path: '/admin/loan',
                element: <PrivateRoute><Loan /></PrivateRoute>
            },
            {
                path: '/admin/insurance',
                element: <PrivateRoute><Insurance /></PrivateRoute>
            },
            {
                path: '/admin/wallet/:accountType/:id',
                element: <PrivateRoute><Wallet /></PrivateRoute>
            },
            {
                path: '/admin/banking',
                element: <PrivateRoute><Banking /></PrivateRoute>
            },
            {
                path: '/admin/bank-profile',
                element: <PrivateRoute><BankProfile /></PrivateRoute>
            },
            {
                path: '/admin/income-expenditure',
                element: <PrivateRoute><IncomeExpenditure /></PrivateRoute>
            },
            {
                path: '/admin/salaries-of-employeees',
                element: <PrivateRoute><SalariesOfEmployees /></PrivateRoute>
            },
            {
                path: '/admin/profits-distribution',
                element: <PrivateRoute><ProfitsDistribution /></PrivateRoute>
            },
            {
                path: '/admin/business-settings',
                element: <PrivateRoute><BusinessSettings /></PrivateRoute>
            },
            {
                path: '/admin/profile',
                element: <PrivateRoute><Profile /></PrivateRoute>
            },
            {
                path: '/admin/user-profile',
                element: <PrivateRoute><UserProfile /></PrivateRoute>
            },
            {
                path: '/admin/user-reports',
                element: <PrivateRoute><UserReports /></PrivateRoute>
            },
            {
                path: '/admin/customer-profile',
                element: <PrivateRoute><CustomerProfile /></PrivateRoute>
            },
            {
                path: '/admin/customer-documents',
                element: <PrivateRoute><CustomerDocuments /></PrivateRoute>
            },
            {
                path: '/admin/nominee-documents',
                element: <PrivateRoute><NomineeDocuments /></PrivateRoute>
            },
            {
                path: '/admin/transactions',
                element: <PrivateRoute><Transactions /></PrivateRoute>
            },
            {
                path: '/admin/help-center',
                element: <PrivateRoute><HelpCenter /></PrivateRoute>
            },

            // Customer Routes 
            {
                path: '/customer',
                element: <PrivateRoute><CustomerDashboard /></PrivateRoute>
            },
            {
                path: '/customer/transactions',
                element: <PrivateRoute><CustomerTransactions /></PrivateRoute>
            },
            {
                path: '/customer/accounts',
                element: <PrivateRoute><CustomerAccounts /></PrivateRoute>
            },
            {
                path: '/customer/customer-documents',
                element: <PrivateRoute><CustomerDocuments /></PrivateRoute>
            },
            {
                path: '/customer/nominee-documents',
                element: <PrivateRoute><NomineeDocuments /></PrivateRoute>
            },
        ]
    }
]);

export default Routes;
