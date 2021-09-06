import React from "react";

import TableCell from "./table-cell/table-cell.component";
import getInterpolatedApiUrl from "../../../../data/company-table-data";

import "./table-directory.styles.scss";

const CompanyTableDirectory = ({ companySymbol }) => {
	const renderTableOne = () => {
		const company_data = getInterpolatedApiUrl(companySymbol);

		return company_data.map((cellN) => {
			const { id } = cellN;
			return <TableCell key={"tableOne" + id} id={id} {...cellN} />;
		});
	};
	return <div className="company-table">{renderTableOne()}</div>;
};

export default CompanyTableDirectory;
