import React from "react";
import classes from "./ColumnHeader.module.css";

const ColumnHeader = props => {
  const header = ["Pin Code", "Place Name", "Latitude", "Longitude"];
  return (
    <div className={classes.Header}>
      {header.map((col, index) => {
        return (
          <div className={classes.Column} key={index}>
            {col}
          </div>
        );
      })}
    </div>
  );
};

export default ColumnHeader;
