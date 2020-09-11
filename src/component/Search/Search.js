import React from "react";
import classes from "./Search.module.css";
import { Input } from "@material-ui/core";

const ColumnHeader = props => {
  return (
    <div className={classes.Search}>
      <Input
        placeholder="Search Pin Code"
        type="text"
        onChange={props.changed}
        error={props.onError}
        className={classes.Input}
      />
      {props.onError && <span className={classes.Error}>PIN NOT FOUND</span>}
    </div>
  );
};

export default ColumnHeader;
