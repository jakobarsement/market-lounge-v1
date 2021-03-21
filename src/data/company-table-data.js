const FIN_PREP_API_KEY = process.env.REACT_APP_FIN_PREP_API_KEY;

const COMPANY_TABLE_DATA = [
	{
		id: 1,
		title: "First Cell",
		apiUrl: `https://financialmodelingprep.com/api/v3/market-capitalization/MSFT?apikey=${FIN_PREP_API_KEY}`,
	},
	// {
	// 	id: 2,
	// 	title: "Second Chart",
	// 	routeName: "chart2",
	// 	apiUrl:
	// 		"https://financialmodelingprep.com/api/v3/historical-price-full/MSFT?serietype=line&apikey=7fd4e8b6bf2bceea94a8f589d648c8eb",
	// },
	// {
	// 	id: 3,
	// 	title: "Third Chart",
	// 	routeName: "chart3",
	// 	apiUrl:
	// 		"https://financialmodelingprep.com/api/v3/historical-price-full/MSFT?serietype=line&apikey=7fd4e8b6bf2bceea94a8f589d648c8eb",
	// },
	// {
	// 	id: 4,
	// 	title: "Fourth Chart",
	// 	routeName: "chart4",
	// 	apiUrl:
	// 		"https://financialmodelingprep.com/api/v3/historical-price-full/MSFT?serietype=line&apikey=7fd4e8b6bf2bceea94a8f589d648c8eb",
	// },
];

export default COMPANY_TABLE_DATA;
