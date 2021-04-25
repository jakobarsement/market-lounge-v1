import React from "react";

import TableCell from "../table-cell/table-cell.component";
import COMPANY_TABLE_DATA from "../../data/company-table-data";

import "./company-table-directory.styles.scss";

const CompanyTableDirectory = () => {
	const renderTableOne = () => {
		return COMPANY_TABLE_DATA.map((cellN) => {
			const { id } = cellN;
			if (id <= 10) {
				return <TableCell key={"tableOne" + id} id={id} {...cellN} />;
			}
		});
	};

	const renderTableTwo = () => {
		return COMPANY_TABLE_DATA.map((cellN) => {
			const { id } = cellN;
			if (id > 5) {
				return <TableCell key={"tableTwo" + id} id={id} {...cellN} />;
			}
		});
	};

	return (
		<div className="company-table">
			<div className="company-table-1">{renderTableOne()}</div>
			{/* <div className="company-table-2">{renderTableTwo()}</div> */}
		</div>
	);
};

export default CompanyTableDirectory;
