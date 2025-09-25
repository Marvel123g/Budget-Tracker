import { useState, useContext } from "react";
import { FiEdit3, FiTrash2, FiPlus } from "react-icons/fi";
import View from "../modals/View";
import UserContext from "../context/contextAPI";
import NewTransactionForm from "../modals/NewTransactionForm";
import DeleteModal from "../modals/DeleteModal";
import useWindowSize from "../hook/useWindowSize";

const Transaction = () => {
	const {
		transactions,
		setTransactions,
		totalIncome,
		totalExpenses,
		showDeleteModal,
		setShowDeleteModal,
	} = useContext(UserContext);
	const { width } = useWindowSize();
	const [showView, setShowView] = useState(false);
	const [search, setSearch] = useState("");
	const [filterType, setFilterType] = useState("all");
	const [filterCategory, setFilterCategory] = useState("all");

	const getCategories = (transactions) => {
		return new Set(transactions.map((t) => t.category)).size;
	};
	const totalCategory = getCategories(transactions);
	const [selectedTransaction, setSelectedTransaction] = useState(null);
	const [showAddTransactionForm, setShowAddTransactionForm] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const mobile = width <= 768;

	const handleViewButton = (transaction) => {
		setShowView(true);
		setSelectedTransaction(transaction);
	};

	const handleCloseView = () => {
		setShowView(false);
		setSelectedTransaction(null);
	};
	const handleDeleteModalMssg = (transaction) => {
		setShowDeleteModal(true);
		setSelectedTransaction(transaction);
	};
	const handleDeleteModal = (transaction) => {
		setTransactions(transactions.filter((x) => x.id !== transaction.id));
		setShowDeleteModal(false);
	};
	const closeDeleteModal = () => {
		setShowDeleteModal(false);
		setSelectedTransaction(null);
	};
	const handleAddTransaction = () => {
		setShowAddTransactionForm(true);
		setIsEditing(true);
	};

	const handleCloseAddTransaction = () => {
		setShowAddTransactionForm(false);
		setIsEditing(false);
		setSelectedTransaction(null);
	};

	const filteredSearch = transactions.filter((transaction) => {
		const matchSearch = transaction.title
			.toLowerCase()
			.includes(search.toLowerCase());

		const matchType =
			filterType === "all" ||
			transaction.type.toLowerCase() === filterType.toLowerCase();

		const matchCategory =
			filterCategory === "all" ||
			transaction.category.toLowerCase() === filterCategory.toLowerCase();

		return matchSearch && matchType && matchCategory;
	});

	return (
		<div className="trasanction-page">
			<h1>Transaction History</h1>
			<div className="input-field flex mt-30">
				<input
					type="text"
					placeholder="Search transaction..."
					className="p-10 rounded fw-bold"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>

				<select
					name="Transaction Type"
					className="p-10 rounded fw-bold"
					value={filterType}
					onChange={(e) => setFilterType(e.target.value)}
				>
					<option value="all" className="fw-bold">
						All Types
					</option>
					<option value="income" className="fw-bold">
						Income
					</option>
					<option value="expense" className="fw-bold">
						Expenses
					</option>
				</select>

				<select
					name="Transaction Categories"
					className="p-10 rounded fw-bold"
					value={filterCategory}
					onChange={(e) => setFilterCategory(e.target.value)}
				>
					<option value="all" className="fw-bold">
						All Categories
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
				</select>

				<button
					className="flex align-center justify-center rounded fw-bold g-5"
					onClick={handleAddTransaction}
				>
					<FiPlus size={18} />
					<span>Add Transaction</span>
				</button>
			</div>

			<div className="totals">
				<div className="t-transaction flex flex-col align-center g-15 rounded-1 p-20">
					<span className="fw-bold">{transactions.length}</span>
					<p>TOTAL TRANSACTIONS</p>
				</div>
				<div className="t-income flex flex-col align-center g-15 rounded-1 p-20">
					<span className="fw-bold">${totalIncome.toFixed(2)}</span>
					<p>TOTAL INCOME</p>
				</div>
				<div className="t-expenses flex flex-col align-center g-15 rounded-1 p-20">
					<span className="fw-bold">${totalExpenses.toFixed(2)}</span>
					<p>TOTAL EXPENSES</p>
				</div>
				<div className="category flex flex-col align-center g-15 rounded-1 p-20">
					<span className="fw-bold">{totalCategory}</span>
					<p>CATEGORIES</p>
				</div>
			</div>

			<div className="trans-page">
				<div className="table">
					<div className="table-header">
						{!mobile && (
							<div className="list">
								<div className="item">TRANSACTION</div>
								<div className="item">AMOUNT</div>
								<div className="item">CATEGORY</div>
								<div className="item">DATE</div>
								<div className="item">TYPE</div>
								<div className="item">ACTIONS</div>
							</div>
						)}
						{mobile && (
							<div className="list">
								<div className="item">TRANSACTION</div>
								<div className="item">AMOUNT</div>
								{/* <th>CATEGORY</th>
							<th>DATE</th>
							<th>TYPE</th> */}
								<div className="item">ACTIONS</div>
							</div>
						)}
					</div>

					<div className="table-body">
						{!mobile &&
							(filteredSearch.length > 0 ? (
								filteredSearch.map((transaction) => (
									<div className="items" key={transaction.id}>
										<div className="item">{transaction.title}</div>
										<div className="item">{transaction.amount}</div>
										<div className="item">
											<span>{transaction.category}</span>
										</div>
										<div className="item">{transaction.date}</div>
										<div className="item">
											<span className="type">{transaction.type}</span>
										</div>
										<div className=" item action flex align-center g-5">
											<button
												className="icon view"
												onClick={() => handleViewButton(transaction)}
											>
												View
											</button>
											<button
												className="icon edit"
												onClick={() => {
													setSelectedTransaction(transaction);
													setIsEditing(true);
													setShowAddTransactionForm(true);
												}}
											>
												<FiEdit3 className="fi" size={18} />
											</button>
											<button
												className="icon delete"
												onClick={() => handleDeleteModalMssg(transaction)}
											>
												<FiTrash2 className="fi" size={18} />
											</button>
										</div>
									</div>
								))
							) : (
								<p className="Mssg">No Transaction Found</p>
							))}
						{/* {} */}

						{mobile &&
							(filteredSearch.length > 0 ? (
								filteredSearch.map((transaction) => (
									<div className="items" key={transaction.id}>
										<div className="item">{transaction.title}</div>
										<div className="item">{transaction.amount}</div>
										{/* <td>
										<span>{transaction.category}</span>
									</td>
									<td>{transaction.date}</td>
									<td>
										<span className="type">{transaction.type}</span>
									</td> */}
										<div className="item action flex align-center g-5">
											<button
												className="icon view"
												onClick={() => handleViewButton(transaction)}
											>
												View
											</button>
											<button
												className="icon edit"
												onClick={() => {
													setSelectedTransaction(transaction);
													setIsEditing(true);
													setShowAddTransactionForm(true);
												}}
											>
												<FiEdit3 className="fi" size={18} />
											</button>
											<button
												className="icon delete"
												onClick={() => handleDeleteModalMssg(transaction)}
											>
												<FiTrash2 className="fi" size={18} />
											</button>
										</div>
									</div>
								))
							) : (
								<p className="Mssg">No Transaction Found</p>
							))}
					</div>
				</div>
			</div>
			{showView && selectedTransaction && (
				<View
					handleViewButton={handleCloseView}
					transaction={selectedTransaction}
				/>
			)}
			{showAddTransactionForm && isEditing && (
				<NewTransactionForm
					handleCloseAddTransaction={handleCloseAddTransaction}
					editData={selectedTransaction}
				/>
			)}
			{showDeleteModal && selectedTransaction && (
				<DeleteModal
					handleDeleteModal={handleDeleteModal}
					closeDeleteModal={closeDeleteModal}
					setSelectedTransaction={setSelectedTransaction}
					transaction={selectedTransaction}
					type={"transaction"}
				/>
			)}
		</div>
	);
};

export default Transaction;
