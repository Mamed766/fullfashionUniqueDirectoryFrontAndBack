"use client";
import React, { useState } from "react";

import Image from "next/image";
import { mutate } from "swr";
import { useRouter } from "next/navigation";
import { useRequest, useRequestMutation } from "@/app/_http/axiosFetcher";

import AdminHeader from "../AdminHeader";
import PostSuitModal from "../_postSuitModal/PostSuitModal";
import { toast } from "react-toastify";
import AdminSidebar from "../AdminSidebar";
const Page = () => {
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState(null);

  const router = useRouter();

  const { data, isLoading, error } = useRequest("suits", {
    method: "GET",
    module: "suitApi",
  });

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleSideBar = () => {
    setIsSideBarOpen((prev) => !prev);
  };

  const handleEdit = (suit: any) => {
    setEditData(suit);
    setIsEdit(true);
    setIsPostModalOpen(true);
  };

  const handleAddNew = () => {
    setEditData(null);
    setIsEdit(false);
    setIsPostModalOpen(true);
  };

  const { trigger: deleteProject } = useRequestMutation("dataWithId", {
    method: "DELETE",
    module: "suitApi",
  });

  const handleDelete = async (suit: any) => {
    try {
      await deleteProject({
        dynamicValue: suit._id,
      });
      toast.error("Successfully deleted");
      mutate("suits");
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <>
      <AdminSidebar isOpen={isSideBarOpen} onClose={handleSideBar} />
      <div>
        <AdminHeader
          isSideBarOpen={isSideBarOpen}
          handleSideBar={handleSideBar}
        />
      </div>
      <div className="px-10 mt-[3rem] py-20">
        <button
          onClick={handleAddNew}
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Add New
        </button>
        <div className="relative  overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product Image
                </th>

                <th scope="col" className="px-6 py-3">
                  Product Title
                </th>

                <th scope="col" className="px-6 py-3">
                  Second Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Rating
                </th>
                <th scope="col" className="px-6 py-3">
                  Stock
                </th>
                <th scope="col" className="px-6 py-3">
                  Size
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data?.suits.map((suit: any, index: number) => {
                  return (
                    <tr
                      key={index}
                      className="odd:bg-white  even:bg-gray-50  border-b "
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        <Image
                          height={50}
                          width={50}
                          alt="Product Image"
                          src={`http://localhost:3001/${suit?.image1}`}
                        />
                      </th>
                      <td className="px-6 py-4">{suit?.title}</td>
                      <td className="px-6 py-4">
                        <Image
                          height={50}
                          width={50}
                          alt="Second Image"
                          src={`http://localhost:3001/${suit?.image2}`}
                        />
                      </td>
                      <td className="px-6 py-4"> ${suit?.price} </td>
                      <td className="px-6 py-4"> {suit?.rating} </td>
                      <td className="px-6 py-4"> {suit?.stock} </td>

                      <td className="px-6 py-4"> {suit?.size?.join(", ")} </td>
                      <td className="px-6 py-4"> {suit?.color} </td>
                      <td className="px-6 py-4"> {suit?._id} </td>

                      <td className="flex gap-2 py-4">
                        <button
                          onClick={() => handleEdit(suit)}
                          className="font-medium text-yellow-600  hover:underline"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(suit)}
                          className="font-medium text-red-600  hover:underline"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div
            onClick={() => {
              router.push("/");
            }}
            className="flex justify-center p-10 cursor-pointer hover:bg-black hover:text-white duration-300"
          >
            BACK TO HOME
          </div>
          {isPostModalOpen && (
            <PostSuitModal
              onClose={() => setIsPostModalOpen(false)}
              isEdit={isEdit}
              suit={editData}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
