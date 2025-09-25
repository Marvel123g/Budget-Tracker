import React from "react";
import { FiAlertCircle } from "react-icons/fi";

const DeleteModal = ({
	transaction,
	handleDeleteModal,
	closeDeleteModal,
	type,
	handleDelete,
	closeDeleteMssg,
	selectedGoal,
}) => {
	const handleDeleteClick = () => {
		if (handleDeleteModal && transaction) {
			handleDeleteModal(transaction);
		} else if (handleDelete) {
			handleDelete(selectedGoal.id);
		}
	};

	const handleClose = () => {
		if (closeDeleteModal) {
			closeDeleteModal();
		} else if (closeDeleteMssg) {
			closeDeleteMssg();
		}
	};
	return (
		<div
			className="deleteModal flex align-center justify-center"
			onClick={handleClose}
		>
			<div
				className="modalBox flex align-center flex-col"
				onClick={(e) => e.stopPropagation()}
			>
				<FiAlertCircle size={100} className="alert" />
				<h2 className="delete-title">Delete {type}?</h2>
				<div className="text flex flex-col align-center">
					<p>Are you sure you want to delete this {type}?</p>
					<p>This action cannot be undone</p>
				</div>
				<div className="ctas flex">
					<button onClick={handleDeleteClick}>Delete</button>
					<button onClick={handleClose}>Cancel</button>
				</div>
			</div>
		</div>
	);
};

export default DeleteModal;
