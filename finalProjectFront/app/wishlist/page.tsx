"use client";
import React, { useEffect, useState } from "react";
import Breadcrump from "../_components/breadcrump/Breadcrump";
import { getCookie } from "cookies-next";
import axios from "axios";
import { toast } from "react-toastify";

interface wishlistItem {
  productId?: string;
  quantity?: number;
  title?: string;
  price?: number;
  image1?: string;
  stock?: string;
}

const WishList = () => {
  const [wishlistItems, setWishlistItems] = useState<wishlistItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = getCookie("token");
        console.log("Frontend  token:", token);

        const response = await axios.get(
          "http://localhost:3001/api/v2/wishlist",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          }
        );

        setWishlistItems(response.data.items ?? []);
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

      await axios.delete("http://localhost:3001/api/v2/wishlist/remove", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { productId },
        withCredentials: true,
      });

      toast.error("item deleted succesfully from wishlist");
      setWishlistItems((prevItems) =>
        prevItems.filter((item) => item.productId !== productId)
      );
    } catch (error: any) {
      console.error(
        "Error when deleting item:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div>
      <div className="pt-16">
        <Breadcrump bread1="Home" title="Wishlist" />
      </div>
      <div className="bg-black min-h-[70vh] py-10">
        <div className="overflow-x-auto max-w-[1440px] w-full mx-auto">
          <div className="">
            <h2 className="text-[50px] text-white font-medium ">My Wishlist</h2>
          </div>
          {loading ? (
            <p className="text-white">Loading...</p>
          ) : (
            <table className="min-w-full bg-black border text-white  border-[#BB9D7B]/20">
              <thead>
                <tr>
                  <th className="px-4 py-2 border border-[#BB9D7B]/20">
                    Product Name
                  </th>
                  <th className="px-4 py-2 border border-[#BB9D7B]/20">
                    Unit Product
                  </th>
                  <th className="px-4 py-2 border border-[#BB9D7B]/20">
                    In Stock
                  </th>
                  <th className="px-4 py-2 border border-[#BB9D7B]/20">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {wishlistItems.length > 0 ? (
                  wishlistItems.map((product, index) => (
                    <tr key={index} className="text-center">
                      <td className="px-4 py-2 border border-[#BB9D7B]/20">
                        {product.title}
                      </td>
                      <td className="px-4 py-2 border border-[#BB9D7B]/20">
                        ${product.price}
                      </td>
                      <td className="px-4 py-2 border border-[#BB9D7B]/20">
                        {product.stock}
                      </td>
                      <td className="px-4 py-2 border border-[#BB9D7B]/20">
                        <button
                          onClick={() => handleDelete(product.productId)}
                          className="text-[#BB9D7B]"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="text-center py-5">
                      No items in wishlist
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishList;
