import React, { useCallback, useEffect, useState, useContext } from "react";
import axios from "axios";

import "./right-column.styles.scss";
import NewsFeedTable from "./news-feed-table/news-feed-table.component";
import Feedback from "./feedback/feedback.component";
import { CompanySymbolContext } from "../../lib/companyContext";
// import BookOfTheWeek from "./books/book-of-the-week.component";

const RightColumn = () => {
	const { companySymbol } = useContext(CompanySymbolContext);
	const [responseState, setResponseState] = useState([]);
	const apiUrl = `https://financialmodelingprep.com/api/v3/stock_news?tickers=${companySymbol}&limit=50&apikey=7fd4e8b6bf2bceea94a8f589d648c8eb`;
	const callNewsfeedApi = useCallback(async () => {
		try {
			const response = await axios.get(apiUrl);
			setResponseState(response.data);
		} catch (err) {
			setResponseState([]);
		}
	}, [apiUrl]);

	useEffect(() => {
		callNewsfeedApi();
	}, [callNewsfeedApi]);

	return (
		<div className="right-column">
			{/* <BookOfTheWeek></BookOfTheWeek> */}
			<NewsFeedTable feeds={responseState}></NewsFeedTable>
			<Feedback />
		</div>
	);
};

export default RightColumn;
