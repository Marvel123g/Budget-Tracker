import React, { useContext, useState } from "react";
import { FiX, FiTrendingDown, FiTrendingUp } from "react-icons/fi";
import UserContext from "../context/contextAPI";

const NewTransactionForm = ({ handleCloseAddTransaction, editData }) => {
	const { setTransactions, editTransaction, transactions } =
		useContext(UserContext);
	const [activeTab, setActiveTab] = useState(
		editData ? editData.type : "expense"
	);
	const [amount, setAmount] = useState(editData ? editData.amount : "");
	const [title, setTitle] = useState(editData ? editData.title : "");
	const [description, setDescription] = useState(
		editData ? editData.description : ""
	);
	const [category, setCategory] = useState(editData ? editData.category : "");
	const [date, setDate] = useState(editData ? editData.date : "");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (editData) {
			editTransaction(editData.id, {
				type: activeTab,
				amount: Number(amount),
				title,
				description,
				category,
				date,
			});
		} else {
			setTransactions((prev) => [
				{
					id: Date.now(),
					amount: Number(amount),
					title,
					description,
					type: activeTab,
					category,
					date,
				},
				...prev,
			]);
		}
		handleCloseAddTransaction();
	};

	return (
		<div
			className="form-page flex align-center justify-center"
			onClick={handleCloseAddTransaction}
		>
			<form onClick={(e) => e.stopPropagation()}>
				<div className="header flex space-between">
					<h3>{editData ? "Edit Transaction" : "Add New Transaction"}</h3>
					<FiX
						size={25}
						className="pointer"
						onClick={handleCloseAddTransaction}
					/>
				</div>
				<section>
					<p>Transaction Type</p>
					<div className="type flex align-center">
						<button
							type="button"
							className={`tab ${
								activeTab == "expense" ? "active" : ""
							} flex align-center g-5 justify-center`}
							onClick={() => setActiveTab("expense")}
						>
							<FiTrendingDown /> Expense
						</button>
						<button
							type="button"
							className={`tab ${
								activeTab == "income" ? "active" : ""
							} flex align-center g-5 justify-center`}
							onClick={() => setActiveTab("income")}
						>
							<FiTrendingUp /> Income
						</button>
					</div>
				</section>
				<fieldset className="flex flex-col">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder="Enter transaction title"
					/>
				</fieldset>
				<fieldset className="flex flex-col">
					<label htmlFor="amount">Amount</label>
					<input
						type="number"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
					/>
				</fieldset>
				<fieldset className="flex flex-col">
					<label htmlFor="category">Category</label>
					<select
						name="Transaction Categories"
						className="p-10 rounded fw-bold"
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					>
						<option value="" disabled className="fw-bold">
							Select a categories
						</option>
						<option value="Salary" className="fw-bold">
							Salary
						</option>
						<option value="Food & Dining" className="fw-bold">
							Food & Dining
						</option>
						<option value="Charity" className="fw-bold">
							Charity
						</option>
						<option value="Freelance" className="fw-bold">
							Freelance
						</option>
						<option value="Utility" className="fw-bold">
							Utility
						</option>
						<option value="Transportation" className="fw-bold">
							Transportation
						</option>
						<option value="Shopping" className="fw-bold">
							Shopping
						</option>
						<option value="Entertainment" className="fw-bold">
							Entertainment
						</option>
						<option value="Healthcare" className="fw-bold">
							Healthcare
						</option>
						<option value="Education" className="fw-bold">
							Education
						</option>
						<option value="Other Expenses" className="fw-bold">
							Other Expenses
						</option>
					</select>
				</fieldset>
				<fieldset className="flex flex-col">
					<label htmlFor="date">Date</label>
					<input
						type="date"
						value={date}
						onChange={(e) => setDate(e.target.value)}
					/>
				</fieldset>
				<fieldset className="flex flex-col">
					<label htmlFor="description">Description</label>
					<textarea
						name=""
						id=""
						placeholder="Add any additional notes..."
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					></textarea>
				</fieldset>

				<div className="btns flex align-center">
					<button type="button" onClick={handleCloseAddTransaction}>
						Cancel
					</button>
					<button type="submit" onClick={handleSubmit}>
						{editData ? "Update Transaction" : " Add Transaction"}
					</button>
				</div>
			</form>
		</div>
	);
};

export default NewTransactionForm;
