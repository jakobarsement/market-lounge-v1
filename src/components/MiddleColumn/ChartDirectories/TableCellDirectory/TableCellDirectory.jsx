import TableCell from "./TableCell/TableCell";
import getCompanyTableData from "./companyTableData";

import "./TableCellDirectory.scss";

const TableCellDirectory = ({ companySymbol }) => {
  const renderTableOne = () => {
    const company_data = getCompanyTableData(companySymbol);

    return company_data.map((cellN) => {
      const { id } = cellN;
      return <TableCell key={"tableOne" + id} id={id} {...cellN} />;
    });
  };
  return <div className="company-table">{renderTableOne()}</div>;
};

export default TableCellDirectory;
