import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});
export default function UploadProduct() {
  const [images, setImages] = useState([]);
  const [imagesId, setImagesId] = useState([]);

  const [productData, setProductData] = useState({});

  const navigate = useNavigate();

  async function uploadProduct(e) {
    e.preventDefault();

    const product = { ...productData, photo: imagesId };

    const token = Cookies.get("token");

    instance
      .post("/generic-products/", product, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        console.log(response);
        navigate("/products/");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const onChangeImage = (e) => {
    const data = new FormData();
    data.append("image", e.target.files[0]);

    instance
      .post("/image-upload/", data)
      .then(function (response) {
        setImages([...images, response.data]);
        setImagesId([...imagesId, response.data.id]);
        console.log(images, "xxx");
      })
      .catch(function (error) {
        //
      });
  };

  const onChangeHandler = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
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
                      name="vendor"
                      onChange={onChangeHandler}
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
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label for="recipient-name" className="col-form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label for="recipient-name" className="col-form-label">
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label for="message-text" className="col-form-label">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      name="description"
                      // value={description}
                      onChange={onChangeHandler}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label for="recipient-name" className="col-form-label">
                      Price
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="price"
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label for="recipient-name" className="col-form-label">
                      Bedrooms
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="bedrooms"
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label for="recipient-name" className="col-form-label">
                      Bathrooms
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="bathrooms"
                      onChange={onChangeHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label for="recipient-name" className="col-form-label">
                      Upload Image
                    </label>
                    <input
                      className="form-control"
                      onChange={onChangeImage}
                      type="file"
                    />
                    <div className="grid">
                      {images.map((item, key) => (
                        <img
                          className="col-3"
                          key={key}
                          src={item.image}
                          alt="Light Box"
                        ></img>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label for="recipient-name" className="col-form-label">
                      Sqft
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="sqft"
                      // value={sqft}
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className="d-grid gap-2">
                    <button className="btn btn-success mt-3" type="submit">
                      Save
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
