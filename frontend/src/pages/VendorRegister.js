import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

export default function VendorRegister() {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  const [error, setError] = useState();

  const navigate = useNavigate();

  const handleChange = (e) => {
    if ([e.target.name] == "photo") {
      setPhoto(e.target.value);
      setImage(e.target.files[0]);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    // do validation
    // if (password !== confirmPassword) {
    //   return setError("Passwords don't match!");
    // }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("photo", image);
    formData.append("description", description);
    formData.append("phone", phone);
    formData.append("email", email);

    instance
      .post("/api/vendors/", formData)
      .then(function (response) {
        setError("");
        console.log(response);
        navigate("/vendorregister");
      })
      .catch(function (error) {
        setError("Failed to create Vendor!");
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
                <h4>Vendor Register</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label for="first_name">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control mb-3 mt-1"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="last_name">Photo</label>
                    <input
                      type="file"
                      name="photo"
                      className="form-control mb-3 mt-1"
                      required
                      value={photo}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label for="username">Description</label>
                    <input
                      type="text"
                      name="description"
                      className="form-control mb-3 mt-1"
                      required
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="password2">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control mb-3 mt-1"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
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

                  <div className="d-grid gap-2">
                    <button className="btn btn-success" type="submit">
                      Submit
                    </button>
                  </div>
                  <div className="text-center mt-3">
                    <Link to="/">Back Home</Link>{" "}
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
