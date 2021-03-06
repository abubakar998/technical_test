import React from "react";

export default function ProductField(props) {
  const { product } = props;
  // console.log(product);

  return (
    <div className="row mb-5 fields">
      <div className="col-md-6">
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-success my-1">
            <i className="fas fa-money-bill-alt"></i> Asking Price:
            <span className="float-end">$ {product?.price}</span>
          </li>
          <li className="list-group-item text-success my-1">
            <i className="fas fa-bed"></i> Bedrooms:
            <span className="float-end">{product?.bedrooms}</span>
          </li>
          <li className="list-group-item text-success my-1">
            <i className="fas fa-bath"></i> Bathrooms:
            <span className="float-end">{product?.bathrooms}</span>
          </li>
        </ul>
      </div>
      <div className="col-md-6">
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-success my-1">
            <i className="fas fa-th-large"></i> Square Feet:
            <span className="float-end">{product?.sqft}</span>
          </li>
          <li className="list-group-item text-success my-1">
            <i className="fas fa-calendar"></i> Listing Date:
            <span className="float-end">{product?.list_date}</span>
          </li>
          <li className="list-group-item text-success my-1">
            <i className="fas fa-bed"></i> Realtor:
            <span className="float-end">{product.vendor_detail?.name}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
