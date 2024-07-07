import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error/Error";
import Root from "../Pages/Root/Root";
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
import Wallet from "../Pages/Admin/Accounts/Wallet/Wallet";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Admin/Dashboard/Dashboard";

// customer
import CustomerDashboard from '../Pages/Customer/CustomerDashboard/CustomerDashboard';


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
                path: '/login',
                element: <Login />
            },
            {
                path: '/admin',
                element: <Dashboard />
            },
            {
                path: '/admin/add-user',
                element: <AddUser />
            },
            {
                path: '/admin/userslist',
                element: <UsersList />
            },
            {
                path: '/admin/area',
                element: <Area />
            },
            {
                path: '/admin/add-customer',
                element: <AddNew />
            },
            {
                path: '/admin/customers-list',
                element: <CustomersList />
            },
            {
                path: '/admin/customer-laser',
                element: <CustomerLaser />
            },
            {
                path: '/admin/settlement-reports',
                element: <SettlementReports />
            },
            {
                path: '/admin/collection-reports',
                element: <CollectionReports />
            },
            {
                path: '/admin/collection-sheet',
                element: <CollectionSheet />
            },
            {
                path: '/admin/message-reports',
                element: <MessageReports />
            },
            {
                path: '/admin/share',
                element: <Share />
            },
            {
                path: '/admin/savings',
                element: <Savings />
            },
            {
                path: '/admin/fixed-deposit',
                element: <FixedDeposit />
            },
            {
                path: '/admin/dps',
                element: <Dps />
            },
            {
                path: '/admin/loan',
                element: <Loan />
            },
            {
                path: '/admin/insurance',
                element: <Insurance />
            },
            {
                // dynamic route
                path: '/admin/wallet/:accountType/:id',
                element: <Wallet />
            },
            {
                path: '/admin/banking',
                element: <Banking />
            },
            {
                // dynamic route
                path: '/admin/bank-profile',
                element: <BankProfile />
            },
            {
                path: '/admin/income-expenditure',
                element: <IncomeExpenditure />
            },
            {
                path: '/admin/salaries-of-employeees',
                element: <SalariesOfEmployees />
            },
            {
                path: '/admin/profits-distribution',
                element: <ProfitsDistribution />
            },
            {
                path: '/admin/business-settings',
                element: <BusinessSettings />
            },
            {
                path: '/admin/profile',
                element: <Profile />
            },
            {
                path: '/admin/user-profile',
                element: <UserProfile />
            },
            {
                path: '/admin/user-reports',
                element: <UserReports />
            },
            {
                path: '/admin/customer-profile',
                element: <CustomerProfile />
            },
            {
                path: '/admin/customer-documents',
                element: <CustomerDocuments />
            },
            {
                path: '/admin/nominee-documents',
                element: <NomineeDocuments />
            },
            {
                path: '/admin/transactions',
                element: <Transactions />
            },
            {
                path: '/admin/help-center',
                element: <HelpCenter />
            },
            {
                path: '/admin/help-center',
                element: <HelpCenter />
            },

             // customer routes
             {
                path: '/customer',
                element: <CustomerDashboard></CustomerDashboard>
            },
        ]
    }
])

export default Routes;