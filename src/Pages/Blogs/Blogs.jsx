import React from "react";
import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div className="custom-container lg:w-7/12 text-lg">
      <div className="mb-5">
        <h1 className="text-xl font-semibold my-2">
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h1>
        <p>
          <span className="font-semibold text-gray-800">Answer:</span>
          An <strong>access token</strong> is like a special pass that proves
          you are allowed to access certain things in a system. It's given to
          you after you log in and it contains information about who you are and
          what you can do. It's used whenever you want to access protected parts
          of the system.
          <br />A <strong>refresh token</strong> is like a secret key that helps
          you get a new access token when the old one expires. It's also given
          to you when you log in and it's stored securely on your device. When
          your access token expires, instead of logging in again, you can use
          the refresh token to get a new access token without any hassle. This
          way, you stay secure while still being able to use the system
          smoothly.
          <br />
          Access tokens and refresh tokens work together to provide secure
          authentication and authorization in client-server applications.
        </p>
      </div>

      <div className="mb-5">
        <h1 className="text-xl font-semibold my-2">
          2. Compare SQL and NoSQL databases?
        </h1>
        <p>
          <span className="font-semibold text-gray-800">Answer:</span> SQL
          databases use the SQL language for querying and manipulating data. SQL
          provides a standard set of commands for tasks like data retrieval,
          insertion, update, and deletion.
          <br />
          NoSQL databases have their own query languages or APIs specific to
          their data models. Some NoSQL databases use simple key-value access,
          while others support complex queries using JavaScript or JSON-like
          query languages.
        </p>
      </div>

      <div className="mb-5">
        <h1 className="text-xl font-semibold my-2">
          3. What is express js? What is Nest JS?
        </h1>
        <p>
          <span className="font-semibold text-gray-800">Answer:</span>{" "}
          Express.js is a popular web application framework for Node.js. It
          provides a simple and minimalist approach to building web applications
          and APIs. Express.js offers a robust set of features for handling HTTP
          requests, routing, middleware, and rendering dynamic content. It
          allows developers to create server-side applications with ease by
          providing a flexible and intuitive API.
        </p>
      </div>
      <div className="mb-5">
        <h1 className="text-xl font-semibold my-2">
          4. What is MongoDB aggregate and how does it work?
        </h1>
        <p>
          <span className="font-semibold text-gray-800">Answer:</span> In
          MongoDB, the aggregate operation is a powerful tool used for data
          aggregation and analysis. It allows you to process and transform data
          in various ways, including filtering, grouping, sorting, and
          performing mathematical calculations on the data. The aggregate
          operation works by taking a collection of documents as input and
          passing them through a series of stages. Each stage performs a
          specific operation on the documents and produces an intermediate
          result. The output of one stage becomes the input for the next stage,
          forming a pipeline of operations.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
