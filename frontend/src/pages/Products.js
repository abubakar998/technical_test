import ProductSummery from "../components/ProductSummery";

export default function Home() {
  return (
    <section id="listings">
      <div className="container">
        <h3 className="text-center mb-3">Featured Products</h3>
        <div className="row">
          <ProductSummery />
          <ProductSummery />
          <ProductSummery />
          <ProductSummery />
          <ProductSummery />
          <ProductSummery />
          <ProductSummery />
          <ProductSummery />
          <ProductSummery />
        </div>
      </div>
    </section>
  );
}
