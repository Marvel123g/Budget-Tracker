import React, { useState, useEffect, useContext } from "react";
import {
	FiPlus,
	FiTarget,
	FiTrendingUp,
	FiCalendar,
	FiDollarSign,
	FiEdit3,
	FiTrash2,
	FiCheck,
	FiCheckCircle,
	FiXCircle,
	FiCopy,
} from "react-icons/fi";
import GoalForm from "../modals/GoalForm";
import UserContext from "../context/contextAPI";
import DeleteModal from "../modals/DeleteModal";

const Goals = () => {
	const {
		mockGoals,
		setMockGoals,
		percentage,
		animated,
		setAnimated,
		setShowDeleteModal,
		showDeleteModal,
	} = useContext(UserContext);
	const [goalForm, setGoalForm] = useState(false);
	const [selectedGoal, setSelectedGoal] = useState(null);
	const [editing, setEditing] = useState(false);

	const handleShowGoalForm = () => {
		setGoalForm(true);
		setEditing(true);
	};

	const handleCloseForm = () => {
		setGoalForm(false);
		setEditing(false);
		setSelectedGoal(null);
	};

	useEffect(() => {
		setAnimated(true);
	}, []);

	const percentages = mockGoals.map(
		(goal) => (goal.currentAmount / goal.targetAmount) * 100
	);

	const handleDelete = (id) => {
		const deleteId = id || (selectedGoal && selectedGoal.id);
		if (deleteId) {
			setMockGoals(mockGoals.filter((prev) => prev.id !== deleteId));
			setSelectedGoal(null);
			setShowDeleteModal(false);
		}
	};
	const handleDeleteMssg = (goal) => {
		setShowDeleteModal(true);
		setSelectedGoal(goal);
	};
	const closeDeleteMssg = () => {
		setShowDeleteModal(false);
		setSelectedGoal(null);
	};
	const averageProgress =
		percentages.reduce((sum, p) => sum + p, 0) / percentages.length;

	const completedGoals = mockGoals.filter(
		(goal) => goal.currentAmount >= goal.targetAmount
	);

	const totalSaved = mockGoals
		.map((goal) => goal.currentAmount)
		.reduce((acc, amount) => acc + amount, 0);

	return (
		<div className="goal-page">
			<h1>Financial Goals</h1>
			<div className="goal-header mt-30">
				<div className="goal flex align-center rounded p-20 g-15">
					<FiTarget className="icon rounded" size={45} />
					<div className="text flex flex-col rounded g-5">
						<h2> {mockGoals.length}</h2>
						<p>Total Goals</p>
					</div>
				</div>
				<div className="goal flex align-center rounded p-20 g-15">
					<FiCheck className="icon rounded" size={45} />
					<div className="text flex flex-col rounded g-5">
						<h2> {completedGoals.length}</h2>
						<p>Completed Goals</p>
					</div>
				</div>
				<div className="goal flex align-center rounded p-20 g-15">
					<FiDollarSign className="icon rounded" size={45} />
					<div className="text flex flex-col rounded g-5">
						<h2> ${totalSaved}</h2>
						<p>Total Saved</p>
					</div>
				</div>
				<div className="goal flex align-center rounded p-20 g-15">
					<FiTrendingUp className="icon rounded" size={45} />
					<div className="text flex flex-col rounded g-5">
						<h2> {averageProgress > 0 ? averageProgress.toFixed(1) : "0"}%</h2>
						<p>Average Progress</p>
					</div>
				</div>
			</div>

			<div className="list-heading flex space-between">
				<h1>Your Goals</h1>
				<button
					className="add-cta flex align-center g-5 fw-bold"
					onClick={handleShowGoalForm}
				>
					{" "}
					<FiPlus size={18} aria-label="Add new goal" /> Add Goal
				</button>
			</div>

			<div className="goal-box">
				{mockGoals.map((goal, index) => {
					const goalPercentage = percentage[index];

					return (
						<div className="list rounded p-25" key={goal.id}>
							<header>
								<div className="list-header flex align-center space-between">
									<h2>{goal.title}</h2>
									<div className="goal-action flex ">
										<button className="icon">
											<FiEdit3
												size={18}
												onClick={() => {
													setSelectedGoal(goal);
													setEditing(true);
													setGoalForm(true);
												}}
											/>
										</button>
										<button
											className="icon"
											onClick={() => handleDeleteMssg(goal)}
										>
											<FiTrash2 size={18} />
										</button>
									</div>
								</div>
								<p className="des">{goal.description}</p>
								<div className="completed flex align-center g-5">
									<FiCalendar />
									<p>{goal.targetDate}</p>
								</div>
							</header>

							<div className="progress-section">
								<div className="p-header flex align-center space-between">
									<h3>Progress</h3>
									<p>%{goalPercentage > 0 ? goalPercentage.toFixed(1) : "0"}</p>
								</div>
								<div className="p-bar rounded-1">
									<div
										className="p-bar-filled rounded-1"
										style={{ width: animated ? `${goalPercentage}%` : 0 }}
									></div>
								</div>
								<div className="p-amount flex space-between">
									<p>${goal.currentAmount.toFixed(2)}</p>
									<p>of ${goal.targetAmount.toFixed(2)}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>

			{goalForm && editing && (
				<GoalForm
					setMockGoals={setMockGoals}
					handleCloseForm={handleCloseForm}
					editGoalData={selectedGoal}
				/>
			)}
			{showDeleteModal && (
				<DeleteModal
					handleDelete={handleDelete}
					closeDeleteMssg={closeDeleteMssg}
					type={"goal"}
					selectedGoal={selectedGoal}
				/>
			)}
		</div>
	);
};

export default Goals;
