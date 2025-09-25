import React, { useContext, useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import UserContext from "../context/contextAPI";

const Budget = () => {
	const [budgetData, setBudgetData] = useState([
		{
			id: 1,
			category: "Food & Dining",
			limit: "300",
			spent: "220",
		},
		{
			id: 2,
			category: "Transport",
			limit: "150",
			spent: "95",
		},
		{
			id: 3,
			category: "Enternaiment",
			limit: "120",
			spent: "100",
		},
		{
			id: 4,
			category: "Utilities",
			limit: "200",
			spent: "180",
		},
		{
			id: 5,
			category: "Shopping",
			limit: "250",
			spent: "60",
		},
		{
			id: 6,
			category: "Healthcare",
			limit: "100",
			spent: "40",
		},
		{
			id: 7,
			category: "Investment",
			limit: "200",
			spent: "100",
		},
		{
			id: 8,
			category: "Real Estate",
			limit: "500",
			spent: "200",
		},
	]);
	const { animated, setAnimated } = useContext(UserContext);

	useEffect(() => {
		setAnimated(true);
	}, []);

	return (
		<div className="budget-page">
			<h1>Budget</h1>
			<div className="box">
				<div className="header">
					<h2>Budget</h2>
					<button>
						<FiPlus />
						<span>Add Budget</span>
					</button>
				</div>
				{budgetData.map((budget) => {
					const percentage = (budget.spent / budget.limit) * 100;
					return (
						<div className="item" key={budget.id}>
							<h3>{budget.category}</h3>
							<div className="progress flex">
								<div className="p-bar rounded-1">
									<div
										className="p-fill rounded-1"
										style={{ width: animated ? `${percentage}%` : 0 }}
									></div>
								</div>
								<div className="amount flex g-5">
									<span>${budget.spent}</span> / <span>${budget.limit}</span>
									<p>({percentage.toFixed(0)}%)</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Budget;
