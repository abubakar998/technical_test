import { Link } from "react-router-dom";
import home1 from "../assets/images/homes/home-1.jpg";
export default function ProductSummery() {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card">
        <img className="card-img-top" src={home1} alt="" />
        <div className="card-img-overlay ">
          <h2>
            <span className="badge bg-success text-white">$490,000</span>
          </h2>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="text-center">
              <h4 className="text-body">45 Drivewood Circle</h4>
              <p>
                <i className="fas fa-map-marker text-success"></i>
                <span className="ps-1">Norwood MA, 02062</span>
              </p>
            </div>
            <hr />
            <div className="row py-2 text-success">
              <div className="col-6">
                <i className="fas fa-user"></i>
                <span className="ps-1">Kyle Brown</span>
              </div>
            </div>
            <div className="row text-success pb-2">
              <div className="col-6">
                <i className="fas fa-clock"></i>
                <span className="ps-1">5 days ago</span>
              </div>
            </div>
            <hr />
            <Link
              class="btn btn-success d-grid"
              to="/product/:id"
              role="button"
            >
              More Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
