import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import AuthContext from "../contexts/AuthContext";
import Cookies from "js-cookie";
import axios from "axios";

export default function Login() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  // const { authToken, setAuthToken } = useContext(AuthContext);

  // const [error, setError] = useState();
  // const [loading, setLoading] = useState();

  // const navigate = useNavigate();

  async function attemptLogin(e) {
    e.preventDefault();

    if (username && password) {
      axios
        .post("users/login/", {
          username: username,
          password: password,
        })
        .then((res) => {
          const token = res.data.access_token;
          // console.log(token);
          Cookies.set("token", token);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // if (authToken) return navigate("/");

    // try {
    //   setError("");
    //   setLoading(true);
    //   // await login();
    //   navigate.to("/");
    // } catch (err) {
    //   console.log(err);
    //   setLoading(false);
    //   setError("Failed to Login");
    // }
  }

  return (
    <section id="login" className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card">
              <div className="card-header bg-dark text-white">
                <h4>
                  <i className="fas fa-sign-in-alt"></i> Login
                </h4>
              </div>
              <div className="card-body">
                <form onSubmit={attemptLogin}>
                  <div className="form-group">
                    <label for="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      className="form-control mt-1"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>

                  <div className="form-group py-3">
                    <label for="password2">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control mt-1 "
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="d-grid gap-2">
                    <button className="btn btn-success" type="submit">
                      Button
                    </button>
                  </div>
                  <div className="text-center mt-3">
                    Don't have an account? <Link to="/register">Register</Link>{" "}
                    instead.
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
