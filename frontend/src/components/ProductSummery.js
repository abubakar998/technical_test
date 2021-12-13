import React from "react";
import { Link } from "react-router-dom";
import useProductList from "./hooks/useProductList";
//import InfiniteScroll from "react-infinite-scroll-hook";

export default function ProductSummery() {
  const { loading, productList } = useProductList();

  // console.log(productList);
  return (
    <div>
      {productList.length > 0 && (
        //<InfiniteScroll dataLength={productList.length} loader="Loading...">
        <div className="row">
          {productList.map((product) => (
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card">
                {
                  <img
                    className="card-img-top"
                    src={product.photo[0].image}
                    alt=""
                  />
                }
                <div className="card-img-overlay ">
                  <h2>
                    <span className="badge bg-success text-white">
                      {product.price}
                    </span>
                  </h2>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="text-center">
                      <h4 className="text-body">{product.title}</h4>
                      <p>
                        <i className="fas fa-map-marker text-success"></i>
                        <span className="ps-1">{product.address}</span>
                      </p>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-6 text-success">
                        <i className="fas fa-user"></i>
                        <span className="ps-1">{product.vendor.name}</span>
                      </div>
                      <div className="col-6 text-success">
                        <i className="fas fa-clock"></i>
                        <span className="ps-1">{product.list_date}</span>
                      </div>
                    </div>
                    <hr />
                    <Link
                      class="btn btn-success d-grid"
                      to={`/product/${product.id}`}
                      role="button"
                    >
                      More Info
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        //</InfiniteScroll>
      )}
      {!loading && productList.length === 0 && <div>No data found!</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
}
