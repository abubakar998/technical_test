import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(children) {
  const [loading, setLoading] = useState(true);
  const [User, setUser] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get("/api/users");
        setUser(response);
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
