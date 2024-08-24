import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Products/Product";
const App = () => {
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
      String(item).toLowerCase().includes(String(cat)?.toLowerCase())
    );
    setProducts(filtered);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
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
        <Product />
      </div>
    </div>
  );
};

export default App;
