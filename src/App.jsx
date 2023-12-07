import './App.css';
import { Dashboard, Login, PersonnelList, ScanQRCode } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import AuthenticatedPrivateRoute from './components/AuthenticatedPrivateRoute';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/login"
						element={
							<AuthenticatedPrivateRoute>
								<Login />
							</AuthenticatedPrivateRoute>
						}
					/>

					<Route
						path="/"
						element={
							<PrivateRoute redirect={'/login'}>
								<Layout location={'Dashboard'} children={<Dashboard />} />
							</PrivateRoute>
						}
					/>

					<Route
						path="/scan-qr-code"
						element={
							<PrivateRoute redirect={'/login'}>
								<Layout location={'Scan QR Code'} children={<ScanQRCode />} />
							</PrivateRoute>
						}
					/>

					<Route
						path="/personnel-list"
						element={
							<PrivateRoute redirect={'/login'}>
								<Layout
									location={'Personnel List'}
									children={<PersonnelList />}
								/>
							</PrivateRoute>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
