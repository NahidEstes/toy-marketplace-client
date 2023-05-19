import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const MyToys = () => {
  //   const toysData = useLoaderData();
  const { user } = useContext(AuthContext);

  //   const [specificToyUser, setSpecificToyUser] = useContext([]);
  const [toysItem, setToysItem] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/toysSeller?sellerEmail=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToysItem(data);
      });
  }, []);

  const handleDeleteItem = (id) => {
    console.log(id);
    fetch(`https://11th-assignment-server-nahidestes.vercel.app/toys/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remainingToysItem = toysItem.filter((toy) => toy._id !== id);

          setToysItem(remainingToysItem);
        }
      });
  };
  return (
    <div className="custom-container">
      <h1 className="text-center text-3xl font-semibold">
        My Toys: {toysItem.length}
      </h1>
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
            {/* <th className="py-2 px-2 border-b font-semibold">View Details</th>
            <th className="py-2 px-2 border-b font-semibold"></th> */}
          </tr>
        </thead>
        <tbody>
          {toysItem.map((toy, index) => (
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
              <td className="py-2 px-2 border-b">{toy.price}</td>
              <td className="py-2 px-2 border-b">{toy.quantity}</td>
              <td className="py-2 px-2 border-b">
                <Link to="/update">
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
  );
};

export default MyToys;
