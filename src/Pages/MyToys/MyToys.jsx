import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  useTitle("My Toys");

  const { user } = useContext(AuthContext);
  const [toysItem, setToysItem] = useState([]);
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  console.log(products);

  useEffect(() => {
    fetch(
      `https://11th-assignment-server-eight.vercel.app/toysSeller?sellerEmail=${user.email}`,
      {
        params: {
          sort: sortOrder,
        },
      }
    )
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

  const handleDeleteItem = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://11th-assignment-server-eight.vercel.app/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingToysItem = toysItem.filter(
                (toy) => toy._id !== id
              );
              setToysItem(remainingToysItem);
            }
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div className="custom-container">
      <h1 className="text-center text-3xl font-semibold my-5">
        My Toys: {toysItem.length}
      </h1>

      <div className="flex gap-3 justify-end items-center my-3">
        <p>Sort By Price</p>
        <button
          onClick={handleSort}
          className="border border-gray-400 p-1 rounded"
        >
          {sortOrder === "asc" ? "Low to High" : "High to Low"}
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-2 border-b font-semibold">Seller Name</th>
              <th className="py-2 px-2 border-b font-semibold">Toy Name</th>
              <th className="py-2 px-2 border-b font-semibold">Sub-category</th>
              <th className="py-2 px-2 border-b font-semibold">Price</th>
              <th className="py-2 px-2 border-b font-semibold">
                Available Quantity
              </th>
            </tr>
          </thead>
          <tbody>
            {productList.map((toy, index) => (
              <tr
                key={toy._id}
                className={
                  index % 2 === 0
                    ? "bg-gray-100 text-center"
                    : "bg-white text-center"
                }
              >
                <td className="py-2 px-2 border-b">{toy.sellerName}</td>
                <td className="py-2 px-2 border-b">{toy.name}</td>
                <td className="py-2 px-2 border-b">{toy.subCategory}</td>
                {/* <td className="py-2 px-2 border-b">{toy.price}</td> */}

                <td className="py-2 px-2 border-b">
                  {parseInt(toy.price).toFixed(2)}
                </td>

                <td className="py-2 px-2 border-b">{toy.quantity}</td>
                <td className="py-2 px-2 border-b">
                  <Link to={`/update/${toy._id}`}>
                    <button className="bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-600">
                      Update
                    </button>
                  </Link>
                </td>
                <td className="py-2 px-2 border-b">
                  <button
                    onClick={() => handleDeleteItem(toy._id)}
                    className="bg-red-500 text-white py-2 px-2 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
