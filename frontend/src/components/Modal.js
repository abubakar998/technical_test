import React, { useState, useEffect } from "react";
export default function Modal(props) {
  const { product } = props;
  const [title, setTitle] = useState(product?.title);
  const [address, setAddress] = useState(product?.address);
  const [city, setCity] = useState(product?.city);
  const [description, setDescription] = useState(product?.description);
  const [price, setPrice] = useState(product?.price);
  const [bedrooms, setBedrooms] = useState(product?.bedrooms);
  const [bathrooms, setBathrooms] = useState(product?.bathrooms);

  const [sqft, setSqft] = useState(product?.sqft);

  useEffect(() => {
    setTitle(product?.title);
    setAddress(product?.address);
    setCity(product?.city);
    setDescription(product?.description);
    setPrice(product?.price);
    setBedrooms(product?.bedrooms);
    setBathrooms(product?.bathrooms);
    setSqft(product?.bathrooms);
  }, [product]);

  return (
    <>
      {/* Modal */}
      <div
        className="modal fade"
        id="updateModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Update Product
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* onSubmit={UpdateProduct()} */}
              <form>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="mb-3">
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
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">
                    Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="mb-3">
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
                <div className="mb-3">
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
                <div className="mb-3">
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
              </form>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Completed
                </label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
