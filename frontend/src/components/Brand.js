import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Brand() {
  return (
    <Link className="navbar-brand" to="/">
      <img src={logo} style={{ width: "60px" }} alt="" />
    </Link>
  );
}
