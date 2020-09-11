import React, { Component } from "react";
import PinCodeList from "./../PinCodeList/PinCodeList";
import pinData from "./../../assets/data/postal_code_data";
import classes from "./Dashboard.module.css";

class Dashboard extends Component {
  render() {
    return (
      <div className={classes.Dashboard}>
        <PinCodeList pinList={pinData} />
      </div>
    );
  }
}

export default Dashboard;
