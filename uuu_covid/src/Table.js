import React from "react";
import "./Table.css";
import numeral from "numeral";
import { sortData} from "./util";
import {  Typography } from "@material-ui/core";
import "./InfoBox.css";






function Table({ countries,casesType }) {
  let tableData = sortData(countries, casesType);

  return (
    <div className="table">
      {tableData.map((country) => (
        <tr>
          <td>{country.country}</td>
          <td>
            <Typography>
            <h2 className={`infoBox__cases ${casesType==="recovered" && "infoBox__cases--green"}`}>
            <strong>{numeral(country[casesType]).format("0,0")}</strong>
        </h2>

            </Typography>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
