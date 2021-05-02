import { useState, useEffect } from "react";

export const useFetchData = (url, companySymbol, formatterCallback) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		if (!url) return;
		const fetchData = async () => {
			const response = await fetch(url);
			const data = await response.json();
			const formattedData = formatterCallback(data);
			setData(formattedData);
		};

		fetchData();
	}, [url, companySymbol, formatterCallback]);

	return data;
};
