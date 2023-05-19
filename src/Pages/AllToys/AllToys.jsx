import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllToys = () => {
  const toysData = useLoaderData();

  return (
    <div className="custom-container">
      <h1 className="text-center text-3xl font-semibold my-5">
        All Toys Item: {toysData.length}
      </h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b font-semibold">Seller Name</th>
            <th className="py-2 px-4 border-b font-semibold">Toy Name</th>
            <th className="py-2 px-4 border-b font-semibold">Sub-category</th>
            <th className="py-2 px-4 border-b font-semibold">Price</th>
            <th className="py-2 px-4 border-b font-semibold">
              Available Quantity
            </th>
          </tr>
        </thead>
        <tbody>
          {toysData.map((toy, index) => (
            <tr
              key={toy._id}
              className={
                index % 2 === 0
                  ? "bg-gray-100 text-center"
                  : "bg-white text-center"
              }
            >
              <td className="py-2 px-4 border-b">{toy.sellerName}</td>
              <td className="py-2 px-4 border-b">{toy.name}</td>
              <td className="py-2 px-4 border-b">{toy.subCategory}</td>
              <td className="py-2 px-4 border-b">{toy.price}</td>
              <td className="py-2 px-4 border-b">{toy.quantity}</td>
              <td className="py-2 px-4 border-b">
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  <Link to="/toyDetails">View Details</Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;