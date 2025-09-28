import React from "react";
import HelpItem from "./HelpItem";

const Help = () => {
	const helpItems = [
		{
			title: "1. Dashboard Overview",
			info: (
				<span>
					The Dashboard gives you a summary of your balance, spending, savings,
					and recent transactions. You can also see your goals progress here.
				</span>
			),
		},
		{
			title: "2. Adding & Editing Transactions",
			info: (
				<span>
					Go to the Transactions page, Use the button to{" "}
					<b>Add a new transaction</b>. You can edit or delete any transaction
					using the action buttons in the table
				</span>
			),
		},
		{
			title: "3. Setting Goals",
			info: (
				<span>
					Navigate to the Goals page to add, edit, or delete your financial
					goals. Progress is tracked automatically as you update your goal
					values.
				</span>
			),
		},
		{
			title: "4. Managing Subscriptions",
			info: (
				<span>
					Navigate to the <b>Subscriptions</b> page to add, edit, or remove your
					recurring payments(e.g., Netflix, Spotify, Electricity Bills), Choose
					whether the subscription is weekly or monthly.
				</span>
			),
		},
		{
			title: "5. Setting Remiders",
			info: (
				<span>
					Go to the <b>Reminders</b> page to schedule important alerts for
					bills, goals, or custom events. You can delete them when no longer
					needed.
				</span>
			),
		},
		{
			title: "6. Data Persistence",
			info: (
				<span>
					All your data is stored locally in your browser. Using the clear
					button will clear all data.
				</span>
			),
		},
	];

	return (
		<div className="help-page">
			<h1>Help & Instructions</h1>
			<div className="box">
				<p className="title">Help & Instructions</p>
				{helpItems.map((item, index) => (
					<HelpItem key={index} title={item.title} info={item.info} />
				))}
			</div>
		</div>
	);
};

export default Help;
