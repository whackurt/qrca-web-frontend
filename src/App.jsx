import './App.css';
import { Dashboard, Login, PersonnelList, ScanQRCode } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<Login />} />

					<Route
						path="/"
						element={<Layout location={'Dashboard'} children={<Dashboard />} />}
					/>

					<Route
						path="/scan-qr-code"
						element={
							<Layout location={'Scan QR Code'} children={<ScanQRCode />} />
						}
					/>

					<Route
						path="/personnel-list"
						element={
							<Layout
								location={'Personnel List'}
								children={<PersonnelList />}
							/>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
