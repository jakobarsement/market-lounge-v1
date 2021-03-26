import React, { useCallback, useState, useEffect } from "react";
import { convertNumberToAbbreviation } from "./table-cell.utils";

import _ from "lodash";

import axios from "axios";

import "./table-cell.styles.scss";

const TableCell = ({ id, title, location, apiUrl }) => {
	const [cellData, setCellData] = useState([]);

	const callCellDataApi = useCallback(async () => {
		const response = await axios.get(apiUrl);

		var dataPoint = _.get(response, location, "*");
		if (dataPoint > 1000)
			dataPoint = convertNumberToAbbreviation(response.data[0].marketCap);
		setCellData(dataPoint);
	}, [apiUrl, location]);

	useEffect(() => {
		callCellDataApi();
		// convertNumberToAbbreviation(29182948);
	}, [callCellDataApi]);

	return (
		<div className="table-cell">
			{title}: {cellData}
		</div>
	);
};

export default TableCell;
