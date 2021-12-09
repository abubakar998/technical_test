import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

export default function ImageLightbox(props) {
  const { product } = props;
  const photo = product.photo;
  return (
    <>
      <img src={product.photo_main} alt="" class="img-main img-fluid mb-3" />
      <SRLWrapper>
        {/* <div class="mb-5 thumbs">
          {photo.length > 0 && (
            <div className="row">
              {photo.map((img) => (
                <div class="col-md-2">
                  <a href={img.photo}>
                    <img src={img.photo} alt="" class="img-fluid" />
                  </a>
                </div>
              ))}
            </div>
          )}
          {photo === false && <div>No data found!</div>}
        </div> */}
      </SRLWrapper>
    </>
  );
}
