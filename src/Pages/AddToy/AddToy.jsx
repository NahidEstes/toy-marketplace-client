import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const Form = () => {
  useTitle("Add Toy");
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // Access form values using the form elements' name attribute
    const name = form.name.value;
    const pictureUrl = form.pictureUrl.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const price = form.price.value;
    const subCategory = form.subCategory.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const userInfo = {
      name,
      pictureUrl,
      sellerName,
      sellerEmail,
      price,
      subCategory,
      rating,
      quantity,
      description,
    };
    console.log(userInfo);
    fetch("https://11th-assignment-server-eight.vercel.app/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire("Good job!", "Successfully Added Toy Info  data", "success");
        // form.reset();
      });
  };

  return (
    <form onSubmit={handleSubmit} className="custom-container">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 px-4">
          <label htmlFor="name" className="block mb-2">
            Toy Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border border-gray-300 p-2 rounded mb-4"
          />

          <label htmlFor="pictureUrl" className="block mb-2">
            Picture URL:
          </label>
          <input
            type="text"
            id="pictureUrl"
            name="pictureUrl"
            className="w-full border border-gray-300 p-2 rounded mb-4"
          />

          <label htmlFor="sellerName" className="block mb-2">
            Seller Name:
          </label>
          <input
            type="text"
            id="sellerName"
            defaultValue={user.displayName}
            name="sellerName"
            className="w-full border border-gray-300 p-2 rounded mb-4"
          />

          <label htmlFor="sellerEmail" className="block mb-2">
            Seller Email:
          </label>
          <input
            type="email"
            id="sellerEmail"
            defaultValue={user.email}
            name="sellerEmail"
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
        </div>

        <div className="md:w-1/2 px-4">
          <label htmlFor="price" className="block mb-2">
            Price:
          </label>
          <input
            type="text"
            id="price"
            name="price"
            className="w-full border border-gray-300 p-2 rounded mb-4"
            placeholder="$"
          />

          <label htmlFor="subCategory" className="block mb-2">
            Sub-category:
          </label>
          <select
            id="subCategory"
            name="subCategory"
            className="w-full border border-gray-300 p-2 rounded mb-4"
            required
          >
            <option value="Police Car">Police Car</option>
            <option value="Truck">Truck</option>
            <option value="Sports Car">Sports Car</option>
          </select>

          <label htmlFor="rating" className="block mb-2">
            Rating:
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
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
        </div>
      </div>
      <button
        type="submit"
        className="w-full md:w-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
