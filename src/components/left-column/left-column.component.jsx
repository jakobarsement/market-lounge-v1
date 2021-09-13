import { useContext } from "react";
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
