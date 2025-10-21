import React, { useState, useEffect, useContext } from "react";
import { FiPlus, FiTrash2 } from "react-icons/fi";
import ReminderModal from "../modals/ReminderModal";
import UserContext from "../context/contextAPI";

const Reminder = () => {
	const { reminderData, setReminderData } = useContext(UserContext);

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
				{reminderData.length > 0 ? (
					reminderData.map((reminder) => (
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
									<FiTrash2 size={18} className="trash" />
								</button>
							</div>
						</div>
					))
				) : (
					<p className="Mssg">No reminder date set</p>
				)}
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
