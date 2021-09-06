import React, { useContext } from "react";

// import { IndexGraph } from "./ROHAN/index-graph/index-graph.component";
// import { TreasuryGraph } from "./ROHAN/treasury-graph/treasury-graph.component";
// import { VixGraph } from "./ROHAN/vix-graph/vix-graph.component";
// import { MetalGraph } from "./ROHAN/metal-graph/metal-graph.component";
import CompanyRatiosChartDirectory from "./ratio-chart-directory/ratio-chart-directory";
import { CompanySymbolContext } from "../../lib/companyContext";

const LeftColumn = () => {
	const { companySymbol } = useContext(CompanySymbolContext);

	return (
		<>
			{/*below comment has legacy left column graph
		reuse this styling for other graphs */}
			{/* <div className="index graph">
			<IndexGraph />
		</div> */}
			<CompanyRatiosChartDirectory companySymbol={companySymbol} />
		</>
	);
};

export default LeftColumn;
