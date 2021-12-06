import Brand from "./Brand";
import MobileMenu from "./MobileMenu";
import MainMenu from "./MainMenu";
import Account from "./Account";
import classes from "../styles/Nav.module.css";

export default function Nav() {
  return (
    <nav
      className={`${classes.navbar} navbar-expand-lg navbar-dark bg-dark sticky-top`}
    >
      <div className="container d-flex justify-content-between py-3 mobileMenu">
        <Brand />
        <MobileMenu />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <MainMenu />
          <Account />
        </div>
      </div>
    </nav>
  );
}
