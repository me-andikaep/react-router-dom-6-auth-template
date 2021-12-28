import { Navigate, Outlet, useLocation } from 'react-router-dom';
// import DashboardLayout from '../layouts/DashboardLayout';
import Home from '../pages/Home';
import NoMatch from '../pages/NoMatch';
// import Order from '../pages/Order';
import OrderAdd from '../pages/OrderAdd';

const Routes = (props) => {
	let location = useLocation();
	// console.log(props);

	// const { token } = props;

	// function RequireAuth({ children }) {
	// 	let auth = token;

	// 	if (!auth) {
	// 		return <Navigate to='/' state={{ from: location }} replace />;
	// 	}

	// 	return children;
	// }

	return [
		{ path: '/', element: <Home /> },
		{
			path: '/app',
			// element: RequireAuth(<DashboardLayout />),

			exact: true,
			children: [
				{
					path: '/app',
					element: location.pathname === '/app' && (
						<Navigate to='/app/order' state={{ from: location }} replace />
					),
				},
				{ path: '/app/order', element: <OrderAdd />, exact: true },
			],
		},
		{ path: '*', element: <NoMatch /> },
	];
};

export default Routes;
