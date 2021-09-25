import "./company-export.styles.scss";
import Button from "@material-ui/core/Button";

interface ChildProps {
  companySymbol: string;
}

const CompanyExport = ({ companySymbol }: ChildProps) => {
  return <Button className="export-csv">Export</Button>;
};

export default CompanyExport;
