import ProductSummery from "../components/ProductSummery";
import Search from "../components/Search";

export default function Home() {
  return (
    <>
      <Search />
      <section id="products">
        <div className="container">
          <h3 className="text-center mb-3">Latest Products</h3>
          <div className="row">
            <ProductSummery />
            <ProductSummery />
            <ProductSummery />
          </div>
        </div>
      </section>
    </>
  );
}
