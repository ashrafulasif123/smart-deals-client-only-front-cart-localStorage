import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {
  getIdsFromLocalStorage,
  setIdsToLocalStorage,
} from "../utilities/localstorage";

export const Root = () => {
  const [products, setProducts] = useState([]);
  const [cartIds, setCartIds] = useState([]);

  useEffect(() => {
    axios.get("/products.json").then((data) => {
      setProducts(data.data);
      const itemsId = getIdsFromLocalStorage("cart");
      setCartIds(itemsId);
    });
  }, []);
  const handleAddCart = (id) => {
    if (cartIds.includes(id)) {
      return Swal.fire("Already Added This Product");
    }
    const updateItemsId = [...cartIds, id];
    setCartIds(updateItemsId);
    setIdsToLocalStorage(updateItemsId, "cart");
  };
  const handleDeleteCartItem = (id) => {
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
        const updateItemsId = cartIds.filter((cartId) => cartId !== id);
        setCartIds(updateItemsId);
        localStorage.setItem("cart", JSON.stringify(updateItemsId));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  const cartProducts = products.filter((product) =>
    cartIds.includes(product.id),
  );

  return (
    <div className="relative min-h-screen">
      <Navbar cart={cartProducts}></Navbar>
      <main className="max-w-7xl mx-auto px-4">
        <Outlet
          context={{ handleAddCart, cart: cartProducts, handleDeleteCartItem }}
        />
      </main>
    </div>
  );
};
