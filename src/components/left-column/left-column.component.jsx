import React from "react";

import IndexGraph from "./ROHAN/index-graph/index-graph.component";

import "./left-column.styles.scss";
import { TreasuryGraph } from "./ROHAN/treasury-graph/treasury-graph.component";
import { VixGraph } from "./ROHAN/vix-graph/vix-graph.component";
import { MetalGraph } from "./ROHAN/metal-graph/metal-graph.component";

const LeftColumn = () => (
	<div className="left-column">
		<div className="index graph">
			<IndexGraph />
		</div>
		{/* <div className="index graph">
			<TreasuryGraph />
		</div> */}
		{/* <div className="index graph">
			<VixGraph />
		</div> */}
		<div className="index graph">
			<MetalGraph />
		</div>
	</div>
);

export default LeftColumn;
