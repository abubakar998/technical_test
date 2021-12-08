import React from "react";
import { Link, useParams } from "react-router-dom";
import useProductList from "../components/hooks/useProductList";
import ImageLightbox from "../components/ImageLightbox";
import ProductField from "../components/ProductField";
import ProductDescription from "../components/ProductDescription";

export default function Product() {
  const { id } = useParams();
  const { loading, productList } = useProductList();

  // product = productList.filter((item) => {
  //   return item.id === params;
  // });
  // props={product}
  let product = {};
  if (!loading) {
    product = productList.filter((item) => {
      return item.id.toString() === id;
    });
  }

  return (
    <section id="Product" class="py-4">
      <div class="container">
        <Link to="/products" class="btn btn-light mb-4" role="button">
          Back To Featured Products
        </Link>
        <div class="row">
          <div class="col-md-9">
            <ImageLightbox />
            <ProductField product={product} />
            <ProductDescription />
            {!loading && productList.length === 0 && <div>No data found!</div>}
            {loading && <div>Loading...</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
