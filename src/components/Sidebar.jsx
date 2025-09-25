import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import SideBarCard from "./SideBarCard";
import useWindowSize from "../hook/useWindowSize";
import { FiMenu, FiX } from "react-icons/fi";

const Sidebar = () => {
	const location = useLocation();
	const [activePage, setActivePage] = useState("dashboard");
	const [isOpen, setIsOpen] = useState(false);
	const { width } = useWindowSize();

	const isMobile = width <= 1028;

	useEffect(() => {
		switch (location.pathname) {
			case "/":
				setActivePage("dashboard");
				break;
			case "/transactions":
				setActivePage("transactions");
				break;
			case "/goals":
				setActivePage("goals");
				break;
			case "/subscriptions":
				setActivePage("subscriptions");
				break;
			case "/reminder":
				setActivePage("reminder");
				break;
			case "/guide":
				setActivePage("guide");
				break;
			case "/calculator":
				setActivePage("calculator");
				break;
			case "/help":
				setActivePage("help");
				break;
			case "/logout":
				setActivePage("logout");
				break;
			default:
				setActivePage("dashboard");
				break;
		}
	}, [location.pathname]);

	const openSideBar = () => {
		setIsOpen(true);
	};

	const closeBar = () => {
		setIsOpen(false);
	};

	const handleLinkClick = () => {
		if (isMobile) closeBar();
	};

	return (
		<>
			{isMobile && (
				<div className="mobile-header flex align-center space-between">
					<button onClick={openSideBar} className="menu-btn">
						<FiMenu />
					</button>
					<h3>Budget Tracker</h3>
				</div>
			)}
			{!isMobile && (
				<div className="sideBar desktop flex flex-col space-between">
					<SideBarCard activePage={activePage} />
				</div>
			)}
			{isMobile && isOpen && (
				<div className="mobile-sidebar">
					<>
						{/* <div className="sidebar-overlay" onClick={closeBar}></div> */}
						<div className={`sideBar ${isOpen ? "open" : ""}`}>
							<button className="close-btn" onClick={closeBar}>
								<FiX />
							</button>
							<SideBarCard
								activePage={activePage}
								onLinkClick={handleLinkClick}
							/>
						</div>
					</>
				</div>
			)}
		</>
	);
};

export default Sidebar;
