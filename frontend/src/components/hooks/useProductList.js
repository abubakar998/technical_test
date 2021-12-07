import { useEffect, useState } from "react";
import axios from "axios";

export default function useVideoList() {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get("/api/products");
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
