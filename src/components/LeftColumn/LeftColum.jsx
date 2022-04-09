import { useContext } from "react";
import CompanyRatiosChartDirectory from "./RatioChartDirectory/RatioChartDirectory";
import { CompanySymbolContext } from "../../state/companyContext";

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
