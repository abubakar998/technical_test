import React from "react";

export default function ProductField() {
  return (
    <div className="row mb-5 fields">
      <div className="col-md-6">
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-success my-1">
            <i className="fas fa-money-bill-alt"></i> Asking Price:
            <span className="float-end">$490,000</span>
          </li>
          <li className="list-group-item text-success my-1">
            <i className="fas fa-bed"></i> Bedrooms:
            <span className="float-end">3</span>
          </li>
          <li className="list-group-item text-success my-1">
            <i className="fas fa-bath"></i> Bathrooms:
            <span className="float-end">2</span>
          </li>
        </ul>
      </div>
      <div className="col-md-6">
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-success my-1">
            <i className="fas fa-th-large"></i> Square Feet:
            <span className="float-end">3200</span>
          </li>
          <li className="list-group-item text-success my-1">
            <i className="fas fa-calendar"></i> Listing Date:
            <span className="float-end">8/30/2018</span>
          </li>
          <li className="list-group-item text-success my-1">
            <i className="fas fa-bed"></i> Realtor:
            <span className="float-end">Kyle Brown</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
