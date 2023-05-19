// // import React, { useState } from "react";

// // const Form = () => {
// //   const [name, setName] = useState("");
// //   const [subCategory, setSubCategory] = useState("");
// //   const [email, setEmail] = useState("");

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Handle form submission logic here
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="max-w-md mx-auto">
// //       <label htmlFor="name" className="block mb-2">
// //         Name:
// //       </label>
// //       <input
// //         type="text"
// //         id="name"
// //         value={name}
// //         onChange={(e) => setName(e.target.value)}
// //         className="w-full border border-gray-300 p-2 rounded mb-4"
// //       />

// //       <label htmlFor="subCategory" className="block mb-2">
// //         Sub-category:
// //       </label>
// //       <select
// //         id="subCategory"
// //         value={subCategory}
// //         onChange={(e) => setSubCategory(e.target.value)}
// //         className="w-full border border-gray-300 p-2 rounded mb-4"
// //       >
// //         <option value="Sub-category 1">Sub-category 1</option>
// //         <option value="Sub-category 2">Sub-category 2</option>
// //         <option value="Sub-category 3">Sub-category 3</option>
// //       </select>

// //       <label htmlFor="email" className="block mb-2">
// //         Email:
// //       </label>
// //       <input
// //         type="email"
// //         id="email"
// //         value={email}
// //         onChange={(e) => setEmail(e.target.value)}
// //         className="w-full border border-gray-300 p-2 rounded mb-4"
// //       />

// //       <button
// //         type="submit"
// //         className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
// //       >
// //         Submit
// //       </button>
// //     </form>
// //   );
// // };

// // export default Form;

// import React from "react";

// const Form = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto">
//       <label htmlFor="name" className="block mb-2">
//         Name:
//       </label>
//       <input
//         type="text"
//         id="name"
//         name="name"
//         className="w-full border border-gray-300 p-2 rounded mb-4"
//       />

//       <label htmlFor="pictureUrl" className="block mb-2">
//         Picture URL:
//       </label>
//       <input
//         type="text"
//         id="pictureUrl"
//         name="pictureUrl"
//         className="w-full border border-gray-300 p-2 rounded mb-4"
//       />

//       <label htmlFor="sellerName" className="block mb-2">
//         Seller Name:
//       </label>
//       <input
//         type="text"
//         id="sellerName"
//         name="sellerName"
//         className="w-full border border-gray-300 p-2 rounded mb-4"
//       />

//       <label htmlFor="sellerEmail" className="block mb-2">
//         Seller Email:
//       </label>
//       <input
//         type="email"
//         id="sellerEmail"
//         name="sellerEmail"
//         className="w-full border border-gray-300 p-2 rounded mb-4"
//       />

//       {/* Add the remaining fields */}
//       {/* ... */}

//       <button
//         type="submit"
//         className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

// export default Form;

import React from "react";

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 px-4">
          <label htmlFor="name" className="block mb-2">
            Name:
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
            name="sellerName"
            className="w-full border border-gray-300 p-2 rounded mb-4"
          />

          <label htmlFor="sellerEmail" className="block mb-2">
            Seller Email:
          </label>
          <input
            type="email"
            id="sellerEmail"
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
          />

          <label htmlFor="subcategory" className="block mb-2">
            Sub-category:
          </label>
          <select
            id="subcategory"
            name="subcategory"
            className="w-full border border-gray-300 p-2 rounded mb-4"
          >
            <option value="">Select Sub-category</option>
            <option value="subcategory1">Sub-category 1</option>
            <option value="subcategory2">Sub-category 2</option>
            <option value="subcategory3">Sub-category 3</option>
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
