import { useEffect, useState } from "react";
import axios from "axios";

export default function useProductList() {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get("/generic-products");
        setProductList(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    loading,
    productList,
  };
}
