import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const ViewDetails = () => {
  const [detailsProduct, setDetailsProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const id = Number(params.id);

  useEffect(() => {
    axios.get("/products.json").then((data) => {
      const products = data.data;
      const details = products.find((p) => p.id === id);
      if (!details) {
        setLoading(false);
        return alert("Product Details not Found");
      }
      setDetailsProduct(details);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 loading loading-spinner text-primary"></span>
    );
  }

  const {
    title,
    price_min,
    price_max,
    email,
    category,
    created_at,
    image,
    status,
    location,
    seller_image,
    seller_name,
    condition,
    usage,
    description,
    seller_contact,
  } = detailsProduct;

  return (
    <div className="card bg-base-100 w-full shadow-md border border-gray-200">
      <figure>
        <img src={image} alt={title} className="w-full h-56 object-cover" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <p className="text-lg font-semibold">
          ৳{price_min} - ৳{price_max}
        </p>

        <div className="flex items-center gap-2">
          <img
            src={seller_image}
            alt={seller_name}
            className="w-10 h-10 rounded-full object-cover"
          />

          <div>
            <p className="font-medium">{seller_name}</p>
            <p className="text-sm text-gray-500">{email}</p>
          </div>
        </div>

        <div className="space-y-1 text-sm">
          <p>
            <span className="font-semibold">ID:</span> {id}
          </p>

          <p>
            <span className="font-semibold">Category:</span> {category}
          </p>

          <p>
            <span className="font-semibold">Location:</span> {location}
          </p>

          <p>
            <span className="font-semibold">Condition:</span> {condition}
          </p>

          <p>
            <span className="font-semibold">Usage:</span> {usage}
          </p>

          <p>
            <span className="font-semibold">Status:</span> {status}
          </p>

          <p>
            <span className="font-semibold">Contact:</span> {seller_contact}
          </p>

          <p>
            <span className="font-semibold">Created:</span>
            {new Date(created_at).toLocaleDateString()}
          </p>
        </div>

        <p className="text-gray-600">{description}</p>

        <div className="card-actions justify-end">
          <button className="btn btn-warning">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
