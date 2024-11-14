"use client";
import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import FaqAccardion from "../FaqAccardion/FaqAccardion";
import { getCookie } from "cookies-next";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { jwtDecode } from "jwt-decode";
import { useRequest } from "@/app/_http/axiosFetcher";
import { mutate } from "swr";
import { toast } from "react-toastify";

const ReviewSchema = Yup.object().shape({
  review: Yup.string().required("Review is required"),
  rating: Yup.number()
    .required("Rating is required")
    .min(1, "Minimum rating is 1"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  username: Yup.string().required("Username is required"),
  saveInfo: Yup.boolean(),
});

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [selectedTab, setSelectedTab] = useState<"reviews" | "faq">("reviews");

  const { data, isLoading, error } = useRequest("comments", {
    method: "GET",
    module: "commentsApi",
  });

  const renderStars = (rating: number) => {
    return (
      <>
        {Array.from({ length: 5 }, (_, index) =>
          index < rating ? (
            <FaStar key={index} className="text-[#BB9D7B]" />
          ) : (
            <FaRegStar key={index} className="text-gray-400" />
          )
        )}
      </>
    );
  };

  const handleSubmit = async (values: any, actions: any) => {
    console.log("Submitted values:", values);
    try {
      const response = await fetch("http://localhost:3001/api/v2/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to submit review");
      }

      const result = await response.json();
      mutate("comments");
      toast.success("Comment Added successfully");
      actions.resetForm();
      setRating(0);
      console.log("Review submitted:", result);
    } catch (error) {
      toast.error("Error adding comment");
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div className="bg-black text-white  space-y-6">
      <div className="flex gap-2">
        <h2
          className={`cursor-pointer  ${
            selectedTab === "reviews"
              ? "text-white border-b-2"
              : "text-[#BB9D7B]"
          }`}
          onClick={() => setSelectedTab("reviews")}
        >
          REVIEWS
        </h2>
        <h2
          className={`cursor-pointer ${
            selectedTab === "faq" ? "text-white border-b-2" : "text-[#BB9D7B]"
          }`}
          onClick={() => setSelectedTab("faq")}
        >
          FAQ
        </h2>
      </div>

      {selectedTab === "reviews" && (
        <>
          {data &&
            data?.comments.map((item: any, index: number) => {
              return (
                <div key={index} className="flex flex-wrap gap-5 items-center">
                  <p className="text-[#BB9D7B] max-w-[200px] w-[200px]">
                    {" "}
                    {item?.username}
                  </p>
                  <div className="flex flex-col gap-2">
                    <div className="flex">{renderStars(item?.rating)}</div>
                    {item?.review}
                  </div>
                </div>
              );
            })}

          <Formik
            initialValues={{
              review: "",
              rating: 0,
              email: "",
              username: "",
              saveInfo: false,
            }}
            validationSchema={ReviewSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue }) => (
              <Form className="space-y-6">
                <div>
                  <label className="block text-lg mb-2">Your rating</label>
                  <div className="flex">
                    {[...Array(5)].map((_, index) => {
                      const ratingValue = index + 1;
                      return (
                        <label key={index}>
                          <Field
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => {
                              setFieldValue("rating", ratingValue);
                              setRating(ratingValue);
                            }}
                            className="hidden"
                          />
                          <FaStar
                            className={`cursor-pointer text-[15px] ${
                              ratingValue <= (hover || rating)
                                ? "text-yellow-500"
                                : "text-gray-500"
                            }`}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(0)}
                          />
                        </label>
                      );
                    })}
                  </div>
                  <ErrorMessage
                    name="rating"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2" htmlFor="email">
                    Your Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 bg-transparent outline-none border-b-2 border-b-[#BB9D7B]/20"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2" htmlFor="username">
                    Your Username
                  </label>
                  <Field
                    type="text"
                    id="username"
                    name="username"
                    className="w-full p-2 bg-transparent outline-none border-b-2 border-b-[#BB9D7B]/20"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2" htmlFor="review">
                    Your review
                  </label>
                  <Field
                    as="textarea"
                    id="review"
                    name="review"
                    className="w-full p-2 bg-transparent outline-none border-b-2 border-b-[#BB9D7B]/20"
                    rows={4}
                  />
                  <ErrorMessage
                    name="review"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="flex items-center">
                  <Field
                    type="checkbox"
                    id="saveInfo"
                    name="saveInfo"
                    className="mr-2"
                  />
                  <label htmlFor="saveInfo" className="text-sm">
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </div>

                <button
                  type="submit"
                  className="bg-[#BB9D7B] hover:bg-[#BB9D7B]/40 px-4 py-2 text-white font-semibold"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </>
      )}

      {selectedTab === "faq" && <FaqAccardion />}
    </div>
  );
};

export default ReviewForm;
