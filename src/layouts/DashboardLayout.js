import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
	console.log('	ini dashboard');
	return (
		<div>
			ini dashboard
			<Outlet />
		</div>
	);
};

export default DashboardLayout;
