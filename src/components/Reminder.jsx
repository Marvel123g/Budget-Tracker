import React, { useState } from "react";
import { FiPlus, FiTrash2 } from "react-icons/fi";
import ReminderModal from "../modals/ReminderModal";

const Reminder = () => {
	const [reminderData, setReminderData] = useState([
		{
			id: 1,
			title: "Pay electricity bill",
			dueDate: "2025-11-05",
		},
		{
			id: 2,
			title: "Save $200 for December travel",
			dueDate: "2024-11-30",
		},
		{
			id: 3,
			title: "Renew car insurance",
			dueDate: "2024-12-01",
		},
		{
			id: 4,
			title: "Transfer $50 to savings account",
			dueDate: "2024-10-25",
		},
		{
			id: 5,
			title: "Pay credit card bill",
			dueDate: "2024-10-29",
		},
		{
			id: 6,
			title: "Buy birthday gift for Mom",
			dueDate: "2024-11-12",
		},
		{
			id: 7,
			title: "Review monthly budget",
			dueDate: "2024-11-01",
		},
	]);

	const [showReminderModal, setShowReminderModal] = useState(false);

	const handleReminderModal = () => {
		setShowReminderModal(true);
		console.log("clicked");
	};
	const handleCloseModal = () => {
		setShowReminderModal(false);
	};
	const handleDelete = (reminder) => {
		setReminderData(reminderData.filter((prev) => prev.id !== reminder.id));
	};

	return (
		<div className="reminder-page">
			<div className="header flex space-between align-center">
				<h1>Reminders</h1>
				<button
					className="add-cta flex align-center g-5 fw-bold"
					onClick={handleReminderModal}
				>
					<FiPlus size={18} /> Add Reminder
				</button>
			</div>
			<div className="box flex flex-col">
				{reminderData.map((reminder) => (
					<div
						className="list rounded-1 flex space-between align-center"
						key={reminder.id}
					>
						<h3>{reminder.title}</h3>
						<div className="left flex align-center g-15">
							<p>{reminder.dueDate}</p>
							<span>
								{new Date() > new Date(reminder.dueDate) ? "Done" : "Pending"}
							</span>
							<button className="icon" onClick={() => handleDelete(reminder)}>
								<FiTrash2 size={18} />
							</button>
						</div>
					</div>
				))}
			</div>
			{showReminderModal && (
				<ReminderModal
					handleCloseModal={handleCloseModal}
					setReminderData={setReminderData}
				/>
			)}
		</div>
	);
};

export default Reminder;
