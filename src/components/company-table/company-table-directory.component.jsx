import React from "react";

import TableCell from "../table-cell/table-cell.component";
import COMPANY_TABLE_DATA from "../../data/company-table-data";

import "./company-table-directory.styles.scss";

const CompanyTableDirectory = () => {
	return (
		<div className="company-table">
			{COMPANY_TABLE_DATA.map((cellN) => (
				<TableCell key={cellN.id} {...cellN} />
			))}
		</div>
	);
};

export default CompanyTableDirectory;
