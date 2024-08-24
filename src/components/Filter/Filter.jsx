import { useEffect, useState } from "react";
import "./Filter.css";
const Filter = () => {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    fetch(`https://fakestoreapi.com/products`, {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data) {
          setProducts(data);
        }
      })
      .catch((err) => {
        console.error(err);
        alert(err?.message);
      });
  };

  const category = new Set(products?.map((product) => product?.category));
  const filter = (cat) => {
    const filtered = products?.filter((item) =>
      String(item?.category).toLowerCase().includes(String(cat)?.toLowerCase()));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="Filter">
      {category &&
        Array.from(category)?.map((categ, idx) => (
          <button
            key={idx}
            className="filteringButtons"
            onClick={() => filter(categ)}
          >
            {String(categ).toUpperCase()}
          </button>
        ))}
    </div>
  );
};

export default Filter;
