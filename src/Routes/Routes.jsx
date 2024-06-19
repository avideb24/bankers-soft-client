import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error/Error";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import AddUser from "../Pages/Admin/Users/AddUser/AddUser";
import UsersList from "../Pages/Admin/Users/UsersList/UsersList";
import Area from "../Pages/Admin/Customers/Area/Area";
import AddNew from "../Pages/Admin/Customers/AddNew/AddNew";


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
        ]
    }
])

export default Routes;