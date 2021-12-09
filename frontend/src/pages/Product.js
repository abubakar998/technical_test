import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import ImageLightbox from "../components/ImageLightbox";
import ProductField from "../components/ProductField";
import ProductDescription from "../components/ProductDescription";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const { data: response } = await axios.get("/generic-products/5");
  //       setProduct(response);
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //     setLoading(false);
  //   };

  //   fetchData();
  // }, []);

  const handleSuccess = (response) => {
    setProduct(response.data);
  };

  const handlleError = (error) => {
    setProduct(error.data);
  };

  useEffect(() => {
    axios.get(`/generic-products/${id}`).then(handleSuccess, handlleError);
  }, []);

  const { photo } = product;
  console.log("=================", photo);

  // const Error = () => {
  //   const err = "Error occured";
  //   return err;
  // };

  // const Content = (props) => {
  //   const loading = props;
  //   if (!loading) {
  //     return (
  //       <>
  //         <ImageLightbox />
  //         <ProductField product={product} />
  //         <ProductDescription />
  //       </>
  //     );
  //   }
  //   return <Error />;

  //   // console.log(product.vendor.name);
  // };

  return (
    <section id="Product" class="py-4">
      <div class="container">
        <Link to="/products" class="btn btn-light mb-4" role="button">
          Back To Featured Products
        </Link>
        <div class="row">
          <div class="col-md-9">
            {/* <Content loading={loading} /> */}
            <ImageLightbox product={product} />
            <ProductField product={product} />
            <ProductDescription description={product.description} />
          </div>
        </div>
      </div>
    </section>
  );
}
