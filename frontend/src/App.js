import React from "react";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ProductProvider } from "./contexts/ProductContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Product from "./pages/Product";
import SearchedProduct from "./pages/SearchedProduct";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <ProductProvider> */}
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Products />} />
            <Route path="/SearchedProducts" element={<SearchedProduct />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </Layout>
        {/* </ProductProvider> */}
      </Router>
    </div>
  );
}

export default App;
