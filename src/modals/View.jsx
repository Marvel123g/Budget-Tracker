import React from "react";
import { FiX } from "react-icons/fi";

const View = ({ handleViewButton, transaction }) => {
	return (
		<div
			className="view-page flex align-center justify-center"
			onClick={handleViewButton}
		>
			{transaction && (
				<div className="page" key={transaction.id}>
					<div className="page-header">
						<h2>View Transactions</h2>
						<FiX size={25} className="cancel-btn" onClick={handleViewButton} />
					</div>
					<section>
						<div className="page-list flex g-5 align-center">
							<b>Title:</b>
							<span>{transaction.title}</span>
						</div>
						<div className="page-list flex g-5 align-center">
							<b>Amount:</b>
							<span>{transaction.amount}</span>
						</div>
						<div className="page-list flex g-5 align-center">
							<b>Type:</b>
							<span>{transaction.type}</span>
						</div>
						<div className="page-list flex g-5 align-center">
							<b>Category:</b>
							<span>{transaction.category}</span>
						</div>
						<div className="page-list flex g-5 align-center">
							<b>Date:</b>
							<span>{transaction.date}</span>
						</div>
						<div className="page-list flex g-5 align-center">
							<b>Description:</b>
							<span>{transaction.description}</span>
						</div>
					</section>
				</div>
			)}
		</div>
	);
};

export default View;
