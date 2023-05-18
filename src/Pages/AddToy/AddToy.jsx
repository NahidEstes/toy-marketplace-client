import React, { useState } from "react";

const AddToy = () => {
  const [name, setName] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [price, setPrice] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [rating, setRating] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const user = {
      name,
      pictureUrl,
      sellerName,
      price,
      rating,
      quantity,
      description,
      sellerEmail,
    };
    console.log(user);

    fetch("http://localhost:5000/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <label htmlFor="name" className="block mb-2">
        Name:
      </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border border-gray-300 p-2 rounded mb-4"
      />

      <label htmlFor="pictureUrl" className="block mb-2">
        Picture URL:
      </label>
      <input
        type="text"
        id="pictureUrl"
        value={pictureUrl}
        onChange={(e) => setPictureUrl(e.target.value)}
        className="w-full border border-gray-300 p-2 rounded mb-4"
      />
      <label htmlFor="subCategory" className="block mb-2">
        Sub-category:
      </label>
      <input
        type="text"
        id="subCategory"
        value={subCategory}
        onChange={(e) => setSubCategory(e.target.value)}
        className="w-full border border-gray-300 p-2 rounded mb-4"
      />
      <label htmlFor="sellerName" className="block mb-2">
        Seller Name:
      </label>
      <input
        type="text"
        id="sellerName"
        value={sellerName}
        onChange={(e) => setSellerName(e.target.value)}
        className="w-full border border-gray-300 p-2 rounded mb-4"
      />

      <label htmlFor="sellerEmail" className="block mb-2">
        Seller Email:
      </label>
      <input
        type="email"
        id="sellerEmail"
        value={sellerEmail}
        onChange={(e) => setSellerEmail(e.target.value)}
        className="w-full border border-gray-300 p-2 rounded mb-4"
      />

      <label htmlFor="price" className="block mb-2">
        Price:
      </label>
      <input
        type="number"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full border border-gray-300 p-2 rounded mb-4"
      />

      <label htmlFor="rating" className="block mb-2">
        Rating:
      </label>
      <input
        type="number"
        id="rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="w-full border border-gray-300 p-2 rounded mb-4"
      />

      <label htmlFor="quantity" className="block mb-2">
        Available Quantity:
      </label>
      <input
        type="number"
        id="quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="w-full border border-gray-300 p-2 rounded mb-4"
      />

      <label htmlFor="description" className="block mb-2">
        Description:
      </label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border border-gray-300 p-2 rounded mb-4"
      ></textarea>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default AddToy;
