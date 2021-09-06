import React, { useContext, useRef, useState, useEffect } from "react";
import { CompanySymbolContext } from "../../../lib/companyContext";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import _ from "lodash";
import "./company-header.styles.scss";

function CompanyHeader() {
	const inputRef = useRef(null);
	const { companySymbol, setCompanySymbol } = useContext(CompanySymbolContext);
	const [summaryData, setSummaryData] = useState();
	const [isDescriptionShown, setIsDescriptionShown] = useState(false);

	const summaryUrl = `https://financialmodelingprep.com/api/v3/profile/${companySymbol}?apikey=7fd4e8b6bf2bceea94a8f589d648c8eb`;

	useEffect(() => {
		if (!summaryUrl) return;
		const fetchData = async () => {
			const response = await fetch(summaryUrl);
			const data = await response.json();
			setSummaryData(data);
		};
		fetchData();
	}, [summaryUrl]);

	const handleSubmit = (e) => {
		if (e.key === "Enter" && inputRef.current.value) {
			const uppercaseCompanySymbol = _.upperCase(inputRef.current.value);
			setCompanySymbol(uppercaseCompanySymbol);
		}
	};
	return (
		<div className="company-header">
			<div className="company-search-container">
				<i className="fas fa-search"></i>
				<input
					className="company-input-box"
					ref={inputRef}
					onKeyPress={handleSubmit}
				/>
			</div>
			<div className="company-details">
				<h2>
					{companySymbol}
					<span className="description-icon">
						<FontAwesomeIcon
							onMouseEnter={() => setIsDescriptionShown(true)}
							onMouseLeave={() => setIsDescriptionShown(false)}
							className="fa-info-circle"
							icon={faInfoCircle}
						></FontAwesomeIcon>
					</span>
				</h2>
				{isDescriptionShown && (
					<p className="company-description">{summaryData[0].description}</p>
				)}
				{!!summaryData && (
					<p>
						<strong>CEO: </strong> <span>{summaryData[0].ceo}</span>{" "}
					</p>
				)}
			</div>
		</div>
	);
}

export default CompanyHeader;
