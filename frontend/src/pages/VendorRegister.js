import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

export default function VendorRegister() {
  // const [vendorData, setVendorData] = useState({});
  // const [image, setImage] = useState({});
  const vendorData = new FormData();

  const navigate = useNavigate();

  // const onChangeImage = (e) => {
  //   setImage(e.target.files[0]);
  //   console.log(image);
  // };

  async function handleSubmit(e) {
    e.preventDefault();
    // do validation
    // if (password !== confirmPassword) {
    //   return setError("Passwords don't match!");
    // }

    instance
      .post("/api/vendors/", vendorData)
      .then(function (response) {
        console.log(response);
        navigate("/vendorregister");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const onChangeHandler = (e) => {
    if (e.target.name === "photo") {
      const i = e.target.files[0];
      vendorData.append(e.target.name, i);
    } else {
      vendorData.append(e.target.name, e.target.value);
    }
  };

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
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label for="last_name">Photo</label>
                    <input
                      type="file"
                      name="photo"
                      className="form-control mb-3 mt-1"
                      required
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label for="username">Description</label>
                    <input
                      type="text"
                      name="description"
                      className="form-control mb-3 mt-1"
                      required
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label for="password2">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control mb-3 mt-1"
                      required
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control mb-3 mt-1"
                      required
                      onChange={onChangeHandler}
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
