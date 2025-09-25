import React from "react";

const HelpItem = ({ title, info }) => {
	return (
		<div className="item flex flex-col g-5 mt-30">
			<p>{title}</p>
			{info}
		</div>
	);
};

export default HelpItem;
