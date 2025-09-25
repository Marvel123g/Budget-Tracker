import React, { useState } from "react";
import { FiX } from "react-icons/fi";

const ReminderModal = ({ handleCloseModal, setReminderData }) => {
	const [title, setTitle] = useState("");
	const [dueDate, setDueDate] = useState("");
	const [titleError, setTitleError] = useState("");
	const [dueError, setDueError] = useState("");

	const handleAddReminder = (e) => {
		e.preventDefault();
		let isValid = true;
		const today = new Date();
		today.setHours(0, 0, 0, 0);

		const due = new Date(dueDate);
		due.setHours(0, 0, 0, 0);

		if (!title) {
			setTitleError("This Field cannot be blank");
			isValid = false;
		} else {
			setTitleError("");
		}

		if (!dueDate) {
			setDueError("This Field cannot be blank");
			isValid = false;
		} else if (due <= today) {
			setDueError("Due Date must be in the future!");
			isValid = false;
		} else {
			setDueError("");
		}

		if (isValid) {
			const newReminder = {
				id: new Date(),
				title,
				dueDate,
			};
			setReminderData((prev) => [newReminder, ...prev]);
			handleCloseModal();
			setTitleError("");
			setDueError("");
		}
	};
	return (
		<div
			className="reminder-modal flex justify-center align-center"
			onClick={handleCloseModal}
		>
			<form onSubmit={handleAddReminder} onClick={(e) => e.stopPropagation()}>
				<div className="header flex space-between align-center">
					<h2>Add New Reminder</h2>
					<FiX size={25} onClick={handleCloseModal} className="pointer" />
				</div>

				<fieldset className="flex flex-col g-5">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						placeholder="Input the reminder title. e.g  Netflix"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					{titleError && <p className="errorMssg">{titleError}</p>}
				</fieldset>
				<fieldset className="flex flex-col g-5">
					<label htmlFor="date">Due Date</label>
					<input
						type="date"
						value={dueDate}
						onChange={(e) => setDueDate(e.target.value)}
					/>
					{dueError && <p className="errorMssg">{dueError}</p>}
				</fieldset>
				<div className="btns flex">
					<button type="button" onClick={handleCloseModal}>
						Cancel
					</button>
					<button type="submit">Add New Reminder</button>
				</div>
			</form>
		</div>
	);
};

export default ReminderModal;
