import React, { useState, useEffect } from "react";

const SortPricePage = () => {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  console.log(products);

  useEffect(() => {
    fetch(`http://localhost:5000/toySort`, {
      params: {
        sort: sortOrder,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  useEffect(() => {
    if (products.length > 0) {
      const sorted = [...products].sort((a, b) => {
        if (sortOrder === "asc") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
      setSortedProducts(sorted);
    }
  }, [products, sortOrder]);

  const productList = sortedProducts.length ? sortedProducts : products;

  return (
    <div>
      <h1>Product List</h1>
      <button onClick={handleSort}>
        Sort by Price ({sortOrder === "asc" ? "Low to High" : "High to Low"})
      </button>
      <ul>
        {productList.map((product) => (
          <li key={product._id}>
            {product.name}: ${parseInt(product.price).toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortPricePage;
