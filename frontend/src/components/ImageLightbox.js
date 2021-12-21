import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";

export default function ImageLightbox() {
  const [photo, setPhoto] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`/generic-products/${id}`)
      .then((res) => res.json())
      .then((data) => setPhoto(data.photo_detail));
  }, [id]);

  let firstPhoto;
  let photoList = [];
  if (photo.length > 0) {
    firstPhoto = photo[0];

    const duplicate = [...photo];

    photoList = duplicate.splice(1);
    //   console.log(photoList);
  }

  return (
    <>
      <img src={firstPhoto?.image} alt="" class="img-main img-fluid mb-3" />
      <SRLWrapper>
        <div class="mb-5 thumbs">
          {photoList.length > 0 && (
            <div className="row">
              {photoList.map((img) => (
                <div class="col-md-2">
                  <a href={img?.image}>
                    <img src={img?.image} alt="" class="img-fluid" />
                  </a>
                </div>
              ))}
            </div>
          )}
          {photo === false && <div>No data found!</div>}
        </div>
      </SRLWrapper>
    </>
  );
}
