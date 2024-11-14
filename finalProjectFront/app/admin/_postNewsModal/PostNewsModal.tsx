"use client";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { mutate } from "swr";
import { toast } from "react-toastify";

export default function PostNewsModal({
  onClose,
  isEdit = false,
  news = null,
}: {
  onClose: () => void;
  isEdit?: boolean;
  news?: {
    id?: string | number;
    _id?: string | number;
    image?: string;
    title?: string;
    date?: string;
    desc1?: string;
    desc2?: string;
  } | null;
}) {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);

  const initialValues = {
    image: news?.image || "",
    title: news?.title || "",
    desc1: news?.desc1 || "",
    desc2: news?.desc2 || "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    desc1: Yup.string().required("Description 1 is required"),
    desc2: Yup.string().required("Description 2 is required"),
  });

  const newsId = news?._id;

  const handleSubmit = async (values: any) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("desc1", values.desc1);
    formData.append("desc2", values.desc2);

    if (!imageFile) {
      setImageError("Image is required");
      return;
    }

    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      const response = await fetch(
        `http://localhost:3001/api/v2/news${isEdit ? `/${newsId}` : ""}`,
        {
          method: isEdit ? "PUT" : "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong while uploading");
      }

      if (isEdit) {
        toast.success("Successfully updated");
      } else {
        toast.success("Successfully uploaded");
      }

      const result = await response.json();
      console.log("Successfully uploaded:", result);
      mutate("news");

      onClose();
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded w-[400px]">
        <h2 className="text-xl font-bold mb-4">
          {isEdit ? "Edit News" : "Create New News"}
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
                type="text"
                name="desc1"
                placeholder="Description 1"
                className="border p-2 rounded w-full"
              />
              <ErrorMessage
                name="desc1"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-2">
              <Field
                type="text"
                name="desc2"
                placeholder="Description 2"
                className="border p-2 rounded w-full"
              />
              <ErrorMessage
                name="desc2"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-2">
              <input
                type="file"
                name="image"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  if (event.target.files && event.target.files[0]) {
                    setImageFile(event.target.files[0]);
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
              {isEdit ? "Update News" : "Create News"}
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
