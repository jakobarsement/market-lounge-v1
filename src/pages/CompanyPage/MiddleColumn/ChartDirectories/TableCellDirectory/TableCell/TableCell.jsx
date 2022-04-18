import { useCallback, useState, useEffect } from "react";
import { convertNumberToAbbreviation, appendPrefixOrSuffix } from "utils";

import { get } from "lodash";
import axios from "axios";

import "./TableCell.scss";

const TableCell = ({ title, location, apiUrl }) => {
  const decimalDigits = 3;
  const [cellData, setCellData] = useState([]);

  const callCellDataApi = useCallback(async () => {
    try {
      const response = await axios.get(apiUrl);

      var dataPoint = get(response, location, null);
      if (dataPoint) {
        if (dataPoint > 1000) {
          dataPoint = Number.parseFloat(dataPoint).toFixed(0);
          dataPoint = convertNumberToAbbreviation(dataPoint);
        } else {
          dataPoint =
            Math.trunc(dataPoint * Math.pow(10, decimalDigits)) /
            Math.pow(10, decimalDigits);
        }

        dataPoint = appendPrefixOrSuffix(dataPoint, title);
      } else if (dataPoint === null) {
        dataPoint = "NA";
      } else {
        dataPoint = "Error";
      }

      setCellData(dataPoint);
    } catch (err) {
      setCellData(`(Err Code: ${err.response.status})`);
    }
  }, [apiUrl, location, title]);

  useEffect(() => {
    callCellDataApi();
  }, [callCellDataApi, apiUrl]);

  return (
    <div className="table-cell">
      <span className="cell-title">{title}:</span>
      <span className="cell-content">{cellData}</span>
    </div>
  );
};

export default TableCell;
