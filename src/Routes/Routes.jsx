import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error/Error";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
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
                path: '/add-user',
                element: <AddUser />
            },
            {
                path: '/userslist',
                element: <UsersList />
            },
            {
                path: '/area',
                element: <Area />
            },
            {
                path: '/add-customer',
                element: <AddNew />
            },
            {
                path: '/customers-list',
                element: <CustomersList />
            },
            {
                path: '/customer-laser',
                element: <CustomerLaser />
            },
            {
                path: '/settlement-reports',
                element: <SettlementReports />
            },
            {
                path: '/collection-reports',
                element: <CollectionReports />
            },
            {
                path: '/collection-sheet',
                element: <CollectionSheet />
            },
            {
                path: '/message-reports',
                element: <MessageReports />
            },
            {
                path: '/share',
                element: <Share />
            },
            {
                path: '/savings',
                element: <Savings />
            },
            {
                path: '/fixed-deposit',
                element: <FixedDeposit />
            },
            {
                path: '/dps',
                element: <Dps />
            },
            {
                path: '/loan',
                element: <Loan />
            },
            {
                path: '/insurance',
                element: <Insurance />
            },
            {
                path: '/banking',
                element: <Banking />
            },
        ]
    }
])

export default Routes;