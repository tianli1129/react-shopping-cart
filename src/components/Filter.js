import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div>
        <div className="filter">
          <div className="filter-result">{this.props.count}</div>
          <div className="filter-sort">
            Order{" "}
            <select value={this.props.sort} onChange={this.props.sortProducts}>
              <option value="lowest">Lowest</option>
              <option value="highest">Highest</option>
              <option value="latest">Latest</option>
            </select>
          </div>
          <div className="filter-size">
            Filter{" "}
            <select
              value={this.props.size}
              onChange={this.props.filterProducts}
            >
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>XXL</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
