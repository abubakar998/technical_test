import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});
export default function UploadProduct() {
  const [vendor, setVendor] = useState();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  // const [photo, setPhoto] = useState([]);
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [bedrooms, setBedrooms] = useState();
  const [bathrooms, setBathrooms] = useState();
  const [sqft, setSqft] = useState();

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const navigate = useNavigate();

  async function uploadProduct(e) {
    e.preventDefault();

    const p = {
      vendor: vendor,
      title: title,
      address: address,
      // photo: photo,
      city: city,
      description: description,
      price: price,
      bedrooms: bedrooms,
      bathrooms: bathrooms,
      sqft: sqft,
    };
    console.log(p);
    instance
      .post("/generic-products/", p)
      .then(function (response) {
        setError("");
        setLoading(true);
        console.log(response);
        navigate("/products/");
      })
      .catch(function (error) {
        setLoading(false);
        setError("Failed to create an product!");
        console.log(error);
      });
  }

  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card">
              <div className="card-header bg-dark text-white">
                <h4>Upload Product</h4>
              </div>
              <div className="card-body">
                <form onSubmit={uploadProduct}>
                  <div className="form-group">
                    <label for="recipient-name" className="col-form-label">
                      Vendor
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      required
                      name="title"
                      value={vendor}
                      onChange={(e) => setVendor(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="recipient-name" className="col-form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      required
                      name="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="recipient-name" className="col-form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="recipient-name" className="col-form-label">
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  {/* <div className="form-group">
                    <label for="recipient-name" className="col-form-label">
                      Photo
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      required
                      name="title"
                      value={photo}
                      onChange={(e) => setPhoto(e.target.value)}
                    />
                  </div> */}
                  <div className="form-group">
                    <label for="message-text" className="col-form-label">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      id="message-text"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label for="recipient-name" className="col-form-label">
                      Price
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="recipient-name" className="col-form-label">
                      Bedrooms
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      value={bedrooms}
                      onChange={(e) => setBedrooms(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="recipient-name" className="col-form-label">
                      Bathrooms
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      value={bathrooms}
                      onChange={(e) => setBathrooms(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="recipient-name" className="col-form-label">
                      Sqft
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      value={sqft}
                      onChange={(e) => setSqft(e.target.value)}
                    />
                  </div>
                  <div className="d-grid gap-2">
                    <button
                      className="btn btn-success mt-3"
                      type="submit"
                      disabled={loading}
                    >
                      Upload
                    </button>
                  </div>
                  <Link
                    class="btn btn-dark d-grid mt-3 "
                    to={"/products/"}
                    role="button"
                  >
                    Back to Feature Products{" "}
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
