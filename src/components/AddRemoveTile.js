import React from "react";
import { SettingsTile } from "./Styled";

const AddRemoveTile = ({ name, isSelected, id, toggleTile }) => {
	return (
		<SettingsTile
			className={isSelected ? "selected" : ""}
			onClick={() => toggleTile(id)}
		>
			<div className={["currency-icon", `i-${id}`].join(" ")} />
			<div className="currency-title">{name}</div>
			{isSelected && (
				<svg
					fill="#f5f5f5"
					height="24"
					viewBox="0 0 24 24"
					width="24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M0 0h24v24H0z" fill="none" />
					<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
				</svg>
			)}
		</SettingsTile>
	);
};

export default AddRemoveTile;
