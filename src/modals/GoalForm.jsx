import React, { useContext, useState } from "react";
import { FiX } from "react-icons/fi";
import UserContext from "../context/contextAPI";

const GoalForm = ({ handleCloseForm, setMockGoals, editGoalData }) => {
	const { editGoal } = useContext(UserContext);
	const [title, setTitle] = useState(editGoalData ? editGoalData.title : "");
	const [description, setDescription] = useState(
		editGoalData ? editGoalData.description : ""
	);
	const [targetAmount, setTargetAmount] = useState(
		editGoalData ? editGoalData.targetAmount : ""
	);
	const [currentAmount, setCurrentAmount] = useState(
		editGoalData ? editGoalData.currentAmount : ""
	);
	const [targetDate, setTargetDate] = useState(
		editGoalData ? editGoalData.targetDate : ""
	);

	const handleGoalForm = () => {
		if (editGoalData) {
			editGoal(editGoalData.id, {
				title,
				description,
				targetAmount: Number(targetAmount),
				currentAmount: Number(currentAmount),
				targetDate,
			});
		} else {
			const newGoal = {
				id: new Date(),
				title,
				description,
				targetAmount: Number(targetAmount),
				currentAmount: Number(currentAmount),
				targetDate,
			};
			setMockGoals((prev) => [newGoal, ...prev]);
		}
		handleCloseForm();
	};

	return (
		<div
			className="goal-container flex align-center justify-center"
			onClick={handleCloseForm}
		>
			<div className="goal-form" onClick={(e) => e.stopPropagation()}>
				<div className="header flex align-center space-between">
					<h3>{editGoalData ? "Edit Goal" : "Create New Goal"}</h3>
					<FiX size={30} onClick={handleCloseForm} className="cancel" />
				</div>
				<fieldset className="flex flex-col">
					<label>Goal Title</label>
					<input
						type="text"
						placeholder="e.g., Emergency Fund, Vacation"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</fieldset>
				<fieldset className="flex flex-col">
					<label>Description (Optional)</label>
					<textarea
						placeholder="Describe your goal and why it's important to you"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					></textarea>
				</fieldset>
				<fieldset className="flex flex-col">
					<label>Target Amount</label>
					<input
						type="number"
						placeholder="How much do you want to save"
						value={targetAmount}
						onChange={(e) => setTargetAmount(e.target.value)}
					/>
				</fieldset>
				<fieldset className="flex flex-col">
					<label>Current Amount</label>
					<input
						type="number"
						placeholder="0"
						value={currentAmount}
						onChange={(e) => setCurrentAmount(e.target.value)}
					/>
				</fieldset>
				<fieldset className="flex flex-col">
					<label>Target Date</label>
					<input
						type="date"
						value={targetDate}
						onChange={(e) => setTargetDate(e.target.value)}
					/>
				</fieldset>

				<div className="ctas flex align-center">
					<button
						type="button"
						onClick={handleCloseForm}
						className="rounded fw-bold p-10"
					>
						Cancel
					</button>
					<button
						type="submit"
						onClick={handleGoalForm}
						className="rounded fw-bold p-10"
					>
						{editGoalData ? "Update Goal" : "Create Goal"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default GoalForm;
