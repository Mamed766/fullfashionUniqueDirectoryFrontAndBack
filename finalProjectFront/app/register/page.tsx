"use client";
import React, { useState } from "react";
import Breadcrump from "../_components/breadcrump/Breadcrump";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Regiter = () => {
  const router = useRouter();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }: any) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const url = "http://localhost:3001/api/v2/users";
      const { data: res } = await axios.post(url, data);
      router.push("/");
      console.log(res.message);
    } catch (error: any) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="pt-16">
      <Breadcrump title="Register" bread1="Home" />
      <div className="bg-black py-20 flex justify-center">
        <div className="flex flex-col w-[35rem] py-20  px-10 bg-white  ">
          <div className="text-center">
            <h2 className="text-[#BB9D7B] text-[50px]">Register Form</h2>
            <p>Do not have an account ?</p>
          </div>
          <form onSubmit={handleSubmit} action="">
            <div className="relative mb-4" data-twe-input-wrapper-init>
              <input
                type="text"
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
                className="peer block border-black min-h-[auto] w-full border-b-[1px] bg-transparent py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary "
                id="exampleFormControlInput1"
                placeholder="First Name"
              />
            </div>

            <div className="relative mb-4" data-twe-input-wrapper-init>
              <input
                type="text"
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
                className="peer block min-h-[auto] border-black  w-full   border-b-[1px] bg-transparent  py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary "
                id="exampleFormControlInput1"
                placeholder="Last Name"
              />
            </div>

            <div className="relative mb-4" data-twe-input-wrapper-init>
              <input
                type="text"
                name="username"
                value={data.username}
                onChange={handleChange}
                className="peer block min-h-[auto] border-black  w-full   border-b-[1px] bg-transparent  py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary "
                id="exampleFormControlInput1"
                placeholder="Username"
              />
            </div>

            <div className="relative mb-4" data-twe-input-wrapper-init>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                className="peer block min-h-[auto] border-b-[1px] w-full border-black bg-transparent  py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary "
                id="exampleFormControlInput1"
                placeholder="Email"
              />
            </div>

            <div className="relative mb-4" data-twe-input-wrapper-init>
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                className="peer block min-h-[auto] w-full border-black border-b-[1px] bg-transparent  py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary "
                id="exampleFormControlInput11"
                placeholder="Password"
              />
            </div>

            <div className="relative mb-4" data-twe-input-wrapper-init>
              <input
                type="password"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={handleChange}
                className="peer block min-h-[auto] w-full border-black border-b-[1px] bg-transparent  py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary "
                id="exampleFormControlInput12"
                placeholder="Confirm Password"
              />
            </div>

            <div className="mb-12 pb-1 pt-1 text-center">
              <button
                className="mb-3 inline-block bg-[#BB9D7B] w-full hover:bg-black   px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                type="submit"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                REGISTER
              </button>
            </div>
          </form>

          {error && <div className="text-red-500 text-center">{error}</div>}

          <p className="flex gap-1 justify-center">
            Already have an account?
            <Link
              className="text-[#BB9D7B] cursor-pointer border-b-[1px] border-transparent  hover:border-b-[1px] hover:border-[#BB9D7B]   duration-700"
              href={"/login"}
            >
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Regiter;
