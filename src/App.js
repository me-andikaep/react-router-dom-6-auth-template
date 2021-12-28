// import { Router, useLocation, useRoutes } from 'react-router-dom';
// import Routes from './configs/routes';
import { Routes2 } from './configs/Routes2';

function App() {
	const token = true;

	// let element = useRoutes(Routes(token));
	return (
		<div className='App'>
			<div style={{ width: '100%', height: '80px', backgroundColor: 'azure' }}>
				Header
			</div>
			{/* <div>{element}</div> */}
			<Routes2 token={token} />
		</div>
	);
}

export default App;
