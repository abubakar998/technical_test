import React, { useEffect, useState } from "react";
// import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import ImageLightbox from "../components/ImageLightbox";
import ProductField from "../components/ProductField";
import ProductDescription from "../components/ProductDescription";
import Modal from "../components/Modal";
import axios from "axios";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  // const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/generic-products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  // async function updateProduct(e) {
  //   e.preventDefault();
  //   axios
  //     .put(`/generic-products/${id}/`, e)
  //     .then(function (response) {
  //       console.log(response);
  //       navigate(`/product/${id}/`);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  async function handleDelete(e) {
    e.preventDefault();
    axios
      .delete(`/generic-products/${id}/`)
      .then(function (response) {
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <section id="Product" className="py-4">
      <div className="container">
        <section id="showcase-inner" className="py-3 text-white bg-success">
          <div className="row text-center">
            <div className="col-md-12">
              <h1 className="display-4">{product.title}</h1>
              <p className="lead">
                <i className="fas fa-map-marker"></i> {product.address}
              </p>
            </div>
          </div>
        </section>
        <Link to="/products" className="btn btn-light my-3" role="button">
          Back To Featured Products
        </Link>
        <div className="row">
          <div className="col-md-9">
            {/* <Content loading={loading} /> */}
            <ImageLightbox />
            <ProductField product={product} />
            <ProductDescription description={product.description} />

            {/* Update & Delete Button */}
            <div className="d-flex">
              {/* Button trigger modal */}
              <button
                type="button"
                className="btn btn-success col-6 me-3"
                data-bs-toggle="modal"
                data-bs-target="#updateModal"
              >
                Update
              </button>
              <button
                type="button"
                className="btn btn-success col-6"
                onClick={(e) => handleDelete(e)}
              >
                Delete
              </button>
            </div>
            <Modal product={product} />
          </div>

          {/* Vendor Inquiry */}
          <div className="col-md-3">
            <div className="card mb-3">
              <img className="card-img-top" src="#" alt="Seller of the month" />
              <div className="card-body">
                <h5 className="card-title">Product Vendor</h5>
                {/* <h6 className="text-secondary">{product.vendor}</h6> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
