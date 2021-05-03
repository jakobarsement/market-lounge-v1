import React from "react";

import { IndexGraph } from "./ROHAN/index-graph/index-graph.component";

import "./left-column.styles.scss";

const LeftColumn = () => (
	<div className="left-column">
		<IndexGraph />
		<div className="chart">chart 2</div>
		<div className="chart">chart 3</div>
	</div>
);

export default LeftColumn;
