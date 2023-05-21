import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const ToysDetails = () => {
  useTitle("Toy Details");
  const toyDetails = useLoaderData();
  console.log(toyDetails);
  const {
    pictureUrl,
    name,
    sellerName,
    sellerEmail,
    price,
    rating,
    quantity,
    description,
  } = toyDetails;
  return (
    <div className="custom-container">
      <h1 className="text-3xl font-semibold text-center my-3">Toys Details</h1>
      <div className="my-5">
        <img src={pictureUrl} className="rounded mb-4" alt="" />
        <div>
          <h3 className="text-2xl font-semibold my-2">{name}</h3>
          <h4>
            <span className="font-semibold">Seller Name:</span> {sellerName}
          </h4>
          <h4 className="my-1">
            <span className="font-semibold ">Seller Email: </span>
            <span className="font-semibold">Quantity: </span>

            {sellerEmail}
          </h4>
          <p>
            <span className="font-semibold">Price: </span> ${price}
          </p>
          <div className="flex gap-3 items-center my-2">
            <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
            <p className="font-bold">{rating}</p>
          </div>
          <p className="my-1">
            <span className="font-semibold">Quantity: </span> {quantity}
          </p>
          <p>
            <span className="font-semibold">Description: </span> {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToysDetails;
