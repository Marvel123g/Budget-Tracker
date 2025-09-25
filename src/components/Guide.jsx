import React from "react";
import {
	FiBook,
	FiCheckCircle,
	FiXCircle,
	FiHeart,
	FiTrendingUp,
} from "react-icons/fi";

const Guide = () => {
	return (
		<div className="guide-page flex flex-col">
			<h1>Financial Wellness Guide</h1>
			<div className="guide-box">
				<div className="title flex align-center g-5">
					<FiBook />
					<p className="fw-bold">Smart Money Principle</p>
				</div>
				<section>
					<div className="section-header flex align-center g-5">
						<FiXCircle size={20} className="cancel" />
						<b>Avoid High-Risk Speculation</b>
					</div>
					<p>
						Steer clear of gambling and extremely speculative investments. This
						includes lotteries, sports betting, and high-risk trading that
						resembles gambling.
					</p>
				</section>
				<section>
					<div className="section-header flex align-center g-5">
						<FiHeart size={20} className="heart" />
						<b>Charitable Giving</b>
					</div>
					<p>
						Consider regularly giving a portion of your wealth to those in need
						or to causes you support. Regular cahritable giving can be part of a
						healthy financial plan.
					</p>
				</section>
				<section>
					<div className="section-header flex align-center g-5">
						<FiCheckCircle size={20} className="check" />
						<b>Ethnical Earning</b>
					</div>
					<p>
						Earn money through honest and ethical means. Avoid deceptive
						pratices, fraud and questionable income sources.
					</p>
				</section>
				<section>
					<div className="section-header flex align-center g-5">
						<FiTrendingUp size={20} className="trending" />
						<b>Responsible Investments</b>
					</div>
					<p>
						Invest in businesses and funds that align with your personal values.
						Many people prefer to avoid companies involved in controversial
						industries.
					</p>
				</section>
				<section>
					<div className="section-header flex align-center g-5">
						<FiXCircle size={20} className="cancel" />
						<b>Avoid Questionable Income Sources</b>
					</div>
					<p>
						Be mindful about earning or investing in anything that conflicts
						with your personal ethnics or values.
					</p>
				</section>
				<section>
					<div className="section-header flex align-center g-5">
						<FiCheckCircle size={20} className="check" />
						<b>Budgeting Basics</b>
					</div>
					<p>
						Track income and expenses regularyly to maintain finacial health.
						Create spending categories that reflect your priorities and goals.
					</p>
				</section>
				<section>
					<div className="section-header flex align-center g-5">
						<FiCheckCircle size={20} className="check" />
						<b>Future Planning</b>
					</div>
					<p>
						Set aside funds for long-term goals like retirement, education, or
						major purchases.
					</p>
				</section>
			</div>
		</div>
	);
};

export default Guide;
