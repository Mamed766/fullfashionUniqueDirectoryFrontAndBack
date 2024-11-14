"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { getCookie, setCookie } from "cookies-next";
import Breadcrump from "../_components/breadcrump/Breadcrump";
import Link from "next/link";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });
  const [userId, setUserId] = useState("");
  const [error, setError] = useState("");
  const [disabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      const decoded: any = jwtDecode(token);
      setUserId(decoded._id);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3001/api/v2/userProfile/profile/${userId}`,
        formData
      );

      const { token } = response.data;
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      //@ts-ignore
      setCookie("token", token, { expires: tomorrow });

      const decoded: any = jwtDecode(token);
      setUserId(decoded._id);

      setError("");
      toast.success("Profile updated successfully, wait a second!");
      setIsDisabled(true);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      console.log(
        "Profile updated successfully, wait a second!",
        response.data
      );
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        setError("Incorrect password. Please try again.");
        toast.error("Incorrect password. Please try again.");
        setIsDisabled(false);
      } else {
        setError("An error occurred. Please try again.");
        toast.error("An error occurred. Please try again.");
        setIsDisabled(false);
      }
      setIsDisabled(false);

      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="pt-16">
      <Breadcrump title="Update" bread1="Home" />
      <div>
        <div className="bg-black py-20 flex justify-center">
          <div className="flex flex-col w-[35rem] py-20 px-10 bg-white">
            <div className="text-center">
              <h2 className="text-[#BB9D7B] text-[50px]">Update Profile</h2>
            </div>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="relative mb-4" data-twe-input-wrapper-init>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="peer block min-h-[auto] border-b-[1px] w-full border-black bg-transparent py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                />
              </div>

              <div className="relative mb-4" data-twe-input-wrapper-init>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="peer block min-h-[auto] w-full border-black border-b-[1px] bg-transparent py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                />
              </div>

              <div className="relative mb-4" data-twe-input-wrapper-init>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Username"
                  className="peer block min-h-[auto] w-full border-black border-b-[1px] bg-transparent py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                />
              </div>

              <div className="relative mb-4" data-twe-input-wrapper-init>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your current password"
                  className="peer block min-h-[auto] w-full border-black border-b-[1px] bg-transparent py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                />
              </div>

              {error && (
                <div className="text-red-500 text-center mb-4">{error}</div>
              )}

              <div className="mb-12 pb-1 pt-1 text-center">
                <button
                  className={`mb-3 inline-block bg-[#BB9D7B] w-full hover:bg-black px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong ${
                    disabled ? "cursor-not-allowed opacity-50" : ""
                  }`}
                  type="submit"
                  disabled={disabled}
                >
                  Update Profile
                </button>
              </div>
            </form>

            <p className="flex gap-1 justify-center">
              Return to
              <Link
                className="text-[#BB9D7B] cursor-pointer border-b-[1px] border-transparent hover:border-b-[1px] hover:border-[#BB9D7B] duration-700"
                href={"/"}
              >
                Home?
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
