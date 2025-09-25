import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
	FiHome,
	FiCreditCard,
	FiTrendingUp,
	FiBarChart2,
	FiSettings,
	FiHelpCircle,
	FiLogOut,
	FiBook,
	FiPercent,
	FiMenu,
	FiPlusSquare,
	FiCalendar,
	FiTarget,
	FiUser,
} from "react-icons/fi";
const SideBarCard = ({ activePage, onLinkClick }) => {
	return (
		<>
			<div className="header flex flex-col p-20 ">
				<div className="flex align-center g-5">
					<FiUser size={30} />
					<h3>Welcome</h3>
				</div>
				<div className="list">
					<Link
						to="/"
						className={`link-btn align-center flex fw-bold ${
							activePage === "dashboard" ? "active" : ""
						}`}
						onClick={onLinkClick}
					>
						<FiHome className="icon" />
						<p>Dashboard</p>
					</Link>
					<Link
						to="/transactions"
						className={`link-btn flex align-center fw-bold ${
							activePage === "transactions" ? "active" : ""
						}`}
						onClick={onLinkClick}
					>
						<FiCreditCard className="icon" />
						<p>Transactions</p>
					</Link>
					<Link
						to="/goals"
						className={`link-btn align-center flex fw-bold ${
							activePage === "goals" ? "active" : ""
						}`}
						onClick={onLinkClick}
					>
						<FiTrendingUp className="icon" />
						<p>Goals</p>
					</Link>
					{/* <Link
						to="/budget"
						className={`link-btn flex align-center fw-bold ${
							activePage === "budget" ? "active" : ""
						}`}
					>
						<FiPlusSquare className="icon" />
						<p>Budget</p>
					</Link> */}
					<Link
						to="/subscriptions"
						className={`link-btn flex align-center fw-bold ${
							activePage === "subscriptions" ? "active" : ""
						}`}
						onClick={onLinkClick}
					>
						<FiPlusSquare className="icon" />
						<p>Subscriptions</p>
					</Link>
					<Link
						to="/reminder"
						className={`link-btn align-center flex fw-bold ${
							activePage === "reminder" ? "active" : ""
						}`}
						onClick={onLinkClick}
					>
						<FiBook className="icon" />
						<p>Reminders</p>
					</Link>
					<Link
						to="/guide"
						className={`link-btn align-center flex fw-bold ${
							activePage === "guide" ? "active" : ""
						}`}
						onClick={onLinkClick}
					>
						<FiBook className="icon" />
						<p>Guide</p>
					</Link>
					<Link
						to="/calculator"
						className={`link-btn flex align-center fw-bold ${
							activePage === "calculator" ? "active" : ""
						}`}
						onClick={onLinkClick}
					>
						<FiPercent className="icon" />
						<p>Savings Goal Calculator</p>
					</Link>
				</div>
			</div>
			<div className="footer flex flex-col p-10">
				<Link
					to="/help"
					className={`link-btn align-center flex fw-bold ${
						activePage === "help" ? "active" : ""
					}`}
					onClick={onLinkClick}
				>
					<FiHelpCircle className="icon" />
					<p>Help</p>
				</Link>
				<Link
					to="/logout"
					className={`link-btn align-center flex fw-bold ${
						activePage === "logout" ? "active" : ""
					}`}
					onClick={onLinkClick}
				>
					<FiLogOut className="icon" />
					<p>Logout</p>
				</Link>
			</div>
		</>
	);
};

export default SideBarCard;
