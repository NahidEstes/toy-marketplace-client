import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const MyToys = () => {
  //   const toysData = useLoaderData();
  const { user } = useContext(AuthContext);

  //   const [specificToyUser, setSpecificToyUser] = useContext([]);
  const [toysItem, setToysItem] = useState([]);

  useEffect(() => {
    fetch(
      `https://11th-assignment-server-eight.vercel.app/toysSeller?sellerEmail=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToysItem(data);
      });
  }, []);

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
  );
};

export default MyToys;
