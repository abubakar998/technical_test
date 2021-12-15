import React from "react";
import { Link } from "react-router-dom";
import ProductSummery from "../components/ProductSummery";

export default function Home() {
  return (
    <section id="listings">
      <div className="container">
        <h3 className="text-center mb-3">Featured Products</h3>
        <div className="row">
          <ProductSummery />
        </div>
      </div>
      <div className="text-center m-3">
        <Link
          class="btn btn-success col-4 mx-auto"
          to={"/uploadproduct"}
          role="button"
        >
          Upload Product
        </Link>
      </div>
    </section>
  );
}
