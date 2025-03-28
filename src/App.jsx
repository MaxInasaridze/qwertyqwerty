import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [productList, setProductList] = useState([]);

  async function getAllProducts() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      console.log(data); // Check structure in console
      setProductList(data.products); // ✅ Fix: Set the 'products' array
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <div className="container">
        {productList.map((product) => ( // ✅ Fix: Use 'product' argument
          <div className="card" key={product.id}>
            <img src={product.images[0]} alt={product.title} /> {/* ✅ Get first image */}
            <h2>{product.title}</h2>
            <h2 id="idk">${product.price}</h2>
            <h3>{product.category}</h3>
            <h4>Rating: {product.rating}</h4>
            <p>{product.description}</p>
            <h5>Stock: {product.stock}</h5>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
