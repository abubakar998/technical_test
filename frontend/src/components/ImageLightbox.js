import { SRLWrapper } from "simple-react-lightbox";
import homeInside1 from "../assets/images/homes/home-inside-1.jpg";
import homeInside2 from "../assets/images/homes/home-inside-2.jpg";
import homeInside3 from "../assets/images/homes/home-inside-3.jpg";
import homeInside4 from "../assets/images/homes/home-inside-4.jpg";
import homeInside5 from "../assets/images/homes/home-inside-5.jpg";
import homeInside6 from "../assets/images/homes/home-inside-6.jpg";
import home1 from "../assets/images/homes/home-1.jpg";

export default function ImageLightbox() {
  return (
    <>
      <img src={home1} alt="" class="img-main img-fluid mb-3" />
      <SRLWrapper>
        <div class="row mb-5 thumbs">
          <div class="col-md-2">
            <a href={homeInside1}>
              <img src={homeInside1} alt="" class="img-fluid" />
            </a>
          </div>
          <div class="col-md-2">
            <a href={homeInside2}>
              <img src={homeInside2} alt="" class="img-fluid" />
            </a>
          </div>
          <div class="col-md-2">
            <a href={homeInside3}>
              <img src={homeInside3} alt="" class="img-fluid" />
            </a>
          </div>

          <div class="col-md-2">
            <a href={homeInside4}>
              <img src={homeInside4} alt="" class="img-fluid" />
            </a>
          </div>
          <div class="col-md-2">
            <a href={homeInside5}>
              <img src={homeInside5} alt="" class="img-fluid" />
            </a>
          </div>
          <div class="col-md-2">
            <a href={homeInside6}>
              <img src={homeInside6} alt="" class="img-fluid" />
            </a>
          </div>
        </div>
      </SRLWrapper>
    </>
  );
}
