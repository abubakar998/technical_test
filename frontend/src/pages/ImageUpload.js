import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

export default function ImageUpload() {
  const [productId, setProductId] = useState();
  const [photo, setPhoto] = useState();
  const [image, setImage] = useState([]);

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

    // const i = {
    //   pid: productId,
    //   image: image,
    // };

    const formData = new FormData();
    formData.append("pid", productId);
    formData.append("image", image);

    console.log(formData);
    instance
      .post("/product-images/", formData)
      .then(function (response) {
        setError("");
        navigate("/imageupload");
      })
      .catch(function (error) {
        setError("Failed to upload Image!");
        console.log(error);
      });
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
                    <label for="first_name">Product ID</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control mb-3 mt-1"
                      required
                      value={productId}
                      onChange={(e) => setProductId(e.target.value)}
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
