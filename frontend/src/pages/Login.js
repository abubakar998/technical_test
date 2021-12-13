import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      // await login();
      navigate.to("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create an account!");
    }
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
                <form onSubmit={handleSubmit}>
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
