import { lazy, Suspense } from 'react';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import Home from '../pages/Home';

const Order = lazy(() => import('../pages/Order'));

export function Routes2({ token }) {
	function RequireAuth({ children }) {
		let auth = token;
		let location = useLocation();

		if (!auth) {
			return <Navigate to='/' state={{ from: location }} replace />;
		}

		return children;
	}

	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route
				path='/app'
				element={
					<RequireAuth>
						<Suspense fallback={<>...</>}>
							<DashboardLayout />
						</Suspense>
						{/* <Outlet /> */}
					</RequireAuth>
				}
			>
				<Route path='/app/' element={<Order />} />
				<Route path='/app/order' element={<Order />} />
			</Route>
			<Route path='*' element={<Home />} />
		</Routes>
	);
}
