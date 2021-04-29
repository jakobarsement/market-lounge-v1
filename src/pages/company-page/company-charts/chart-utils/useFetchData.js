import { useState, useEffect } from "react";

export const useFetchData = (url, companySymbol, formatterCallback) => {
	const [status, setStatus] = useState("IDLE");
	const [data, setData] = useState([]);

	useEffect(() => {
		if (!url) return;
		const fetchData = async () => {
			setStatus("FETCHING");
			const response = await fetch(url);
			const data = await response.json();
			const formattedData = formatterCallback(data);
			setData(formattedData);
			setStatus("DONE");
		};

		fetchData();
	}, [url, companySymbol, formatterCallback]);

	return { status, data };
};
