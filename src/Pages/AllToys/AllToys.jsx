import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  const toysData = useLoaderData();
  const { user } = useContext(AuthContext);

  useTitle("All Toys");
  // ------------------
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(toysData);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    filterData(searchTerm);

    // if (filteredData && filteredData.length === 0) {
    //   Swal.fire({
    //     icon: "warning",
    //     title: "No Item Found",
    //   });
    // }

    console.log(filteredData);
  };

  const filterData = (searchTerm) => {
    const filtered = toysData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };
  // -------------------------
  const buttonHandler = () => {
    console.log("cli");
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div className="custom-container">
      <h1 className="text-center text-3xl font-semibold my-5">
        All Toys Item: {toysData.length}
      </h1>

      {/* Search Feature */}
      <div className="text-end my-4">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="p-1 border border-gray-400 rounded"
          />
          <button
            type="submit"
            className="py-1 px-2 ml-2 rounded bg-slate-300 font-semibold"
          >
            Search
          </button>
        </form>
      </div>

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
          {filteredData.map((toy, index) => (
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
                <button
                  onClick={buttonHandler}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  <Link to={`/toyDetails/${toy._id}`}>View Details</Link>
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
