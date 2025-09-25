import React from "react";
import HelpItem from "./HelpItem";

const Help = () => {
	const helpItems = [
		{
			title: "1. Adding & Editing Transactions",
			info: (
				<span>
					Go to the Transactions page, Use the button to{" "}
					<b>Add a new transaction</b>. You can edit or delete any transaction
					using the action buttons in the table
				</span>
			),
		},
		{
			title: "2. Setting Goals",
			info: (
				<span>
					Navigate to the Goals page to add, edit, or delete your financial
					goals. Progress is tracked automatically as you update your goal
					values.
				</span>
			),
		},
		{
			title: "3. Dashboard Overview",
			info: (
				<span>
					The Dashboard gives you a summary of your balance, spending, savings,
					and recent transactions. You can also see your goals progress here.
				</span>
			),
		},
		{
			title: "4. Data Persistence",
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
