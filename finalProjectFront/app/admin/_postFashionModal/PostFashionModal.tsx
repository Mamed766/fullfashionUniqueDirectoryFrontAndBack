"use client";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { mutate } from "swr";
import { toast } from "react-toastify";

export default function PostFashionModal({
  onClose,
  isEdit = false,
  fashion = null,
}: {
  onClose: () => void;
  isEdit?: boolean;
  fashion?: {
    id?: string | number;
    _id?: string | number;
    fashionImage?: string;
    fashionImage2?: string;
    fashionType?: string;
    fashionType2?: string;
    fashionWhom?: string;
    fashionWhom2?: string;
  } | null;
}) {
  const [imageFile1, setImageFile1] = useState<File | null>(null);
  const [imageFile2, setImageFile2] = useState<File | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);

  const initialValues = {
    fashionImage: fashion?.fashionImage || "",
    fashionImage2: fashion?.fashionImage2 || "",
    fashionType: fashion?.fashionType || "",
    fashionType2: fashion?.fashionType2 || "",
    fashionWhom: fashion?.fashionWhom || "",
    fashionWhom2: fashion?.fashionWhom2 || "",
  };

  const validationSchema = Yup.object({
    fashionType: Yup.string().required("Fashion Type is required"),
    fashionType2: Yup.string().required("Fashion Type2 is required"),
    fashionWhom: Yup.string().required("Fashion Whom is required"),
    fashionWhom2: Yup.string().required("Fashion Whom2 is required"),
  });

  const fashionId = fashion?._id;

  const handleSubmit = async (values: any) => {
    const formData = new FormData();
    formData.append("fashionType", values.fashionType);
    formData.append("fashionType2", values.fashionType2);
    formData.append("fashionWhom", values.fashionWhom);
    formData.append("fashionWhom2", values.fashionWhom2);

    if (!imageFile1 || !imageFile2) {
      setImageError("Both images are required");
      return;
    }

    if (imageFile1) {
      formData.append("fashionImage", imageFile1);
    }
    if (imageFile2) {
      formData.append("fashionImage2", imageFile2);
    }

    try {
      const response = await fetch(
        `http://localhost:3001/api/v2/fashions${isEdit ? `/${fashionId}` : ""}`,
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
      mutate("fashions");

      onClose();
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded w-[400px]">
        <h2 className="text-xl font-bold mb-4">
          {isEdit ? "Edit Fashion" : "Create New Fashion"}
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
                name="fashionType"
                placeholder="Fashion Type"
                className="border p-2 rounded w-full"
              />
              <ErrorMessage
                name="fashionType"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-2">
              <Field
                type="text"
                name="fashionType2"
                placeholder="Fashion Type 2"
                className="border p-2 rounded w-full"
              />
              <ErrorMessage
                name="fashionType2"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-2">
              <Field
                type="text"
                name="fashionWhom"
                placeholder="Fashion Whom"
                className="border p-2 rounded w-full"
              />
              <ErrorMessage
                name="fashionWhom"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-2">
              <Field
                type="text"
                name="fashionWhom2"
                placeholder="Fashion Whom 2"
                className="border p-2 rounded w-full"
              />
              <ErrorMessage
                name="fashionWhom2"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-2">
              <input
                type="file"
                name="fashionImage"
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
                name="fashionImage2"
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
              {isEdit ? "Update Fashion" : "Create Fashion"}
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
