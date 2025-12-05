import React, { useContext, useEffect } from "react";
import UserContext from "../context/contextAPI";
import { useNavigate } from "react-router-dom";

const Reset = () => {
	const {
		transactions,
		mockGoals,
		subscriptionData,
		setTransactions,
		setMockGoals,
		setSubscriptionData,
		reminderData,
		setReminderData,
	} = useContext(UserContext);

	useEffect(() => {
		console.log(transactions);
	}, [transactions]);
	useEffect(() => {
		console.log(mockGoals);
	}, [mockGoals]);
	useEffect(() => {
		console.log(subscriptionData);
	}, [subscriptionData]);
	useEffect(() => {
		console.log(subscriptionData);
	}, [reminderData]);

	const navigate = useNavigate();
	const handleReset = () => {
		setTransactions([]);
		setMockGoals([]);
		setSubscriptionData([]);
		setReminderData([]);
		navigate("/");
	};

	const onClose = () => {
		navigate("/");
	};

	return (
		<div className="reset flex align-center justify-center">
			<div className="wrapper">
				<h1>Reset</h1>
				<div className="text">
					<p>
						This will permanently delete your current budget, expenses, income,
						goals, e.t.c records
					</p>
					<p>Are you sure you want to continue</p>
				</div>
				<div className="ctas flex g-10">
					<button onClick={handleReset}>Reset</button>
					<button onClick={onClose}>Cancel</button>
				</div>
			</div>
		</div>
	);
};

export default Reset;
