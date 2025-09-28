import React, { useContext, useState } from "react";
import { FiEdit3, FiPlus, FiTrash2 } from "react-icons/fi";
import SubscriptionModal from "../modals/SubscriptionModal";
import UserContext from "../context/contextAPI";
import ViewSubscription from "../modals/ViewSubscription";
import useWindowSize from "../hook/useWindowSize";

const Subscriptions = () => {
	const { subscriptionData, setSubscriptionData } = useContext(UserContext);
	const [showSubForm, setShowSubForm] = useState(false);
	const [selectedSub, setSelectedSub] = useState(null);
	const [view, setView] = useState(false);
	const [edit, setEdit] = useState(false);
	const { width } = useWindowSize();

	const handleShowSubForm = () => {
		setShowSubForm(true);
		setEdit(true);
	};
	const handleView = (sub) => {
		setView(true);
		setSelectedSub(sub);
	};
	const closeView = () => {
		setView(false);
		setSelectedSub(null);
	};
	const handleCloseSubForm = () => {
		setShowSubForm(false);
		setEdit(false);
		setSelectedSub(null);
	};

	const handleDelete = (sub) => {
		setSubscriptionData(subscriptionData.filter((prev) => prev.id !== sub.id));
	};
	const isMobile = width <= 768;
	return (
		<div className="subscription-page">
			<div className="header flex space-between align-center">
				<h1>Subscriptions</h1>
				<button
					className="add-cta flex align-center g-5 fw-bold"
					onClick={handleShowSubForm}
				>
					<FiPlus size={18} /> Add Subscription
				</button>
			</div>
			<div className="sub-page">
				<div className="table">
					{!isMobile && (
						<>
							<div className="table-header">
								<div className="list">
									<div className="item">NAME</div>
									<div className="item">AMOUNT</div>
									<div className="item">FREQUENCY</div>
									<div className="item">NEXT DUE DATE</div>
									<div className="item">STATUS</div>
									<div className="item">ACTIONS</div>
								</div>
							</div>

							<div className="table-body">
								{subscriptionData.map((sub) => (
									<div className="items" key={sub.id}>
										<div className="item">{sub.name}</div>
										<div className="item">${sub.amount.toFixed(2)}</div>
										<div className="item">{sub.frequency}</div>
										<div className="item">{sub.nextDueDate}</div>
										<div className="item">
											<span>
												{new Date() > new Date(sub.nextDueDate)
													? "Done"
													: "Pending"}
											</span>
										</div>
										<div className="item action flex align-center g-5">
											<button className="icon">
												<FiEdit3
													size={18}
													onClick={() => {
														setSelectedSub(sub);
														setEdit(true);
														setShowSubForm(true);
													}}
												/>
											</button>
											<button
												className="icon"
												onClick={() => handleDelete(sub)}
											>
												<FiTrash2 size={18} />
											</button>
										</div>
									</div>
								))}
							</div>
						</>
					)}
					{isMobile && (
						<>
							<div className="table-header">
								<div className="list">
									<div className="item">NAME</div>
									<div className="item">AMOUNT</div>
									<div className="item">ACTIONS</div>
								</div>
							</div>

							<div className="table-body">
								{subscriptionData.map((sub) => (
									<div className="items" key={sub.id}>
										<div className="item">{sub.name}</div>
										<div className="item">${sub.amount.toFixed(2)}</div>
										<div className="item action flex align-center g-5">
											<button className="icon" onClick={() => handleView(sub)}>
												View
											</button>
											<button className="icon">
												<FiEdit3
													size={18}
													onClick={() => {
														setSelectedSub(sub);
														setEdit(true);
														setShowSubForm(true);
													}}
												/>
											</button>
											<button
												className="icon"
												onClick={() => handleDelete(sub)}
											>
												<FiTrash2 size={18} />
											</button>
										</div>
									</div>
								))}
							</div>
						</>
					)}
				</div>
			</div>
			{view && (
				<ViewSubscription closeView={closeView} subscription={selectedSub} />
			)}
			{showSubForm && edit && (
				<SubscriptionModal
					handleCloseSubForm={handleCloseSubForm}
					setSubscriptionData={setSubscriptionData}
					editSubData={selectedSub}
				/>
			)}
		</div>
	);
};

export default Subscriptions;
