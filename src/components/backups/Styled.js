import styled from "styled-components";

export const NavTitle = styled.div`
	font-size: 1.5rem;
	font-weight: 400;
	letter-spacing: 0.09em;
	margin-bottom: 8px;

	.currency-icon {
		margin-right: 10px;
	}
`;

export const SubTitleContainer = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	margin-bottom: 13px;
`;

export const SubTitle = styled.div`
	font-size: 0.9rem;
	text-transform: uppercase;
	letter-spacing: 0.04em;
	color: #487991;
	padding-bottom: 3px;
`;

export const TickerContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 19px;
`;

export const ToggleTitle = styled.div`
	text-transform: uppercase;
	letter-spacing: 0.04em;
	margin-top: 20px;
	cursor: pointer;
	padding: 0 1px;
	font-size: 0.8rem;
	color: ${props => (!props.isSelected ? "#7cb380" : "#b54e52")};
`;

export const ErrorMsg = styled.div`
	text-transform: uppercase;
	letter-spacing: 0.04em;
	font-size: 0.8rem;
	color: #b54e52;
`;

export const SuccessMsg = styled.div`
	text-transform: uppercase;
	letter-spacing: 0.04em;
	font-size: 0.8rem;
	color: #7cb380;
`;

export const TimeSwitchContainer = styled.div`
	text-align: right;

	font-size: 0.9rem;
	flex: 1;

	a {
		background-color: #0e2c3b;
		color: #aaa;
		border-radius: 15px;
		margin-left: 5px;
		padding: 2px 10px;
		cursor: pointer;
		display: inline-block;
		width: 25px;
		text-align: center;

		&:hover,
		&.active {
			background-color: #153646;
			color: #fff;
		}
	}
`;

export const BackLink = styled.span`
	float: right;
	background-color: #0e2c3b;
	color: #aaa;
	border-radius: 15px;
	font-size: 0.9rem;
	text-align: center;
	display: inline-block;
	padding: 2px 10px;
	line-height: 1.9rem;
	font-weight: 400;

	&:hover {
		background-color: #153646;
	}
`;

export const SettingsLink = styled.span`
	float: right;
	background-color: #0e2c3b;
	color: #aaa;
	border-radius: 50%;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 2px;
	width: 28px;
	height: 28px;
	vertical-align: middle;
	cursor: pointer;
	margin-left: 8px;

	svg {
		fill: #aaa;

		&:hover {
			fill: #fff;
		}
	}

	i {
		line-height: 28px;
	}

	&:hover {
		color: #fff;
	}
`;

export const Row = styled.div`
	width: 100%;
	display: flex;
`;

export const Col = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	margin-right: 15px;
	text-align: ${props => (!props.right ? "left" : "right")};
	max-width: 60%;

	&:last-child {
		margin-right: 0;
	}
`;

export const ScrollContent = styled.div`
	overflow-y: auto;
`;

export const Card = styled.div`
	background-color: #0e2c3b;
	border-radius: 3px;
	padding: 10px;
	margin-bottom: 8px;
	font-size: 1.1rem;

	&.currency-tile {
		&:hover {
			background-color: #153646;
		}
	}
`;

export const CardRow = styled.div`
	line-height: 150%;
	display: flex;
`;

export const CardRowTitle = styled.span`
	color: #487991;
	padding-right: 15px;
	display: inline-block;
	flex: 1;
`;

export const CardRowResponse = styled.span`
	display: inline-block;
	text-align: right;
`;

export const CurrencyTitles = styled.div`
	font-size: 1.3rem;
	line-height: 1.4;
`;

export const CurrencySymbol = styled.div`
	font-size: 0.8rem;
	color: #487991;
	letter-spacing: 0.04em;
`;

export const CurrencyPercent = styled.div`
	font-size: 0.8rem;
	color: ${props => (props.negative ? "#fd7576" : "#91e697")};
	letter-spacing: 0.04em;
`;

export const InputBar = styled.div`
	margin: 8px 0 10px 0;
	position: relative;
	color: #aaa;

	svg {
		position: absolute;
		top: 10px;
		left: 10px;
		fill: #aaa;
	}

	input {
		border-radius: 25px;
		font-size: 18px;
		line-height: 40px;
		padding: 0 15px 0 43px;
		border: 0;
		color: #aaa;
		font-family: "raleway", "helvetica", "arial", "sans-serif";
		box-sizing: border-box;
		width: 100%;
		background-color: #0e2c3b;

		&:focus,
		&:active {
			background-color: #153646;
			color: #f5f5f5;
			outline: 0;
		}

		&::-webkit-input-placeholder {
			color: #aaa;
		}
	}
`;

export const SettingsTile = styled.div`
	color: #aaa;
	border-radius: 25px;
	font-size: 18px;
	background-color: #0e2c3b;
	margin-bottom: 5px;
	padding: 8px 15px;
	cursor: pointer;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	min-height: 40px;

	&:hover,
	&.selected {
		background-color: #153646;
		color: #f5f5f5;
	}

	.currency-title {
		flex: 1;
	}

	.currency-icon {
		margin-right: 12px;
	}

	.price-alert {
		margin-right: 5px;
	}
`;

export const StyledSubmit = styled.button`
	background-color: transparent;
	transition: background-color 0.3s ease;
	outline: 0;
	font-family: "raleway", "helvetica", "arial", "sans-serif";
	margin-top: 10px;
	border-radius: 30px;
	border: 3px solid #0e2c3b;
	font-size: 1.3rem;
	cursor: pointer;
	color: #aaa;
	padding: 10px 35px;
	text-transform: uppercase;

	&:hover {
		background-color: #0e2c3b;
	}
`;

export const CurrencyTypeContainer = styled.div`
	flex: 1;

	.Select {
		max-width: 180px;
		margin-left: auto;

		.Select-control {
			background-color: #0e2c3b;
			color: #f5f5f5;
			border: 0;
			color: red;
			border-radius: 15px;
		}
	}
`;