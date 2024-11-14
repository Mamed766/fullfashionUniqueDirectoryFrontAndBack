"use client";
import React, { useEffect, useState } from "react";
import Breadcrump from "../_components/breadcrump/Breadcrump";
import Loading from "../loading";
import { getCookie } from "cookies-next";
import axios from "axios";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";
import { cartQuantityState } from "../atoms/CartState";
import { useRecoilState } from "recoil";

const stripePromise = loadStripe(
  "pk_test_51PuCFuLSaZd8Ekq0un2MHJtABxYxwcK6yd8i0ggT9bef7WYOYj8hyVSxCOUuB5AIqmFWicTliSvD8YMofCEIoc2M00uhf93Z8V"
);

interface CartItem {
  productId?: string;
  quantity?: number;
  title?: string;
  price?: number;
  image1?: string;
}

const page = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [cartQuantity, setCartQuantity] = useRecoilState(cartQuantityState);

  const handleCheckout = async () => {
    try {
      const token = getCookie("token");

      const response = await axios.post(
        "http://localhost:3001/api/v2/checkout",
        { cartItems },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const stripe = await stripePromise;

      if (!stripe) {
        console.error("Stripe not initial.");
        toast.error("Stripe not initialed try again");
        return;
      }

      const { id: sessionId } = response.data;
      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      console.error("Error in checkout", error);
      toast.error("Checkout failed. Please try again.");
    }
  };

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = getCookie("token");
        console.log("Frontend  token:", token);

        const response = await axios.get("http://localhost:3001/api/v2/cart", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });

        setCartItems(response.data.items ?? []);

        console.log("API Response CARD:", response.data);
      } catch (error: any) {
        console.error("cart error:", error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const handleDelete = async (productId: string | undefined) => {
    try {
      const token = getCookie("token");

      await axios.delete("http://localhost:3001/api/v2/cart/remove", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { productId },
        withCredentials: true,
      });

      toast.error("item deleted succesfully from card");
      setCartItems((prevItems) => {
        const updatedItems = prevItems.filter(
          (item) => item.productId !== productId
        );

        const totalQuantity = updatedItems.reduce(
          (total, item) => total + (item.quantity || 0),
          0
        );

        setCartQuantity(totalQuantity);

        return updatedItems;
      });
    } catch (error: any) {
      console.error(
        "Error when deleting item:",
        error.response?.data || error.message
      );
    }
  };

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className=" bg-black text-white h-screen flex justify-center items-center text-[26px]">
        {" "}
        Your cart is empty
      </div>
    );
  }
  return (
    <div>
      <div className="pt-16">
        <Breadcrump title="Cart" bread1="Home" />
      </div>
      <div className="bg-black">
        <>
          <div className="py-[12rem] flex  flex-col gap-2">
            <div className="flex justify-center text-[36px] text-[#BB9D7B]">
              My Cart!
            </div>
            <div className=" max-w-[1280px] flex justify-between gap-2 flex-wrap mx-auto">
              {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                  <div key={index}>
                    <div className="flex flex-col text-white items-center justify-center ">
                      <p className="font-bold">
                        Quantity:{" "}
                        <span className="text-[#BB9D7B]">
                          {" "}
                          {item?.quantity}
                        </span>
                      </p>
                      {item?.title && (
                        <p>
                          Title:{" "}
                          <span className="text-[#BB9D7B]">{item?.title}</span>{" "}
                        </p>
                      )}

                      {item?.price && item?.quantity && (
                        <p>
                          Total Price:{" "}
                          <span className="text-[#BB9D7B]">
                            {" "}
                            {item.price * item.quantity}{" "}
                          </span>
                        </p>
                      )}
                    </div>
                    {item?.image1 && (
                      <img
                        src={`http://localhost:3001/${item?.image1}`}
                        alt={item.title}
                        className="max-w-[20rem] min-w-[20rem] max-h-[25rem] min-h-[25rem]"
                      />
                    )}
                    <button
                      className="mt-2 bg-[#BB9D7B] hover:bg-red-600 duration-700 text-white px-10 py-2 "
                      onClick={() => handleDelete(item?.productId)}
                    >
                      Delete
                    </button>
                  </div>
                ))
              ) : (
                <p>Your Cart is empty</p>
              )}
            </div>

            <div className="flex mt-5 justify-center ">
              <button
                onClick={handleCheckout}
                className="bg-black p-2  text-white hover:bg-[#BB9D7B] hover:text-white duration-300"
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default page;
