import React from "react";
import { IndexGraph } from "../index-graph/index-graph.component";
import { MetalGraph } from "../metal-graph/metal-graph.component";
import { TreasuryGraph } from "../treasury-graph/treasury-graph.component";
import { VixGraph } from "../vix-graph/vix-graph.component";

import "./left-column.styles.scss";

const LeftColumn = () => (
    <div className="left-column">
    Left
    <TreasuryGraph />
    <IndexGraph />
    <VixGraph />
    <MetalGraph />
    </div>);

export default LeftColumn;
