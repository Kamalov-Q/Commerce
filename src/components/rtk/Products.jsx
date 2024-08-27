/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import "./Products.css";
import { useGetAllProductsQuery } from "../../store/apiSlice";
const Products = () => {
  //https://dummyjson.com/products

  const getData = () => {
    fetch("https://dummyjson.com/products", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data?.products, "Products rtk");
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const { data } = useGetAllProductsQuery();
  console.log("DATA", data);

  return (
    <div>
      <h1>This is the Products Page</h1>
    </div>
  );
};

export default Products;
