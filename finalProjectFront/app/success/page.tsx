"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Success = () => {
  const router = useRouter();

  return (
    <div className="py-[20rem] flex flex-col items-center justify-center text-[5rem] text-green-500">
      <div className="text-[5rem] text-green-500 font-bold">Success</div>
      <p className="mt-8 text-2xl text-gray-700">
        Your purchase was completed successfully!
      </p>
      <p className="mt-2 text-lg text-gray-500">
        Thank you for your order. You will receive a confirmation email shortly.
      </p>
      <button
        onClick={() => router.push("/")}
        className="mt-10 bg-green-500 text-white px-6 py-3 rounded-md text-lg hover:bg-green-600 transition"
      >
        Back to Home
      </button>
    </div>
  );
};

export default Success;
