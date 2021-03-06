// Libaries
import React from "react";

// Percent Format Component
const NumberPercent = ({ val, locale, showColors }) => {
	const value = val * 0.01;
	let formattedNumber = Intl.NumberFormat(locale, {
		style: "percent",
		maximumFractionDigits: 2,
		minimumFractionDigits: 2
	}).format(value);
	let colorClass = "";
	if (showColors) {
		if (String(val).indexOf("-") > -1) {
			colorClass = "percent-negative";
		} else {
			if (val !== 0) {
				colorClass = "percent-positive";
				formattedNumber = "+" + formattedNumber;
			}
		}
	}
	return <span className={colorClass}>{formattedNumber}</span>;
};

export default NumberPercent;
