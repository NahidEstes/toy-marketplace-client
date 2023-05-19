import React from "react";

const UpdateProduct = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div className="custom-container">
      <h1 className="text-center text-3xl font-semibold my-5">Update Item</h1>
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
