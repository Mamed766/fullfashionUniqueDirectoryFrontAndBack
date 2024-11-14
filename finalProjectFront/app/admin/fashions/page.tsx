"use client";
import React, { useState } from "react";

import Image from "next/image";
import { mutate } from "swr";
import { useRouter } from "next/navigation";
import { useRequest, useRequestMutation } from "@/app/_http/axiosFetcher";
import PostFashionModal from "../_postFashionModal/PostFashionModal";
import AdminHeader from "../AdminHeader";
import { toast } from "react-toastify";
import AdminSidebar from "../AdminSidebar";
const Page = () => {
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState(null);

  const router = useRouter();

  const { data, isLoading, error } = useRequest("fashions", {
    method: "GET",
    module: "fashionApi",
  });

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleSideBar = () => {
    setIsSideBarOpen((prev) => !prev);
  };

  const handleEdit = (fashion: any) => {
    setEditData(fashion);
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
    module: "fashionApi",
  });

  const handleDelete = async (fashion: any) => {
    try {
      await deleteProject({
        dynamicValue: fashion._id,
      });
      toast.error("succesfully deleted");
      mutate("fashions");
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <>
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
                  product img
                </th>

                <th scope="col" className="px-6 py-3">
                  Product title
                </th>

                <th scope="col" className="px-6 py-3">
                  Second Image
                </th>
                <th scope="col" className="px-6 py-3">
                  product descbody
                </th>

                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data?.fashions.map((fashion: any, index: number) => {
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
                          alt=""
                          src={`http://localhost:3001/${fashion?.fashionImage}`}
                        />
                      </th>
                      <td className="px-6 py-4">{fashion?.fashionType}</td>
                      <td className="px-6 py-4">
                        <Image
                          height={50}
                          width={50}
                          alt=""
                          src={`http://localhost:3001/${fashion?.fashionImage2}`}
                        />
                      </td>
                      <td className=""> {fashion?.fashionWhom2} </td>
                      <td className=" flex gap-2  py-4">
                        <button
                          onClick={() => handleEdit(fashion)}
                          className="font-medium text-yellow-600  hover:underline"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(fashion)}
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
            <PostFashionModal
              onClose={() => setIsPostModalOpen(false)}
              isEdit={isEdit}
              fashion={editData}
            />
          )}
        </div>
      </div>
      <AdminSidebar isOpen={isSideBarOpen} onClose={handleSideBar} />
    </>
  );
};

export default Page;
