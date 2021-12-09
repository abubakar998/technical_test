import React from "react";

export default function ProductDescription(props) {
  const { description } = props;
  return (
    <div class="row mb-5">
      <div class="col-md-12">{description}</div>
    </div>
  );
}
