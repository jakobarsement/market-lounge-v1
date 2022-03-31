import "./DataExport.scss";
import Button from "@material-ui/core/Button";

const DataExport = ({ companySymbol }: { companySymbol: string }) => {
  return <Button className="export-csv">Export</Button>;
};

export default DataExport;
