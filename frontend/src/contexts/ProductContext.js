import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const ProductContext = React.createContext();
export function useProductList() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [productList, setProductList] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       setLoading(true);
  //       try {
  //         const { data: response } = await axios.get("/api/products");
  //         setProductList(response);
  //       } catch (error) {
  //         console.error(error.message);
  //       }
  //     };
  //     setLoading(false);
  //     fetchData();
  //   }, []);

  useEffect(() => {
    axios.get("/api/products").then(
      (response) => {
        setProductList(response);
      },
      (err) => {
        console.log(err.data);
      }
    );
    setLoading(false);
  }, []);

  const value = [loading, productList];
  return (
    <ProductContext.Provider value={value}>
      {!loading && children}
    </ProductContext.Provider>
  );
}
