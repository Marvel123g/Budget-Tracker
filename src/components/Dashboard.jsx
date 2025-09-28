import React from "react";
import {
	FiTrendingUp,
	FiTrendingDown,
	FiCreditCard,
	FiPlus,
	FiMinus,
} from "react-icons/fi";
import { useContext, useEffect } from "react";
import UserContext from "../context/contextAPI";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
	const {
		mockGoals,
		percentage,
		animated,
		setAnimated,
		transactions,
		totalBalance,
		totalIncome,
		totalExpenses,
		lastSevenDaysIncome,
		lastSevenDaysExpenses,
		totalLastSevenDaysBalance,
	} = useContext(UserContext);

	useEffect(() => {
		setAnimated(true);
	}, []);

	const navigate = useNavigate();
	const handleViewTransaction = () => {
		navigate("/transactions");
	};
	return (
		<div className="dashboard-page">
			<h1>Dashboard</h1>
			<div className="total-section">
				<div className="list flex align-center rounded-1 bal">
					<FiCreditCard className="icon" size={40} />
					<div className="text">
						<p>Total balance</p>
						<span>{totalBalance.toFixed(2)}</span>
					</div>
				</div>
				<div className="list flex align-center rounded-1 spend">
					<FiTrendingDown className="icon" size={40} />
					<div className="text">
						<p>Total spending</p>
						<span className="flex align-center">
							<FiMinus size={27} />
							{totalExpenses.toFixed(2)}
						</span>
					</div>
				</div>
				<div className="list flex align-center rounded-1 income">
					<FiTrendingUp className="icon" size={40} />
					<div className="text">
						<p>Total income</p>
						<span className="flex align-center">
							<FiPlus size={27} />
							{totalIncome.toFixed(2)}
						</span>
					</div>
				</div>
			</div>

			<section className="flex">
				<div className="left ">
					<div className="left-header flex flex-col align-center">
						<div className="header flex align-center">
							<h2>Working Capital (Last 7 Days)</h2>
							<div className="sub-text flex g-15">
								<div className="text flex align-center fw-bold">
									<span className="flex align-center">
										<FiPlus />
										Income:
									</span>
									<span>${lastSevenDaysIncome}</span>
								</div>
								<div className="text flex align-center fw-bold">
									<span className="flex align-center">
										<FiMinus />
										Expense:
									</span>
									<span>${lastSevenDaysExpenses}</span>
								</div>
							</div>
						</div>
						<p>Net: ${totalLastSevenDaysBalance.toFixed(1)}</p>
					</div>
					<div className="semi-trans rounded-1">
						<div className="header flex space-between align-center">
							<b>Recent Transactions</b>
							<span onClick={handleViewTransaction}>View All</span>
						</div>
						<div className="table">
							<div className="table-header">
								<div className="list">
									<div className="item">NAME</div>
									<div className="item">TYPE</div>
									<div className="item">AMOUNT</div>
									<div className="item">DATE</div>
								</div>
							</div>
							{transactions.slice(0, 5).map((transaction) => (
								<div className="table-body" key={transaction.id}>
									<div className="items">
										<div className="item">{transaction.title}</div>
										<div className="item">{transaction.type}</div>
										<div className="item">{transaction.amount}</div>
										<div className="item">{transaction.date}</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="right rounded ">
					<h2>Goal Progress</h2>
					<div className="box flex flex-col g-15">
						{mockGoals.map((goal, index) => {
							const goalPercentage = percentage[index];

							return (
								<div
									className="item rounded flex flex-col g-15 p-20"
									key={goal.id}
								>
									<h3>{goal.title}</h3>
									<p className="flex g-5">
										<span>{goal.currentAmount}</span>/
										<span>{goal.targetAmount}</span>
									</p>
									<div className="p-bar rounded-1">
										<div
											className="p-bar-filled rounded-1"
											style={{
												width: animated ? `${goalPercentage}%` : 0,
											}}
										></div>
									</div>
									<p>{goalPercentage.toFixed(1)}% complete</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Dashboard;
