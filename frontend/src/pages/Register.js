import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    // do validation
    if (password !== confirmPassword) {
      return setError("Passwords don't match!");
    }

    axios
      .post("/generic-user-create/", {
        first_name: firstname,
        last_name: lastname,
        username: username,
        email: email,
        password: password,
      })
      .then(function (response) {
        setError("");
        setLoading(true);
        console.log(response);
        navigate("/");
      })
      .catch(function (error) {
        setLoading(false);
        setError("Failed to create an account!");
        console.log(error);
      });

    // try {
    //   setError("");
    //   setLoading(true);

    //   navigate.to("/");
    // } catch (err) {
    //   console.log(err);
    //   setLoading(false);
    //   setError("Failed to create an account!");
    // }
  }

  return (
    <section id="register" className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card">
              <div className="card-header bg-dark text-white">
                <h4>
                  <i className="fas fa-user-plus"></i> Register
                </h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label for="first_name">First Name</label>
                    <input
                      type="text"
                      name="first_name"
                      className="form-control mb-3 mt-1"
                      required
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="last_name">Last Name</label>
                    <input
                      type="text"
                      name="last_name"
                      className="form-control mb-3 mt-1"
                      required
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      className="form-control mb-3 mt-1"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control mb-3 mt-1"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="password2">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control mb-3 mt-1"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="password">Confirm Password</label>
                    <input
                      type="password"
                      name="password2"
                      className="form-control mb-3 mt-1"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <div className="d-grid gap-2">
                    <button
                      className="btn btn-success"
                      type="submit"
                      disabled={loading}
                    >
                      Submit
                    </button>
                  </div>
                  <div className="text-center mt-3">
                    Already have an account? <Link to="/login">Login</Link>{" "}
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
