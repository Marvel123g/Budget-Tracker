import React, { useContext, useState } from "react";
import { AiFillCalculator } from "react-icons/ai";
import { FaCalculator } from "react-icons/fa";
import { FiPercent } from "react-icons/fi";
import UserContext from "../context/contextAPI";

const Calculator = () => {
	const [goalValue, setGoalValue] = useState("");
	const [initialSavings, setInitialSavings] = useState("");
	const [monthlyContribution, setMonthlyContribution] = useState("");
	const [showDate, setShowDate] = useState("");
	const [goalValueError, setGoalValueError] = useState("");
	const [savingError, setSavingError] = useState("");
	const [contributionError, setContributionError] = useState("");

	const { setCurrencyValue, currency, currencies, setCurrency } =
		useContext(UserContext);

	const handleCalculate = () => {
		let isValid = true;

		if (!goalValue) {
			setGoalValueError("This Field cannot be blank");
			isValid = false;
		} else {
			setGoalValueError("");
		}
		if (!initialSavings) {
			setSavingError("This Field cannot be blank");
			isValid = false;
		} else {
			setSavingError("");
		}
		if (!monthlyContribution) {
			setContributionError("This Field cannot be blank");
			isValid = false;
		} else {
			setContributionError("");
		}

		if (isValid) {
			const G = parseFloat(goalValue);
			const S = parseFloat(initialSavings);
			const C = parseFloat(monthlyContribution);

			const remaining = G - S;
			if (remaining <= 0) {
				setShowDate("You already reached your goal!");
			}

			let totalMonths = remaining / C;
			let wholeMonth = Math.floor(totalMonths);

			let days = Math.round((totalMonths - wholeMonth) * 30);

			if (days === 30) {
				days = 0;
				wholeMonth += 1;
			}
			let years = Math.floor(wholeMonth / 12);
			let months = wholeMonth % 12;

			let yearResult = "";
			let monthResult = "";
			let dayResult = "";

			if (years >= 0) {
				yearResult = `${years} ${
					years === 1 || years === 0 ? "year" : "years"
				}`;
			}
			if (months >= 0) {
				monthResult = `${months} ${
					months === 1 || months === 1 ? "month" : "months"
				}`;
			}
			if (days >= 0) {
				dayResult = `${days} ${days === 1 || days === 0 ? "day" : "days"}`;
			}
			setShowDate(
				`It will take you ${yearResult}, ${monthResult} and ${dayResult} to achieve ${currency.symbol}${G}`
			);
		}
	};

	const handleChange = (e) => {
		const selected = currencies.filter(
			(currency) => currency.currencyName === e.target.value
		);
		setCurrency(selected[0]);
	};

	return (
		<div className="calculator-page">
			<h1>Savings Goal Calculator</h1>
			<div className="calculator-box flex flex-col">
				<div className="header flex align-center g-5">
					<FaCalculator size={24} />
					<h3>Savings Goal Calculator</h3>
				</div>
				<form>
					<div className="currencySection">
						<p>Select your preferred currency</p>
						<select
							onChange={handleChange}
							value={currency.currencyName || ""}
							name="currencySymbol"
						>
							{currencies.map((c) => (
								<option key={c.symbol} value={c.currencyName}>
									{c.symbol} {c.currencyName}
								</option>
							))}
						</select>
					</div>
					<fieldset className="flex flex-col g-5">
						<label htmlFor="goal amount">Goal Amount</label>
						<input
							type="number"
							onChange={(e) => setGoalValue(e.target.value)}
						/>
						{goalValueError && <p className="errorMssg">{goalValueError}</p>}
					</fieldset>
					<fieldset className="flex flex-col g-5">
						<label htmlFor="initial savings">Initial Savings</label>
						<input
							type="number"
							onChange={(e) => setInitialSavings(e.target.value)}
						/>
						{savingError && <p className="errorMssg">{savingError}</p>}
					</fieldset>
					<fieldset className="flex flex-col g-5">
						<label htmlFor="Monthly Contribution">Monthly Contribution</label>
						<input
							type="number"
							onChange={(e) => setMonthlyContribution(e.target.value)}
						/>
						{contributionError && (
							<p className="errorMssg">{contributionError}</p>
						)}
					</fieldset>
				</form>
				<button
					className="flex align-center justify-center g-5 rounded"
					onClick={handleCalculate}
				>
					<FaCalculator size={17} />
					Calculate
				</button>
				{showDate && <p className="result rounded">{showDate}</p>}
			</div>
		</div>
	);
};

export default Calculator;
