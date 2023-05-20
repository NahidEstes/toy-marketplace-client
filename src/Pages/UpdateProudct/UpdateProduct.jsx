import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const toysData = useLoaderData();
  console.log(toysData);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    const form = e.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updatedToys = { price, quantity, description };
    console.log(updatedToys);
    fetch(
      `https://11th-assignment-server-nahidestes.vercel.app/toys/${toysData._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedToys),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("user updated successfully");
        }
      });
  };

  return (
    <div className="custom-container">
      <h1 className="text-center text-3xl font-semibold my-5">
        {toysData.name}
      </h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <label htmlFor="price" className="block mb-2">
          Price:
        </label>
        <input
          type="number"
          id="price"
          name="price"
          className="w-full border border-gray-300 p-2 rounded mb-4"
        />

        <label htmlFor="quantity" className="block mb-2">
          Available Quantity:
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          className="w-full border border-gray-300 p-2 rounded mb-4"
        />

        <label htmlFor="description" className="block mb-2">
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          className="w-full border border-gray-300 p-2 rounded mb-4"
        ></textarea>

        <button
          type="submit"
          className="w-full md:w-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
