"use client";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { mutate } from "swr";
import { toast } from "react-toastify";
export default function PostSuitModal({
  onClose,
  isEdit = false,
  suit = null,
}: {
  onClose: () => void;
  isEdit?: boolean;
  suit?: {
    id?: string | number;
    _id?: string | number;
    image1?: string;
    image2?: string;
    title?: string;
    price?: number;
    rating?: number;
    stock?: number;
    size?: number[];
    color?: string;
    status?: string;
  } | null;
}) {
  const [imageFile1, setImageFile1] = useState<File | null>(null);
  const [imageFile2, setImageFile2] = useState<File | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);

  const initialValues = {
    image1: suit?.image1 || "",
    image2: suit?.image2 || "",
    title: suit?.title || "",
    price: suit?.price || "",
    rating: suit?.rating || 0,
    stock: suit?.stock || "",
    size: suit?.size || "",
    color: suit?.color || "pink",
    status: suit?.status || "pending",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    price: Yup.number()
      .required("Price is required")
      .min(0, "Price cannot be negative"),
    rating: Yup.number().required("Rating is required").min(0).max(5),
    stock: Yup.number().required("Stock is required").min(0),
    size: Yup.number().required("Size is required"),
    color: Yup.string().required("Color is required"),
    status: Yup.string()
      .oneOf(["pending", "accepted", "rejected"])
      .required("Status is required"),
  });

  const suitId = suit?._id;

  const handleSubmit = async (values: any) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("price", values.price);
    formData.append("rating", values.rating.toString());
    formData.append("stock", values.stock);
    formData.append("size", values.size.toString());
    formData.append("color", values.color);
    formData.append("status", values.status);

    if (!imageFile1 || !imageFile2) {
      setImageError("Both images are required");
      return;
    }

    if (imageFile1) {
      formData.append("image1", imageFile1);
    }
    if (imageFile2) {
      formData.append("image2", imageFile2);
    }

    try {
      const response = await fetch(
        `http://localhost:3001/api/v2/suits${isEdit ? `/${suitId}` : ""}`,
        {
          method: isEdit ? "PUT" : "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong while uploading");
      }

      const result = await response.json();
      if (isEdit) {
        toast.success("Successfully updated");
      } else {
        toast.success("Successfully uploaded");
      }
      console.log("Successfully uploaded:", result);
      mutate("suits");

      onClose();
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded w-[400px]">
        <h2 className="text-xl font-bold mb-4">
          {isEdit ? "Edit Suit" : "Create New Suit"}
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-2">
              <Field
                type="text"
                name="title"
                placeholder="Title"
                className="border p-2 rounded w-full"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-2">
              <Field
                type="number"
                name="price"
                placeholder="Price"
                className="border p-2 rounded w-full"
              />
              <ErrorMessage
                name="price"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-2">
              <p className="text-yellow-500">Rating</p>
              <Field
                as="select"
                name="rating"
                className="border p-2 rounded w-full"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </Field>
              <ErrorMessage
                name="rating"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-2">
              <Field
                type="number"
                name="stock"
                placeholder="Stock"
                className="border p-2 rounded w-full"
              />
              <ErrorMessage
                name="stock"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-2">
              <p className="text-yellow-500">Size</p>
              <Field
                as="select"
                name="size"
                className="border p-2 rounded w-full"
              >
                <option value={4}>4</option>
                <option value={6}>6</option>
                <option value={8}>8</option>
                <option value={10}>10</option>
              </Field>
              <ErrorMessage
                name="size"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-2">
              <Field
                as="select"
                name="color"
                className="border p-2 rounded w-full"
              >
                <option value="pink">Pink</option>
                <option value="purple">Purple</option>
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
              </Field>
              <ErrorMessage
                name="color"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-2">
              <Field
                as="select"
                name="status"
                className="border p-2 rounded w-full"
              >
                <option value="pending">Pending</option>
                <option value="accepted">Accepted</option>
                <option value="rejected">Rejected</option>
              </Field>
              <ErrorMessage
                name="status"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-2">
              <input
                type="file"
                name="image1"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  if (event.target.files && event.target.files[0]) {
                    setImageFile1(event.target.files[0]);
                  }
                }}
                className="border p-2 rounded w-full"
              />
              {imageError && (
                <div className="text-red-500 text-sm">{imageError}</div>
              )}
            </div>

            <div className="mb-2">
              <input
                type="file"
                name="image2"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  if (event.target.files && event.target.files[0]) {
                    setImageFile2(event.target.files[0]);
                  }
                }}
                className="border p-2 rounded w-full"
              />
              {imageError && (
                <div className="text-red-500 text-sm">{imageError}</div>
              )}
            </div>

            <button
              type="submit"
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              {isEdit ? "Update Suit" : "Create Suit"}
            </button>

            <button
              onClick={onClose}
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              type="button"
            >
              Cancel
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
