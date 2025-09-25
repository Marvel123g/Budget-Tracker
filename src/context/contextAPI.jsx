import { createContext, useState } from "react";
import useWindowSize from "../hook/useWindowSize";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [transactions, setTransactions] = useState([
		{
			id: "1",
			title: "Salary Payment",
			amount: 4200,
			type: "income",
			category: "Salary",
			date: "2024-01-08",
			description: "Monthly salary",
		},
		{
			id: "2",
			title: "Grocery Shopping",
			amount: 85.5,
			type: "expense",
			category: "Food & Dining",
			date: "2024-01-09",
			description: "Weekly groceries",
		},
		{
			id: "3",
			title: "Freelance Work",
			amount: 750,
			type: "income",
			category: "Freelance",
			date: "2024-01-10",
			description: "Website development project",
		},
		{
			id: "4",
			title: "Gas Station",
			amount: 45.2,
			type: "expense",
			category: "Transportation",
			date: "2024-01-11",
			description: "Fuel for car",
		},
		{
			id: "5",
			title: "Online Purchase",
			amount: 120,
			type: "expense",
			category: "Shopping",
			date: "2024-01-12",
			description: "Books and electronics",
		},
		{
			id: "6",
			title: "Electricity Bill",
			amount: 95.3,
			type: "expense",
			category: "Utilities",
			date: "2024-01-13",
			description: "Monthly electricity bill",
		},
		{
			id: "7",
			title: "Investment Dividend",
			amount: 320,
			type: "income",
			category: "Investment",
			date: "2024-01-14",
			description: "Quarterly dividend payment",
		},
		{
			id: "8",
			title: "Investment ",
			amount: 300,
			type: "income",
			category: "Investment",
			date: "2024-01-15",
			description: "Quarterly payment",
		},
		{
			id: "9",
			title: "Real Estate",
			amount: 3200,
			type: "income",
			category: "Investment",
			date: "2024-01-16",
			description: "Real Estate Property payment",
		},
		{
			id: "10",
			title: "Restaurant Dinner",
			amount: 65.8,
			type: "expense",
			category: "Food & Dining",
			date: "2024-01-17",
			description: "Dinner with friends",
		},
	]);

	const [mockGoals, setMockGoals] = useState([
		{
			id: "1",
			title: "Emergency Fund",
			description: "Build a 6-month emergency fund for financial security",
			targetAmount: 5000,
			currentAmount: 5000,
			targetDate: "2024-12-31",
			createdAt: "2024-01-01",
		},
		{
			id: "2",
			title: "Vacation to Japan",
			description:
				"Save for a 2-week trip to Japan including flights and accommodation",
			targetAmount: 10000,
			currentAmount: 10000,
			targetDate: "2024-09-01",
			createdAt: "2024-01-01",
		},
		{
			id: "3",
			title: "New Laptop",
			description: "MacBook Pro for work and personal projects",
			targetAmount: 3000,
			currentAmount: 700,
			targetDate: "2024-03-15",
			createdAt: "2024-01-01",
		},
		{
			id: "4",
			title: "New Phone",
			description: "Samsung for games and pictures",
			targetAmount: 30000,
			currentAmount: 10000,
			targetDate: "2025-09-15",
			createdAt: "2024-05-01",
		},
	]);
	const [subscriptionData, setSubscriptionData] = useState([
		{
			id: 1,
			name: "Netflix",
			amount: 12.99,
			frequency: "Monthly",
			nextDueDate: "2025-11-01",
		},
		{
			id: 2,
			name: "Spotify",
			amount: 9.99,
			frequency: "Monthly",
			nextDueDate: "2025-10-28",
		},
		{
			id: 3,
			name: "Amazon Price",
			amount: 14.99,
			frequency: "Monthly",
			nextDueDate: "2024-11-10",
		},
		{
			id: 4,
			name: "Rent",
			amount: 500,
			frequency: "Monthly",
			nextDueDate: "2024-11-01",
		},
		{
			id: 5,
			name: "Gym Membership",
			amount: 25,
			frequency: "Monthly",
			nextDueDate: "2024-11-05",
		},
		{
			id: 6,
			name: "Internet Bill",
			amount: 45,
			frequency: "Monthly",
			nextDueDate: "2024-11-03",
		},
		{
			id: 7,
			name: "Electricity",
			amount: 60,
			frequency: "Monthly",
			nextDueDate: "2024-11-07",
		},
		{
			id: 8,
			name: "Phone Plan",
			amount: 30,
			frequency: "Monthly",
			nextDueDate: "2024-11-08",
		},
	]);

	const { width } = useWindowSize;

	const editTransaction = (id, updatedTransaction) => {
		setTransactions((prev) =>
			prev.map((transaction) =>
				transaction.id === id
					? { ...transaction, ...updatedTransaction }
					: transaction
			)
		);
	};
	const editGoal = (id, updatedGoal) => {
		setMockGoals((prev) =>
			prev.map((goal) => (goal.id === id ? { ...goal, ...updatedGoal } : goal))
		);
	};

	const editSub = (id, updatedSub) => {
		setSubscriptionData((prev) =>
			prev.map((sub) => (sub.id === id ? { ...sub, ...updatedSub } : sub))
		);
	};

	const totalIncome = transactions
		.filter((t) => t.type === "income")
		.reduce((sum, t) => sum + t.amount, 0);

	const totalExpenses = transactions
		.filter((t) => t.type === "expense")
		.reduce((sum, t) => sum + t.amount, 0);

	const totalBalance = totalIncome - totalExpenses;

	const lastSevenDaysIncome = transactions
		.slice(0, 7)
		.filter((t) => t.type === "income")
		.reduce((sum, t) => sum + t.amount, 0);

	const lastSevenDaysExpenses = transactions
		.slice(0, 7)
		.filter((t) => t.type === "expense")
		.reduce((sum, t) => sum + t.amount, 0);

	const percentage = mockGoals.map(
		(goal) => (goal.currentAmount / goal.targetAmount) * 100
	);

	const [animated, setAnimated] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);

	return (
		<UserContext.Provider
			value={{
				transactions,
				setTransactions,
				totalIncome,
				totalExpenses,
				totalBalance,
				mockGoals,
				setMockGoals,
				percentage,
				animated,
				setAnimated,
				editTransaction,
				lastSevenDaysIncome,
				lastSevenDaysExpenses,
				showDeleteModal,
				setShowDeleteModal,
				editGoal,
				width,
				subscriptionData,
				setSubscriptionData,
				editSub,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserContext;
