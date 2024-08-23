/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import "./SingleItem.css";
import { useEffect, useState } from "react";
const SingleItem = () => {
  const { id } = useParams();
  const [single, setSingle] = useState({});

  const getSingle = () => {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setSingle(data);
        console.log("Single Data", data);
      });
  };

  useEffect(() => {
    getSingle();
  }, [id]);
  return (
    <div className="Single">
      <img src={single?.image} width={400} height={400} alt={single.title} />
      <div>{single?.category}</div>
      <div>{single.title}</div>
      <div>$ {single.price}</div>
      <div>{single?.description}</div>
    </div>
  );
};

export default SingleItem;
