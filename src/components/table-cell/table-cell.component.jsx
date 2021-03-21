import React, { useCallback, useState, useEffect } from "react";

import axios from "axios";

import "./table-cell.styles.scss";

const TableCell = ({ apiUrl }) => {
	const callApi = useCallback(async () => {
		const response = await axios.get(apiUrl);
	}, [apiUrl]);

	return <div className="table-cell">Table Cell</div>;
};

export default TableCell;
