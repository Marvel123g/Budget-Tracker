import React from "react";
import { FiX } from "react-icons/fi";

const ViewSubscription = ({ closeView, subscription }) => {
	return (
		<div
			className="sub-modal flex align-center justify-center"
			onClick={closeView}
		>
			<div className="view-modal">
				{subscription && (
					<div className="view" key={subscription.id}>
						<div className="view-header flex space-between align-center">
							<h2>View Subscription</h2>
							<FiX size={30} className="pointer" onClick={closeView} />
						</div>
						<div className="body">
							<div className="item flex align-center g-5">
								<b>Title:</b>
								<p>{subscription.name}</p>
							</div>
							<div className="item flex align-center g-5">
								<b>Amount:</b>
								<p>{subscription.amount.toFixed(2)}</p>
							</div>
							<div className="item flex align-center g-5">
								<b>Frequency:</b>
								<p>{subscription.frequency}</p>
							</div>
							<div className="item flex align-center g-5">
								<b>Next Due Date:</b>
								{/* <p>{subscription.nextDueDate}</p> */}
								<p>
									{new Date() > new Date(subscription.nextDueDate)
										? "Done"
										: "Pending"}
								</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default ViewSubscription;
