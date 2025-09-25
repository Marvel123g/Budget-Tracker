import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Transaction from "./components/Transaction";
import Goals from "./components/Goals";
import Guide from "./components/Guide";
import Calculator from "./components/Calculator";
import Settings from "./components/Settings";
import Help from "./components/Help";
import Logout from "./components/Logout";
import { UserProvider } from "./context/contextAPI";
import Subscriptions from "./components/Subscriptions";
import Reminder from "./components/Reminder";
// import Budget from "./components/Budget";

function App() {
	return (
		<>
			<UserProvider>
				<Sidebar />
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/transactions" element={<Transaction />} />
					<Route path="/goals" element={<Goals />} />
					{/* <Route path="/budget" element={<Budget />} /> */}
					<Route path="/subscriptions" element={<Subscriptions />} />
					<Route path="/reminder" element={<Reminder />} />
					<Route path="/guide" element={<Guide />} />
					<Route path="/calculator" element={<Calculator />} />
					{/* <Route path="/settings" element={<Settings/>}/> */}
					<Route path="/help" element={<Help />} />
					<Route path="/logout" element={<Logout />} />
				</Routes>
			</UserProvider>
		</>
	);
}

export default App;
