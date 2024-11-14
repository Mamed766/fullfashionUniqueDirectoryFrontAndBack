"use client";
import React, { useEffect, useState } from "react";
import Breadcrump from "../_components/breadcrump/Breadcrump";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { getStatusColor } from "../_utils/colorpicker";

interface Suit {
  _id: string;
  status: string;
}

const Track = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [suit, setSuit] = useState<Suit | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  useEffect(() => {
    setSearchQuery(search);
    if (search) {
      fetchSuitById(search);
    }
  }, [searchParams]);

  const fetchSuitById = async (id: string) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/v2/suits/${id}`
      );
      setSuit(response.data.suit);
      setError(null);
    } catch (error) {
      console.error("Eror fetching", error);
      setSuit(null);
      setError("Not found");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      router.push(`?search=${searchQuery}`);
    }
  };

  console.log(suit);
  return (
    <div>
      <div className="pt-16">
        <Breadcrump bread1="Home" title="Order tracking" />
      </div>
      <div className="bg-black py-20">
        <div className="max-w-[1500px] flex flex-col items-center justify-center mx-auto text-center text-white">
          <div>
            <h2>TRACK YOUR SHIPMENT</h2>
            <h1 className="text-[50px]">Need to See Your Shipment?</h1>
          </div>
          <div>
            <p className="max-w-[700px]">
              To track your order please enter your Order ID in the box below
              and press the "Track" button. This was given to you on your
              receipt and in the confirmation email you should have received.
            </p>
          </div>

          <div>
            <form
              className="flex flex-col gap-2 justify-center items-center"
              onSubmit={handleSubmit}
            >
              <h2 className="text-[30px] font-medium my-10">Order ID</h2>

              <input
                type="text"
                className="outline-none text-center text-[20px] bg-transparent border-gray-500 border-b-2 w-[30rem]"
                placeholder="Found in your order confirmation email"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />

              <button
                type="submit"
                className="mt-10 w-20 h-20  bg-[#BB9D7B] rounded-full hover:bg-transparent duration-700"
              >
                TRACK
              </button>
            </form>

            {suit ? (
              <div className="mt-10">
                <p className="text-[25px] font-bold">
                  ID: {suit?._id} - Status:{" "}
                  <span className={`${getStatusColor(suit?.status)}`}>
                    {suit?.status}{" "}
                  </span>
                </p>
              </div>
            ) : (
              error && <p className="text-red-500 text-[20px] mt-10">{error}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
