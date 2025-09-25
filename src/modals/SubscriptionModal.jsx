import React, { useContext, useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import UserContext from "../context/contextAPI";

const SubscriptionModal = ({
	setSubscriptionData,
	editSubData,
	handleCloseSubForm,
}) => {
	const { editSub } = useContext(UserContext);
	const [name, setName] = useState(editSubData ? editSubData.name : "");
	const [amount, setAmount] = useState(editSubData ? editSubData.amount : "");
	const [frequency, setFrequency] = useState(
		editSubData ? editSubData.frequency : ""
	);
	const [nextDueDate, setNextDueDate] = useState(
		editSubData ? editSubData.nextDueDate : ""
	);

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	if (editSubData) {
	// 		editSub(editSubData.id, {
	// 			name,
	// 			amount: Number(amount),
	// 			frequency,
	// 			nextDueDate,
	// 		});
	// 	} else {
	// 		const newSubscription = {
	// 			id: Date.now(),
	// 			name,
	// 			amount: Number(amount),
	// 			frequency,
	// 			nextDueDate,
	// 		};
	// 		setSubscriptionData((prev) => [newSubscription, ...prev]);
	// 	}
	// 	handleCloseSubForm();
	// };
	const handleSubmit = () => {
		if (editSubData) {
			editSub(editSubData.id, {
				name,
				amount: Number(amount),
				frequency,
				nextDueDate,
			});
		} else {
			const newSubscription = {
				id: Date.now(),
				name,
				amount: Number(amount),
				frequency,
				nextDueDate,
			};
			setSubscriptionData((prev) => [newSubscription, ...prev]);
		}
		handleCloseSubForm();
	};
	return (
		<div
			className="sub-modal flex justify-center align-center"
			onClick={handleCloseSubForm}
		>
			<form onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
				<div className="flex align-center space-between">
					<h3>{editSubData ? "Edit Subscription" : "Add New Subscription"}</h3>
					<FiX size={30} onClick={handleCloseSubForm} className="pointer" />
				</div>
				<fieldset className="flex flex-col">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						placeholder="e.g Netflix, Spotify"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</fieldset>
				<fieldset className="flex flex-col">
					<label htmlFor="amount">Amount</label>
					<input
						type="number"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
					/>
				</fieldset>
				<select
					name="frequency"
					value={frequency}
					onChange={(e) => setFrequency(e.target.value)}
				>
					<option value="" disabled className="fw-bold">
						Frequency
					</option>
					<option value="Weekly" className="fw-bold">
						Weekly
					</option>
					<option value="Monthly" className="fw-bold">
						Monthly
					</option>
				</select>
				<fieldset className="flex flex-col">
					<label htmlFor="next due date">Next Due Date</label>
					<input
						type="date"
						value={nextDueDate}
						onChange={(e) => setNextDueDate(e.target.value)}
					/>
				</fieldset>
				<div className="ctas flex">
					<button type="button" onClick={handleCloseSubForm}>
						Cancel
					</button>
					<button type="submit">
						{editSubData ? "Update Subscription" : "Add New Subscription"}
					</button>
				</div>
			</form>
		</div>
	);
};

export default SubscriptionModal;
