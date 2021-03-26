import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

import "./right-column.styles.scss";

const RightColumn = () => {
	const [responseState, setResponseState] = useState([]);
	const apiUrl =
		"https://financialmodelingprep.com/api/v3/stock_news?tickers=MSFT&limit=50&apikey=7fd4e8b6bf2bceea94a8f589d648c8eb";

	const callNewsfeedApi = useCallback(async () => {
		const response = await axios.get(apiUrl);
		setResponseState(response);
	}, [apiUrl]);

	useEffect(() => {
		callNewsfeedApi();
	}, [callNewsfeedApi]);

	return <div className="right-column">Right</div>;
};

export default RightColumn;
