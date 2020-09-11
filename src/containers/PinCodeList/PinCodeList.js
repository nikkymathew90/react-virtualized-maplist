import React, { Component } from "react";
import { Grid } from "react-virtualized";
import classes from "./PinCodeList.module.css";
import ColumnHeader from "../../component/Table/ColumnHeader/ColumnHeader";
import Search from "../../component/Search/Search";
import Map from "./../Map/Map";

class PinCodeList extends Component {
  state = {
    searchText: "",
    scrollToRow: 0,
    error: false
  };

  onChangeHandler = e => {
    const regex = RegExp(`^(${e.target.value})([0-9]*)$`);
    const searchIndex = this.props.pinList
      .map(row => {
        return row.postcode;
      })
      .findIndex(pin => {
        return regex.test(pin);
      });

    this.setState({
      scrollToRow: searchIndex > 0 ? searchIndex : 0,
      error: searchIndex >= 0 ? false : true
    });
  };

  cellRenderer = ({ columnIndex, key, rowIndex, style }) => {
    return (
      <div key={rowIndex} style={style}>
        <div className={classes.Row}>
          <div className={classes.Cell}>
            {this.props.pinList[rowIndex].postcode}
          </div>
          <div className={classes.Cell}>
            {this.props.pinList[rowIndex].place_name}
          </div>
          <div className={classes.Cell}>
            {this.props.pinList[rowIndex].latitude}
          </div>
          <div className={classes.Cell}>
            {this.props.pinList[rowIndex].longitude}
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <div>
          <Search changed={this.onChangeHandler} onError={this.state.error} />
          <ColumnHeader />
          <Grid
            cellRenderer={this.cellRenderer}
            columnCount={1}
            columnWidth={600}
            height={700}
            rowCount={this.props.pinList.length}
            rowHeight={40}
            width={600}
            scrollToRow={this.state.scrollToRow}
          />
        </div>
        <Map pinList={this.props.pinList} pinRow={this.state.scrollToRow} />
      </div>
    );
  }
}

export default PinCodeList;
