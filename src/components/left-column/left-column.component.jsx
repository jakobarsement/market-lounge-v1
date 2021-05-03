import React from "react";

import { IndexGraph } from "./ROHAN/index-graph/index-graph.component";

import "./left-column.styles.scss";
import { TreasuryGraph } from "./ROHAN/treasury-graph/treasury-graph.component";
import { VixGraph } from "./ROHAN/vix-graph/vix-graph.component";
import { MetalGraph } from "./ROHAN/metal-graph/metal-graph.component";

const LeftColumn = () => (
	<div className="left-column">
		<TreasuryGraph />
		<IndexGraph />
		<VixGraph />
		<MetalGraph />
	</div>
);

export default LeftColumn;
