import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) setAuthToken(token);
  }, []);

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function AuthProvider(children) {
//   const [loading, setLoading] = useState(true);
//   const [User, setUser] = useState();

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const { data: response } = await axios.get("/api/users");
//         setUser(response);
//       } catch (error) {
//         console.error(error.message);
//       }
//       setLoading(false);
//     };

//     fetchData();
//   }, []);

//   return {
//     loading,
//     productList,
//   };
// }
