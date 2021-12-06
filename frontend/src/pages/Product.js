import { Link } from "react-router-dom";
import ImageLightbox from "../components/ImageLightbox";
import ProductField from "../components/ProductField";
import ProductDescription from "../components/ProductDescription";

export default function Product() {
  return (
    <section id="Product" class="py-4">
      <div class="container">
        <Link to="/products" class="btn btn-light mb-4" role="button">
          Back To Featured Productss
        </Link>
        <div class="row">
          <div class="col-md-9">
            <ImageLightbox />
            <ProductField />
            <ProductDescription />
          </div>
        </div>
      </div>
    </section>
  );
}
