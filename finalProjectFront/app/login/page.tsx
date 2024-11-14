"use client";
import React from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { setCookie } from "cookies-next";
import Link from "next/link";
import Breadcrump from "../_components/breadcrump/Breadcrump";

const Login = () => {
  const router = useRouter();

  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isDisabled, setIsDiabled] = useState(false);

  const handleChange = ({ currentTarget: input }: any) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3001/api/v2/auth";
      const { data: res } = await axios.post(url, data);
      setCookie("token", res.data, { maxAge: 60 * 60 * 24 });
      setIsDiabled(true);
      toast.success("You are logged in successfully!");

      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (error: any) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setIsDiabled(false);
        toast.error(error.response.data.message);
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <div className="pt-16">
        <Breadcrump title="Login" bread1="Home" />
      </div>
      <div>
        <div className="bg-black py-20 flex justify-center">
          <div className="flex flex-col w-[35rem] py-20  px-10 bg-white  ">
            <div className="text-center">
              <h2 className="text-[#BB9D7B] text-[50px]">Login Form</h2>
            </div>
            <form onSubmit={handleSubmit} action="">
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

              <div className="mb-12 pb-1 pt-1 text-center">
                <button
                  className={`mb-3 inline-block bg-[#BB9D7B] w-full hover:bg-black px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong ${
                    isDisabled ? "cursor-not-allowed opacity-50" : ""
                  }`}
                  type="submit"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                  disabled={isDisabled}
                >
                  Login
                </button>
              </div>
            </form>

            {error && <div className="text-red-500 text-center">{error}</div>}

            <p className="flex gap-1 justify-center">
              Not have an account?
              <Link
                className="text-[#BB9D7B] cursor-pointer border-b-[1px] border-transparent  hover:border-b-[1px] hover:border-[#BB9D7B]   duration-700"
                href={"/register"}
              >
                Register
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
